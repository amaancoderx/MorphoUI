"use client";

/**
 * ThemeLoader - Loads themes from URL parameters on mount
 * Enables shareable theme URLs
 */

import { useEffect } from "react";
import { useDesignStore } from "@/lib/design-store";
import { loadThemeFromURL } from "@/lib/theme-loader";

export function ThemeLoader() {
  const { setTokens } = useDesignStore();

  useEffect(() => {
    // Try to load theme from URL on mount
    const urlTheme = loadThemeFromURL();
    if (urlTheme) {
      setTokens(urlTheme);
      console.log("Loaded theme from URL:", urlTheme.themeMetadata?.themeID);
    }
  }, [setTokens]);

  return null; // This component doesn't render anything
}
