"use client";

/**
 * DesignProvider - Core component that applies design tokens as CSS variables
 * 3D & Cinematic Edition - Handles nested design token structure
 */

import { useEffect } from "react";
import { useDesignStore } from "@/lib/design-store";
import {
  BorderRadius,
  Spacing,
  Depth,
  AnimationStyle,
  MotionIntensity,
  ScrollBehavior,
  HoverEffects,
  IllustrationType,
  BackgroundVisual,
  LightingStyle,
  MaterialStyle,
  BlurLevel,
  ParticleEffects,
  GlowEffects,
  NoiseTexture,
  FontMood,
} from "@/types/design";

// CSS variable mappings
const borderRadiusMap: Record<BorderRadius, string> = {
  sm: "0.25rem",
  md: "0.5rem",
  lg: "1rem",
  xl: "1.5rem",
};

const spacingMap: Record<Spacing, string> = {
  compact: "0.75rem",
  normal: "1rem",
  spacious: "1.5rem",
};

const depthMap: Record<Depth, string> = {
  flat: "0",
  soft: "4px",
  deep: "12px",
};

const animationMap: Record<AnimationStyle, string> = {
  none: "0ms",
  smooth: "300ms",
  cinematic: "800ms",
  dynamic: "200ms",
  playful: "500ms",
};

const motionIntensityMap: Record<MotionIntensity, string> = {
  low: "0.5",
  medium: "1",
  high: "1.5",
};

const blurLevelMap: Record<BlurLevel, string> = {
  none: "0px",
  subtle: "8px",
  medium: "16px",
  heavy: "32px",
};

export function DesignProvider({ children }: { children: React.ReactNode }) {
  const { tokens } = useDesignStore();

  useEffect(() => {
    if (!tokens) return;

    const root = document.documentElement;

    // Color Palette
    root.style.setProperty("--bg-color", tokens.colorPalette.background);
    root.style.setProperty("--text-color", tokens.colorPalette.foreground);
    root.style.setProperty("--primary-color", tokens.colorPalette.primary);
    root.style.setProperty("--accent-color", tokens.colorPalette.accent);
    root.style.setProperty("--highlight-color", tokens.colorPalette.highlight);

    // Typography
    root.style.setProperty("--font-family", tokens.typography.fontFamily);
    root.setAttribute("data-font-mood", tokens.typography.fontMood);

    // Layout
    root.style.setProperty("--border-radius", borderRadiusMap[tokens.layout.borderRadius]);
    root.style.setProperty("--spacing", spacingMap[tokens.layout.spacing]);
    root.style.setProperty("--depth", depthMap[tokens.layout.depth]);

    // Motion Design
    root.style.setProperty("--animation-duration", animationMap[tokens.motionDesign.animationStyle]);
    root.style.setProperty("--motion-intensity", motionIntensityMap[tokens.motionDesign.motionIntensity]);
    root.setAttribute("data-animation-style", tokens.motionDesign.animationStyle);
    root.setAttribute("data-scroll-behavior", tokens.motionDesign.scrollBehavior);
    root.setAttribute("data-hover-effects", tokens.motionDesign.hoverEffects);

    // Visual Style
    root.setAttribute("data-illustration-type", tokens.visualStyle.illustrationType);
    root.setAttribute("data-background-visual", tokens.visualStyle.backgroundVisual);
    root.setAttribute("data-lighting-style", tokens.visualStyle.lightingStyle);
    root.setAttribute("data-material-style", tokens.visualStyle.materialStyle);
    root.style.setProperty("--blur-level", blurLevelMap[tokens.visualStyle.blurLevel]);

    // VFX
    root.setAttribute("data-particle-effects", tokens.vfx.particleEffects);
    root.setAttribute("data-glow-effects", tokens.vfx.glowEffects);
    root.setAttribute("data-noise-texture", tokens.vfx.noiseTexture);

    // Theme class
    root.classList.remove("light", "dark", "auto", "custom");
    root.classList.add(tokens.theme);

    // Apply illustration type classes
    root.classList.remove(
      "illustration-none",
      "illustration-abstract-3d",
      "illustration-gradient-3d",
      "illustration-cinematic-3d",
      "illustration-glassmorphism",
      "illustration-holographic"
    );
    root.classList.add(`illustration-${tokens.visualStyle.illustrationType}`);

    // Apply animation style classes
    root.classList.remove("animation-none", "animation-smooth", "animation-cinematic", "animation-dynamic", "animation-playful");
    root.classList.add(`animation-${tokens.motionDesign.animationStyle}`);

    // Apply scroll behavior classes
    root.classList.remove("scroll-static", "scroll-parallax", "scroll-layered", "scroll-immersive");
    root.classList.add(`scroll-${tokens.motionDesign.scrollBehavior}`);
  }, [tokens]);

  return (
    <div
      className="min-h-screen transition-all"
      style={{
        backgroundColor: "var(--bg-color)",
        color: "var(--text-color)",
        fontFamily: "var(--font-family)",
        transitionDuration: "var(--animation-duration)",
      }}
    >
      {children}
    </div>
  );
}
