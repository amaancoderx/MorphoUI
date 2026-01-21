/**
 * Design token type definitions - 3D & Cinematic Edition
 * Premium visual system with nested structure for professional design systems
 */

// Base types
export type Theme = "light" | "dark" | "auto" | "custom";
export type BorderRadius = "sm" | "md" | "lg" | "xl";
export type Spacing = "compact" | "normal" | "spacious";
export type Depth = "flat" | "soft" | "deep";

// Typography
export type FontMood = "modern" | "elegant" | "futuristic" | "playful" | "cinematic";

// Visual Style
export type IllustrationType = "none" | "abstract-3d" | "gradient-3d" | "cinematic-3d" | "glassmorphism" | "holographic";
export type BackgroundVisual = "solid" | "gradient" | "abstract-shapes" | "3d-scene" | "particle-field";
export type LightingStyle = "soft" | "dramatic" | "neon" | "studio" | "cinematic";
export type MaterialStyle = "matte" | "glossy" | "glass" | "metallic" | "plastic";
export type BlurLevel = "none" | "subtle" | "medium" | "heavy";

// Motion Design
export type AnimationStyle = "none" | "smooth" | "cinematic" | "dynamic" | "playful";
export type MotionIntensity = "low" | "medium" | "high";
export type ScrollBehavior = "static" | "parallax" | "layered" | "immersive";
export type HoverEffects = "none" | "glow" | "lift" | "morph";

// VFX
export type ParticleEffects = "none" | "subtle" | "ambient" | "rich";
export type GlowEffects = "none" | "soft" | "strong";
export type NoiseTexture = "none" | "film" | "grain";

// Color Palette
export interface ColorPalette {
  background: string;
  foreground: string;
  primary: string;
  accent: string;
  highlight: string;
}

// Typography
export interface Typography {
  fontFamily: string;
  fontMood: FontMood;
}

// Layout
export interface Layout {
  borderRadius: BorderRadius;
  spacing: Spacing;
  depth: Depth;
}

// Visual Style
export interface VisualStyle {
  illustrationType: IllustrationType;
  backgroundVisual: BackgroundVisual;
  lightingStyle: LightingStyle;
  materialStyle: MaterialStyle;
  blurLevel: BlurLevel;
}

// Motion Design
export interface MotionDesign {
  animationStyle: AnimationStyle;
  motionIntensity: MotionIntensity;
  scrollBehavior: ScrollBehavior;
  hoverEffects: HoverEffects;
}

// VFX
export interface VFX {
  particleEffects: ParticleEffects;
  glowEffects: GlowEffects;
  noiseTexture: NoiseTexture;
}

// Theme Metadata
export interface ThemeMetadata {
  themeID: string;
  version: number;
  timestamp: string;
  promptUsed?: string;
}

// Main Design Tokens Interface
export interface DesignTokens {
  theme: Theme;
  colorPalette: ColorPalette;
  typography: Typography;
  layout: Layout;
  visualStyle: VisualStyle;
  motionDesign: MotionDesign;
  vfx: VFX;
  themeMetadata: ThemeMetadata;
}

// Default tokens
export const defaultDesignTokens: DesignTokens = {
  theme: "light",
  colorPalette: {
    background: "#ffffff",
    foreground: "#1f2937",
    primary: "#3b82f6",
    accent: "#8b5cf6",
    highlight: "#f59e0b",
  },
  typography: {
    fontFamily: "Inter, system-ui, sans-serif",
    fontMood: "modern",
  },
  layout: {
    borderRadius: "md",
    spacing: "normal",
    depth: "soft",
  },
  visualStyle: {
    illustrationType: "none",
    backgroundVisual: "solid",
    lightingStyle: "soft",
    materialStyle: "matte",
    blurLevel: "none",
  },
  motionDesign: {
    animationStyle: "smooth",
    motionIntensity: "medium",
    scrollBehavior: "static",
    hoverEffects: "none",
  },
  vfx: {
    particleEffects: "none",
    glowEffects: "none",
    noiseTexture: "none",
  },
  themeMetadata: {
    themeID: crypto.randomUUID(),
    version: 1,
    timestamp: new Date().toISOString(),
  },
};
