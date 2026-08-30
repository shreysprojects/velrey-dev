import Link from "next/link";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-white/5 px-6 md:px-12 py-8 mt-auto">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3">
        <p className="text-white/20 text-xs font-mono">
          © {year} Velrey Development. All rights reserved.
        </p>
        <Link
          href="/privacy"
          className="text-white/20 text-xs font-mono hover:text-white/50 transition-colors"
        >
          Privacy Policy
        </Link>
      </div>
    </footer>
  );
}
