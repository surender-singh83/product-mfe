import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import About from "./pages/About";
import { lazy, Suspense } from "react";
import SearchPage from "./pages/SearchPage";
import Header from "./componenets/Header/Header";

const ProductApp = lazy(() => import("./pages/ProductApp"));

export default function App() {
 
  return (
    <main>
      <Header />

      {/* Routes */}
      <Suspense fallback={"...loading"}>
        <Routes>
          <Route path="/" element={<Home />} />

          <Route path="/about" element={<About />} />

          <Route path="/product" element={<ProductApp />} />

          <Route path="/search" element={<SearchPage />} />
        </Routes>
      </Suspense>
    </main>
  );
}
