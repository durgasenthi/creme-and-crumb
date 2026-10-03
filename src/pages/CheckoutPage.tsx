
import {
  ArrowLeft,
  ArrowRight,
  CalendarDays,
  CheckCircle2,
  Clock3,
  Mail,
  MapPin,
  Phone,
  ShieldCheck,
  ShoppingBag,
  Truck,
  User,
} from "lucide-react";
import { type FormEvent, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import ScrollReveal from "../components/ui/ScrollReveal";
import { useCart } from "../context/CartContext";

interface CheckoutForm {
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

const initialForm: CheckoutForm = {
  fullName: "",
  phone: "",
  email: "",
  address: "",
  city: "",
  pincode: "",
  deliveryDate: "",
  deliveryTime: "",
  instructions: "",
};

const deliverySlots = [
  "10:00 AM - 12:00 PM",
  "12:00 PM - 02:00 PM",
  "02:00 PM - 04:00 PM",
  "04:00 PM - 06:00 PM",
  "06:00 PM - 08:00 PM",
];

function getTodayDate(): string {
  const today = new Date();

  const year = today.getFullYear();
  const month = String(today.getMonth() + 1).padStart(2, "0");
  const day = String(today.getDate()).padStart(2, "0");

  return `${year}-${month}-${day}`;
}

export default function CheckoutPage() {
  const navigate = useNavigate();

  const {
    items,
    cartCount,
    cartTotal,
    clearCart,
  } = useCart();

  const [form, setForm] =
    useState<CheckoutForm>(initialForm);

  const [errors, setErrors] = useState<
    Partial<Record<keyof CheckoutForm, string>>
  >({});

  const [isSubmitting, setIsSubmitting] =
    useState(false);

  const formatPrice = (price: number) =>
    `₹${price.toLocaleString("en-IN")}`;

  const deliveryCharge = cartTotal >= 2000 ? 0 : 100;
  const grandTotal = cartTotal + deliveryCharge;

  const updateField = (
    field: keyof CheckoutForm,
    value: string
  ) => {
    setForm((current) => ({
      ...current,
      [field]: value,
    }));

    setErrors((current) => ({
      ...current,
      [field]: undefined,
    }));
  };

  const validateForm = () => {
    const newErrors: Partial<
      Record<keyof CheckoutForm, string>
    > = {};

    if (!form.fullName.trim()) {
      newErrors.fullName = "Please enter your name.";
    }

    if (!form.phone.trim()) {
      newErrors.phone =
        "Please enter your phone number.";
    } else if (
      !/^[6-9]\d{9}$/.test(form.phone.trim())
    ) {
      newErrors.phone =
        "Please enter a valid 10-digit phone number.";
    }

    if (
      form.email.trim() &&
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(
        form.email.trim()
      )
    ) {
      newErrors.email =
        "Please enter a valid email address.";
    }

    if (!form.address.trim()) {
      newErrors.address =
        "Please enter your delivery address.";
    }

    if (!form.city.trim()) {
      newErrors.city = "Please enter your city.";
    }

    if (!form.pincode.trim()) {
      newErrors.pincode =
        "Please enter your pincode.";
    } else if (!/^\d{6}$/.test(form.pincode.trim())) {
      newErrors.pincode =
        "Please enter a valid 6-digit pincode.";
    }

    if (!form.deliveryDate) {
      newErrors.deliveryDate =
        "Please select a delivery date.";
    }

    if (!form.deliveryTime) {
      newErrors.deliveryTime =
        "Please select a delivery time.";
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (
    event: FormEvent<HTMLFormElement>
  ) => {
    event.preventDefault();

    if (isSubmitting) {
      return;
    }

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    const orderId = `CC-${Date.now()
      .toString()
      .slice(-8)}`;

    const order = {
      orderId,
      customer: form,
      items,
      subtotal: cartTotal,
      deliveryCharge,
      total: grandTotal,
      createdAt: new Date().toISOString(),
    };

    localStorage.setItem(
      "creme_and_crumb_last_order",
      JSON.stringify(order)
    );

    clearCart();

    navigate(`/order-confirmation/${orderId}`);
  };

  /* =========================================
     EMPTY CART
  ========================================== */

  if (items.length === 0) {
    return (
      <section className="bg-cream">
        <div className="container-luxury flex min-h-[70vh] items-center justify-center py-20">
          <ScrollReveal>
            <div className="max-w-xl text-center">
              <div className="mx-auto flex h-24 w-24 items-center justify-center rounded-full border border-espresso/10 bg-ivory shadow-luxury">
                <ShoppingBag
                  size={32}
                  strokeWidth={1.5}
                  className="text-caramel"
                />
              </div>

              <p className="mt-8 text-xs font-semibold uppercase tracking-[0.3em] text-caramel">
                Checkout
              </p>

              <h1 className="mt-3 font-display text-5xl leading-tight text-espresso md:text-6xl">
                Your cart is empty
              </h1>

              <p className="mx-auto mt-5 max-w-md text-sm leading-7 text-espresso/55">
                Add a beautiful cake to your cart before
                continuing to checkout.
              </p>

              <Link
                to="/collections"
                className="luxury-button-primary mt-8"
              >
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
      <div className="container-luxury py-10 md:py-16 lg:py-20">
        {/* =========================================
            BACK
        ========================================== */}

        <ScrollReveal>
          <Link
            to="/cart"
            className="inline-flex items-center gap-2 text-sm font-semibold text-cocoa transition duration-300 hover:gap-3 hover:text-espresso"
          >
            <ArrowLeft size={16} />
            Back to Cart
          </Link>
        </ScrollReveal>

        {/* =========================================
            HEADER
        ========================================== */}

        <ScrollReveal delay={80}>
          <div className="mt-8 max-w-3xl md:mt-10">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-caramel">
              Almost there
            </p>

            <h1 className="mt-3 font-display text-5xl leading-tight text-espresso md:text-6xl">
              Checkout
            </h1>

            <p className="mt-4 text-sm leading-7 text-espresso/55 md:text-base">
              Tell us where and when you'd like your
              freshly baked cake delivered.
            </p>
          </div>
        </ScrollReveal>

        {/* =========================================
            MAIN GRID
        ========================================== */}

        <div className="mt-10 grid gap-8 lg:grid-cols-[minmax(0,1fr)_380px] lg:items-start lg:gap-10">
          {/* =========================================
              CHECKOUT FORM
          ========================================== */}

          <ScrollReveal delay={120}>
            <form
              id="checkout-form"
              onSubmit={handleSubmit}
              className="rounded-[2rem] border border-espresso/10 bg-ivory p-5 shadow-sm sm:p-6 md:p-8"
            >
              {/* CUSTOMER INFORMATION */}

              <div>
                <div className="flex items-center gap-3">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-champagne/30 text-caramel">
                    <User size={18} />
                  </div>

                  <div>
                    <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-caramel">
                      Step 01
                    </p>

                    <h2 className="font-display text-3xl text-espresso">
                      Your Details
                    </h2>
                  </div>
                </div>

                <div className="mt-7 grid gap-5 md:grid-cols-2">
                  {/* FULL NAME */}

                  <div>
                    <label
                      htmlFor="fullName"
                      className="text-sm font-semibold text-espresso"
                    >
                      Full Name
                    </label>

                    <div className="relative mt-2">
                      <User
                        size={17}
                        className="absolute left-4 top-1/2 -translate-y-1/2 text-espresso/30"
                      />

                      <input
                        id="fullName"
                        type="text"
                        value={form.fullName}
                        onChange={(event) =>
                          updateField(
                            "fullName",
                            event.target.value
                          )
                        }
                        placeholder="Enter your full name"
                        autoComplete="name"
                        className={`h-12 w-full rounded-2xl border bg-white pl-11 pr-4 text-sm text-espresso outline-none transition placeholder:text-espresso/30 focus:ring-2 focus:ring-caramel/10 ${
                          errors.fullName
                            ? "border-red-400"
                            : "border-espresso/10 focus:border-caramel/50"
                        }`}
                      />
                    </div>

                    {errors.fullName && (
                      <p className="mt-1.5 text-xs text-red-600">
                        {errors.fullName}
                      </p>
                    )}
                  </div>

                  {/* PHONE */}

                  <div>
                    <label
                      htmlFor="checkoutPhone"
                      className="text-sm font-semibold text-espresso"
                    >
                      Phone Number
                    </label>

                    <div className="relative mt-2">
                      <Phone
                        size={17}
                        className="absolute left-4 top-1/2 -translate-y-1/2 text-espresso/30"
                      />

                      <input
                        id="checkoutPhone"
                        type="tel"
                        inputMode="numeric"
                        value={form.phone}
                        onChange={(event) =>
                          updateField(
                            "phone",
                            event.target.value
                              .replace(/\D/g, "")
                              .slice(0, 10)
                          )
                        }
                        placeholder="10-digit phone number"
                        autoComplete="tel"
                        className={`h-12 w-full rounded-2xl border bg-white pl-11 pr-4 text-sm text-espresso outline-none transition placeholder:text-espresso/30 focus:ring-2 focus:ring-caramel/10 ${
                          errors.phone
                            ? "border-red-400"
                            : "border-espresso/10 focus:border-caramel/50"
                        }`}
                      />
                    </div>

                    {errors.phone && (
                      <p className="mt-1.5 text-xs text-red-600">
                        {errors.phone}
                      </p>
                    )}
                  </div>

                  {/* EMAIL */}

                  <div className="md:col-span-2">
                    <label
                      htmlFor="checkoutEmail"
                      className="text-sm font-semibold text-espresso"
                    >
                      Email Address{" "}
                      <span className="font-normal text-espresso/35">
                        (Optional)
                      </span>
                    </label>

                    <div className="relative mt-2">
                      <Mail
                        size={17}
                        className="absolute left-4 top-1/2 -translate-y-1/2 text-espresso/30"
                      />

                      <input
                        id="checkoutEmail"
                        type="email"
                        value={form.email}
                        onChange={(event) =>
                          updateField(
                            "email",
                            event.target.value
                          )
                        }
                        placeholder="you@example.com"
                        autoComplete="email"
                        className={`h-12 w-full rounded-2xl border bg-white pl-11 pr-4 text-sm text-espresso outline-none transition placeholder:text-espresso/30 focus:ring-2 focus:ring-caramel/10 ${
                          errors.email
                            ? "border-red-400"
                            : "border-espresso/10 focus:border-caramel/50"
                        }`}
                      />
                    </div>

                    {errors.email && (
                      <p className="mt-1.5 text-xs text-red-600">
                        {errors.email}
                      </p>
                    )}
                  </div>
                </div>
              </div>

              {/* DIVIDER */}

              <div className="my-10 border-t border-espresso/10" />

              {/* DELIVERY ADDRESS */}

              <div>
                <div className="flex items-center gap-3">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-champagne/30 text-caramel">
                    <MapPin size={18} />
                  </div>

                  <div>
                    <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-caramel">
                      Step 02
                    </p>

                    <h2 className="font-display text-3xl text-espresso">
                      Delivery Address
                    </h2>
                  </div>
                </div>

                <div className="mt-7 space-y-5">
                  {/* ADDRESS */}

                  <div>
                    <label
                      htmlFor="address"
                      className="text-sm font-semibold text-espresso"
                    >
                      Full Address
                    </label>

                    <textarea
                      id="address"
                      value={form.address}
                      onChange={(event) =>
                        updateField(
                          "address",
                          event.target.value
                        )
                      }
                      placeholder="House / Flat number, street, area..."
                      rows={3}
                      autoComplete="street-address"
                      className={`mt-2 w-full resize-none rounded-2xl border bg-white px-4 py-3 text-sm leading-6 text-espresso outline-none transition placeholder:text-espresso/30 focus:ring-2 focus:ring-caramel/10 ${
                        errors.address
                          ? "border-red-400"
                          : "border-espresso/10 focus:border-caramel/50"
                      }`}
                    />

                    {errors.address && (
                      <p className="mt-1.5 text-xs text-red-600">
                        {errors.address}
                      </p>
                    )}
                  </div>

                  <div className="grid gap-5 md:grid-cols-2">
                    {/* CITY */}

                    <div>
                      <label
                        htmlFor="city"
                        className="text-sm font-semibold text-espresso"
                      >
                        City
                      </label>

                      <input
                        id="city"
                        type="text"
                        value={form.city}
                        onChange={(event) =>
                          updateField(
                            "city",
                            event.target.value
                          )
                        }
                        placeholder="Enter city"
                        autoComplete="address-level2"
                        className={`mt-2 h-12 w-full rounded-2xl border bg-white px-4 text-sm text-espresso outline-none transition placeholder:text-espresso/30 focus:ring-2 focus:ring-caramel/10 ${
                          errors.city
                            ? "border-red-400"
                            : "border-espresso/10 focus:border-caramel/50"
                        }`}
                      />

                      {errors.city && (
                        <p className="mt-1.5 text-xs text-red-600">
                          {errors.city}
                        </p>
                      )}
                    </div>

                    {/* PINCODE */}

                    <div>
                      <label
                        htmlFor="pincode"
                        className="text-sm font-semibold text-espresso"
                      >
                        Pincode
                      </label>

                      <input
                        id="pincode"
                        type="text"
                        inputMode="numeric"
                        value={form.pincode}
                        onChange={(event) =>
                          updateField(
                            "pincode",
                            event.target.value
                              .replace(/\D/g, "")
                              .slice(0, 6)
                          )
                        }
                        placeholder="6-digit pincode"
                        autoComplete="postal-code"
                        className={`mt-2 h-12 w-full rounded-2xl border bg-white px-4 text-sm text-espresso outline-none transition placeholder:text-espresso/30 focus:ring-2 focus:ring-caramel/10 ${
                          errors.pincode
                            ? "border-red-400"
                            : "border-espresso/10 focus:border-caramel/50"
                        }`}
                      />

                      {errors.pincode && (
                        <p className="mt-1.5 text-xs text-red-600">
                          {errors.pincode}
                        </p>
                      )}
                    </div>
                  </div>
                </div>
              </div>

              {/* DIVIDER */}

              <div className="my-10 border-t border-espresso/10" />

              {/* DELIVERY SCHEDULE */}

              <div>
                <div className="flex items-center gap-3">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-champagne/30 text-caramel">
                    <CalendarDays size={18} />
                  </div>

                  <div>
                    <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-caramel">
                      Step 03
                    </p>

                    <h2 className="font-display text-3xl text-espresso">
                      Delivery Schedule
                    </h2>
                  </div>
                </div>

                <div className="mt-7 grid gap-5 md:grid-cols-2">
                  {/* DATE */}

                  <div>
                    <label
                      htmlFor="deliveryDate"
                      className="text-sm font-semibold text-espresso"
                    >
                      Delivery Date
                    </label>

                    <div className="relative mt-2">
                      <CalendarDays
                        size={17}
                        className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-espresso/30"
                      />

                      <input
                        id="deliveryDate"
                        type="date"
                        value={form.deliveryDate}
                        min={getTodayDate()}
                        onChange={(event) =>
                          updateField(
                            "deliveryDate",
                            event.target.value
                          )
                        }
                        className={`h-12 w-full rounded-2xl border bg-white pl-11 pr-4 text-sm text-espresso outline-none transition focus:ring-2 focus:ring-caramel/10 ${
                          errors.deliveryDate
                            ? "border-red-400"
                            : "border-espresso/10 focus:border-caramel/50"
                        }`}
                      />
                    </div>

                    {errors.deliveryDate && (
                      <p className="mt-1.5 text-xs text-red-600">
                        {errors.deliveryDate}
                      </p>
                    )}

                    <p className="mt-2 text-[11px] text-espresso/40">
                      Choose a date from today onwards.
                    </p>
                  </div>

                  {/* TIME */}

                  <div>
                    <label
                      htmlFor="deliveryTime"
                      className="text-sm font-semibold text-espresso"
                    >
                      Delivery Time
                    </label>

                    <div className="relative mt-2">
                      <Clock3
                        size={17}
                        className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-espresso/30"
                      />

                      <select
                        id="deliveryTime"
                        value={form.deliveryTime}
                        onChange={(event) =>
                          updateField(
                            "deliveryTime",
                            event.target.value
                          )
                        }
                        className={`h-12 w-full appearance-none rounded-2xl border bg-white pl-11 pr-4 text-sm text-espresso outline-none transition focus:ring-2 focus:ring-caramel/10 ${
                          errors.deliveryTime
                            ? "border-red-400"
                            : "border-espresso/10 focus:border-caramel/50"
                        }`}
                      >
                        <option value="">
                          Select time slot
                        </option>

                        {deliverySlots.map((slot) => (
                          <option key={slot} value={slot}>
                            {slot}
                          </option>
                        ))}
                      </select>
                    </div>

                    {errors.deliveryTime && (
                      <p className="mt-1.5 text-xs text-red-600">
                        {errors.deliveryTime}
                      </p>
                    )}

                    <p className="mt-2 text-[11px] text-espresso/40">
                      Select the preferred delivery window.
                    </p>
                  </div>
                </div>
              </div>

              {/* DIVIDER */}

              <div className="my-10 border-t border-espresso/10" />

              {/* SPECIAL INSTRUCTIONS */}

              <div>
                <label
                  htmlFor="checkoutInstructions"
                  className="text-sm font-semibold text-espresso"
                >
                  Special Instructions{" "}
                  <span className="font-normal text-espresso/35">
                    (Optional)
                  </span>
                </label>

                <textarea
                  id="checkoutInstructions"
                  value={form.instructions}
                  onChange={(event) =>
                    updateField(
                      "instructions",
                      event.target.value
                    )
                  }
                  placeholder="Cake message, decoration preference, delivery notes..."
                  rows={4}
                  className="mt-2 w-full resize-none rounded-2xl border border-espresso/10 bg-white px-4 py-3 text-sm leading-6 text-espresso outline-none transition placeholder:text-espresso/30 focus:border-caramel/50 focus:ring-2 focus:ring-caramel/10"
                />

                <p className="mt-2 text-[11px] text-espresso/40">
                  Add any details you'd like our kitchen team
                  to know.
                </p>
              </div>

              {/* MOBILE PLACE ORDER */}

              <button
                type="submit"
                disabled={isSubmitting}
                className="luxury-button-primary mt-8 w-full disabled:cursor-not-allowed disabled:opacity-60 lg:hidden"
              >
                {isSubmitting ? (
                  <>
                    <span className="h-4 w-4 animate-spin rounded-full border-2 border-white/40 border-t-white" />
                    Placing Order...
                  </>
                ) : (
                  <>
                    <ShoppingBag size={18} />
                    Place Order · {formatPrice(grandTotal)}
                    <ArrowRight size={16} />
                  </>
                )}
              </button>
            </form>
          </ScrollReveal>

          {/* =========================================
              ORDER SUMMARY
          ========================================== */}

          <ScrollReveal delay={220}>
            <aside className="lg:sticky lg:top-28">
              <div className="rounded-[2rem] border border-espresso/10 bg-ivory p-5 shadow-luxury sm:p-6 md:p-7">
                <p className="text-xs font-semibold uppercase tracking-[0.25em] text-caramel">
                  Your order
                </p>

                <h2 className="mt-3 font-display text-3xl text-espresso">
                  Order Summary
                </h2>

                {/* ITEMS */}

                <div className="mt-7 space-y-4">
                  {items.map((item) => (
                    <div
                      key={item.cartItemId}
                      className="flex gap-3"
                    >
                      <Link
                        to={`/collections/${item.cakeId}`}
                        className="group h-16 w-16 shrink-0 overflow-hidden rounded-xl bg-champagne/20"
                      >
                        <img
                          src={item.image}
                          alt={item.name}
                          loading="lazy"
                          className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                        />
                      </Link>

                      <div className="min-w-0 flex-1">
                        <h3 className="truncate text-sm font-semibold text-espresso">
                          {item.name}
                        </h3>

                        <p className="mt-1 text-xs text-espresso/45">
                          {item.size} × {item.quantity}
                        </p>

                        <p className="mt-1 text-sm font-semibold text-cocoa">
                          {formatPrice(
                            item.unitPrice *
                              item.quantity
                          )}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>

                {/* FREE DELIVERY MESSAGE */}

                {deliveryCharge === 0 ? (
                  <div className="mt-6 flex items-start gap-3 rounded-2xl border border-caramel/20 bg-champagne/10 p-4">
                    <CheckCircle2
                      size={17}
                      className="mt-0.5 shrink-0 text-cocoa"
                    />

                    <div>
                      <p className="text-xs font-semibold text-espresso">
                        Free delivery unlocked
                      </p>

                      <p className="mt-1 text-[11px] leading-5 text-espresso/50">
                        Your order qualifies for complimentary
                        delivery.
                      </p>
                    </div>
                  </div>
                ) : (
                  <div className="mt-6 flex items-start gap-3 rounded-2xl border border-espresso/10 bg-cream p-4">
                    <Truck
                      size={17}
                      className="mt-0.5 shrink-0 text-caramel"
                    />

                    <div>
                      <p className="text-xs font-semibold text-espresso">
                        Delivery
                      </p>

                      <p className="mt-1 text-[11px] leading-5 text-espresso/50">
                        Free delivery on orders above ₹2,000.
                      </p>
                    </div>
                  </div>
                )}

                {/* PRICE BREAKDOWN */}

                <div className="mt-7 space-y-4 border-t border-espresso/10 pt-6">
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

                  <div className="flex items-center justify-between text-sm">
                    <span className="text-espresso/50">
                      Delivery
                    </span>

                    <span className="font-semibold text-cocoa">
                      {deliveryCharge === 0
                        ? "FREE"
                        : formatPrice(deliveryCharge)}
                    </span>
                  </div>
                </div>

                {/* GRAND TOTAL */}

                <div className="mt-6 flex items-end justify-between gap-4 border-t border-espresso/10 pt-6">
                  <div>
                    <p className="text-xs uppercase tracking-[0.2em] text-espresso/40">
                      Total
                    </p>

                    <p className="mt-1 text-xs text-espresso/40">
                      Including delivery
                    </p>
                  </div>

                  <p className="font-display text-3xl text-espresso">
                    {formatPrice(grandTotal)}
                  </p>
                </div>

                {/* DESKTOP PLACE ORDER */}

                <button
                  type="submit"
                  form="checkout-form"
                  disabled={isSubmitting}
                  className="luxury-button-primary mt-7 hidden w-full disabled:cursor-not-allowed disabled:opacity-60 lg:inline-flex"
                >
                  {isSubmitting ? (
                    <>
                      <span className="h-4 w-4 animate-spin rounded-full border-2 border-white/40 border-t-white" />
                      Placing Order...
                    </>
                  ) : (
                    <>
                      <ShoppingBag size={18} />
                      Place Order · {formatPrice(grandTotal)}
                      <ArrowRight size={16} />
                    </>
                  )}
                </button>

                {/* TRUST */}

                <div className="mt-6 space-y-3 border-t border-espresso/10 pt-6">
                  <div className="flex items-center gap-3">
                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-champagne/20 text-cocoa">
                      <ShieldCheck size={16} />
                    </div>

                    <div>
                      <p className="text-xs font-semibold text-espresso">
                        Secure checkout
                      </p>

                      <p className="mt-0.5 text-[10px] text-espresso/45">
                        Your order details are stored locally
                        for this demo.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-champagne/20 text-cocoa">
                      <Truck size={16} />
                    </div>

                    <div>
                      <p className="text-xs font-semibold text-espresso">
                        Fresh delivery
                      </p>

                      <p className="mt-0.5 text-[10px] text-espresso/45">
                        Carefully packed for your special
                        moment.
                      </p>
                    </div>
                  </div>
                </div>

                <p className="mt-6 text-center text-[11px] leading-5 text-espresso/40">
                  By placing your order, you confirm that
                  the delivery details provided are correct.
                </p>
              </div>
            </aside>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}

