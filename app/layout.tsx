import "./globals.css";
import { Analytics } from "@vercel/analytics/react";
import { Providers } from "./providers";
import dynamic from "next/dynamic";
export const metadata = {
  title:
    "use100hooks - Maximize Reusability with use100hooks: 100+ React Hooks",
  description:
    "use100hooks is a comprehensive collection of 100+ ready-to-use React Hooks",
  author: "ikigami-sama",
};

const Navbar = dynamic(() => import("@/components/Navbar"), {
  loading: () => <p>Loading...</p>,
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`bg-white dark:bg-black`}>
        <Providers>
          <Navbar />
          {children}
          <Analytics />
        </Providers>
      </body>
    </html>
  );
}
