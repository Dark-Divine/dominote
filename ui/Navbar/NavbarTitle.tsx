import Image from "next/image";
import Link from "next/link";

export default function NavbarTitle() {
  return (
    <div className="flex items-center gap-5">
      <Link href="/dashboard" className="text-xl tracking-tight font-light flex items-center gap-2">
        <div className="w-8">
          <Image src="/dominote-logo.png" width={120} height={80} alt="" className="w-full" />
        </div>
        Dominote
      </Link>
    </div>
  );
}
