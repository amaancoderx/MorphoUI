"use client";

/**
 * PreviewLayout - Demonstrates design tokens in action
 * Card-based grid design with badges and hover effects
 */

import { useDesignStore } from "@/lib/design-store";
import { ShareTheme } from "@/components/ShareTheme";

export function PreviewLayout() {
  const { tokens } = useDesignStore();

  const demoCards = [
    {
      title: "PRODUCT ALPHA",
      desc: "A revolutionary platform that transformed how users interact with digital experiences through innovative design patterns.",
      year: "2023",
      badge: "$2.5M",
      category: "FINTECH",
      metrics: { rebuild: 5, scale: 7, market: 6 }
    },
    {
      title: "BETA SERVICES",
      desc: "An enterprise solution designed to streamline workflows and boost productivity across distributed teams.",
      year: "2022",
      badge: "$1.8M",
      category: "ON-DEMAND",
      metrics: { rebuild: 4, scale: 8, market: 5 }
    },
    {
      title: "GAMMA TECH",
      desc: "A cutting-edge technology platform that pioneered new approaches to automation and machine learning.",
      year: "2024",
      badge: "$3.2M",
      category: "E-COMMERCE",
      metrics: { rebuild: 6, scale: 6, market: 7 }
    },
    {
      title: "DELTA INNOVATIONS",
      desc: "A startup focused on delivering next-generation solutions for modern business challenges.",
      year: "2023",
      badge: "$1.2M",
      category: "SOCIAL",
      metrics: { rebuild: 3, scale: 5, market: 4 }
    },
    {
      title: "EPSILON LABS",
      desc: "A research-driven company that explored emerging technologies and their practical applications.",
      year: "2022",
      badge: "$2.1M",
      category: "CRYPTO",
      metrics: { rebuild: 7, scale: 4, market: 8 }
    },
    {
      title: "ZETA SYSTEMS",
      desc: "A comprehensive platform that integrated multiple services into a unified user experience.",
      year: "2024",
      badge: "$1.5M",
      category: "MEDIA",
      metrics: { rebuild: 5, scale: 6, market: 5 }
    }
  ];

  return (
    <div className="w-full max-w-6xl mx-auto space-y-8">
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
          Watch this page transform with card grids, badges, and interactive hover effects
        </p>
      </div>

      {/* Card Grid - Startup Graveyard Style */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {demoCards.map((card, idx) => (
          <div
            key={idx}
            className="group relative p-6 transition-all duration-300 hover:shadow-2xl motion-element"
            style={{
              border: `2px solid var(--primary-color)`,
              borderRadius: "var(--border-radius)",
              backgroundColor: "transparent",
              transitionDuration: "var(--animation-duration)",
              cursor: "pointer",
            }}
          >
            {/* Header with Title and Year */}
            <div className="flex justify-between items-start mb-4">
              <h3
                className="text-xl font-bold tracking-tight transition-all"
                style={{
                  color: "var(--text-color)",
                  transitionDuration: "var(--animation-duration)",
                }}
              >
                {card.title}
              </h3>
              <span
                className="text-sm opacity-60"
                style={{ color: "var(--text-color)" }}
              >
                {card.year}
              </span>
            </div>

            {/* Description */}
            <p
              className="text-sm opacity-70 mb-6 transition-all line-clamp-3"
              style={{
                color: "var(--text-color)",
                transitionDuration: "var(--animation-duration)",
              }}
            >
              {card.desc}
            </p>

            {/* Badges Container */}
            <div className="flex gap-3 items-center">
              {/* Money Badge */}
              <span
                className="px-3 py-1.5 text-sm font-bold border-2 transition-all"
                style={{
                  borderColor: "var(--highlight-color)",
                  color: "var(--highlight-color)",
                  borderRadius: "var(--border-radius)",
                  transitionDuration: "var(--animation-duration)",
                }}
              >
                {card.badge}
              </span>

              {/* Category Badge */}
              <span
                className="px-3 py-1.5 text-xs font-bold transition-all"
                style={{
                  backgroundColor: "var(--text-color)",
                  color: "var(--background-color)",
                  borderRadius: "var(--border-radius)",
                  transitionDuration: "var(--animation-duration)",
                }}
              >
                {card.category}
              </span>
            </div>

            {/* Hover State - Metrics */}
            <div
              className="absolute inset-0 p-6 flex flex-col justify-center items-center opacity-0 group-hover:opacity-100 transition-all duration-300"
              style={{
                backgroundColor: "var(--background-color)",
                borderRadius: "var(--border-radius)",
                border: `2px solid var(--accent-color)`,
              }}
            >
              <div className="text-center space-y-3 w-full">
                <p
                  className="text-xs font-semibold tracking-wider uppercase opacity-60"
                  style={{ color: "var(--text-color)" }}
                >
                  HOVER FOR DETAILS
                </p>

                <div className="flex justify-around items-center gap-4">
                  {/* Rebuild Score */}
                  <div className="flex items-center gap-2">
                    <span className="text-xs opacity-60" style={{ color: "var(--text-color)" }}>REBUILD</span>
                    <div className="flex gap-0.5">
                      {Array.from({ length: 10 }).map((_, i) => (
                        <div
                          key={i}
                          className="w-1.5 h-6"
                          style={{
                            backgroundColor: i < card.metrics.rebuild ? "var(--highlight-color)" : "rgba(128,128,128,0.2)",
                          }}
                        />
                      ))}
                    </div>
                  </div>
                </div>

                <div className="flex justify-around items-center gap-4">
                  {/* Scale Score */}
                  <div className="flex items-center gap-2">
                    <span className="text-xs opacity-60" style={{ color: "var(--text-color)" }}>SCALE</span>
                    <div className="flex gap-0.5">
                      {Array.from({ length: 10 }).map((_, i) => (
                        <div
                          key={i}
                          className="w-1.5 h-6"
                          style={{
                            backgroundColor: i < card.metrics.scale ? "var(--primary-color)" : "rgba(128,128,128,0.2)",
                          }}
                        />
                      ))}
                    </div>
                  </div>
                </div>

                <div className="flex justify-around items-center gap-4">
                  {/* Market Score */}
                  <div className="flex items-center gap-2">
                    <span className="text-xs opacity-60" style={{ color: "var(--text-color)" }}>MARKET</span>
                    <div className="flex gap-0.5">
                      {Array.from({ length: 10 }).map((_, i) => (
                        <div
                          key={i}
                          className="w-1.5 h-6"
                          style={{
                            backgroundColor: i < card.metrics.market ? "var(--accent-color)" : "rgba(128,128,128,0.2)",
                          }}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
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
