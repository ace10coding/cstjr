---
name: Imported audio assets
description: Behavior of audio files imported from Lovable into this Replit project
---

The imported MP3 asset metadata can contain `/__l5e/assets-v1/...` URLs that are not served by this Replit project. Until the actual recordings are added to the workspace, lesson playback should use the European Portuguese browser speech-synthesis fallback rather than requesting those paths.

**Why:** The repository may include only `.asset.json` metadata, and the referenced URLs return 404 locally. Leaving those URLs active creates broken audio requests and prevents reliable replay.

**How to apply:** Before wiring imported audio metadata into lesson data or the download ZIP, confirm the corresponding recording exists as a project-local asset and is served successfully in the Replit preview.