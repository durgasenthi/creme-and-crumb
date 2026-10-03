
import {
  ArrowLeft,
  ArrowRight,
  CalendarDays,
  Check,
  CheckCircle2,
  Clock3,
  Copy,
  Home,
  Mail,
  MapPin,
  Phone,
  ShieldCheck,
  ShoppingBag,
  Truck,
} from "lucide-react";
import {
  useState,
} from "react";
import {
  Link,
  useParams,
} from "react-router-dom";

import ScrollReveal from "../components/ui/ScrollReveal";

interface OrderItem {
  cartItemId: string;
  cakeId: string;
  name: string;
  category: string;
  image: string;
  size: string;
  unitPrice: number;
  quantity: number;
}

interface CustomerDetails {
  fullName: string;
  phone: string;
  email: string;
  address: string;
  city: string;
  pincode: string;
  deliveryDate: string;
  deliveryTime: string;
  instructions: string;
}

interface Order {
  orderId: string;
  customer: CustomerDetails;
  items: OrderItem[];
  subtotal: number;
  deliveryCharge: number;
  total: number;
  createdAt: string;
}

function formatDeliveryDate(date: string): string {
  if (!date) {
    return "Date to be confirmed";
  }

  const parsedDate = new Date(`${date}T00:00:00`);

  if (Number.isNaN(parsedDate.getTime())) {
    return date;
  }

  return parsedDate.toLocaleDateString("en-IN", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

export default function OrderConfirmationPage() {
  const { orderId } = useParams<{
    orderId: string;
  }>();

  const [copied, setCopied] = useState(false);

  const storedOrder = localStorage.getItem(
    "creme_and_crumb_last_order"
  );

  let order: Order | null = null;

  try {
    if (storedOrder) {
      order = JSON.parse(storedOrder) as Order;
    }
  } catch {
    order = null;
  }

  const formatPrice = (price: number) =>
    `₹${price.toLocaleString("en-IN")}`;

  const handleCopyOrderId = async () => {
    if (!order) {
      return;
    }

    try {
      await navigator.clipboard.writeText(
        order.orderId
      );

      setCopied(true);

      window.setTimeout(() => {
        setCopied(false);
      }, 1800);
    } catch {
      setCopied(false);
    }
  };

  /*
   * =========================================
   * ORDER NOT FOUND
   * =========================================
   */

  if (!order || order.orderId !== orderId) {
    return (
      <section className="min-h-[75vh] bg-cream">
        <div className="container-luxury flex min-h-[75vh] items-center justify-center py-20">
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
                Crème & Crumb
              </p>

              <h1 className="mt-3 font-display text-5xl leading-tight text-espresso md:text-6xl">
                Order not found
              </h1>

              <p className="mx-auto mt-5 max-w-md text-sm leading-7 text-espresso/55">
                We couldn't find the order details on this
                device. The order may have been cleared or
                the confirmation link may no longer be
                available.
              </p>

              <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
                <Link
                  to="/collections"
                  className="luxury-button-primary"
                >
                  Explore Cakes
                  <ArrowRight size={16} />
                </Link>

                <Link
                  to="/"
                  className="luxury-button-outline"
                >
                  <Home size={16} />
                  Back Home
                </Link>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    );
  }

  return (
    <section className="overflow-hidden bg-cream">
      <div className="container-luxury py-10 md:py-16 lg:py-20">
        {/* =========================================
            SUCCESS HERO
        ========================================== */}

        <ScrollReveal>
          <div className="relative mx-auto max-w-4xl overflow-hidden rounded-[2.5rem] border border-espresso/10 bg-ivory px-5 py-12 text-center shadow-luxury sm:px-8 md:py-16">
            <div className="pointer-events-none absolute -left-24 -top-24 h-56 w-56 rounded-full bg-rose/10 blur-3xl" />

            <div className="pointer-events-none absolute -bottom-24 -right-24 h-56 w-56 rounded-full bg-champagne/20 blur-3xl" />

            <div className="relative">
              <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-espresso text-white shadow-luxury md:h-24 md:w-24">
                <Check
                  size={34}
                  strokeWidth={2.5}
                  className="md:h-10 md:w-10"
                />
              </div>

              <p className="mt-8 text-xs font-semibold uppercase tracking-[0.3em] text-caramel">
                Order confirmed
              </p>

              <h1 className="mx-auto mt-3 max-w-3xl font-display text-5xl leading-[1.05] text-espresso md:text-6xl lg:text-7xl">
                Thank you, {order.customer.fullName}
              </h1>

              <p className="mx-auto mt-6 max-w-2xl text-sm leading-7 text-espresso/55 md:text-base">
                Your cake order has been received. We’re
                looking forward to making something
                beautiful for your special moment.
              </p>

              <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
                <div className="inline-flex items-center gap-3 rounded-full border border-espresso/10 bg-white px-5 py-3">
                  <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-espresso/40">
                    Order
                  </span>

                  <span className="font-mono text-sm font-semibold text-espresso">
                    #{order.orderId}
                  </span>
                </div>

                <button
                  type="button"
                  onClick={handleCopyOrderId}
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-espresso/10 bg-white px-5 py-3 text-xs font-semibold text-espresso transition duration-300 hover:border-caramel/40 hover:bg-cream"
                >
                  {copied ? (
                    <CheckCircle2
                      size={15}
                      className="text-caramel"
                    />
                  ) : (
                    <Copy size={15} />
                  )}

                  {copied ? "Copied" : "Copy Order ID"}
                </button>
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* =========================================
            ORDER CONTENT
        ========================================== */}

        <div className="mx-auto mt-8 grid max-w-6xl gap-8 lg:grid-cols-[minmax(0,1fr)_380px] lg:items-start lg:gap-10">
          {/* =========================================
              LEFT COLUMN
          ========================================== */}

          <div className="space-y-8">
            {/* =========================================
                ORDER ITEMS
            ========================================== */}

            <ScrollReveal delay={100}>
              <section className="rounded-[2rem] border border-espresso/10 bg-ivory p-5 shadow-sm sm:p-6 md:p-7">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.25em] text-caramel">
                      Your cakes
                    </p>

                    <h2 className="mt-2 font-display text-3xl text-espresso md:text-4xl">
                      Order Items
                    </h2>

                    <p className="mt-2 text-xs text-espresso/45">
                      {order.items.reduce(
                        (total, item) =>
                          total + item.quantity,
                        0
                      )}{" "}
                      {order.items.reduce(
                        (total, item) =>
                          total + item.quantity,
                        0
                      ) === 1
                        ? "cake"
                        : "cakes"}{" "}
                      in this order
                    </p>
                  </div>

                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-champagne/20 text-caramel">
                    <ShoppingBag size={19} />
                  </div>
                </div>

                <div className="mt-7 space-y-4">
                  {order.items.map((item, index) => (
                    <div
                      key={item.cartItemId}
                      className="group rounded-[1.5rem] border border-espresso/10 bg-white p-3 transition duration-300 hover:-translate-y-0.5 hover:shadow-sm sm:p-4"
                    >
                      <div className="flex gap-4">
                        <Link
                          to={`/collections/${item.cakeId}`}
                          className="h-24 w-24 shrink-0 overflow-hidden rounded-2xl bg-champagne/20 sm:h-28 sm:w-28"
                          aria-label={`View ${item.name}`}
                        >
                          <img
                            src={item.image}
                            alt={item.name}
                            loading={
                              index === 0
                                ? "eager"
                                : "lazy"
                            }
                            className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                            onError={(
                              event
                            ) => {
                              event.currentTarget.style.display =
                                "none";
                            }}
                          />
                        </Link>

                        <div className="min-w-0 flex-1">
                          <div className="flex items-start justify-between gap-3">
                            <div className="min-w-0">
                              <p className="text-[9px] font-semibold uppercase tracking-[0.18em] text-caramel sm:text-[10px]">
                                {item.category}
                              </p>

                              <Link
                                to={`/collections/${item.cakeId}`}
                              >
                                <h3 className="mt-1 font-display text-xl leading-tight text-espresso transition duration-300 group-hover:text-cocoa sm:text-2xl">
                                  {item.name}
                                </h3>
                              </Link>
                            </div>

                            <p className="shrink-0 font-display text-lg text-espresso sm:text-xl">
                              {formatPrice(
                                item.unitPrice *
                                  item.quantity
                              )}
                            </p>
                          </div>

                          <div className="mt-3 flex flex-wrap gap-x-4 gap-y-1 text-xs text-espresso/45">
                            <span>
                              Size:{" "}
                              <strong className="text-espresso/70">
                                {item.size}
                              </strong>
                            </span>

                            <span>
                              Quantity:{" "}
                              <strong className="text-espresso/70">
                                {item.quantity}
                              </strong>
                            </span>
                          </div>

                          <p className="mt-2 text-[11px] text-espresso/35">
                            {formatPrice(
                              item.unitPrice
                            )}{" "}
                            per cake
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            </ScrollReveal>

            {/* =========================================
                DELIVERY DETAILS
            ========================================== */}

            <ScrollReveal delay={160}>
              <section className="rounded-[2rem] border border-espresso/10 bg-ivory p-5 shadow-sm sm:p-6 md:p-7">
                <div className="flex items-center gap-3">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-champagne/30 text-caramel">
                    <MapPin size={18} />
                  </div>

                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.2em] text-caramel">
                      Delivery
                    </p>

                    <h2 className="font-display text-3xl text-espresso md:text-4xl">
                      Delivery Details
                    </h2>
                  </div>
                </div>

                <div className="mt-7 grid gap-5 sm:grid-cols-2">
                  {/* Address */}

                  <div className="rounded-2xl bg-white p-5">
                    <div className="flex items-center gap-2">
                      <MapPin
                        size={15}
                        className="text-caramel"
                      />

                      <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-espresso/40">
                        Address
                      </p>
                    </div>

                    <p className="mt-3 text-sm leading-6 text-espresso/70">
                      {order.customer.address}
                    </p>

                    <p className="text-sm text-espresso/70">
                      {order.customer.city}{" "}
                      {order.customer.pincode}
                    </p>
                  </div>

                  {/* Schedule */}

                  <div className="rounded-2xl bg-white p-5">
                    <div className="flex items-center gap-2">
                      <CalendarDays
                        size={15}
                        className="text-caramel"
                      />

                      <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-espresso/40">
                        Delivery Schedule
                      </p>
                    </div>

                    <p className="mt-3 text-sm font-semibold text-espresso">
                      {formatDeliveryDate(
                        order.customer.deliveryDate
                      )}
                    </p>

                    <div className="mt-2 flex items-center gap-2 text-sm text-espresso/55">
                      <Clock3 size={14} />
                      {order.customer.deliveryTime}
                    </div>
                  </div>
                </div>

                {/* Contact */}

                <div className="mt-5 grid gap-5 border-t border-espresso/10 pt-5 sm:grid-cols-2">
                  <div>
                    <div className="flex items-center gap-2">
                      <Phone
                        size={14}
                        className="text-caramel"
                      />

                      <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-espresso/40">
                        Phone
                      </p>
                    </div>

                    <p className="mt-2 text-sm text-espresso/70">
                      {order.customer.phone}
                    </p>
                  </div>

                  {order.customer.email && (
                    <div>
                      <div className="flex items-center gap-2">
                        <Mail
                          size={14}
                          className="text-caramel"
                        />

                        <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-espresso/40">
                          Email
                        </p>
                      </div>

                      <p className="mt-2 break-all text-sm text-espresso/60">
                        {order.customer.email}
                      </p>
                    </div>
                  )}
                </div>

                {/* Instructions */}

                {order.customer.instructions && (
                  <div className="mt-5 rounded-2xl bg-cream p-5">
                    <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-espresso/40">
                      Special Instructions
                    </p>

                    <p className="mt-2 text-sm leading-6 text-espresso/65">
                      {order.customer.instructions}
                    </p>
                  </div>
                )}
              </section>
            </ScrollReveal>
          </div>

          {/* =========================================
              RIGHT COLUMN
          ========================================== */}

          <ScrollReveal delay={220}>
            <aside className="lg:sticky lg:top-28">
              <div className="rounded-[2rem] border border-espresso/10 bg-ivory p-5 shadow-luxury sm:p-6 md:p-7">
                <p className="text-xs font-semibold uppercase tracking-[0.25em] text-caramel">
                  Payment summary
                </p>

                <h2 className="mt-3 font-display text-3xl text-espresso md:text-4xl">
                  Order Total
                </h2>

                {/* Price */}

                <div className="mt-7 space-y-4 border-b border-espresso/10 pb-6">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-espresso/50">
                      Subtotal
                    </span>

                    <span className="font-semibold text-espresso">
                      {formatPrice(
                        order.subtotal
                      )}
                    </span>
                  </div>

                  <div className="flex items-center justify-between text-sm">
                    <span className="text-espresso/50">
                      Delivery
                    </span>

                    <span className="font-semibold text-cocoa">
                      {order.deliveryCharge === 0
                        ? "FREE"
                        : formatPrice(
                            order.deliveryCharge
                          )}
                    </span>
                  </div>
                </div>

                {/* Total */}

                <div className="flex items-end justify-between gap-4 py-6">
                  <div>
                    <p className="text-xs uppercase tracking-[0.2em] text-espresso/40">
                      Total
                    </p>

                    <p className="mt-1 text-xs text-espresso/40">
                      Order value
                    </p>
                  </div>

                  <p className="font-display text-3xl text-espresso md:text-4xl">
                    {formatPrice(order.total)}
                  </p>
                </div>

                {/* Status */}

                <div className="rounded-2xl border border-caramel/15 bg-cream p-4">
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-caramel">
                      <CheckCircle2 size={19} />
                    </div>

                    <div>
                      <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-caramel">
                        Order Status
                      </p>

                      <p className="mt-1 text-sm font-semibold text-espresso">
                        Order Received
                      </p>
                    </div>
                  </div>
                </div>

                {/* Delivery Trust */}

                <div className="mt-5 space-y-3">
                  <div className="flex items-center gap-3 rounded-2xl bg-white p-3.5">
                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-champagne/20 text-cocoa">
                      <Truck size={16} />
                    </div>

                    <div>
                      <p className="text-xs font-semibold text-espresso">
                        Fresh delivery
                      </p>

                      <p className="mt-0.5 text-[10px] leading-4 text-espresso/45">
                        Carefully prepared for your
                        occasion
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 rounded-2xl bg-white p-3.5">
                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-champagne/20 text-cocoa">
                      <ShieldCheck size={16} />
                    </div>

                    <div>
                      <p className="text-xs font-semibold text-espresso">
                        Order secured
                      </p>

                      <p className="mt-0.5 text-[10px] leading-4 text-espresso/45">
                        Your order details are safely
                        stored
                      </p>
                    </div>
                  </div>
                </div>

                {/* Actions */}

                <Link
                  to="/collections"
                  className="group luxury-button-primary mt-6 w-full"
                >
                  Continue Shopping
                  <ArrowRight
                    size={17}
                    className="transition group-hover:translate-x-0.5"
                  />
                </Link>

                <Link
                  to="/"
                  className="mt-3 flex w-full items-center justify-center gap-2 rounded-full border border-espresso/10 px-6 py-3.5 text-sm font-semibold text-espresso transition duration-300 hover:border-espresso/30 hover:bg-white"
                >
                  <Home size={16} />
                  Back to Home
                </Link>

                <Link
                  to="/collections"
                  className="mt-4 inline-flex w-full items-center justify-center gap-2 text-xs font-semibold text-cocoa transition duration-300 hover:gap-3 hover:text-espresso"
                >
                  <ArrowLeft size={14} />
                  Browse all cakes
                </Link>
              </div>
            </aside>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}

