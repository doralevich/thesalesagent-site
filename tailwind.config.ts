import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./lib/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        // Read out of public/images/the-sales-agent-wordmark.svg - the violet the brackets are
        // filled with, #6459A6, is the brand. Taken from the vector rather than sampled off a
        // raster, so it is the exact value the logo uses and not a close neighbour.
        //
        // Same two-tone problem the CFO site has, for the same reason: at 50% lightness this
        // violet is legible on the light grounds and muddies against the near-black one. So
        // `brand` is the wordmark colour and `brand-tint` is the same hue lifted, which is what
        // the dark sections use.
        brand: {
          DEFAULT: "#6459A6",
          dark: "#443D71",
          tint: "#9C95C6",
        },
        // The dark ground carries a trace of the brand hue rather than being neutral black, so
        // the violet sits on something rather than beside it.
        ground: "#0D0B1C",
        cream: "#F2F1F6",
        ink: "#1A1A1A",
      },
    },
  },
  plugins: [],
};
export default config;
