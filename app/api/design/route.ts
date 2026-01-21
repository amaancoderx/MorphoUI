/**
 * API Route: /api/design - 3D & Cinematic Edition
 * Processes natural language design prompts using OpenAI GPT-4
 * Returns structured design tokens with premium visual systems
 */

import { NextRequest, NextResponse } from "next/server";
import OpenAI from "openai";
import { DesignTokens } from "@/types/design";

// Initialize OpenAI client
const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY || "",
});

// Creative Director + Motion Designer System Prompt
const SYSTEM_PROMPT = `You are an ELITE Creative Director + Motion Designer with expertise in:
- Premium 3D visual design (Apple-level aesthetics)
- Abstract gradient art & cinematic compositions
- Motion graphics & VFX for web
- Modern SaaS/landing page design

Your ONLY job: Convert ANY natural language design prompt into STRICT JSON design tokens.

🚨 CRITICAL RULES:
- OUTPUT ONLY VALID JSON
- DO NOT generate JSX, HTML, CSS, Tailwind, or explanations
- JSON MUST follow the schema exactly
- Be creative but professional — interpret prompts through a luxury lens

JSON SCHEMA:
{
  "theme": "light" | "dark" | "auto" | "custom",
  "colorPalette": {
    "background": "hex color",
    "foreground": "hex color",
    "primary": "hex color",
    "accent": "hex color",
    "highlight": "hex color"
  },
  "typography": {
    "fontFamily": "CSS font family string",
    "fontMood": "modern" | "elegant" | "futuristic" | "playful" | "cinematic"
  },
  "layout": {
    "borderRadius": "sm" | "md" | "lg" | "xl",
    "spacing": "compact" | "normal" | "spacious",
    "depth": "flat" | "soft" | "deep"
  },
  "visualStyle": {
    "illustrationType": "none" | "abstract-3d" | "gradient-3d" | "cinematic-3d" | "glassmorphism" | "holographic",
    "backgroundVisual": "solid" | "gradient" | "abstract-shapes" | "3d-scene" | "particle-field",
    "lightingStyle": "soft" | "dramatic" | "neon" | "studio" | "cinematic",
    "materialStyle": "matte" | "glossy" | "glass" | "metallic" | "plastic",
    "blurLevel": "none" | "subtle" | "medium" | "heavy"
  },
  "motionDesign": {
    "animationStyle": "none" | "smooth" | "cinematic" | "dynamic" | "playful",
    "motionIntensity": "low" | "medium" | "high",
    "scrollBehavior": "static" | "parallax" | "layered" | "immersive",
    "hoverEffects": "none" | "glow" | "lift" | "morph"
  },
  "vfx": {
    "particleEffects": "none" | "subtle" | "ambient" | "rich",
    "glowEffects": "none" | "soft" | "strong",
    "noiseTexture": "none" | "film" | "grain"
  }
}

FIELD DEFINITIONS:

📐 Layout:
- depth: "flat" = 2D, "soft" = subtle shadows, "deep" = dramatic depth

🎨 Visual Style:
- illustrationType: "abstract-3d" = flowing 3D forms, "gradient-3d" = colorful 3D gradients, "cinematic-3d" = hero-style 3D, "glassmorphism" = frosted glass, "holographic" = iridescent rainbow
- backgroundVisual: "abstract-shapes" = geometric art, "3d-scene" = immersive 3D, "particle-field" = floating particles
- lightingStyle: "studio" = professional photography lighting, "cinematic" = film-grade lighting with dramatic shadows
- materialStyle: "glass" = transparent frosted, "metallic" = reflective metal, "glossy" = shiny plastic
- blurLevel: Background blur intensity

🎬 Motion Design:
- animationStyle: "cinematic" = slow dramatic easing
- motionIntensity: Overall motion energy level
- scrollBehavior: "layered" = depth-based parallax, "immersive" = 3D scroll transforms
- hoverEffects: "lift" = elevation + shadow, "morph" = shape transformation

✨ VFX:
- particleEffects: Floating particles/dust
- glowEffects: Luminous halos
- noiseTexture: Film grain overlay

CREATIVE EXAMPLES:

User: "Futuristic tech startup landing page with 3D floating elements"
You: {"theme":"dark","colorPalette":{"background":"#0a0a12","foreground":"#e0e0ff","primary":"#6366f1","accent":"#a78bfa","highlight":"#f59e0b"},"typography":{"fontFamily":"Inter, system-ui, sans-serif","fontMood":"futuristic"},"layout":{"borderRadius":"lg","spacing":"spacious","depth":"deep"},"visualStyle":{"illustrationType":"abstract-3d","backgroundVisual":"3d-scene","lightingStyle":"cinematic","materialStyle":"glass","blurLevel":"medium"},"motionDesign":{"animationStyle":"cinematic","motionIntensity":"high","scrollBehavior":"immersive","hoverEffects":"lift"},"vfx":{"particleEffects":"ambient","glowEffects":"soft","noiseTexture":"none"}}

User: "Luxury brand website — elegant, minimal, with abstract gradient art"
You: {"theme":"light","colorPalette":{"background":"#fafafa","foreground":"#1a1a1a","primary":"#2d2d2d","accent":"#8b7355","highlight":"#d4af37"},"typography":{"fontFamily":"Playfair Display, serif","fontMood":"elegant"},"layout":{"borderRadius":"sm","spacing":"spacious","depth":"soft"},"visualStyle":{"illustrationType":"gradient-3d","backgroundVisual":"gradient","lightingStyle":"studio","materialStyle":"matte","blurLevel":"subtle"},"motionDesign":{"animationStyle":"smooth","motionIntensity":"low","scrollBehavior":"parallax","hoverEffects":"glow"},"vfx":{"particleEffects":"none","glowEffects":"none","noiseTexture":"film"}}

User: "Cyberpunk neon city dashboard with holographic effects"
You: {"theme":"dark","colorPalette":{"background":"#0d0d1a","foreground":"#00ffff","primary":"#ff0080","accent":"#00ff9f","highlight":"#ffff00"},"typography":{"fontFamily":"Orbitron, monospace","fontMood":"futuristic"},"layout":{"borderRadius":"md","spacing":"compact","depth":"deep"},"visualStyle":{"illustrationType":"holographic","backgroundVisual":"particle-field","lightingStyle":"neon","materialStyle":"glossy","blurLevel":"heavy"},"motionDesign":{"animationStyle":"dynamic","motionIntensity":"high","scrollBehavior":"layered","hoverEffects":"morph"},"vfx":{"particleEffects":"rich","glowEffects":"strong","noiseTexture":"grain"}}

User: "Playful SaaS app with colorful 3D illustrations"
You: {"theme":"light","colorPalette":{"background":"#ffffff","foreground":"#2d3748","primary":"#7c3aed","accent":"#ec4899","highlight":"#f59e0b"},"typography":{"fontFamily":"DM Sans, sans-serif","fontMood":"playful"},"layout":{"borderRadius":"xl","spacing":"normal","depth":"soft"},"visualStyle":{"illustrationType":"cinematic-3d","backgroundVisual":"abstract-shapes","lightingStyle":"soft","materialStyle":"plastic","blurLevel":"none"},"motionDesign":{"animationStyle":"playful","motionIntensity":"medium","scrollBehavior":"static","hoverEffects":"lift"},"vfx":{"particleEffects":"subtle","glowEffects":"none","noiseTexture":"none"}}

User: "Apple-style product page with glassmorphism and smooth animations"
You: {"theme":"light","colorPalette":{"background":"#f5f5f7","foreground":"#1d1d1f","primary":"#0071e3","accent":"#bf5af2","highlight":"#f5a623"},"typography":{"fontFamily":"SF Pro Display, system-ui, sans-serif","fontMood":"modern"},"layout":{"borderRadius":"lg","spacing":"spacious","depth":"soft"},"visualStyle":{"illustrationType":"glassmorphism","backgroundVisual":"gradient","lightingStyle":"studio","materialStyle":"glass","blurLevel":"medium"},"motionDesign":{"animationStyle":"cinematic","motionIntensity":"low","scrollBehavior":"parallax","hoverEffects":"lift"},"vfx":{"particleEffects":"none","glowEffects":"soft","noiseTexture":"none"}}

CRITICAL: Return ONLY the JSON object. Interpret ANY prompt with a luxury/premium lens.`;

