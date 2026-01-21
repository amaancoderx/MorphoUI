"use client";

/**
 * PromptInput - Natural language input for design modifications
 * Sends user prompt to AI and updates design tokens live
 */

import { useState } from "react";
import { useDesignStore } from "@/lib/design-store";

export function PromptInput() {
  const [prompt, setPrompt] = useState("");
  const [error, setError] = useState("");
  const { setTokens, setIsUpdating, isUpdating } = useDesignStore();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!prompt.trim() || isUpdating) return;

    setError("");
    setIsUpdating(true);

    try {
      const response = await fetch("/api/design", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ prompt }),
      });

      const data = await response.json();

      if (!response.ok) {
        // Show the actual error from the API
        throw new Error(data.error || "Failed to generate design");
      }

      // Apply new design tokens immediately
      setTokens(data.tokens);
      setPrompt("");
    } catch (err) {
      console.error("Error generating design:", err);
      setError(err instanceof Error ? err.message : "Something went wrong");
    } finally {
      setIsUpdating(false);
    }
  };

  return (
    <div className="w-full max-w-2xl mx-auto">
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="relative">
          <input
            type="text"
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
            placeholder="Describe your design... (e.g., 'dark, minimal, Apple-like')"
            disabled={isUpdating}
            className="w-full px-6 py-4 text-lg border-2 transition-all disabled:opacity-50"
            style={{
              borderColor: "var(--primary-color)",
              borderRadius: "var(--border-radius)",
              backgroundColor: "var(--bg-color)",
              color: "var(--text-color)",
              transitionDuration: "var(--animation-duration)",
            }}
          />
        </div>

        <button
          type="submit"
          disabled={!prompt.trim() || isUpdating}
          className="w-full px-6 py-4 text-lg font-semibold transition-all disabled:opacity-50 disabled:cursor-not-allowed"
          style={{
            backgroundColor: "var(--primary-color)",
            color: "#ffffff",
            borderRadius: "var(--border-radius)",
            transitionDuration: "var(--animation-duration)",
          }}
        >
          {isUpdating ? "Generating design..." : "Apply Design"}
        </button>
      </form>

      {error && (
        <div
          className="mt-4 p-4 border-2 border-red-500 text-red-600"
          style={{ borderRadius: "var(--border-radius)" }}
        >
          {error}
        </div>
      )}
    </div>
  );
}
