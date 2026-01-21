/**
 * Theme Loader Utility
 * Handles loading themes from URL parameters or JSON files
 */

import { DesignTokens } from "@/types/design";

/**
 * Load theme from URL query parameter
 * Example: ?theme=base64encodedJSON
 */
export function loadThemeFromURL(): DesignTokens | null {
  if (typeof window === "undefined") return null;

  const params = new URLSearchParams(window.location.search);
  const themeParam = params.get("theme");

  if (!themeParam) return null;

  try {
    const decoded = atob(themeParam);
    const tokens = JSON.parse(decoded) as DesignTokens;

    // Validate it has required fields
    if (tokens.theme && tokens.colorPalette && tokens.typography) {
      return tokens;
    }
    return null;
  } catch (error) {
    console.error("Failed to load theme from URL:", error);
    return null;
  }
}

/**
 * Generate shareable URL for current theme
 */
export function generateShareableURL(tokens: DesignTokens): string {
  const encoded = btoa(JSON.stringify(tokens));
  return `${window.location.origin}${window.location.pathname}?theme=${encoded}`;
}

/**
 * Parse theme from uploaded JSON file
 */
export async function loadThemeFromFile(file: File): Promise<DesignTokens | null> {
  try {
    const text = await file.text();
    const tokens = JSON.parse(text) as DesignTokens;

    // Validate required fields
    if (tokens.theme && tokens.colorPalette && tokens.typography) {
      return tokens;
    }
    return null;
  } catch (error) {
    console.error("Failed to load theme from file:", error);
    return null;
  }
}

/**
 * Create a remix of an existing theme (increments version)
 */
export function remixTheme(originalTokens: DesignTokens, newPrompt: string): Partial<DesignTokens> {
  return {
    themeMetadata: {
      themeID: crypto.randomUUID(),
      timestamp: new Date().toISOString(),
      version: (originalTokens.themeMetadata?.version || 1) + 1,
      promptUsed: newPrompt,
    },
  };
}
