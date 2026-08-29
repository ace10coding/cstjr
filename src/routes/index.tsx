import { createFileRoute } from "@tanstack/react-router";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { Download, CheckCircle2 } from "lucide-react";
import JSZip from "jszip";

import { MethodistLogo } from "@/components/MethodistLogo";
import { CATECHISM_LESSONS, PREFACES, WELCOME_SPEECH_TEXT, type LessonTrack } from "@/data/lessons";
import { playTapTone, playActionTone } from "@/lib/sound-feedback";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Catecismo Júnior — Igreja Metodista Unida" },
      {
        name: "description",
        content:
          "Iniciativa de acessibilidade e inclusão do Catecismo Júnior da Igreja Metodista Unida em áudio em português.",
      },
      { property: "og:title", content: "Catecismo Júnior — Igreja Metodista Unida" },
      {
        property: "og:description",
        content:
          "Catecismo Júnior da Igreja Metodista Unida em áudio acessível por toques no ecrã.",
      },
    ],
  }),
  component: Index,
});

function pickPortugueseVoice(): SpeechSynthesisVoice | null {
  if (typeof window === "undefined" || !("speechSynthesis" in window)) return null;
  const voices = window.speechSynthesis.getVoices();
  const pt = voices.filter((v) => v.lang?.toLowerCase().startsWith("pt"));
  const ptPt = pt.filter((v) => v.lang?.toLowerCase().replace("_", "-") === "pt-pt");
  const preferred = (list: SpeechSynthesisVoice[]) =>
    list.find((v) =>
      /joana|catarina|ines|inês|female|maria|luciana|fernanda|helena|portuguese/i.test(v.name),
    );
  return preferred(ptPt) ?? ptPt[0] ?? preferred(pt) ?? pt[0] ?? null;
}

function triggerBlobDownload(blob: Blob, filename: string) {
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = filename;
  a.rel = "noopener";
  document.body.appendChild(a);
  a.click();
  setTimeout(() => {
    a.remove();
    URL.revokeObjectURL(url);
  }, 2000);
}

