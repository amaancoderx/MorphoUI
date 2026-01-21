/**
 * Main Page - MorphoUI: AI Design System
 * 3D & Cinematic Edition
 */

import { PromptInput } from "@/components/PromptInput";
import { PreviewLayout } from "@/components/PreviewLayout";
import { ThemeLoader } from "@/components/ThemeLoader";
import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen py-12 px-6 transition-all" style={{ transitionDuration: "var(--animation-duration)" }}>
      <ThemeLoader />
      <div className="max-w-6xl mx-auto space-y-12">
        {/* Header */}
        <div className="text-center">
          <h1
            className="text-4xl md:text-5xl font-bold tracking-tight transition-all mb-6"
            style={{
              color: "var(--text-color)",
              transitionDuration: "var(--animation-duration)",
            }}
          >
            MorphoUI
          </h1>

          <h2
            className="text-5xl md:text-6xl font-extrabold tracking-tight transition-all"
            style={{
              color: "var(--text-color)",
              transitionDuration: "var(--animation-duration)",
            }}
          >
            Design with Words
          </h2>

          <p
            className="text-xl md:text-2xl max-w-3xl mx-auto opacity-80 transition-all mt-6"
            style={{
              color: "var(--text-color)",
              transitionDuration: "var(--animation-duration)",
            }}
          >
            Transform ANY design prompt into premium 3D visuals, cinematic motion, glassmorphism, holographic effects,
            and professional aesthetics. No code, instant results.
          </p>
        </div>

        {/* Prompt Input */}
        <div className="pt-8">
          <PromptInput />
        </div>

        {/* Preview Layout */}
        <PreviewLayout />

        {/* Footer */}
        <div className="text-center pt-12">
          <Link
            href="/prompts"
            className="text-lg font-medium transition-all hover:opacity-70"
            style={{
              color: "var(--primary-color)",
              transitionDuration: "var(--animation-duration)",
            }}
          >
            View Suggested Prompts →
          </Link>
        </div>
      </div>
    </main>
  );
}
