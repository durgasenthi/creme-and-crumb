import { Link } from "react-router-dom";
import { Mail, Phone } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-black text-white">
      <div className="mx-auto grid max-w-7xl gap-12 px-6 py-16 md:grid-cols-2 lg:grid-cols-4">
        {/* Brand */}
        <div>
          <h2 className="font-display text-3xl">Crème & Crumb</h2>

          <p className="mt-4 max-w-xs text-sm leading-7 text-white/60">
            Artisan cakes crafted with thoughtful details for life&apos;s
            sweetest celebrations.
          </p>
        </div>

        {/* Explore */}
        <div>
          <h3 className="text-sm font-semibold uppercase tracking-widest">
            Explore
          </h3>

          <div className="mt-5 flex flex-col gap-3 text-sm text-white/60">
            <Link to="/collections" className="transition hover:text-white">
              Collections
            </Link>

            <Link to="/customize" className="transition hover:text-white">
              Design Your Cake
            </Link>

            <Link to="/story" className="transition hover:text-white">
              Our Story
            </Link>

            <Link to="/contact" className="transition hover:text-white">
              Contact
            </Link>
          </div>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-sm font-semibold uppercase tracking-widest">
            Contact
          </h3>

          <div className="mt-5 flex flex-col gap-4 text-sm text-white/60">
            <a
              href="tel:+919999999999"
              className="flex items-center gap-3 transition hover:text-white"
            >
              <Phone size={16} />
              <span>+91 99999 99999</span>
            </a>

            <a
              href="mailto:hello@cremeandcrumb.com"
              className="flex items-center gap-3 transition hover:text-white"
            >
              <Mail size={16} />
              <span>hello@cremeandcrumb.com</span>
            </a>
          </div>
        </div>

        {/* Social */}
        <div>
          <h3 className="text-sm font-semibold uppercase tracking-widest">
            Follow Us
          </h3>

          <div className="mt-5 flex gap-3">
            {/* Instagram */}
            <a
              href="#"
              aria-label="Instagram"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-white/15 text-sm font-semibold transition hover:bg-white/10"
            >
              I
            </a>

            {/* Facebook */}
            <a
              href="#"
              aria-label="Facebook"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-white/15 text-sm font-semibold transition hover:bg-white/10"
            >
              f
            </a>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-white/10">
        <div className="container-luxury flex flex-col gap-2 py-5 text-xs text-white/40 sm:flex-row sm:items-center sm:justify-between">
          <span>© 2026 Crème &amp; Crumb. All rights reserved.</span>

          <span>Crafted for life&apos;s sweetest moments.</span>
        </div>
      </div>
    </footer>
  );
}