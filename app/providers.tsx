"use client";
import { HeroUIProvider } from "@heroui/react";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { UIProvider } from "@/contexts/UIContext";
import { useRouter } from "next/navigation";

export function Providers({ children }: { children: React.ReactNode }) {
  const router = useRouter()
  return (
    <HeroUIProvider navigate={router.push} className="flex flex-col grow">
      <NextThemesProvider
        attribute="class"
        defaultTheme="purple"
        themes={[
          "red",
          "amber",
          "orange",
          "yellow",
          "lime",
          "green",
          "emerald",
          "teal",
          "cyan",
          "sky",
          "blue",
          "indigo",
          "violet",
          "purple",
          "fuchsia",
          "pink",
          "rose",
        ]}
      >
        <UIProvider>{children}</UIProvider>
      </NextThemesProvider>
    </HeroUIProvider>
  );
}
