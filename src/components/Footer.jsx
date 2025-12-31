import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-background border-t border-border py-12">
      <div className="container mx-auto px-4 text-center">
        <div className="mb-4">
          <Link href="/" className="text-2xl font-bold font-heading tracking-tighter">
            E2025
          </Link>
        </div>
        <p className="text-muted-foreground mb-4">
          Part of STMIK Mardira Indonesia
        </p>
        <div className="text-sm text-muted-foreground">
          &copy; {new Date().getFullYear()} E2025 Class. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
