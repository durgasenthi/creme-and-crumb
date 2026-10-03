import {
  ArrowLeft,
  Check,
  Heart,
  Minus,
  Plus,
  ShoppingBag,
  Truck,
} from "lucide-react";
import { useMemo, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

import ScrollReveal from "../components/ui/ScrollReveal";
import { useCart } from "../context/CartContext";
import { cakes } from "../data/cakeData";

export default function CakeDetailPage() {
  const { cakeId } = useParams<{ cakeId: string }>();
  const navigate = useNavigate();

  const { addItem } = useCart();

  const [quantity, setQuantity] = useState(1);
  const [isFavourite, setIsFavourite] = useState(false);
  const [addedToCart, setAddedToCart] = useState(false);

  const cake = useMemo(
    () => cakes.find((item) => item.id === cakeId),
    [cakeId]
  );

  if (!cake) {
    return (
      <div className="min-h-[70vh] bg-cream">
        <div className="container-luxury flex min-h-[70vh] items-center justify-center px-4 py-20">
          <div className="text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-caramel">
              Crème & Crumb
            </p>

            <h1 className="mt-4 font-display text-5xl text-espresso md:text-6xl">
              Cake not found
            </h1>

            <p className="mx-auto mt-4 max-w-md text-sm leading-7 text-espresso/55">
              The cake you are looking for may have moved or is no longer
              available in our collection.
            </p>

            <Link
              to="/collections"
              className="luxury-button-primary mt-8"
            >
              <ArrowLeft size={17} />
              Back to Collections
            </Link>
          </div>
        </div>
      </div>
    );
  }

  const totalPrice = cake.price * quantity;

  const relatedCakes = cakes
    .filter(
      (item) =>
        item.category === cake.category &&
        item.id !== cake.id
    )
    .slice(0, 3);

  const handleDecrease = () => {
    setQuantity((current) => Math.max(1, current - 1));
  };

  const handleIncrease = () => {
    setQuantity((current) => Math.min(10, current + 1));
  };

  const handleAddToCart = () => {
    addItem({
      cakeId: cake.id,
      name: cake.name,
      category: cake.category,
      image: cake.image,
      size: "Standard",
      unitPrice: cake.price,
      quantity,
    });

    setAddedToCart(true);

    window.setTimeout(() => {
      setAddedToCart(false);
    }, 2200);
  };

  return (
    <div className="overflow-hidden bg-cream">
      {/* =========================================
          BREADCRUMB
      ========================================== */}

      <section className="border-b border-espresso/10 bg-ivory">
        <div className="container-luxury py-5">
          <ScrollReveal>
            <div className="flex items-center gap-2 overflow-hidden text-xs text-espresso/45">
              <Link
                to="/"
                className="shrink-0 transition hover:text-espresso"
              >
                Home
              </Link>

              <span>/</span>

              <Link
                to="/collections"
                className="shrink-0 transition hover:text-espresso"
              >
                Collections
              </Link>

              <span>/</span>

              <span className="truncate text-espresso/70">
                {cake.name}
              </span>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* =========================================
          PRODUCT SECTION
      ========================================== */}

      <section className="section-padding">
        <div className="container-luxury">
          <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
            {/* =====================================
                IMAGE
            ====================================== */}

            <ScrollReveal>
              <div className="cake-detail-image-wrapper group relative overflow-hidden rounded-[2rem] border border-espresso/10 bg-ivory shadow-luxury">
                <div className="aspect-square overflow-hidden">
                  <img
                    src={cake.image}
                    alt={cake.name}
                    className="h-full w-full object-cover transition duration-1000 ease-out group-hover:scale-105"
                  />
                </div>

                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-espresso/20 via-transparent to-white/10 opacity-0 transition duration-700 group-hover:opacity-100" />

                {cake.featured && (
                  <span className="absolute left-5 top-5 rounded-full bg-white/90 px-4 py-2 text-[9px] font-bold uppercase tracking-[0.2em] text-espresso shadow-sm backdrop-blur-md">
                    Signature Cake
                  </span>
                )}

                <button
                  type="button"
                  onClick={() =>
                    setIsFavourite((current) => !current)
                  }
                  className={`absolute right-5 top-5 flex h-11 w-11 items-center justify-center rounded-full border backdrop-blur-md transition ${
                    isFavourite
                      ? "border-rose bg-rose text-white"
                      : "border-white/70 bg-white/90 text-espresso hover:border-caramel/40"
                  }`}
                  aria-label={
                    isFavourite
                      ? "Remove from favourites"
                      : "Add to favourites"
                  }
                >
                  <Heart
                    size={18}
                    fill={
                      isFavourite
                        ? "currentColor"
                        : "none"
                    }
                  />
                </button>
              </div>
            </ScrollReveal>

            {/* =====================================
                PRODUCT DETAILS
            ====================================== */}

            <ScrollReveal delay={120}>
              <div className="lg:pt-5">
                <p className="text-xs font-semibold uppercase tracking-[0.25em] text-caramel">
                  {cake.category}
                </p>

                <h1 className="mt-4 font-display text-5xl leading-[1.05] text-espresso md:text-6xl">
                  {cake.name}
                </h1>

                <div className="mt-6 flex flex-wrap items-center gap-3">
                  <span className="text-2xl font-semibold text-espresso">
                    ₹{cake.price.toLocaleString("en-IN")}
                  </span>

                  <span className="h-1 w-1 rounded-full bg-caramel" />

                  <span className="text-xs uppercase tracking-[0.15em] text-espresso/45">
                    Freshly handcrafted
                  </span>
                </div>

                <div className="mt-8 h-px bg-espresso/10" />

                <p className="mt-8 text-base leading-8 text-espresso/65">
                  {cake.description}
                </p>

                {/* =====================================
                    HIGHLIGHTS
                ====================================== */}

                <div className="mt-8 grid gap-3 sm:grid-cols-2">
                  <div className="rounded-2xl border border-espresso/10 bg-ivory p-4">
                    <div className="flex items-start gap-3">
                      <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-champagne/20 text-cocoa">
                        <Check size={16} />
                      </div>

                      <div>
                        <p className="text-xs font-semibold text-espresso">
                          Handcrafted
                        </p>

                        <p className="mt-1 text-[11px] leading-5 text-espresso/50">
                          Made with care in small batches.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="rounded-2xl border border-espresso/10 bg-ivory p-4">
                    <div className="flex items-start gap-3">
                      <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-champagne/20 text-cocoa">
                        <Truck size={16} />
                      </div>

                      <div>
                        <p className="text-xs font-semibold text-espresso">
                          Fresh Delivery
                        </p>

                        <p className="mt-1 text-[11px] leading-5 text-espresso/50">
                          Carefully packed for every order.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* =====================================
                    QUANTITY
                ====================================== */}

                <div className="mt-9">
                  <div className="flex items-center justify-between">
                    <p className="text-xs font-semibold uppercase tracking-[0.18em] text-espresso/50">
                      Quantity
                    </p>

                    <span className="text-xs text-espresso/40">
                      Maximum 10
                    </span>
                  </div>

                  <div className="mt-3 flex items-center justify-between rounded-2xl border border-espresso/10 bg-ivory p-2">
                    <div className="flex items-center gap-1">
                      <button
                        type="button"
                        onClick={handleDecrease}
                        disabled={quantity <= 1}
                        className="flex h-10 w-10 items-center justify-center rounded-xl text-espresso/60 transition hover:bg-cream hover:text-espresso disabled:cursor-not-allowed disabled:opacity-30"
                        aria-label="Decrease quantity"
                      >
                        <Minus size={16} />
                      </button>

                      <span className="flex h-10 min-w-10 items-center justify-center text-sm font-semibold text-espresso">
                        {quantity}
                      </span>

                      <button
                        type="button"
                        onClick={handleIncrease}
                        disabled={quantity >= 10}
                        className="flex h-10 w-10 items-center justify-center rounded-xl text-espresso/60 transition hover:bg-cream hover:text-espresso disabled:cursor-not-allowed disabled:opacity-30"
                        aria-label="Increase quantity"
                      >
                        <Plus size={16} />
                      </button>
                    </div>

                    <span className="pr-4 text-sm font-semibold text-espresso">
                      ₹{totalPrice.toLocaleString("en-IN")}
                    </span>
                  </div>
                </div>

                {/* =====================================
                    ADD TO CART
                ====================================== */}

                <button
                  type="button"
                  onClick={handleAddToCart}
                  className={`mt-4 flex h-14 w-full items-center justify-center gap-2 rounded-full px-6 text-sm font-semibold text-white shadow-lg transition duration-300 ${
                    addedToCart
                      ? "bg-cocoa"
                      : "bg-espresso hover:-translate-y-0.5 hover:bg-cocoa"
                  }`}
                >
                  {addedToCart ? (
                    <>
                      <Check size={19} />
                      Added to Cart
                    </>
                  ) : (
                    <>
                      <ShoppingBag size={18} />
                      Add to Cart
                    </>
                  )}
                </button>

                <button
                  type="button"
                  onClick={() => navigate("/cart")}
                  className="mt-3 flex h-12 w-full items-center justify-center rounded-full border border-espresso/15 text-sm font-semibold text-espresso transition hover:border-caramel/40 hover:bg-ivory"
                >
                  View Shopping Cart
                </button>

                {/* =====================================
                    KITCHEN NOTE
                ====================================== */}

                <div className="mt-8 rounded-2xl border border-caramel/20 bg-champagne/10 p-5">
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-caramel">
                    A little note from our kitchen
                  </p>

                  <p className="mt-2 text-sm leading-6 text-espresso/60">
                    Every cake is prepared with carefully selected
                    ingredients and finished by hand before it leaves our
                    kitchen.
                  </p>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* =========================================
          STORY SECTION
      ========================================== */}

      <section className="border-y border-espresso/10 bg-ivory">
        <div className="container-luxury section-padding">
          <ScrollReveal>
            <div className="mx-auto max-w-3xl text-center">
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-caramel">
                Made for moments
              </p>

              <h2 className="mt-4 font-display text-4xl text-espresso md:text-5xl">
                A cake worth remembering.
              </h2>

              <p className="mt-5 text-sm leading-8 text-espresso/55 md:text-base">
                From the first whisk to the final flourish, every Crème &
                Crumb cake is created to make ordinary celebrations feel a
                little more special.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* =========================================
          RELATED CAKES
      ========================================== */}

      {relatedCakes.length > 0 && (
        <section className="section-padding">
          <div className="container-luxury">
            <ScrollReveal>
              <div className="flex items-end justify-between gap-4">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.25em] text-caramel">
                    You may also like
                  </p>

                  <h2 className="mt-3 font-display text-4xl text-espresso md:text-5xl">
                    More from the collection
                  </h2>
                </div>

                <Link
                  to="/collections"
                  className="hidden text-sm font-semibold text-cocoa transition hover:text-espresso sm:block"
                >
                  View all cakes →
                </Link>
              </div>
            </ScrollReveal>

            <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {relatedCakes.map((relatedCake, index) => (
                <ScrollReveal
                  key={relatedCake.id}
                  delay={index * 100}
                >
                  <Link
                    to={`/collections/${relatedCake.id}`}
                    className="group block overflow-hidden rounded-3xl border border-espresso/10 bg-ivory transition duration-500 hover:-translate-y-1 hover:shadow-luxury"
                  >
                    <div className="aspect-[4/3] overflow-hidden bg-champagne/20">
                      <img
                        src={relatedCake.image}
                        alt={relatedCake.name}
                        loading="lazy"
                        className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                      />
                    </div>

                    <div className="p-5">
                      <p className="text-[9px] font-semibold uppercase tracking-[0.2em] text-caramel">
                        {relatedCake.category}
                      </p>

                      <h3 className="mt-2 font-display text-2xl text-espresso">
                        {relatedCake.name}
                      </h3>

                      <p className="mt-2 text-sm font-semibold text-espresso">
                        From ₹
                        {relatedCake.price.toLocaleString(
                          "en-IN"
                        )}
                      </p>
                    </div>
                  </Link>
                </ScrollReveal>
              ))}
            </div>

            <Link
              to="/collections"
              className="luxury-button-outline mt-8 sm:hidden"
            >
              View all cakes
            </Link>
          </div>
        </section>
      )}

      <style>{`
        .cake-detail-image-wrapper {
          animation: cakeDetailImageIn 900ms
            cubic-bezier(0.22, 1, 0.36, 1);
        }

        @keyframes cakeDetailImageIn {
          from {
            opacity: 0;
            transform: translateY(24px) scale(0.98);
          }

          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .cake-detail-image-wrapper {
            animation: none;
          }
        }
      `}</style>
    </div>
  );
}

