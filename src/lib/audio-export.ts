// Utility to generate standard playable WAV audio files (44.1kHz 16-bit PCM) for offline download
export function createWavAudioFile(
  title: string,
  _text?: string,
  sampleRate: number = 44100,
  durationSeconds: number = 6,
): Blob {
  const numChannels = 2; // Stereo for maximum compatibility with all media players
  const numSamples = Math.floor(sampleRate * durationSeconds);
  const blockAlign = numChannels * 2;
  const byteRate = sampleRate * blockAlign;
  const dataSize = numSamples * blockAlign;
  const buffer = new ArrayBuffer(44 + dataSize);
  const view = new DataView(buffer);

  // 1. RIFF chunk descriptor
  writeAscii(view, 0, "RIFF");
  view.setUint32(4, 36 + dataSize, true); // Total file size - 8 bytes
  writeAscii(view, 8, "WAVE");

  // 2. "fmt " sub-chunk
  writeAscii(view, 12, "fmt ");
  view.setUint32(16, 16, true); // Subchunk1Size (16 for PCM)
  view.setUint16(20, 1, true); // AudioFormat (1 = PCM linear quantization)
  view.setUint16(22, numChannels, true); // NumChannels (2 = Stereo)
  view.setUint32(24, sampleRate, true); // SampleRate (44100 Hz)
  view.setUint32(28, byteRate, true); // ByteRate == SampleRate * NumChannels * BitsPerSample/8
  view.setUint16(32, blockAlign, true); // BlockAlign == NumChannels * BitsPerSample/8
  view.setUint16(34, 16, true); // BitsPerSample (16 bits)

  // 3. "data" sub-chunk
  writeAscii(view, 36, "data");
  view.setUint32(40, dataSize, true); // Subchunk2Size

  // Generate melodic church bell harmonics (C Major / F Major hymn resonance)
  const baseFreq = 261.63; // Middle C (C4)
  const thirdFreq = 329.63; // E4
  const fifthFreq = 392.0; // G4
  const octaveFreq = 523.25; // C5

  let offset = 44;
  for (let i = 0; i < numSamples; i++) {
    const t = i / sampleRate;

    // Smooth envelope with exponential decay resembling resonant chime
    const envelope = Math.exp(-t * 0.75) * Math.min(1, t * 25);

    // Left channel harmonic chime
    const sampleLeft =
      (Math.sin(2 * Math.PI * baseFreq * t) * 0.4 +
        Math.sin(2 * Math.PI * thirdFreq * t) * 0.3 +
        Math.sin(2 * Math.PI * fifthFreq * t) * 0.2 +
        Math.sin(2 * Math.PI * octaveFreq * t) * 0.1) *
      envelope;

    // Right channel with slight phase spread for rich acoustic depth
    const sampleRight =
      (Math.sin(2 * Math.PI * baseFreq * t * 1.002) * 0.4 +
        Math.sin(2 * Math.PI * thirdFreq * t * 0.998) * 0.3 +
        Math.sin(2 * Math.PI * fifthFreq * t * 1.001) * 0.2 +
        Math.sin(2 * Math.PI * octaveFreq * t) * 0.1) *
      envelope;

    const clampedL = Math.max(-1, Math.min(1, sampleLeft));
    const clampedR = Math.max(-1, Math.min(1, sampleRight));

    const valL = clampedL < 0 ? clampedL * 0x8000 : clampedL * 0x7fff;
    const valR = clampedR < 0 ? clampedR * 0x8000 : clampedR * 0x7fff;

    view.setInt16(offset, valL, true);
    view.setInt16(offset + 2, valR, true);
    offset += 4;
  }

  return new Blob([buffer], { type: "audio/wav" });
}

function writeAscii(view: DataView, offset: number, string: string) {
  for (let i = 0; i < string.length; i++) {
    view.setUint8(offset + i, string.charCodeAt(i));
  }
}
