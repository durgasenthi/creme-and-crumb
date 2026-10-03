import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const categories = [
  {
    title: "Birthday Cakes",
    description: "Make their day a little sweeter.",
  },
  {
    title: "Wedding Cakes",
    description: "Elegant creations for your special day.",
  },
  {
    title: "Anniversary",
    description: "Celebrate another beautiful chapter.",
  },
  {
    title: "Custom Cakes",
    description: "Bring your sweetest idea to life.",
  },
];

export default function CakeCategories() {
  return (
    <section className="section-padding bg-cream">
      <div className="container-luxury">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-caramel">
            Made for every occasion
          </p>

          <h2 className="mt-3 font-display text-4xl text-espresso md:text-5xl">
            Find something worth celebrating
          </h2>
        </div>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {categories.map((category) => (
            <Link
              key={category.title}
              to="/collections"
              className="group rounded-3xl border border-espresso/10 bg-ivory p-7 transition duration-300 hover:-translate-y-1 hover:border-caramel/40 hover:shadow-luxury"
            >
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-caramel">
                0{categories.indexOf(category) + 1}
              </span>

              <h3 className="mt-12 font-display text-2xl text-espresso">
                {category.title}
              </h3>

              <p className="mt-3 text-sm leading-6 text-espresso/55">
                {category.description}
              </p>

              <div className="mt-7 flex items-center gap-2 text-sm font-semibold text-cocoa">
                Explore
                <ArrowRight
                  size={16}
                  className="transition-transform group-hover:translate-x-1"
                />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}