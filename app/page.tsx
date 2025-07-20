import Link from "next/link";
import {
  IconBrandGithub,
  IconLayoutKanban,
  IconHeartHandshake,
  IconWand,
  IconChartBar,
  IconRocket,
  IconBook,
  IconBook2,
} from "@tabler/icons-react";
import Image from "next/image";
import { Button } from "@heroui/button";
import { Card, CardBody, CardHeader } from "@heroui/card";
export default function Home() {
  return (
    <main className="min-h-dvh text-white bg-gradient-to-br from-black to-zinc-900 dark">
      <nav className="px-3 md:px-10 py-3 mb-5 flex justify-between items-center">
        <h4 className="flex items-center text-xl gap-3 font-semibold tracking-tight">
          <div className="w-8 h-8 md:w-10 md:h-10">
            <Image
              src="/dominote-logo.png"
              width={128}
              height={128}
              alt=""
              className="w-full h-full object-contain"
            />
          </div>
          Dominote
        </h4>
      </nav>
      <section className="mb-10 py-5 px-3 md:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
          <div className="flex flex-col justify-center">
            <h4 className="text-lg font-semibold mb-5 text-zinc-500 flex items-center gap-1">
              Hamtana
            </h4>
            <h1 className="text-4xl md:text-6xl xl:text-8xl tracking-tighter font-bold mb-5">
              Plan, Track, and{" "}
              <span className="from-[#FF1CF7] to-[#b249f8] bg-clip-text text-transparent bg-gradient-to-b">
                Achieve
              </span>
            </h1>
            <div className="flex gap-5">
              <Button color="secondary" as={Link} href="/board">
                <IconRocket />
                Get Started
              </Button>
            </div>
          </div>
          <div className="hidden lg:block">
            <Image
              src="/ss.webp"
              alt="Screenshot of NextBoard"
              width={2000}
              height={1250}
              className="w-full h-auto rounded-xl shadow-xl"
            />
          </div>
        </div>
      </section>
    </main>
  );
}
