import { createFileRoute } from "@tanstack/react-router";
import { useCallback, useEffect, useRef, useState } from "react";
import { Download, Play, Pause, Volume2, Accessibility, CheckCircle2, Hand } from "lucide-react";

import logoAsset from "@/assets/cross-flame.jpg.asset.json";
import { MethodistLogo } from "@/components/MethodistLogo";
import { CATECHISM_LESSONS, WELCOME_SPEECH_TEXT, type LessonTrack } from "@/data/lessons";
import { playTapTone, playActionTone } from "@/lib/sound-feedback";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Catecismo Júnior — Igreja Metodista Unida" },
      {
        name: "description",
        content:
          "Catecismo Júnior da Igreja Metodista Unida em áudio acessível. Interface minimalista de alta qualidade com navegação por toques no ecrã até à Parte 17 e descarga de ficheiros.",
      },
      { property: "og:title", content: "Catecismo Júnior — Igreja Metodista Unida" },
      {
        property: "og:description",
        content:
          "Ouça o Catecismo Júnior em português com navegação acessível por múltiplos toques para pessoas com deficiência visual.",
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

function downloadFile(url: string, filename: string) {
  const a = document.createElement("a");
  a.href = url;
  a.download = filename;
  a.rel = "noopener";
  document.body.appendChild(a);
  a.click();
  a.remove();
}

function Index() {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [tapCount, setTapCount] = useState(0);
  const tapTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const runIdRef = useRef(0);

  const [currentTrack, setCurrentTrack] = useState<LessonTrack>(
    CATECHISM_LESSONS.find((t) => t.partNumber === "1") ??
      CATECHISM_LESSONS[2] ??
      CATECHISM_LESSONS[0]!,
  );
  const [isPlaying, setIsPlaying] = useState(false);
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [downloadSuccess, setDownloadSuccess] = useState(false);
  const [imgError, setImgError] = useState(false);
  const [introPhase, setIntroPhase] = useState<string | null>("A iniciar introdução...");

  const downloadableTracks = CATECHISM_LESSONS.filter((t) => t.url);

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

  const speak = useCallback((text: string, runId: number) => {
    return new Promise<void>((resolve) => {
      if (typeof window === "undefined" || !("speechSynthesis" in window)) {
        setIsSpeaking(false);
        return resolve();
      }
      if (runId !== runIdRef.current) {
        setIsSpeaking(false);
        return resolve();
      }

      window.speechSynthesis.cancel();
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.lang = "pt-PT";
      utterance.rate = 0.95;
      utterance.pitch = 1.0;

      const voice = pickPortugueseVoice();
      if (voice) utterance.voice = voice;

      setIsSpeaking(true);

      utterance.onend = () => {
        if (runId === runIdRef.current) setIsSpeaking(false);
        resolve();
      };
      utterance.onerror = () => {
        if (runId === runIdRef.current) setIsSpeaking(false);
        resolve();
      };

      window.speechSynthesis.speak(utterance);
    });
  }, []);

  const playAudioTrack = useCallback((track: LessonTrack, runId: number) => {
    return new Promise<void>((resolve) => {
      if (!track.url || !audioRef.current || runId !== runIdRef.current) {
        setIsPlaying(false);
        return resolve();
      }

      const audio = audioRef.current;
      audio.src = track.url;
      setCurrentTrack(track);
      setIsPlaying(true);

      const done = () => {
        audio.removeEventListener("ended", done);
        audio.removeEventListener("error", done);
        if (runId === runIdRef.current) setIsPlaying(false);
        resolve();
      };

      audio.addEventListener("ended", done);
      audio.addEventListener("error", done);
      audio.play().catch(() => {
        audio.removeEventListener("ended", done);
        audio.removeEventListener("error", done);
        if (runId === runIdRef.current) setIsPlaying(false);
        resolve();
      });
    });
  }, []);

  const playOrNarrateLesson = useCallback(
    async (lesson: LessonTrack) => {
      playActionTone();
      const runId = stopAll();
      setCurrentTrack(lesson);
      setIntroPhase(null);

      if (lesson.url) {
        await speak(`${lesson.label}: ${lesson.title}.`, runId);
        await playAudioTrack(lesson, runId);
      } else {
        await speak(`${lesson.label}: ${lesson.title}. ${lesson.fullText}`, runId);
      }
    },
    [playAudioTrack, speak, stopAll],
  );

  // Full introductory sequence:
  // 1. Welcome Speech (reading audio files info)
  // 2. Auto-play Parte 0 (Prefácio)
  // 3. Auto-play Parte 0.1 (Prefácio à Edição Revista)
  // 4. Pause and announce readiness for user touches (Parte 1 ready)
  const runIntroAndPrefaces = useCallback(async () => {
    playActionTone();
    const runId = stopAll();
    setIntroPhase("A reproduzir introdução...");

    // 1. Welcome Speech
    await speak(WELCOME_SPEECH_TEXT, runId);
    if (runId !== runIdRef.current) return;

    // 2. Auto play Parte 0 (Prefácio)
    const parte0 = CATECHISM_LESSONS.find((t) => t.partNumber === "0");
    if (parte0) {
      setIntroPhase("Parte 0: Prefácio");
      setCurrentTrack(parte0);
      await speak("A reproduzir Parte 0: Prefácio.", runId);
      if (runId !== runIdRef.current) return;
      if (parte0.url) {
        await playAudioTrack(parte0, runId);
      } else {
        await speak(parte0.fullText, runId);
      }
    }
    if (runId !== runIdRef.current) return;

    // 3. Auto play Parte 0.1 (Prefácio à Edição Revista)
    const parte01 = CATECHISM_LESSONS.find((t) => t.partNumber === "0.1");
    if (parte01) {
      setIntroPhase("Parte 0.1: Prefácio à Edição Revista");
      setCurrentTrack(parte01);
      await speak("A reproduzir Parte 0 ponto 1: Prefácio à Edição Revista.", runId);
      if (runId !== runIdRef.current) return;
      if (parte01.url) {
        await playAudioTrack(parte01, runId);
      } else {
        await speak(parte01.fullText, runId);
      }
    }
    if (runId !== runIdRef.current) return;

    // 4. Conclude and pause in ready state on Parte 1
    const parte1 = CATECHISM_LESSONS.find((t) => t.partNumber === "1");
    if (parte1) {
      setCurrentTrack(parte1);
    }
    setIntroPhase(null);
    setIsPlaying(false);
    setIsSpeaking(false);

    await speak(
      "Introdução e prefácios concluídos. O áudio está agora em pausa. Toque 1 vez no ecrã para ouvir a Parte 1 sobre Deus, ou toque várias vezes até à Parte 17.",
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
    setDownloadSuccess(true);
    setTimeout(() => setDownloadSuccess(false), 5000);

    await speak("A descarregar todos os ficheiros de áudio do Catecismo Júnior.", runId);

    downloadableTracks.forEach((track, index) => {
      setTimeout(() => {
        if (track.url) {
          downloadFile(
            track.url,
            `Catecismo_Junior_Parte_${track.partNumber}_${track.title.replace(/\s+/g, "_")}.mp3`,
          );
        }
      }, index * 800);
    });
  }, [downloadableTracks, speak, stopAll]);

  // Multi-tap resolution logic up to 17 parts (20 = download all, 21 = replay intro + prefácio 0 e 0.1)
  const resolveTaps = useCallback(
    async (count: number) => {
      setTapCount(0);

      if (count === 21) {
        await runIntroAndPrefaces();
        return;
      }

      if (count === 20) {
        void downloadAllFiles();
        return;
      }

      const track =
        CATECHISM_LESSONS.find((t) => t.tapNumber === count) ??
        CATECHISM_LESSONS.find((t) => t.id === String(count));

      const runId = stopAll();

      if (!track) {
        await speak(
          `Foram registados ${count} toques. O catecismo possui lições de 1 a 17. Toque 20 vezes para descarregar ou 21 para repetir a introdução e prefácios.`,
          runId,
        );
        return;
      }

      await playOrNarrateLesson(track);
    },
    [downloadAllFiles, playOrNarrateLesson, runIntroAndPrefaces, speak, stopAll],
  );

  const registerTap = useCallback(() => {
    setTapCount((previous) => {
      const next = previous + 1;
      playTapTone(next);

      if (tapTimer.current) clearTimeout(tapTimer.current);
      tapTimer.current = setTimeout(() => {
        void resolveTaps(next);
      }, 1000);

      return next;
    });
  }, [resolveTaps]);

  const handleMainPlayToggle = useCallback(() => {
    if (isPlaying || isSpeaking) {
      stopAll();
    } else {
      void playOrNarrateLesson(currentTrack);
    }
  }, [currentTrack, isPlaying, isSpeaking, playOrNarrateLesson, stopAll]);

  const isActive = isPlaying || isSpeaking;

  return (
    <div
      className="relative min-h-screen w-full bg-white text-[#1d1d1f] font-sans antialiased selection:bg-[#d32f2f] selection:text-white cursor-pointer select-none"
      onClick={registerTap}
      role="application"
      aria-label="Catecismo Júnior da Igreja Metodista Unida. Toque em qualquer área do ecrã para navegar por partes de 1 a 17."
    >
      <audio ref={audioRef} preload="none" className="hidden" />

      {/* Screen Reader Live Announcements */}
      <div className="sr-only" aria-live="assertive" role="log">
        {tapCount > 0 && `${tapCount} toques registados`}
      </div>

      {/* Minimalist Header with Centered Accessibility Logo/Badge */}
      <header
        className="sticky top-0 z-30 w-full border-b border-[#e5e5ea] bg-white/90 backdrop-blur-md"
        role="banner"
      >
        <div className="mx-auto flex h-14 max-w-2xl items-center justify-center px-6">
          <div className="inline-flex items-center gap-2 rounded-full bg-[#f5f5f7] px-4 py-1.5 text-xs font-semibold tracking-wide text-[#515154] border border-[#e5e5ea] shadow-2xs">
            <Accessibility className="h-4 w-4 text-[#d32f2f]" />
            <span>Acessibilidade</span>
          </div>
        </div>
      </header>

      {/* Main Luxury Minimalist Container */}
      <main className="mx-auto flex min-h-[calc(100vh-3.5rem)] w-full max-w-xl flex-col items-center justify-between px-6 py-8 sm:py-12">
        {/* Top Logo & Title Section */}
        <section className="flex w-full flex-col items-center text-center">
          {/* United Methodist Cross and Flame Logo on Pure White */}
          <div className="mb-6 flex h-36 w-auto items-center justify-center">
            {logoAsset?.url && !imgError ? (
              <img
                src={logoAsset.url}
                alt="Cruz e Chama — Igreja Metodista Unida"
                onError={() => setImgError(true)}
                className="h-36 w-auto max-w-[280px] object-contain"
              />
            ) : (
              <MethodistLogo className="h-36 w-auto" />
            )}
          </div>

          <p className="text-xs font-semibold uppercase tracking-widest text-[#86868b]">
            Igreja Metodista Unida
          </p>
          <h1 className="mt-1.5 text-3xl sm:text-4xl font-bold tracking-tight text-[#1d1d1f]">
            Catecismo Júnior
          </h1>
          <p className="mt-2 text-sm sm:text-base text-[#6e6e73] max-w-md leading-relaxed font-normal">
            Toque em qualquer parte do ecrã para escolher a lição (1 a 17 toques).
          </p>
        </section>

        {/* Center: Tap Area & Active Lesson Display (Spacious Free Canvas) */}
        <section
          className="my-8 flex w-full flex-1 flex-col items-center justify-center"
          aria-label="Informação da Lição Ativa e Zona de Toques"
        >
          {/* Active Lesson Card - Apple Card Style with IBM Plex Sans */}
          <div
            className={`w-full rounded-3xl p-6 sm:p-8 text-center transition-all duration-300 ${
              tapCount > 0
                ? "border-2 border-[#d32f2f] bg-[#fff5f5] shadow-lg"
                : "border border-[#e5e5ea] bg-[#f5f5f7]"
            }`}
          >
            {tapCount > 0 ? (
              <div className="flex flex-col items-center justify-center py-3">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#d32f2f] text-white shadow-md animate-bounce mb-3">
                  <Hand className="h-7 w-7" />
                </div>
                <span className="text-3xl font-bold text-[#d32f2f] tracking-tight">
                  {tapCount} {tapCount === 1 ? "Toque" : "Toques"}
                </span>
                <p className="mt-1.5 text-sm font-medium text-[#1d1d1f]">
                  {tapCount <= 17 && tapCount >= 1 && (
                    <span>
                      A abrir <strong>Parte {tapCount}</strong>...
                    </span>
                  )}
                  {tapCount === 20 && (
                    <span>A preparar descarregamento de todos os ficheiros...</span>
                  )}
                  {tapCount === 21 && <span>A repetir introdução e prefácios...</span>}
                  {tapCount > 21 && <span>Aguardando conclusão dos toques...</span>}
                </p>
              </div>
            ) : (
              <div className="flex flex-col items-center justify-center py-2">
                <div className="inline-flex items-center gap-1.5 rounded-full bg-white px-3.5 py-1 text-xs font-semibold text-[#d32f2f] border border-[#e5e5ea] mb-3 shadow-xs">
                  {isActive ? (
                    <>
                      <span className="inline-block h-2 w-2 rounded-full bg-[#d32f2f] animate-ping" />
                      {introPhase ?? "A Reproduzir"}
                    </>
                  ) : (
                    <>
                      <Volume2 className="h-3.5 w-3.5" />
                      Lição Selecionada
                    </>
                  )}
                </div>

                <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#1d1d1f]">
                  {currentTrack.label}: {currentTrack.title}
                </h2>
                {currentTrack.subtitle && (
                  <p className="mt-1.5 text-sm text-[#86868b] font-medium">
                    {currentTrack.subtitle}
                  </p>
                )}

                <div className="mt-4 inline-flex items-center gap-2 rounded-xl bg-white/90 px-4 py-2 text-xs font-medium text-[#515154] border border-[#e5e5ea]">
                  <Hand className="h-4 w-4 text-[#d32f2f]" />
                  <span>
                    Toque <strong>{currentTrack.tapNumber ?? 1}x</strong> no ecrã para esta lição (1
                    a 17)
                  </span>
                </div>
              </div>
            )}
          </div>
        </section>

        {/* Bottom: Exactly TWO High-Contrast Action Buttons */}
        <section className="flex w-full flex-col gap-3.5 pt-2" aria-label="Controlos Principais">
          {/* Button 1: Primary Action (Ouvir / Pausar Catecismo) */}
          <button
            type="button"
            id="btn-main-listen"
            onClick={(e) => {
              e.stopPropagation();
              handleMainPlayToggle();
            }}
            className="flex min-h-[64px] w-full items-center justify-center gap-3 rounded-2xl apple-btn-primary px-8 text-base sm:text-lg font-semibold tracking-tight"
            aria-label={
              isActive
                ? "Pausar reprodução do Catecismo"
                : `Ouvir ${currentTrack.label}: ${currentTrack.title}`
            }
          >
            {isActive ? (
              <>
                <Pause className="h-6 w-6 fill-current" />
                <span>Pausar Lição</span>
              </>
            ) : (
              <>
                <Play className="h-6 w-6 fill-current" />
                <span>Ouvir {currentTrack.label}</span>
              </>
            )}
          </button>

          {/* Button 2: Secondary Action (Descarregar Todos os Ficheiros) */}
          <button
            type="button"
            id="btn-main-download"
            onClick={(e) => {
              e.stopPropagation();
              void downloadAllFiles();
            }}
            className="flex min-h-[64px] w-full items-center justify-center gap-3 rounded-2xl apple-btn-secondary px-8 text-base sm:text-lg font-semibold tracking-tight"
            aria-label="Descarregar todos os ficheiros de áudio do Catecismo"
          >
            {downloadSuccess ? (
              <>
                <CheckCircle2 className="h-6 w-6 text-emerald-600" />
                <span className="text-emerald-700">Ficheiros Descarregados</span>
              </>
            ) : (
              <>
                <Download className="h-6 w-6 text-[#1d1d1f]" />
                <span>Descarregar Todos os Ficheiros</span>
              </>
            )}
          </button>
        </section>
      </main>
    </div>
  );
}
