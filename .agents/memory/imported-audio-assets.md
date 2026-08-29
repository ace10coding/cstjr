---
name: Imported audio assets
description: Behavior of audio files imported from Lovable into this Replit project
---

The imported MP3 asset metadata can contain `/__l5e/assets-v1/...` URLs that are not served by this Replit project. Until the actual recordings are added to the workspace, lesson playback should use the European Portuguese browser speech-synthesis fallback rather than requesting those paths. The first-run intro must be invoked directly from the mount effect to start without a tap; replay speech should be initiated directly from a user gesture because delayed timer callbacks can be treated as autoplay.

**Why:** The repository may include only `.asset.json` metadata, and the referenced URLs return 404 locally. Leaving those URLs active creates broken audio requests and prevents reliable replay. Browser autoplay rules can also suppress speech started after a delayed multi-tap timer.

**How to apply:** Before wiring imported audio metadata into lesson data or the download ZIP, confirm the corresponding recording exists as a project-local asset and is served successfully in the Replit preview. Start the automatic intro on mount without a timer, keep replay actions on the final user tap, and resume speech/audio contexts during touch handling. Browser autoplay policy may still override automatic speech/audio.