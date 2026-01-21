/**
 * Design token store using Zustand
 * Manages global design state and provides smooth updates
 */

import { create } from "zustand";
import { DesignTokens, defaultDesignTokens } from "@/types/design";

interface DesignStore {
  tokens: DesignTokens;
  isUpdating: boolean;
  setTokens: (tokens: DesignTokens) => void;
  setIsUpdating: (isUpdating: boolean) => void;
}

export const useDesignStore = create<DesignStore>((set) => ({
  tokens: defaultDesignTokens,
  isUpdating: false,
  setTokens: (tokens) => set({ tokens }),
  setIsUpdating: (isUpdating) => set({ isUpdating }),
}));
