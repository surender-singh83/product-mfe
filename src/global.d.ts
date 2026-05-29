import React from "react";

declare global {
  namespace JSX {
    interface IntrinsicElements {
      img: React.DetailedHTMLProps<
        React.ImgHTMLAttributes<HTMLImageElement>,
        HTMLImageElement
      > & {
        fetchpriority?: "high" | "low" | "auto";
      };
    }
  }
}

export {};