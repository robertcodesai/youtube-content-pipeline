# 🤝 Contributing to the Content Pipeline

## The Workflow

Every video follows this pipeline:

### 1. 💡 Idea
- Create a file in `ideas/` with the video concept
- Or open a [GitHub Issue](../../issues/new?template=video-idea.md)
- Include: title, target audience, key points, estimated length

### 2. 📝 Script
- Move to `scripts/` and write the full script
- Update `TRACKER.md` status to `📝 Scripting`
- Include timestamps, talking points, and B-roll notes

### 3. 🎨 Thumbnail
- Add thumbnail designs to `thumbnails/`
- Update `TRACKER.md` status to `🎨 Thumbnail`
- Naming: `video-slug-v1.png`

### 4. 🎬 Film & Edit
- Update `TRACKER.md` status to `🎬 Filming` then `✂️ Editing`

### 5. ✅ Publish
- Update `TRACKER.md` with publish date and YouTube URL
- Video description auto-generates to `published/descriptions/`
- Status → `✅ Published`

## File Naming

Use kebab-case slugs that match across directories:
```
ideas/ai-agents-mac-mini.md
scripts/ai-agents-mac-mini.md
thumbnails/ai-agents-mac-mini-v1.png
published/descriptions/ai-agents-mac-mini.md
```

## Branch Strategy

- `main` — source of truth
- `idea/video-slug` — new ideas
- `script/video-slug` — script drafts
- PRs required for merging into main
