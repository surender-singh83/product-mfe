import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { BrowserRouter } from "react-router-dom";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { fetchProducts } from "./utils.ts";

const queryClient = new QueryClient();

// PREFETCH
queryClient.prefetchInfiniteQuery({
  queryKey: ["products"],
  queryFn: fetchProducts,
  initialPageParam: 0,
});

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <QueryClientProvider client={queryClient}>
        <App />
      </QueryClientProvider>
    </BrowserRouter>
  </StrictMode>,
);
