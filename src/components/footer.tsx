import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-100">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-sm text-gray-500">
            © {new Date().getFullYear()} Reflective Journal. All rights
            reserved.
          </div>

          <div className="flex gap-6 text-sm">
            <Link
              href="/about"
              className="text-gray-500 hover:text-primary transition-colors"
            >
              About
            </Link>
            <Link
              href="/privacy"
              className="text-gray-500 hover:text-primary transition-colors"
            >
              Privacy
            </Link>
            <Link
              href="/terms"
              className="text-gray-500 hover:text-primary transition-colors"
            >
              Terms
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
