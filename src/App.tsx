import { Routes, Route, Link } from "react-router-dom";

import Home from "./pages/Home";
import About from "./pages/About";
import { lazy, Suspense } from "react";

const ProductApp = lazy(() => import("./pages/ProductApp"));

export default function App() {
  return (
    <main>
      {/* Navigation */}
      <nav className="flex gap-5 p-5 bg-gray-100">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/product">Product</Link>
      </nav>

      {/* Routes */}
      <Suspense fallback={"...loading"}>
        <Routes>
          <Route path="/" element={<Home />} />

          <Route path="/about" element={<About />} />

          <Route path="/product" element={<ProductApp />} />
        </Routes>
      </Suspense>
    </main>
  );
}
