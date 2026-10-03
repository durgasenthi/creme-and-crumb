
import {
  ArrowLeft,
  ArrowRight,
  Minus,
  Plus,
  ShieldCheck,
  ShoppingBag,
  Trash2,
  Truck,
} from "lucide-react";
import { Link } from "react-router-dom";

import ScrollReveal from "../components/ui/ScrollReveal";
import { useCart } from "../context/CartContext";

export default function CartPage() {
  const {
    items,
    cartCount,
    cartTotal,
    updateQuantity,
    removeItem,
    clearCart,
  } = useCart();

  const formatPrice = (price: number) =>
    `₹${price.toLocaleString("en-IN")}`;

  /* =========================================
     EMPTY CART
  ========================================== */

  if (items.length === 0) {
    return (
      <section className="bg-cream">
        <div className="container-luxury flex min-h-[70vh] items-center justify-center py-20">
          <ScrollReveal>
            <div className="w-full max-w-xl text-center">
              <div className="mx-auto flex h-24 w-24 items-center justify-center rounded-full border border-espresso/10 bg-ivory shadow-luxury">
                <ShoppingBag
                  size={32}
                  strokeWidth={1.5}
                  className="text-caramel"
                />
              </div>

              <p className="mt-8 text-xs font-semibold uppercase tracking-[0.3em] text-caramel">
                Your shopping bag
              </p>

              <h1 className="mt-3 font-display text-5xl leading-tight text-espresso md:text-6xl">
                Your cart is empty
              </h1>

              <p className="mx-auto mt-5 max-w-md text-sm leading-7 text-espresso/55">
                Your next celebration deserves something
                beautiful. Explore our handcrafted cakes and
                find something made especially for your
                moment.
              </p>

              <Link
                to="/collections"
                className="luxury-button-primary mt-8"
              >
                <ShoppingBag size={17} />
                Explore Cakes
                <ArrowRight size={16} />
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>
    );
  }

  return (
    <section className="overflow-hidden bg-cream">
      <div className="container-luxury py-12 md:py-20">
        {/* =========================================
            HEADER
        ========================================== */}

        <ScrollReveal>
          <div className="flex flex-col gap-5 border-b border-espresso/10 pb-8 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-caramel">
                Shopping bag
              </p>

              <h1 className="mt-3 font-display text-5xl leading-tight text-espresso md:text-6xl">
                Your Cart
              </h1>

              <p className="mt-3 text-sm text-espresso/50">
                {cartCount}{" "}
                {cartCount === 1 ? "item" : "items"} in your
                cart
              </p>
            </div>

            <button
              type="button"
              onClick={clearCart}
              className="inline-flex items-center gap-2 self-start rounded-full border border-espresso/10 px-4 py-2.5 text-sm font-semibold text-espresso/50 transition duration-300 hover:border-red-200 hover:bg-red-50 hover:text-red-600 sm:self-auto"
            >
              <Trash2 size={15} />
              Clear Cart
            </button>
          </div>
        </ScrollReveal>

        {/* =========================================
            CART CONTENT
        ========================================== */}

        <div className="mt-10 grid gap-8 lg:grid-cols-[minmax(0,1fr)_380px] lg:items-start lg:gap-10">
          {/* =========================================
              CART ITEMS
          ========================================== */}

          <div>
            <div className="space-y-4">
              {items.map((item, index) => (
                <ScrollReveal
                  key={item.cartItemId}
                  delay={index * 90}
                >
                  <article className="group rounded-[2rem] border border-espresso/10 bg-ivory p-4 shadow-sm transition duration-500 hover:-translate-y-1 hover:shadow-luxury sm:p-5">
                    <div className="flex gap-4 sm:gap-6">
                      {/* IMAGE */}

                      <Link
                        to={`/collections/${item.cakeId}`}
                        className="block h-28 w-28 shrink-0 overflow-hidden rounded-2xl bg-champagne/20 sm:h-36 sm:w-36"
                        aria-label={`View ${item.name}`}
                      >
                        <img
                          src={item.image}
                          alt={item.name}
                          loading="lazy"
                          className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                          onError={(event) => {
                            event.currentTarget.style.display =
                              "none";
                          }}
                        />
                      </Link>

                      {/* DETAILS */}

                      <div className="min-w-0 flex-1">
                        <div className="flex items-start justify-between gap-3">
                          <div className="min-w-0">
                            <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-caramel">
                              {item.category}
                            </p>

                            <Link
                              to={`/collections/${item.cakeId}`}
                              className="block"
                            >
                              <h2 className="mt-1 truncate font-display text-2xl text-espresso transition group-hover:text-cocoa sm:text-3xl">
                                {item.name}
                              </h2>
                            </Link>
                          </div>

                          {/* REMOVE */}

                          <button
                            type="button"
                            onClick={() =>
                              removeItem(item.cartItemId)
                            }
                            className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-espresso/30 transition duration-300 hover:bg-red-50 hover:text-red-600"
                            aria-label={`Remove ${item.name} from cart`}
                          >
                            <Trash2 size={17} />
                          </button>
                        </div>

                        {/* SIZE */}

                        <p className="mt-2 text-sm text-espresso/50">
                          Size:{" "}
                          <span className="font-semibold text-espresso/70">
                            {item.size}
                          </span>
                        </p>

                        {/* PRICE + QUANTITY */}

                        <div className="mt-5 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
                          <div>
                            <p className="mb-2 text-[10px] font-semibold uppercase tracking-[0.18em] text-espresso/35">
                              Quantity
                            </p>

                            <div className="inline-flex items-center rounded-full border border-espresso/10 bg-white p-1">
                              <button
                                type="button"
                                onClick={() =>
                                  updateQuantity(
                                    item.cartItemId,
                                    item.quantity - 1
                                  )
                                }
                                disabled={item.quantity <= 1}
                                className="flex h-9 w-9 items-center justify-center rounded-full text-espresso/55 transition hover:bg-cream hover:text-espresso disabled:cursor-not-allowed disabled:opacity-25"
                                aria-label="Decrease quantity"
                              >
                                <Minus size={14} />
                              </button>

                              <span className="flex h-9 min-w-9 items-center justify-center text-sm font-semibold text-espresso">
                                {item.quantity}
                              </span>

                              <button
                                type="button"
                                onClick={() =>
                                  updateQuantity(
                                    item.cartItemId,
                                    item.quantity + 1
                                  )
                                }
                                disabled={item.quantity >= 10}
                                className="flex h-9 w-9 items-center justify-center rounded-full text-espresso/55 transition hover:bg-cream hover:text-espresso disabled:cursor-not-allowed disabled:opacity-25"
                                aria-label="Increase quantity"
                              >
                                <Plus size={14} />
                              </button>
                            </div>
                          </div>

                          <div className="text-left sm:text-right">
                            <p className="text-xs text-espresso/40">
                              {formatPrice(item.unitPrice)} ×{" "}
                              {item.quantity}
                            </p>

                            <p className="mt-1 font-display text-2xl text-espresso">
                              {formatPrice(
                                item.unitPrice *
                                  item.quantity
                              )}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </article>
                </ScrollReveal>
              ))}
            </div>

            {/* CONTINUE SHOPPING */}

            <ScrollReveal delay={100}>
              <Link
                to="/collections"
                className="mt-7 inline-flex items-center gap-2 text-sm font-semibold text-cocoa transition duration-300 hover:gap-3 hover:text-espresso"
              >
                <ArrowLeft size={16} />
                Continue Shopping
              </Link>
            </ScrollReveal>
          </div>

          {/* =========================================
              ORDER SUMMARY
          ========================================== */}

          <ScrollReveal delay={160}>
            <aside className="lg:sticky lg:top-28">
              <div className="rounded-[2rem] border border-espresso/10 bg-ivory p-6 shadow-luxury md:p-7">
                <p className="text-xs font-semibold uppercase tracking-[0.25em] text-caramel">
                  Order summary
                </p>

                <h2 className="mt-3 font-display text-3xl text-espresso">
                  Almost yours
                </h2>

                {/* SUMMARY */}

                <div className="mt-7 space-y-4 border-b border-espresso/10 pb-6">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-espresso/50">
                      Items
                    </span>

                    <span className="font-semibold text-espresso">
                      {cartCount}
                    </span>
                  </div>

                  <div className="flex items-center justify-between text-sm">
                    <span className="text-espresso/50">
                      Subtotal
                    </span>

                    <span className="font-semibold text-espresso">
                      {formatPrice(cartTotal)}
                    </span>
                  </div>

                  <div className="flex items-start justify-between gap-4 text-sm">
                    <span className="text-espresso/50">
                      Delivery
                    </span>

                    <span className="text-right text-xs font-semibold leading-5 text-cocoa">
                      Calculated at checkout
                    </span>
                  </div>
                </div>

                {/* TOTAL */}

                <div className="flex items-end justify-between gap-4 py-6">
                  <div>
                    <p className="text-xs uppercase tracking-[0.2em] text-espresso/40">
                      Total
                    </p>

                    <p className="mt-1 text-xs text-espresso/40">
                      Before delivery charges
                    </p>
                  </div>

                  <p className="font-display text-3xl text-espresso">
                    {formatPrice(cartTotal)}
                  </p>
                </div>

                {/* CHECKOUT */}

                <Link
                  to="/checkout"
                  className="group luxury-button-primary w-full"
                >
                  Proceed to Checkout
                  <ArrowRight
                    size={16}
                    className="transition group-hover:translate-x-0.5"
                  />
                </Link>

                {/* TRUST */}

                <div className="mt-6 grid gap-3 border-t border-espresso/10 pt-6">
                  <div className="flex items-center gap-3">
                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-champagne/20 text-cocoa">
                      <Truck size={16} />
                    </div>

                    <div>
                      <p className="text-xs font-semibold text-espresso">
                        Fresh delivery
                      </p>

                      <p className="mt-0.5 text-[10px] text-espresso/45">
                        Carefully packed for your occasion
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-champagne/20 text-cocoa">
                      <ShieldCheck size={16} />
                    </div>

                    <div>
                      <p className="text-xs font-semibold text-espresso">
                        Secure checkout
                      </p>

                      <p className="mt-0.5 text-[10px] text-espresso/45">
                        Your order details stay protected
                      </p>
                    </div>
                  </div>
                </div>

                <p className="mt-6 text-center text-xs leading-5 text-espresso/40">
                  Freshly prepared with care for your special
                  moments.
                </p>
              </div>
            </aside>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}