function Index() {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [tapCount, setTapCount] = useState(0);
  const tapCountRef = useRef(0);
  const tapTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const runIdRef = useRef(0);

  const [currentTrack, setCurrentTrack] = useState<LessonTrack>(CATECHISM_LESSONS[0]!);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [downloadSuccess, setDownloadSuccess] = useState(false);
  const [isDownloading, setIsDownloading] = useState(false);
  const [activeTapFeedback, setActiveTapFeedback] = useState<number | null>(null);

  const allTracks = useMemo(() => [...PREFACES, ...CATECHISM_LESSONS], []);
  const audioTracks = useMemo(
    () => [...PREFACES.filter((t) => t.url), ...CATECHISM_LESSONS.filter((t) => t.url)],
    [],
  );

  const stopAll = useCallback(() => {
    runIdRef.current += 1;
    if (typeof window !== "undefined" && "speechSynthesis" in window) {
      window.speechSynthesis.cancel();
    }
    setIsSpeaking(false);
    const audio = audioRef.current;
    if (audio) {
      audio.pause();
      audio.currentTime = 0;
    }
    setIsPlaying(false);
    return runIdRef.current;
  }, []);

  const speakSentence = useCallback((textChunk: string, runId: number) => {
    return new Promise<void>((resolve) => {
      if (typeof window === "undefined" || !("speechSynthesis" in window)) {
        return resolve();
      }
      if (runId !== runIdRef.current) {
        return resolve();
      }

      const utterance = new SpeechSynthesisUtterance(textChunk.trim());
      utterance.lang = "pt-PT";
      utterance.rate = 0.95;
      utterance.pitch = 1.0;

      const voice = pickPortugueseVoice();
      if (voice) utterance.voice = voice;

      utterance.onend = () => resolve();
      utterance.onerror = () => resolve();

      window.speechSynthesis.speak(utterance);
    });
  }, []);

  const speak = useCallback(
    async (text: string, runId: number) => {
      if (typeof window === "undefined" || !("speechSynthesis" in window)) return;
      if (runId !== runIdRef.current) return;

      window.speechSynthesis.cancel();
      setIsSpeaking(true);

      // Split into sentences for reliable speech synthesis without browser timeout limits
      const sentences = text
        .split(/(?<=[.!?])\s+|\n+/)
        .map((s) => s.trim())
        .filter(Boolean);

      for (const sentence of sentences) {
        if (runId !== runIdRef.current) break;
        await speakSentence(sentence, runId);
      }

      if (runId === runIdRef.current) {
        setIsSpeaking(false);
      }
    },
    [speakSentence],
  );

  const playAudioTrack = useCallback(
    (track: LessonTrack, runId: number) => {
      return new Promise<void>((resolve) => {
        if (!track.url || !audioRef.current || runId !== runIdRef.current) {
          setIsPlaying(false);
          return resolve();
        }

        const audio = audioRef.current;
        audio.src = track.url;
        audio.currentTime = 0;
        setCurrentTrack(track);
        setIsPlaying(true);

        const onEnded = () => {
          cleanup();
          if (runId === runIdRef.current) setIsPlaying(false);
          resolve();
        };

        const onError = () => {
          cleanup();
          if (runId === runIdRef.current) {
            setIsPlaying(false);
            // Fallback to speech synthesis so the track plays completely
            void speak(track.fullText, runId).then(resolve);
          } else {
            resolve();
          }
        };

        const cleanup = () => {
          audio.removeEventListener("ended", onEnded);
          audio.removeEventListener("error", onError);
        };

        audio.addEventListener("ended", onEnded);
        audio.addEventListener("error", onError);

        audio.play().catch(() => {
          cleanup();
          if (runId === runIdRef.current) {
            setIsPlaying(false);
            // Fallback if browser policy blocks autoplay
            void speak(track.fullText, runId).then(resolve);
          } else {
            resolve();
          }
        });
      });
    },
    [speak],
  );

  const playOrNarrateLesson = useCallback(
    async (lesson: LessonTrack) => {
      playActionTone();
      const runId = stopAll();
      setCurrentTrack(lesson);

      if (lesson.url) {
        await playAudioTrack(lesson, runId);
      } else {
        await speak(`${lesson.label}: ${lesson.title}. ${lesson.fullText}`, runId);
      }
    },
    [playAudioTrack, speak, stopAll],
  );

  // Introductory sequence:
  // 1. Welcome speech with accessibility statement and complete Portuguese instructions
  // 2. Automatically play Parte 0 (Prefácio) completely
  // 3. Automatically play Parte 0.1 (Prefácio à Edição Revista) completely
  // 4. Conclude and pause ready on Parte 1 (Deus)
  const runIntroAndPrefaces = useCallback(async () => {
    playActionTone();
    const runId = stopAll();

    // 1. Welcome & Instructions
    await speak(WELCOME_SPEECH_TEXT, runId);
    if (runId !== runIdRef.current) return;

    // 2. Auto play Parte 0 (Prefácio)
    const parte0 = PREFACES.find((t) => t.partNumber === "0");
    if (parte0) {
      setCurrentTrack(parte0);
      if (parte0.url) {
        await playAudioTrack(parte0, runId);
      } else {
        await speak(parte0.fullText, runId);
      }
    }
    if (runId !== runIdRef.current) return;

    // 3. Auto play Parte 0.1 (Prefácio à Edição Revista)
    const parte01 = PREFACES.find((t) => t.partNumber === "0.1");
    if (parte01) {
      setCurrentTrack(parte01);
      if (parte01.url) {
        await playAudioTrack(parte01, runId);
      } else {
        await speak(parte01.fullText, runId);
      }
    }
    if (runId !== runIdRef.current) return;

    // 4. Conclude and pause on Parte 1
    const parte1 = CATECHISM_LESSONS[0]!;
    setCurrentTrack(parte1);
    setIsPlaying(false);
    setIsSpeaking(false);

    await speak(
      `Introdução e prefácios concluídos. O áudio está em pausa. Toque 1 vez no ecrã para ouvir a Parte 1 sobre ${parte1.title}.`,
      runId,
    );
  }, [playAudioTrack, speak, stopAll]);

  useEffect(() => {
    const timer = setTimeout(() => {
      void runIntroAndPrefaces();
    }, 600);

    return () => {
      clearTimeout(timer);
      stopAll();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const downloadAllFiles = useCallback(async () => {
    playActionTone();
    const runId = stopAll();
    setIsDownloading(true);
    setDownloadSuccess(false);

    await speak("A descarregar todos os ficheiros de áudio do Catecismo Júnior.", runId);

    try {
      const zip = new JSZip();
      const folder = zip.folder("Catecismo_Junior_Igreja_Metodista_Unida");

      // 1. Fetch real mp3 assets and attach to zip & trigger blob downloads
      for (const track of audioTracks) {
        if (track.url) {
          try {
            const res = await fetch(track.url);
            const blob = await res.blob();
            // Add mp3 to zip
            folder?.file(track.filename, blob);
            // Also trigger direct individual mp3 download
            triggerBlobDownload(blob, track.filename);
          } catch {
            // continue
          }
        }
      }

      // 2. Add complete transcript and lesson texts for all 16 chapters
      let fullDoc = "CATECISMO JÚNIOR — IGREJA METODISTA UNIDA\n";
      fullDoc += "Edição Revista & Acessibilidade em Áudio\n\n";
      fullDoc += "========================================\n\n";

      allTracks.forEach((track) => {
        fullDoc += `[${track.label}: ${track.title}]\n`;
        if (track.references) fullDoc += `Referências: ${track.references}\n`;
        fullDoc += `${track.fullText}\n\n`;
        fullDoc += "----------------------------------------\n\n";

        folder?.file(
          `${track.filename.replace(/\.mp3$/, "")}.txt`,
          `${track.label}: ${track.title}\n\n${track.fullText}\n\nReferências: ${track.references ?? "Igreja Metodista Unida"}`,
        );
      });

      folder?.file("Catecismo_Junior_Guia_Completo.txt", fullDoc);

      // 3. Generate and download zip package
      const zipBlob = await zip.generateAsync({ type: "blob" });
      triggerBlobDownload(zipBlob, "Catecismo_Junior_Igreja_Metodista_Unida_Completo.zip");

      setDownloadSuccess(true);
      setTimeout(() => setDownloadSuccess(false), 5000);
      if (runId === runIdRef.current) {
        await speak("Os ficheiros foram descarregados com sucesso.", runId);
      }
    } catch {
      // Fallback direct url download
      audioTracks.forEach((track, index) => {
        setTimeout(() => {
          if (track.url) {
            const a = document.createElement("a");
            a.href = track.url;
            a.download = track.filename;
            document.body.appendChild(a);
            a.click();
            a.remove();
          }
        }, index * 600);
      });
      setDownloadSuccess(true);
      setTimeout(() => setDownloadSuccess(false), 5000);
    } finally {
      setIsDownloading(false);
    }
  }, [allTracks, audioTracks, speak, stopAll]);

  // Multi-tap resolution logic (1 to 16 = Chapters 1..16, 20 = Download, 21 = Replay Intro)
  const resolveTaps = useCallback(
    async (count: number) => {
      setTapCount(0);
      setActiveTapFeedback(null);

      if (count === 21) {
        await runIntroAndPrefaces();
        return;
      }

      if (count === 20) {
        void downloadAllFiles();
        return;
      }

      // Tap 1 to 16
      const track =
        CATECHISM_LESSONS.find((t) => t.tapNumber === count) ??
        CATECHISM_LESSONS.find((t) => t.id === String(count));

      const runId = stopAll();

      if (!track) {
        await speak(
          `Foram registados ${count} toques. Neste momento, existem 12 capítulos. Toque de 1 a 12 vezes para os capítulos, 20 vezes para descarregar ou 21 vezes para ouvir as instruções.`,
          runId,
        );
        return;
      }

      await playOrNarrateLesson(track);
    },
    [downloadAllFiles, playOrNarrateLesson, runIntroAndPrefaces, speak, stopAll],
  );

  const registerTap = useCallback(() => {
    // Unlock any audio context if locked
    if (audioRef.current && audioRef.current.paused) {
      audioRef.current.load();
    }
    if (typeof window !== "undefined" && "speechSynthesis" in window) {
      window.speechSynthesis.resume();
    }

    const next = tapCountRef.current + 1;
    tapCountRef.current = next;
    setTapCount(next);
    setActiveTapFeedback(next);
    playTapTone(next);

    if (tapTimer.current) clearTimeout(tapTimer.current);

    // Start replay directly from the 21st tap so browser autoplay policies
    // recognize the user's touch as the audio permission gesture.
    if (next === 21) {
      tapCountRef.current = 0;
      setTapCount(0);
      setActiveTapFeedback(null);
      void runIntroAndPrefaces();
      return;
    }

    tapTimer.current = setTimeout(() => {
      tapCountRef.current = 0;
      void resolveTaps(next);
    }, 950);
  }, [resolveTaps, runIntroAndPrefaces]);

  const isAudioActive = isPlaying || isSpeaking;

  return (
    <div
      className="relative flex h-[100dvh] min-h-[100dvh] max-h-[100dvh] w-full flex-col items-center justify-between bg-white text-[#1d1d1f] font-sans antialiased select-none cursor-pointer overflow-hidden p-4 sm:p-6 md:p-8 safe-pb"
      onClick={registerTap}
      role="application"
      aria-label="Catecismo Júnior da Igreja Metodista Unida. Toque em qualquer ponto do ecrã para ouvir os 12 capítulos."
    >
      <audio ref={audioRef} preload="auto" className="hidden" />

      {/* Screen Reader Live Announcements */}
      <div className="sr-only" aria-live="assertive" role="log">
        {tapCount > 0 && `${tapCount} toques registados.`}
        {isAudioActive && `A reproduzir ${currentTrack.label}: ${currentTrack.title}`}
      </div>

      {/* Top Balanced Spacer */}
      <header className="w-full shrink-0 h-2 sm:h-4" />

      {/* Center: Official Methodist Cross & Flame Logo & Minimalist Touch Area */}
      <main className="flex flex-1 w-full max-w-lg flex-col items-center justify-center min-h-0 px-4 py-2">
        <div className="relative flex items-center justify-center w-full max-w-[260px] sm:max-w-[300px] md:max-w-[340px] aspect-[360/480] max-h-[44dvh]">
          {/* Subtle scarlet pulse halo when audio is active */}
          {isAudioActive && (
            <div className="absolute -inset-4 sm:-inset-6 rounded-full bg-[#D32F2F]/10 animate-ping pointer-events-none" />
          )}

          {/* Cross & Flame Emblem - Infallible vector rendering */}
          <div className="relative w-full h-full flex items-center justify-center pointer-events-none select-none">
            <MethodistLogo className="w-full h-full object-contain drop-shadow-sm transition-transform duration-200 active:scale-98" />
          </div>
        </div>

        {/* Multi-Touch Floating Pill during active tap counting */}
        {activeTapFeedback && activeTapFeedback > 0 && (
          <div className="mt-4 sm:mt-6 inline-flex items-center gap-2 rounded-full bg-[#D32F2F] px-5 py-2 text-sm font-semibold text-white shadow-lg animate-scale-in shrink-0">
            <span>
              {activeTapFeedback} {activeTapFeedback === 1 ? "Toque" : "Toques"}
            </span>
          </div>
        )}
      </main>

      {/* Bottom: Replay and download actions */}
      <footer className="w-full max-w-xs sm:max-w-sm shrink-0 pt-2 pb-2 sm:pb-4">
        <button
          type="button"
          id="btn-download-files"
          disabled={isDownloading}
          onClick={(e) => {
            e.stopPropagation();
            void downloadAllFiles();
          }}
          className="flex min-h-[52px] sm:min-h-[58px] w-full items-center justify-center gap-3 rounded-2xl apple-btn-primary px-6 sm:px-8 text-sm sm:text-base font-semibold tracking-tight shadow-md disabled:opacity-75 cursor-pointer"
          aria-label="Descarregar ficheiros de áudio do Catecismo Júnior"
        >
          {downloadSuccess ? (
            <>
              <CheckCircle2 className="h-5 w-5 text-white shrink-0" />
              <span>Ficheiros Descarregados</span>
            </>
          ) : isDownloading ? (
            <>
              <Download className="h-5 w-5 text-white shrink-0 animate-bounce" />
              <span>A Descarregar...</span>
            </>
          ) : (
            <>
              <Download className="h-5 w-5 text-white shrink-0" />
              <span>Descarregar Ficheiros</span>
            </>
          )}
        </button>
      </footer>
    </div>
  );
}
