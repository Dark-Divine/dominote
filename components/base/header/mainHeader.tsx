"use client";

import { SolarLogin2Linear } from "@/components/icons/SolarLogin2Linear";
import { Button } from "@heroui/react";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

export default function MainHeader() {
  const router = useRouter();
  const path = usePathname();

  return (
    <header className="border-b-1 border-zinc-200 dark:border-zinc-800 w-full py-2 h-16">
      <div className="container mx-auto w-full flex justify-between">
        <Link href="/" className="flex items-center gap-2">
          <div className="w-11 h-11">
            <Image
              src="/dominote-logo.png"
              width={64}
              height={64}
              alt="Dominote"
              className="w-full h-full invert dark:invert-0"
            />
          </div>
          <h1 className="text-2xl font-semibold text-zinc-800 dark:text-zinc-200">
            Dominote
          </h1>
        </Link>
        <div></div>
        <div className="flex gap-2 items-center">
          {path !== "/auth" && (
            <Button
              type="button"
              onPress={() => router.push("/board")}
              color="primary"
              radius="sm"
              className="gap-1"
            >
              Login | Register
              <SolarLogin2Linear className="w-5 h-5" />
            </Button>
          )}
        </div>
      </div>
    </header>
  );
}
