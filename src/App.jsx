import { useEffect } from "react";
import { Navigate, Route, Routes, useLocation, useParams } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Products from "./pages/Products";
import ProductPage from "./pages/ProductPage";
import Contact from "./pages/Contact";
import ThankYou from "./pages/ThankYou";
import NotFound from "./pages/NotFound";

function ServiceRedirect() {
  const { slug } = useParams();
  return <Navigate to={`/products/${slug}`} replace />;
}

function ScrollToTop() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const target = document.querySelector(hash);
      if (target) {
        target.scrollIntoView();
        return;
      }
    }
    window.scrollTo(0, 0);
  }, [pathname, hash]);

  return null;
}

export default function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="services" element={<Navigate to="/products" replace />} />
          <Route path="services/:slug" element={<ServiceRedirect />} />
          <Route path="products" element={<Products />} />
          <Route path="products/:slug" element={<ProductPage />} />
          <Route path="agri-scale-farm" element={<Navigate to="/products/agri-scale-farm" replace />} />
          <Route path="agri-track" element={<Navigate to="/products/agri-scale-farm" replace />} />
          <Route path="contact" element={<Contact />} />
          <Route path="thank-you" element={<ThankYou />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </>
  );
}
