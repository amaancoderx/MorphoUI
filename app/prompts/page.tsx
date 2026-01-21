"use client";

/**
 * Prompts Page - Suggested design prompts
 */

import Link from "next/link";
import { useState } from "react";
import { useDesignStore } from "@/lib/design-store";
import { useRouter } from "next/navigation";

const promptCategories = [
  {
    title: "3D & Glassmorphism",
    prompts: [
      "Apple-style product page with glassmorphism and smooth animations",
      "Futuristic tech startup with 3D floating elements and deep shadows",
      "Luxury brand website with abstract gradient art and studio lighting",
      "Modern SaaS with frosted glass cards and soft lighting",
      "Premium portfolio with abstract 3D shapes and elegant typography",
    ],
  },
  {
    title: "Holographic & Neon",
    prompts: [
      "Cyberpunk neon city dashboard with holographic effects and particles",
      "Holographic SaaS landing page with iridescent colors and glow effects",
      "Retro futuristic site with neon lighting and metallic materials",
      "Gaming platform with neon accents and dramatic lighting",
      "Tech conference site with holographic overlays and rich particles",
    ],
  },
  {
    title: "Cinematic Motion",
    prompts: [
      "Film studio portfolio with cinematic lighting and dramatic shadows",
      "Premium product showcase with immersive scroll and layered parallax",
      "Agency website with smooth cinematic transitions and lift hover effects",
      "Photography portfolio with studio lighting and elegant motion",
      "Creative studio with dynamic animations and deep depth effects",
    ],
  },
  {
    title: "Playful & Modern",
    prompts: [
      "Playful SaaS app with colorful 3D illustrations and plastic materials",
      "Modern startup with gradient 3D backgrounds and ambient particles",
      "Creative agency with abstract shapes and morph hover effects",
      "Designer portfolio with playful motion and vibrant colors",
      "Tech blog with modern typography and smooth animations",
    ],
  },
  {
    title: "Minimalist & Elegant",
    prompts: [
      "Minimalist portfolio with soft lighting and spacious layout",
      "Elegant luxury brand with matte materials and refined typography",
      "Professional consulting site with subtle depth and clean design",
      "Architecture firm with cinematic visuals and elegant spacing",
      "Fashion brand with sophisticated aesthetics and soft shadows",
    ],
  },
  {
    title: "Bold & Vibrant",
    prompts: [
      "Vibrant creative agency with strong glow effects and rich colors",
      "Bold startup with high-intensity motion and dynamic animations",
      "Colorful design studio with glossy materials and playful hover effects",
      "Music festival site with neon lighting and particle effects",
      "Art gallery with dramatic lighting and immersive visuals",
    ],
  },
];

export default function PromptsPage() {
  const [copiedPrompt, setCopiedPrompt] = useState<string | null>(null);
  const { setIsUpdating } = useDesignStore();
  const router = useRouter();

  const handlePromptClick = async (prompt: string) => {
    setCopiedPrompt(prompt);
    setTimeout(() => setCopiedPrompt(null), 2000);

    // Trigger design generation
    setIsUpdating(true);
    try {
      const response = await fetch("/api/design", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ prompt }),
      });

      if (response.ok) {
        const { tokens } = await response.json();
        useDesignStore.getState().setTokens(tokens);
        router.push("/");
      }
    } catch (error) {
      console.error("Failed to generate design:", error);
    } finally {
      setIsUpdating(false);
    }
  };

  return (
    <main className="min-h-screen py-12 px-6 transition-all" style={{ transitionDuration: "var(--animation-duration)" }}>
      <div className="max-w-6xl mx-auto space-y-12">
        {/* Header */}
        <div className="text-center space-y-4">
          <Link
            href="/"
            className="inline-block text-2xl font-bold transition-all hover:opacity-70 mb-4"
            style={{
              color: "var(--text-color)",
              transitionDuration: "var(--animation-duration)",
            }}
          >
            MorphoUI
          </Link>

          <h1
            className="text-4xl md:text-5xl font-bold transition-all"
            style={{
              color: "var(--text-color)",
              transitionDuration: "var(--animation-duration)",
            }}
          >
            Suggested Prompts
          </h1>

          <p
            className="text-lg opacity-70 transition-all"
            style={{
              color: "var(--text-color)",
              transitionDuration: "var(--animation-duration)",
            }}
          >
            Click any prompt to instantly apply the design
          </p>
        </div>

        {/* Prompts Grid */}
        <div className="space-y-12">
          {promptCategories.map((category, categoryIdx) => (
            <div key={categoryIdx}>
              <h2
                className="text-2xl font-bold mb-6 transition-all"
                style={{
                  color: "var(--primary-color)",
                  transitionDuration: "var(--animation-duration)",
                }}
              >
                {category.title}
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {category.prompts.map((prompt, promptIdx) => (
                  <button
                    key={promptIdx}
                    onClick={() => handlePromptClick(prompt)}
                    className="text-left p-4 rounded-lg transition-all hover:scale-105 cursor-pointer"
                    style={{
                      border: `2px solid ${copiedPrompt === prompt ? "var(--highlight-color)" : "var(--primary-color)"}`,
                      borderRadius: "var(--border-radius)",
                      backgroundColor: copiedPrompt === prompt
                        ? "var(--primary-color)"
                        : "transparent",
                      color: copiedPrompt === prompt
                        ? "#ffffff"
                        : "var(--text-color)",
                      transitionDuration: "var(--animation-duration)",
                    }}
                  >
                    <span className="text-sm">
                      {copiedPrompt === prompt ? "✓ Applying..." : prompt}
                    </span>
                  </button>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Pro Tips */}
        <div
          className="p-8 rounded-2xl transition-all"
          style={{
            border: `1px solid var(--primary-color)`,
            borderRadius: "var(--border-radius)",
            backgroundColor: "var(--bg-color)",
            transitionDuration: "var(--animation-duration)",
          }}
        >
          <h3
            className="text-xl font-bold mb-4"
            style={{ color: "var(--accent-color)" }}
          >
            💡 Pro Tips for Custom Prompts
          </h3>
          <ul className="space-y-3 text-sm" style={{ color: "var(--text-color)", opacity: 0.8 }}>
            <li>
              <strong>Mention materials:</strong> glass, metallic, glossy, matte, plastic
            </li>
            <li>
              <strong>Specify lighting:</strong> soft, dramatic, neon, studio, cinematic
            </li>
            <li>
              <strong>Add motion:</strong> smooth, cinematic, dynamic, playful
            </li>
            <li>
              <strong>Include VFX:</strong> particles, glow effects, holographic, abstract shapes
            </li>
            <li>
              <strong>Reference brands:</strong> Apple-style, luxury brand, modern SaaS
            </li>
            <li>
              <strong>Combine concepts:</strong> "3D + glassmorphism + cinematic motion"
            </li>
          </ul>
        </div>

        {/* Back Link */}
        <div className="text-center">
          <Link
            href="/"
            className="text-lg font-medium transition-all hover:opacity-70"
            style={{
              color: "var(--primary-color)",
              transitionDuration: "var(--animation-duration)",
            }}
          >
            ← Back to Home
          </Link>
        </div>
      </div>
    </main>
  );
}
