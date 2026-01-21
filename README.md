# AI Website That Designs Itself

A Next.js 14 application where users describe UI styles in natural language and the website updates its design LIVE without refresh.

## Demo Video

https://github.com/user-attachments/assets/demo-video.mp4

> **Note:** The video shows MorphoUI in action - type a design prompt and watch the website transform in real-time!

## Project Structure

```
MorphoUI/
├── app/
│   ├── api/
│   │   └── design/
│   │       └── route.ts          # AI prompt → design tokens API
│   ├── globals.css               # Global styles with CSS variables
│   ├── layout.tsx                # Root layout with DesignProvider
│   └── page.tsx                  # Main page
├── components/
│   ├── DesignProvider.tsx        # Applies design tokens as CSS variables
│   ├── PromptInput.tsx           # Natural language input component
│   └── PreviewLayout.tsx         # UI preview component
├── lib/
│   └── design-store.ts           # Zustand store for design state
├── types/
│   └── design.ts                 # Design token type definitions
├── .env.example                  # Environment variables template
├── next.config.mjs               # Next.js configuration
├── package.json                  # Dependencies
├── postcss.config.mjs            # PostCSS configuration
├── tailwind.config.ts            # Tailwind with CSS variables
└── tsconfig.json                 # TypeScript configuration
```

## Setup Instructions

### 1. Install Dependencies

```bash
npm install
```

### 2. Configure Environment Variables

Create a `.env` file in the root directory:

```bash
cp .env.example .env
```

Add your OpenAI API key to `.env`:

```
OPENAI_API_KEY=your_actual_api_key_here
```

Get your API key from: https://platform.openai.com/api-keys

### 3. Run Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## How It Works

### 1. User Input
User enters a natural language prompt (e.g., "dark, minimal, Apple-like")

### 2. AI Processing
- Prompt sent to `/api/design` endpoint
- OpenAI GPT-4 converts prompt into strict design token JSON
- AI outputs ONLY JSON, no JSX or code

### 3. Design Token Schema

```typescript
{
  "theme": "light | dark",
  "backgroundColor": "hex",
  "textColor": "hex",
  "primaryColor": "hex",
  "accentColor": "hex",
  "fontFamily": "string",
  "borderRadius": "sm | md | lg | xl",
  "spacing": "compact | normal | spacious",
  "buttonStyle": "minimal | solid | outlined",
  "animationStyle": "none | smooth | playful"
}
```

### 4. Live Update
- Design tokens stored in Zustand
- DesignProvider applies tokens as CSS variables
- UI updates instantly with smooth transitions
- No page reload required

## Example Prompts

Try these prompts to see the design change live:

- "Make it dark, minimal, Apple-like"
- "Bright and playful, like a children's app"
- "Corporate, professional, Microsoft-like"
- "Retro 80s with neon colors and bold fonts"
- "Clean and modern with lots of white space"
- "Warm and cozy, like a coffee shop"

## AI System Prompt

The API route uses this system prompt to ensure OpenAI returns ONLY design tokens:

```
You are a design system expert. Your ONLY job is to convert natural language design descriptions into a strict JSON object.

You must respond with ONLY valid JSON. No explanations, no markdown, no additional text.

[Full schema and examples included in route.ts]
```

## Key Technologies

- **Next.js 14**: App Router for modern React architecture
- **TypeScript**: Type-safe code throughout
- **Tailwind CSS**: Utility-first styling with CSS variable integration
- **Zustand**: Lightweight state management
- **OpenAI GPT-4**: AI-powered design token generation
- **CSS Variables**: Dynamic theming without page reloads

## Architecture Highlights

### CSS Variable System
Design tokens are applied as CSS variables on the root element, allowing instant theme updates:

```css
:root {
  --bg-color: #ffffff;
  --text-color: #1f2937;
  --primary-color: #3b82f6;
  /* ... */
}
```

### Smooth Transitions
All elements have transition properties for smooth theme changes:

```css
* {
  transition-property: background-color, border-color, color, fill, stroke;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
}
```

### State Management Flow
1. User enters prompt → PromptInput component
2. API call to `/api/design` → OpenAI processes prompt
3. Design tokens returned → Zustand store updated
4. DesignProvider reacts to store change → CSS variables updated
5. All components re-render with new theme → Smooth visual transition

## Production Considerations

- API key stored securely in environment variables
- Error handling for invalid AI responses
- JSON validation for design tokens
- TypeScript for type safety
- Responsive design for all screen sizes
- No external UI libraries required

## License

MIT
