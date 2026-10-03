import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";

const cakes = [
  {
    name: "Velvet Bloom",
    category: "Signature Cake",
    description:
      "Soft vanilla sponge with delicate floral finishing and a refined cream finish.",
    price: "From ₹1,499",
    image: "/images/cakes/velvet-bloom.jpg",
  },
  {
    name: "Chocolate Atelier",
    category: "Chocolate Cake",
    description:
      "Rich chocolate layers finished with silky ganache and elegant details.",
    price: "From ₹1,699",
    image: "/images/cakes/chocolate-atelier.jpg",
  },
  {
    name: "Strawberry Cloud",
    category: "Fresh Cream",
    description:
      "Light vanilla sponge layered with fresh cream and sweet strawberries.",
    price: "From ₹1,399",
    image: "/images/cakes/strawberry-cloud.jpg",
  },
];

export default function FeaturedCakes() {
  return (
    <section className="section-padding bg-ivory">
      <div className="container-luxury">

        {/* Section heading */}
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-caramel">
              From our kitchen
            </p>

            <h2 className="mt-3 font-display text-4xl text-espresso md:text-5xl">
              Our signature cakes
            </h2>
          </div>

          <Link
            to="/collections"
            className="inline-flex items-center gap-2 text-sm font-semibold text-cocoa transition hover:text-espresso"
          >
            View all cakes
            <ArrowUpRight size={17} />
          </Link>
        </div>

        {/* Cake cards */}
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {cakes.map((cake) => (
            <article
              key={cake.name}
              className="group overflow-hidden rounded-3xl border border-espresso/10 bg-cream transition duration-500 hover:-translate-y-1 hover:shadow-luxury"
            >
              {/* Image */}
              <div className="relative aspect-[4/3] overflow-hidden bg-champagne/20">
                <img
                  src={cake.image}
                  alt={cake.name}
                  className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                />

                {/* Image overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-espresso/30 via-transparent to-transparent opacity-0 transition duration-500 group-hover:opacity-100" />
              </div>

              {/* Content */}
              <div className="p-7">
                <p className="text-[10px] font-semibold uppercase tracking-[0.25em] text-caramel">
                  {cake.category}
                </p>

                <h3 className="mt-2 font-display text-3xl text-espresso">
                  {cake.name}
                </h3>

                <p className="mt-3 text-sm leading-7 text-espresso/60">
                  {cake.description}
                </p>

                <div className="mt-5 flex items-center justify-between border-t border-espresso/10 pt-5">
                  <span className="text-sm font-semibold text-espresso">
                    {cake.price}
                  </span>

                  <Link
                    to="/collections"
                    className="text-sm font-semibold text-cocoa transition hover:text-espresso"
                  >
                    Discover
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>

      </div>
    </section>
  );
}