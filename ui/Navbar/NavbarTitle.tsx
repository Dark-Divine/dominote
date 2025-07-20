import Link from "next/link";

export default function NavbarTitle() {
  return (
    <div className="flex items-center gap-5">
      <Link href="/" className="text-xl tracking-tight font-light">
        Dominote
      </Link>
    </div>
  );
}
