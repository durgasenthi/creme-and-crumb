import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

export default function HomeCTA() {
  return (
    <section className="bg-champagne/20 py-24">
      <div className="container-luxury">
        <div className="rounded-[2rem] bg-cocoa px-7 py-16 text-center text-white md:px-12">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-champagne">
            Your celebration deserves something special
          </p>

          <h2 className="mx-auto mt-5 max-w-3xl font-display text-4xl leading-tight md:text-6xl">
            Have a cake idea in mind?
          </h2>

          <p className="mx-auto mt-5 max-w-xl text-sm leading-7 text-white/65">
            Tell us what you are imagining and let us create something
            beautiful for your celebration.
          </p>

          <Link
            to="/customize"
            className="luxury-button mt-8 bg-white text-espresso hover:-translate-y-0.5 hover:bg-ivory"
          >
            Design Your Cake
            <ArrowRight size={17} />
          </Link>
        </div>
      </div>
    </section>
  );
}