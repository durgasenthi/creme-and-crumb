
import { Search, SlidersHorizontal, X } from "lucide-react";
import { useMemo, useState, type CSSProperties } from "react";
import { Link } from "react-router-dom";

import ScrollReveal from "../components/ui/ScrollReveal";

import {
  cakeCategories,
  cakes,
  type CakeCategory,
} from "../data/cakeData";

const allCategory = "All Cakes";

export default function CollectionsPage() {
  const [selectedCategory, setSelectedCategory] =
    useState<string>(allCategory);

  const [searchQuery, setSearchQuery] = useState("");
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);

  const filteredCakes = useMemo(() => {
    const query = searchQuery.trim().toLowerCase();

    return cakes.filter((cake) => {
      const matchesCategory =
        selectedCategory === allCategory ||
        cake.category === selectedCategory;

      const matchesSearch =
        query.length === 0 ||
        cake.name.toLowerCase().includes(query) ||
        cake.category.toLowerCase().includes(query) ||
        cake.description.toLowerCase().includes(query);

      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  const clearFilters = () => {
    setSelectedCategory(allCategory);
    setSearchQuery("");
  };

  return (
    <div className="bg-cream">
      {/* =========================================
          PAGE HERO
      ========================================== */}

      <section className="collections-hero overflow-hidden border-b border-espresso/10 bg-ivory">
        <div className="container-luxury py-20 text-center md:py-28">
          <p className="collections-hero-item text-xs font-semibold uppercase tracking-[0.3em] text-caramel">
            The Crème & Crumb collection
          </p>

          <h1 className="collections-hero-item collections-hero-delay-1 mx-auto mt-4 max-w-4xl font-display text-5xl leading-tight text-espresso md:text-7xl">
            Cakes for every
            <span className="block italic text-cocoa">
              sweet occasion.
            </span>
          </h1>

          <p className="collections-hero-item collections-hero-delay-2 mx-auto mt-6 max-w-2xl text-sm leading-7 text-espresso/60 md:text-base">
            Explore our collection of handcrafted cakes, from timeless
            classics to rich chocolate creations and distinctive flavours from
            around the world.
          </p>

          <div className="collections-hero-item collections-hero-delay-3 mt-8 text-xs uppercase tracking-[0.2em] text-espresso/40">
            {cakes.length} cakes · {cakeCategories.length} collections
          </div>
        </div>
      </section>

      {/* =========================================
          COLLECTION CONTENT
      ========================================== */}

      <section className="section-padding">
        <div className="container-luxury">

          {/* =========================================
              SEARCH + MOBILE FILTER
          ========================================== */}

          <div className="collections-toolbar flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
            <div className="relative w-full lg:max-w-md">
              <Search
                size={18}
                className="absolute left-4 top-1/2 -translate-y-1/2 text-espresso/40"
              />

              <input
                type="text"
                value={searchQuery}
                onChange={(event) =>
                  setSearchQuery(event.target.value)
                }
                placeholder="Search cakes..."
                autoComplete="off"
                className="relative z-10 h-12 w-full rounded-full border border-espresso/10 bg-ivory pl-11 pr-11 text-sm text-espresso outline-none transition placeholder:text-espresso/35 focus:border-caramel/50 focus:ring-2 focus:ring-caramel/10"
              />

              {searchQuery && (
                <button
                  type="button"
                  onClick={() => setSearchQuery("")}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-espresso/40 transition hover:text-espresso"
                  aria-label="Clear search"
                >
                  <X size={16} />
                </button>
              )}
            </div>

            <button
              type="button"
              onClick={() =>
                setMobileFiltersOpen((value) => !value)
              }
              className="inline-flex h-12 items-center justify-center gap-2 rounded-full border border-espresso/10 bg-ivory px-5 text-sm font-semibold text-espresso transition hover:border-caramel/30 hover:shadow-luxury lg:hidden"
              aria-expanded={mobileFiltersOpen}
              aria-controls="collections-category-filter"
            >
              <SlidersHorizontal size={17} />

              Categories

              <span
                className={`text-xs transition-transform duration-300 ${
                  mobileFiltersOpen ? "rotate-180" : ""
                }`}
              >
                ↓
              </span>
            </button>
          </div>

          {/* =========================================
              CATEGORY NAVIGATION
          ========================================== */}

          <div
            id="collections-category-filter"
            className={`collections-filter-panel mt-6 ${
              mobileFiltersOpen ? "block" : "hidden"
            } lg:block`}
          >
            <div className="flex flex-wrap gap-2">
              <button
                type="button"
                onClick={() =>
                  setSelectedCategory(allCategory)
                }
                className={`collections-filter-button rounded-full px-4 py-2.5 text-xs font-semibold transition ${
                  selectedCategory === allCategory
                    ? "bg-espresso text-white"
                    : "border border-espresso/10 bg-ivory text-espresso/60 hover:border-caramel/30 hover:text-espresso"
                }`}
              >
                All Cakes
              </button>

              {cakeCategories.map(
                (category: CakeCategory) => (
                  <button
                    key={category}
                    type="button"
                    onClick={() =>
                      setSelectedCategory(category)
                    }
                    className={`collections-filter-button rounded-full px-4 py-2.5 text-xs font-semibold transition ${
                      selectedCategory === category
                        ? "bg-espresso text-white"
                        : "border border-espresso/10 bg-ivory text-espresso/60 hover:border-caramel/30 hover:text-espresso"
                    }`}
                  >
                    {category}
                  </button>
                )
              )}
            </div>
          </div>

          {/* =========================================
              RESULTS HEADER
          ========================================== */}

          <div className="collections-results-header mt-12 flex items-end justify-between gap-4 border-b border-espresso/10 pb-5">
            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-espresso/40">
                Showing
              </p>

              <h2 className="mt-1 font-display text-3xl text-espresso">
                {selectedCategory}
              </h2>
            </div>

            <span className="text-sm text-espresso/50">
              {filteredCakes.length}{" "}
              {filteredCakes.length === 1
                ? "cake"
                : "cakes"}
            </span>
          </div>

          {/* =========================================
              CAKE GRID
              REAL SCROLL REVEAL
          ========================================== */}

          {filteredCakes.length > 0 ? (
            <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {filteredCakes.map((cake, index) => {
                const animationStyle = {
                  "--cake-delay": `${Math.min(
                    index * 70,
                    700
                  )}ms`,
                } as CSSProperties;

                return (
                  <ScrollReveal
                    key={cake.id}
                    delay={Math.min(index * 70, 700)}
                  >
                    <article
                      style={animationStyle}
                      className="collections-card group overflow-hidden rounded-3xl border border-espresso/10 bg-ivory transition duration-500 hover:-translate-y-1 hover:shadow-luxury"
                    >
                      {/* =========================================
                          IMAGE
                      ========================================== */}

                      <Link to={`/collections/${cake.id}`}>
                        <div className="collections-image-container relative aspect-[4/3] overflow-hidden bg-champagne/20">
                          <img
                            src={cake.image}
                            alt={cake.name}
                            loading="lazy"
                            className="collections-image h-full w-full object-cover transition duration-700 group-hover:scale-105"
                            onError={(event) => {
                              event.currentTarget.style.display =
                                "none";
                            }}
                          />

                          <div className="collections-image-reveal absolute inset-0 bg-cream" />

                          <div className="absolute inset-0 bg-gradient-to-t from-espresso/30 via-transparent to-transparent opacity-0 transition duration-500 group-hover:opacity-100" />

                          {cake.featured && (
                            <span className="collections-signature absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1.5 text-[9px] font-bold uppercase tracking-[0.18em] text-espresso backdrop-blur-sm">
                              Signature
                            </span>
                          )}

                          <span className="collections-gallery-label absolute bottom-4 right-4 rounded-full bg-white/90 px-3 py-2 text-[9px] font-bold uppercase tracking-[0.15em] text-espresso opacity-0 shadow-sm backdrop-blur-sm transition duration-500">
                            View cake
                          </span>
                        </div>
                      </Link>

                      {/* =========================================
                          CAKE INFORMATION
                      ========================================== */}

                      <div className="p-5">
                        <p className="text-[9px] font-semibold uppercase tracking-[0.2em] text-caramel">
                          {cake.category}
                        </p>

                        <h3 className="mt-2 font-display text-2xl text-espresso">
                          {cake.name}
                        </h3>

                        <p className="mt-2 line-clamp-2 text-sm leading-6 text-espresso/55">
                          {cake.description}
                        </p>

                        <div className="mt-5 flex items-center justify-between border-t border-espresso/10 pt-4">
                          <span className="text-sm font-semibold text-espresso">
                            From ₹
                            {cake.price.toLocaleString(
                              "en-IN"
                            )}
                          </span>

                          <Link
                            to={`/collections/${cake.id}`}
                            className="text-xs font-semibold text-cocoa transition hover:text-espresso"
                          >
                            View cake
                          </Link>
                        </div>
                      </div>
                    </article>
                  </ScrollReveal>
                );
              })}
            </div>
          ) : (
            /* =========================================
               EMPTY STATE
            ========================================== */

            <div className="collections-empty py-24 text-center">
              <div className="collections-bounce mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-champagne/20">
                <Search
                  size={22}
                  className="text-cocoa"
                />
              </div>

              <h3 className="mt-6 font-display text-3xl text-espresso">
                No cakes found
              </h3>

              <p className="mx-auto mt-3 max-w-md text-sm leading-7 text-espresso/55">
                We couldn't find a cake matching your
                search. Try another name or explore all of
                our collections.
              </p>

              <button
                type="button"
                onClick={clearFilters}
                className="luxury-button-primary mt-7"
              >
                Clear filters
              </button>
            </div>
          )}
        </div>
      </section>

      {/* =========================================
          COLLECTIONS ANIMATIONS
      ========================================== */}

      <style>{`
        /* HERO REVEAL */

        .collections-hero-item {
          opacity: 0;
          transform: translateY(24px);
          animation: collectionsHeroReveal 800ms
            cubic-bezier(0.22, 1, 0.36, 1)
            forwards;
        }

        .collections-hero-delay-1 {
          animation-delay: 100ms;
        }

        .collections-hero-delay-2 {
          animation-delay: 200ms;
        }

        .collections-hero-delay-3 {
          animation-delay: 300ms;
        }

        @keyframes collectionsHeroReveal {
          from {
            opacity: 0;
            transform: translateY(24px);
          }

          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        /* CARD HOVER */

        .collections-card {
          will-change: transform;
        }

        /* IMAGE REVEAL */

        .collections-image-container {
          isolation: isolate;
        }

        .collections-image-reveal {
          z-index: 5;
          transform-origin: right center;
          animation: collectionsImageReveal 1100ms
            cubic-bezier(0.77, 0, 0.175, 1)
            var(--cake-delay)
            forwards;
          pointer-events: none;
        }

        @keyframes collectionsImageReveal {
          0% {
            transform: scaleX(1);
          }

          100% {
            transform: scaleX(0);
          }
        }

        .collections-image {
          transform: scale(1.02);
          transition:
            transform 800ms
            cubic-bezier(0.22, 1, 0.36, 1);
        }

        .collections-card:hover .collections-image {
          transform: scale(1.07);
        }

        /* GALLERY HOVER */

        .collections-gallery-label {
          transform: translateY(12px);
        }

        .collections-card:hover
          .collections-gallery-label {
          transform: translateY(0);
          opacity: 1;
        }

        /* SIGNATURE BOUNCE */

        .collections-card:hover
          .collections-signature {
          animation: collectionsSignatureBounce 650ms
            cubic-bezier(0.34, 1.56, 0.64, 1);
        }

        @keyframes collectionsSignatureBounce {
          0% {
            transform: scale(1);
          }

          45% {
            transform: scale(1.08);
          }

          70% {
            transform: scale(0.96);
          }

          100% {
            transform: scale(1);
          }
        }

        /* FILTER BUTTON */

        .collections-filter-button {
          will-change: transform;
        }

        .collections-filter-button:hover {
          transform: translateY(-2px);
        }

        /* MOBILE FILTER ACCORDION */

        .collections-filter-panel {
          animation: collectionsFilterAccordion 400ms
            cubic-bezier(0.22, 1, 0.36, 1);
        }

        @keyframes collectionsFilterAccordion {
          from {
            opacity: 0;
            transform: translateY(-8px);
          }

          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        /* RESULTS HEADER */

        .collections-results-header {
          animation: collectionsResultsReveal 700ms
            cubic-bezier(0.22, 1, 0.36, 1);
        }

        @keyframes collectionsResultsReveal {
          from {
            opacity: 0;
            transform: translateY(16px);
          }

          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        /* EMPTY STATE BOUNCE */

        .collections-bounce {
          animation: collectionsEmptyBounce 2.4s
            ease-in-out infinite;
        }

        @keyframes collectionsEmptyBounce {
          0%,
          100% {
            transform: translateY(0);
          }

          50% {
            transform: translateY(-8px);
          }
        }

        /* REDUCED MOTION */

        @media (prefers-reduced-motion: reduce) {
          .collections-hero-item,
          .collections-image-reveal,
          .collections-results-header,
          .collections-bounce {
            animation: none !important;
            opacity: 1 !important;
            transform: none !important;
          }

          .collections-image,
          .collections-gallery-label,
          .collections-signature,
          .collections-filter-button {
            transition: none !important;
            animation: none !important;
          }
        }
      `}</style>
    </div>
  );
}