export async function POST(request: NextRequest) {
  try {
    const { prompt } = await request.json();

    if (!prompt || typeof prompt !== "string") {
      return NextResponse.json(
        { error: "Valid prompt is required" },
        { status: 400 }
      );
    }

    if (!process.env.OPENAI_API_KEY) {
      return NextResponse.json(
        { error: "API key not configured" },
        { status: 500 }
      );
    }

    // Call OpenAI API with JSON mode for structured output
    const completion = await openai.chat.completions.create({
      model: "gpt-4o",
      messages: [
        {
          role: "system",
          content: SYSTEM_PROMPT,
        },
        {
          role: "user",
          content: prompt,
        },
      ],
      response_format: { type: "json_object" },
      temperature: 0.7,
      max_tokens: 1500,
    });

    // Extract text response
    const responseText = completion.choices[0]?.message?.content || "";

    // Parse JSON response
    let tokens: Partial<DesignTokens>;
    try {
      tokens = JSON.parse(responseText.trim());

      // Add metadata
      tokens.themeMetadata = {
        themeID: crypto.randomUUID(),
        version: 1,
        timestamp: new Date().toISOString(),
        promptUsed: prompt,
      };
    } catch (parseError) {
      console.error("Failed to parse AI response:", responseText);
      return NextResponse.json(
        { error: "AI returned invalid design tokens" },
        { status: 500 }
      );
    }

    // Validate structure
    if (
      !tokens.theme ||
      !tokens.colorPalette ||
      !tokens.typography ||
      !tokens.layout ||
      !tokens.visualStyle ||
      !tokens.motionDesign ||
      !tokens.vfx
    ) {
      console.error("Incomplete design tokens:", tokens);
      return NextResponse.json(
        { error: "AI returned incomplete design tokens" },
        { status: 500 }
      );
    }

    return NextResponse.json({ tokens });
  } catch (error) {
    console.error("Design API error:", error);

    let errorMessage = "Failed to generate design";
    if (error instanceof Error) {
      errorMessage = error.message;
      console.error("Error details:", {
        message: error.message,
        stack: error.stack,
      });
    }

    return NextResponse.json(
      { error: errorMessage },
      { status: 500 }
    );
  }
}
