# ZetaFlow AI Demo Video Brief
## 15-Second Professional Video with AI Sketches & Whiteboard Animation

### Video Specifications
- **Duration**: 15 seconds
- **Style**: AI-generated sketches + whiteboard animation
- **Voiceover**: Professional female narrator
- **Resolution**: 1920x1080 (Full HD)
- **Format**: MP4
- **Frame Rate**: 30fps

### Script & Storyboard

#### Scene 1 (0-3 seconds)
**Visual**: Hand-drawn sketch of a frustrated recruiter surrounded by paper resumes
**Voiceover**: "Tired of endless resume screening?"
**Animation**: Papers flying around, clock ticking fast

#### Scene 2 (3-6 seconds)
**Visual**: Whiteboard drawing of AIRA logo appearing with AI brain icon
**Voiceover**: "Meet AIRA - your AI recruitment agent"
**Animation**: Logo materializes with glowing effect

#### Scene 3 (6-9 seconds)
**Visual**: Sketch showing resumes being processed by AI (funnel visualization)
**Voiceover**: "Screens hundreds of candidates in seconds"
**Animation**: Resumes flowing through AI funnel, best candidates highlighted

#### Scene 4 (9-12 seconds)
**Visual**: Dashboard sketch showing metrics: 60% faster hiring, 90% time saved
**Voiceover**: "Reduce hiring time by sixty percent"
**Animation**: Numbers counting up, progress bars filling

#### Scene 5 (12-15 seconds)
**Visual**: Happy team sketch with ZetaFlow logo
**Voiceover**: "Transform your recruitment with ZetaFlow"
**Animation**: Team celebrating, logo with website URL appearing

### Voice Over Script (Female Narrator)
```
"Tired of endless resume screening? Meet AIRA - your AI recruitment agent. 
Screens hundreds of candidates in seconds. Reduce hiring time by sixty percent. 
Transform your recruitment with ZetaFlow."
```

### Technical Requirements for AI Video Generation

#### Recommended AI Tools:
1. **Runway ML** - For AI video generation
2. **Synthesia** - For AI avatar and voiceover
3. **Descript** - For video editing and AI voice
4. **VideoScribe** - For whiteboard animation
5. **ElevenLabs** - For professional AI voice generation

#### Visual Style Guidelines:
- **Color Palette**: Primary blue (#0284c7), Purple accent (#c026d3), White background
- **Drawing Style**: Clean, minimalist line art
- **Animation**: Smooth hand-drawing effect
- **Typography**: Modern sans-serif for text elements

#### Audio Specifications:
- **Voice**: Professional female, confident and friendly tone
- **Accent**: Neutral American English
- **Pace**: Clear and measured (not rushed)
- **Background Music**: Subtle, modern tech music (optional)

### Implementation Steps:

1. **Create the video** using the above specifications
2. **Save as MP4** in the `public/videos/` directory
3. **Update VideoModal.tsx** to use the actual video file:

```jsx
// Replace the placeholder content with:
<video
  className="w-full h-full object-cover"
  controls
  autoPlay
  muted
  poster="/path-to-video-thumbnail.jpg"
>
  <source src="/videos/zetaflow-demo.mp4" type="video/mp4" />
  Your browser does not support the video tag.
</video>
```

### Alternative: Embed YouTube/Vimeo
If you upload to a video platform:

```jsx
// For YouTube embed:
<iframe
  className="w-full h-full"
  src="https://www.youtube.com/embed/YOUR_VIDEO_ID?autoplay=1"
  title="ZetaFlow AI Demo"
  frameBorder="0"
  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
  allowFullScreen
></iframe>
```

### Budget Estimate:
- **AI Video Generation**: $50-200 (depending on tool)
- **Professional Voiceover**: $100-300
- **Video Editing**: $200-500
- **Total**: $350-1000

### Next Steps:
1. Choose your preferred AI video generation tool
2. Create the video following this brief
3. Test the video in the modal
4. Optimize for web delivery (compress if needed)
5. Add video analytics tracking (optional)

This brief provides everything needed to create a professional 15-second video that will perfectly complement your ZetaFlow website!