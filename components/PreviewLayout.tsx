"use client";

/**
 * PreviewLayout - Demonstrates design tokens in action
 * 3D & Cinematic Edition - Shows premium visual elements
 */

import { useDesignStore } from "@/lib/design-store";
import { ShareTheme } from "@/components/ShareTheme";

export function PreviewLayout() {
  const { tokens } = useDesignStore();

  return (
    <div className="w-full max-w-4xl mx-auto space-y-8">
      {/* Header Section */}
      <div className="text-center space-y-4">
        <h1
          className="text-5xl font-bold transition-all motion-element"
          style={{
            color: "var(--text-color)",
            transitionDuration: "var(--animation-duration)",
          }}
        >
          AI-Designed Website
        </h1>
        <p
          className="text-xl opacity-70 transition-all motion-element"
          style={{
            color: "var(--text-color)",
            transitionDuration: "var(--animation-duration)",
          }}
        >
          Watch this page transform with 3D visuals, cinematic motion, and premium aesthetics
        </p>
      </div>

      {/* Card Grid with Motion Elements */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {[
          { title: "3D Design", desc: "Premium visual effects" },
          { title: "Cinematic Motion", desc: "Smooth animations" },
          { title: "Interactive UI", desc: "Responsive elements" }
        ].map((feature, idx) => (
          <div
            key={idx}
            className="p-6 transition-all motion-element"
            style={{
              border: `2px solid ${idx === 1 ? "var(--accent-color)" : "var(--primary-color)"}`,
              borderRadius: "var(--border-radius)",
              padding: "var(--spacing)",
              transitionDuration: "var(--animation-duration)",
              boxShadow: tokens.layout.depth !== "flat" ? `0 ${tokens.layout.depth} ${tokens.layout.depth} rgba(0,0,0,0.1)` : "none",
            }}
          >
            <h3
              className="text-xl font-semibold mb-3 transition-all"
              style={{
                color: idx === 1 ? "var(--accent-color)" : "var(--primary-color)",
                transitionDuration: "var(--animation-duration)",
              }}
            >
              {feature.title}
            </h3>
            <p
              className="opacity-80 transition-all"
              style={{
                color: "var(--text-color)",
                transitionDuration: "var(--animation-duration)",
              }}
            >
              {feature.desc}
            </p>
          </div>
        ))}
      </div>

      {/* Share Theme Component */}
      <ShareTheme />

      {/* Design Token Display */}
      <div
        className="p-6 transition-all"
        style={{
          border: `1px solid var(--primary-color)`,
          borderRadius: "var(--border-radius)",
          backgroundColor: tokens.theme === "dark" ? "rgba(255,255,255,0.05)" : "rgba(0,0,0,0.02)",
          transitionDuration: "var(--animation-duration)",
        }}
      >
        <h3
          className="text-lg font-semibold mb-4"
          style={{ color: "var(--primary-color)" }}
        >
          Current Design System
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
          <div>
            <h4 className="font-semibold mb-2" style={{ color: "var(--accent-color)" }}>Colors</h4>
            <div className="space-y-1 opacity-70" style={{ color: "var(--text-color)" }}>
              <div>Primary: {tokens.colorPalette.primary}</div>
              <div>Accent: {tokens.colorPalette.accent}</div>
              <div>Highlight: {tokens.colorPalette.highlight}</div>
            </div>
          </div>
          <div>
            <h4 className="font-semibold mb-2" style={{ color: "var(--accent-color)" }}>Typography</h4>
            <div className="space-y-1 opacity-70" style={{ color: "var(--text-color)" }}>
              <div>Font: {tokens.typography.fontFamily.split(',')[0]}</div>
              <div>Mood: {tokens.typography.fontMood}</div>
            </div>
          </div>
          <div>
            <h4 className="font-semibold mb-2" style={{ color: "var(--accent-color)" }}>Visual Style</h4>
            <div className="space-y-1 opacity-70" style={{ color: "var(--text-color)" }}>
              <div>Illustration: {tokens.visualStyle.illustrationType}</div>
              <div>Lighting: {tokens.visualStyle.lightingStyle}</div>
              <div>Material: {tokens.visualStyle.materialStyle}</div>
            </div>
          </div>
          <div>
            <h4 className="font-semibold mb-2" style={{ color: "var(--accent-color)" }}>Motion Design</h4>
            <div className="space-y-1 opacity-70" style={{ color: "var(--text-color)" }}>
              <div>Style: {tokens.motionDesign.animationStyle}</div>
              <div>Intensity: {tokens.motionDesign.motionIntensity}</div>
              <div>Hover: {tokens.motionDesign.hoverEffects}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
