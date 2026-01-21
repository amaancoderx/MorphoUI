"use client";

/**
 * ShareTheme - Export and share design tokens
 * Allows users to copy theme JSON, generate shareable URLs, or download as file
 */

import { useState } from "react";
import { useDesignStore } from "@/lib/design-store";

export function ShareTheme() {
  const { tokens } = useDesignStore();
  const [copied, setCopied] = useState(false);

  const handleCopyJSON = () => {
    const json = JSON.stringify(tokens, null, 2);
    navigator.clipboard.writeText(json);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleCopyURL = () => {
    const encoded = btoa(JSON.stringify(tokens));
    const url = `${window.location.origin}?theme=${encoded}`;
    navigator.clipboard.writeText(url);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleDownload = () => {
    const json = JSON.stringify(tokens, null, 2);
    const blob = new Blob([json], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `theme-${tokens.themeID || "custom"}.json`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  return (
    <div
      className="p-6 border-2 transition-all"
      style={{
        borderColor: "var(--primary-color)",
        borderRadius: "var(--border-radius)",
        transitionDuration: "var(--animation-duration)",
      }}
    >
      <h3
        className="text-lg font-semibold mb-4"
        style={{ color: "var(--primary-color)" }}
      >
        📤 Share & Remix This Theme
      </h3>

      <div className="space-y-3">
        <button
          onClick={handleCopyJSON}
          className="w-full px-4 py-3 text-sm font-medium transition-all"
          style={{
            backgroundColor: "var(--primary-color)",
            color: "#ffffff",
            borderRadius: "var(--border-radius)",
            transitionDuration: "var(--animation-duration)",
          }}
        >
          {copied ? "✓ Copied!" : "Copy JSON"}
        </button>

        <button
          onClick={handleCopyURL}
          className="w-full px-4 py-3 text-sm font-medium transition-all"
          style={{
            backgroundColor: "var(--accent-color)",
            color: "#ffffff",
            borderRadius: "var(--border-radius)",
            transitionDuration: "var(--animation-duration)",
          }}
        >
          {copied ? "✓ Copied!" : "Copy Shareable URL"}
        </button>

        <button
          onClick={handleDownload}
          className="w-full px-4 py-3 text-sm font-medium border-2 transition-all"
          style={{
            borderColor: "var(--primary-color)",
            color: "var(--primary-color)",
            backgroundColor: "transparent",
            borderRadius: "var(--border-radius)",
            transitionDuration: "var(--animation-duration)",
          }}
        >
          💾 Download JSON
        </button>
      </div>

      {tokens.themeID && (
        <div className="mt-4 p-3 rounded text-xs opacity-70" style={{ backgroundColor: "rgba(0,0,0,0.05)" }}>
          <div><strong>Theme ID:</strong> {tokens.themeID}</div>
          {tokens.timestamp && <div><strong>Created:</strong> {new Date(tokens.timestamp).toLocaleString()}</div>}
          {tokens.version && <div><strong>Version:</strong> {tokens.version}</div>}
        </div>
      )}
    </div>
  );
}
