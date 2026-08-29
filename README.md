# Catechism Junior

Create a fully responsive web and mobile application named "Catecismo Júnior - Igreja Metodista Unida" with a pristine pure white background (#FFFFFF), clean typography using IBM Plex Sans, and an immaculate Apple-inspired glassmorphism UI design. Ensure absolute zero cut-offs, flawless padding, and an accessible, modern layout.

### Key Interactive Features:

1. **Audio Accessibility & Tap Navigation:** - Inform the user explicitly through audio and visual cues **not to tap anything** at the beginning, but to listen attentively to the Preface and the Revised Edition Preface.

   - Files are labeled as **0** for the "Prefácio" and **0.1** for the "Prefácio à Edição Revista". 

   - Tapping the screen at any time selects chapters based on tap count (e.g., 2 taps selects Chapter 2). Tapping 20 times triggers an automatic application package download.

2. **Voice Assistant Integration Guide:** - Instruct the user that once downloaded, they can use Siri or Google Assistant in European Portuguese by saying commands like: *"Hey Siri, abre o Catecismo Júnior prefácio"* or *"Hey Siri, abre o Catecismo Júnior capítulo 1 até 17"*.

3. **Audio Download Section:** - A dedicated, elegant glassmorphic button for sighted users to download offline audio files.

4. **Voice Synthesis on Load:** - Upon opening, automatically trigger a Text-to-Speech engine set explicitly to European Portuguese (pt-PT, female voice) delivering the initial welcome message, playing files 0 and 0.1, and explaining the voice assistant feature.

### Welcome, Prefaces & Voice Command Audio Script (Audio & Text Display):

"Por favor, não toque em nada de momento e ouça com atenção o Prefácio e o Prefácio à Edição Revista, etiquetados como ficheiro 0 e ficheiro 0.1. Bem-vindo ao Catecismo Júnior da Igreja Metodista Unida. Depois de descarregar a aplicação, pode utilizar a Siri ou o Google Assistant dizendo simplesmente: 'Hey Siri, abre o Catecismo Júnior prefácio'."

### UI/UX Specifications:

- Clean card-based glassmorphism panels with soft borders (`backdrop-filter: blur(16px)`, `background: rgba(255, 255, 255, 0.85)`).

- High contrast dark gray/black text (`#111827`) for absolute legibility.

- Primary buttons styled with smooth rounded corners, subtle shadows, and interactive active states. speech in portgugse and add an accesibility and inlcusion label on screen and wirite it as its an tinitive for studnets well great fininsh small also.

This project was built with [Lovable](https://lovable.dev).

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/4fd890a7-80ba-4762-9617-fcc388c93a9b).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
