
import {
  BrowserRouter,
  Route,
  Routes,
} from "react-router-dom";

import PageLayout from "./components/layout/PageLayout";

import Hero from "./components/home/Hero";
import FeaturedCakes from "./components/home/FeaturedCakes";
import CakeCategories from "./components/home/CakeCategories";
import WhyChooseUs from "./components/home/WhyChooseUs";
import HomeCTA from "./components/home/HomeCTA";

import CollectionsPage from "./pages/CollectionsPage";
import CakeDetailPage from "./pages/CakeDetailPage";

import CartPage from "./pages/CartPage";
import CheckoutPage from "./pages/CheckoutPage";
import OrderConfirmationPage from "./pages/OrderConfirmationPage";

function Home() {
  return (
    <PageLayout>
      <Hero />
      <FeaturedCakes />
      <CakeCategories />
      <WhyChooseUs />
      <HomeCTA />
    </PageLayout>
  );
}

function PlaceholderPage({
  title,
}: {
  title: string;
}) {
  return (
    <PageLayout>
      <div className="container-luxury py-32 text-center">
        <h1 className="font-display text-5xl text-espresso">
          {title}
        </h1>

        <p className="mt-4 text-espresso/60">
          This page will be built in the next phase.
        </p>
      </div>
    </PageLayout>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* HOME */}
        <Route path="/" element={<Home />} />

        {/* COLLECTIONS */}
        <Route
          path="/collections"
          element={
            <PageLayout>
              <CollectionsPage />
            </PageLayout>
          }
        />

        {/* CAKE DETAIL */}
        <Route
          path="/collections/:cakeId"
          element={
            <PageLayout>
              <CakeDetailPage />
            </PageLayout>
          }
        />

        {/* CUSTOMIZE */}
        <Route
          path="/customize"
          element={
            <PlaceholderPage title="Design Your Cake" />
          }
        />

        {/* STORY */}
        <Route
          path="/story"
          element={
            <PlaceholderPage title="Our Story" />
          }
        />

        {/* CONTACT */}
        <Route
          path="/contact"
          element={
            <PlaceholderPage title="Contact" />
          }
        />

        {/* CART */}
        <Route
          path="/cart"
          element={
            <PageLayout>
              <CartPage />
            </PageLayout>
          }
        />

        {/* CHECKOUT */}
        <Route
          path="/checkout"
          element={
            <PageLayout>
              <CheckoutPage />
            </PageLayout>
          }
        />

        {/* ORDER CONFIRMATION */}
        <Route
          path="/order-confirmation/:orderId"
          element={
            <PageLayout>
              <OrderConfirmationPage />
            </PageLayout>
          }
        />

        {/* 404 */}
        <Route
          path="*"
          element={
            <PlaceholderPage title="Page Not Found" />
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

