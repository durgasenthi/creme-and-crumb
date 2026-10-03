import { ArrowRight, Play, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <section className="relative min-h-[calc(100vh-80px)] overflow-hidden bg-espresso">
      {/* Background video */}
      <video
        className="absolute inset-0 h-full w-full object-cover"
        autoPlay
        loop
        muted
        playsInline
       poster="/images/hero-poster.png"
        aria-hidden="true"
      >
        <source src="/videos/cake-making.mp4" type="video/mp4" />
      </video>

      {/* Dark cinematic overlay */}
      <div className="absolute inset-0 bg-espresso/55" />
      <div className="absolute inset-0 bg-gradient-to-r from-espresso/90 via-espresso/55 to-espresso/20" />
      <div className="absolute inset-0 bg-gradient-to-t from-espresso/70 via-transparent to-espresso/20" />

      {/* Hero content */}
      <div className="container-luxury relative flex min-h-[calc(100vh-80px)] items-center py-20">
        <div className="max-w-3xl text-white">

          <div className="mb-6 flex items-center gap-3">
            <Sparkles size={16} className="text-champagne" />

            <span className="text-xs font-semibold uppercase tracking-[0.35em] text-champagne">
              Artisan Bakehouse
            </span>
          </div>

          <h1 className="font-display text-5xl leading-[1.05] tracking-tight sm:text-6xl md:text-7xl lg:text-8xl">
            Crafted slowly.
            <span className="block italic text-champagne">
              Loved completely.
            </span>
          </h1>

          <p className="mt-7 max-w-xl text-base leading-8 text-white/75 md:text-lg">
            Handcrafted cakes made with beautiful details, thoughtful
            ingredients, and a little extra sweetness for life's most
            memorable moments.
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <Link
              to="/collections"
              className="luxury-button bg-white text-espresso hover:-translate-y-0.5 hover:bg-ivory"
            >
              Explore Cakes
              <ArrowRight size={17} />
            </Link>

            <Link
              to="/customize"
              className="luxury-button border border-white/30 text-white hover:-translate-y-0.5 hover:bg-white/10"
            >
              Design Your Cake
            </Link>
          </div>

          <div className="mt-12 flex flex-wrap gap-x-8 gap-y-3 text-xs uppercase tracking-[0.2em] text-white/50">
            <span>Freshly Baked</span>
            <span>Custom Designs</span>
            <span>Made With Care</span>
          </div>
        </div>
      </div>

      {/* Video indicator */}
      <div className="absolute bottom-8 right-6 hidden items-center gap-3 text-white/60 sm:flex md:right-10">
        <div className="flex h-9 w-9 items-center justify-center rounded-full border border-white/20 bg-white/5 backdrop-blur-sm">
          <Play size={13} fill="currentColor" />
        </div>

        <span className="text-[9px] uppercase tracking-[0.3em]">
          Handcrafted daily
        </span>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-7 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-white/50 md:flex">
        <span className="text-[9px] uppercase tracking-[0.35em]">
          Scroll to explore
        </span>

        <span className="h-10 w-px bg-white/30" />
      </div>
    </section>
  );
}