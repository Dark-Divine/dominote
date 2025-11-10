"use client";

import { Button } from "@heroui/react";
import React, { useEffect } from "react";
import { SolarRocket2BoldDuotone } from "../icons/SolarRocket2BoldDuotone";
import { useRouter } from "next/navigation";
import MainHeader from "../base/header/mainHeader";

export default function HomeComponent() {
  const router = useRouter();

  return (
    <div className="h-full px-2">
      <MainHeader />
      <main className="flex flex-col items-center justify-center gap-6 w-screen container mx-auto overflow-hidden text-neutral-800 main-home h-full -mt-16">
        <p className="font-medium text-4xl dark:text-white">
          One workspace for all
        </p>
        <p className="text-md text-center dark:text-zinc-400">
          Dominote is a modern management and planning platform that helps you
          <br />
          better plan and manage projects.
        </p>
        <Button
          onPress={() => router.push("/dashboard")}
          color="primary"
          size="lg"
          radius="sm"
          className="font-semibold"
        >
          Let's get start now
          <SolarRocket2BoldDuotone />
        </Button>
      </main>
    </div>
  );
}
