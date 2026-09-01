// Utility to generate standard playable WAV audio files for offline download
export function createWavAudioFile(
  title: string,
  text: string,
  sampleRate: number = 22050,
  durationSeconds: number = 8,
): Blob {
  const numChannels = 1;
  const numSamples = Math.floor(sampleRate * durationSeconds);
  const blockAlign = numChannels * 2;
  const byteRate = sampleRate * blockAlign;
  const dataSize = numSamples * blockAlign;
  const buffer = new ArrayBuffer(44 + dataSize);
  const view = new DataView(buffer);

  // RIFF identifier
  writeString(view, 0, "RIFF");
  // file length
  view.setUint32(4, 36 + dataSize, true);
  // RIFF type & format
  writeString(view, 8, "WAVE");
  writeString(view, 12, "fmt ");
  // format chunk length
  view.setUint32(16, 16, true);
  // sample format (1 = PCM)
  view.setUint16(20, 1, true);
  // channel count
  view.setUint16(22, numChannels, true);
  // sample rate
  view.setUint32(24, sampleRate, true);
  // byte rate
  view.setUint32(28, byteRate, true);
  // block align
  view.setUint16(32, blockAlign, true);
  // bits per sample
  view.setUint16(34, 16, true);
  // data chunk identifier
  writeString(view, 36, "data");
  // data chunk length
  view.setUint32(40, dataSize, true);

  // Generate a warm church acoustic tone + harmonic chord voicing
  const baseFreq = 220; // A3
  const thirdFreq = 277.18; // C#4
  const fifthFreq = 329.63; // E4

  let offset = 44;
  for (let i = 0; i < numSamples; i++) {
    const t = i / sampleRate;
    // Gentle envelope with smooth attack and decay
    const envelope = Math.sin((Math.PI * i) / numSamples);
    // Subtle bell/chime harmonics
    const sample =
      (Math.sin(2 * Math.PI * baseFreq * t) * 0.4 +
        Math.sin(2 * Math.PI * thirdFreq * t) * 0.3 +
        Math.sin(2 * Math.PI * fifthFreq * t) * 0.2 +
        Math.sin(2 * Math.PI * baseFreq * 2 * t) * 0.1) *
      envelope;

    const s = Math.max(-1, Math.min(1, sample));
    view.setInt16(offset, s < 0 ? s * 0x8000 : s * 0x7fff, true);
    offset += 2;
  }

  return new Blob([buffer], { type: "audio/wav" });
}

function writeString(view: DataView, offset: number, string: string) {
  for (let i = 0; i < string.length; i++) {
    view.setUint8(offset + i, string.charCodeAt(i));
  }
}
