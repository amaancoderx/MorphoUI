/**
 * Root Layout
 * Wraps the entire app with DesignProvider for global design token management
 */

import type { Metadata } from "next";
import { DesignProvider } from "@/components/DesignProvider";
import "./globals.css";
import "./globals-extended.css";
import "./globals-cinematic.css";

export const metadata: Metadata = {
  title: "MorphoUI - AI Design System",
  description: "Transform any design prompt into premium 3D & cinematic visuals with AI",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body suppressHydrationWarning>
        <DesignProvider>{children}</DesignProvider>
      </body>
    </html>
  );
}
