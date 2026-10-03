
import {
  Menu,
  ShoppingBag,
  X,
} from "lucide-react";
import { Link, NavLink } from "react-router-dom";
import { useState } from "react";

import { useCart } from "../../context/CartContext";

const navItems = [
  {
    label: "Home",
    path: "/",
  },
  {
    label: "Collections",
    path: "/collections",
  },
  {
    label: "Our Story",
    path: "/story",
  },
  {
    label: "Contact",
    path: "/contact",
  },
];

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] =
    useState(false);

  const { cartCount } = useCart();

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 border-b border-espresso/10 bg-cream/95 backdrop-blur-md">
      <div className="container-luxury">
        <div className="flex h-20 items-center justify-between">
          {/* =========================================
              LOGO
          ========================================== */}
          <Link
            to="/"
            onClick={closeMobileMenu}
            className="group"
          >
            <span className="block font-display text-2xl font-semibold tracking-tight text-espresso transition group-hover:text-cocoa">
              Crème & Crumb
            </span>

            <span className="mt-0.5 block text-[9px] font-semibold uppercase tracking-[0.35em] text-caramel">
              Artisan Patisserie
            </span>
          </Link>

          {/* =========================================
              DESKTOP NAVIGATION
          ========================================== */}
          <nav className="hidden items-center gap-8 md:flex">
            {navItems.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                className={({ isActive }) =>
                  `relative text-sm font-medium transition ${
                    isActive
                      ? "text-espresso"
                      : "text-espresso/55 hover:text-espresso"
                  }`
                }
              >
                {item.label}
              </NavLink>
            ))}
          </nav>

          {/* =========================================
              RIGHT ACTIONS
          ========================================== */}
          <div className="flex items-center gap-3">
            {/* Cart */}
            <Link
              to="/cart"
              className="relative flex h-11 w-11 items-center justify-center rounded-full border border-espresso/10 bg-ivory text-espresso transition hover:border-caramel/40 hover:bg-white"
              aria-label={`Shopping cart with ${cartCount} items`}
            >
              <ShoppingBag size={18} />

              {cartCount > 0 && (
                <span className="absolute -right-1 -top-1 flex h-5 min-w-5 items-center justify-center rounded-full bg-espresso px-1 text-[10px] font-bold text-white">
                  {cartCount > 99 ? "99+" : cartCount}
                </span>
              )}
            </Link>

            {/* Mobile Menu Button */}
            <button
              type="button"
              onClick={() =>
                setMobileMenuOpen((value) => !value)
              }
              className="flex h-11 w-11 items-center justify-center rounded-full border border-espresso/10 bg-ivory text-espresso transition hover:border-caramel/40 hover:bg-white md:hidden"
              aria-label={
                mobileMenuOpen
                  ? "Close navigation menu"
                  : "Open navigation menu"
              }
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? (
                <X size={19} />
              ) : (
                <Menu size={19} />
              )}
            </button>
          </div>
        </div>

        {/* =========================================
            MOBILE NAVIGATION
        ========================================== */}
        {mobileMenuOpen && (
          <div className="border-t border-espresso/10 py-5 md:hidden">
            <nav className="flex flex-col gap-2">
              {navItems.map((item) => (
                <NavLink
                  key={item.path}
                  to={item.path}
                  onClick={closeMobileMenu}
                  className={({ isActive }) =>
                    `rounded-2xl px-4 py-3 text-sm font-medium transition ${
                      isActive
                        ? "bg-espresso text-white"
                        : "text-espresso/60 hover:bg-ivory hover:text-espresso"
                    }`
                  }
                >
                  {item.label}
                </NavLink>
              ))}

              {/* Mobile Cart Link */}
              <Link
                to="/cart"
                onClick={closeMobileMenu}
                className="mt-2 flex items-center justify-between rounded-2xl bg-ivory px-4 py-3 text-sm font-semibold text-espresso"
              >
                <span className="flex items-center gap-2">
                  <ShoppingBag size={17} />
                  Shopping Cart
                </span>

                <span className="rounded-full bg-espresso px-2.5 py-1 text-[10px] font-bold text-white">
                  {cartCount}
                </span>
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
