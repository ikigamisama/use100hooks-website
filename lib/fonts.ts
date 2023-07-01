import { Inter, Satisfy } from "next/font/google";

export const satisfy = Satisfy({
  weight: "400",
  subsets: ["latin"],
});

export const inter = Inter({
  weight: ["400", "500", "700", "900"],
  subsets: ["latin"],
});
