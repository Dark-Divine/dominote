"use client";

import { HeroUIProvider } from "@heroui/react";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { useRouter } from "next/navigation";

export function Providers({ children }: { children: React.ReactNode }) {
  const router = useRouter();

  return (
    <HeroUIProvider navigate={router.push} className={`h-full`}>
      <NextThemesProvider defaultTheme="dark">{children}</NextThemesProvider>
    </HeroUIProvider>
  );
}
