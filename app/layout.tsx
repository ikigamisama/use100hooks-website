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
  themeColor: "black",
  openGraph: {
    title:
      "use100hooks - Maximize Reusability with use100hooks: 100+ React Hooks",
    description:
      "use100hooks is a comprehensive collection of 100+ ready-to-use React Hooks",
    url: "https://use100hooks.vercel.app",
    images: ["https://use100hooks.vercel.app/main-banner.jpg"],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "use100hooks - Maximize Reusability with use100hooks: 100+ React Hooks",
    description:
      "use100hooks is a comprehensive collection of 100+ ready-to-use React Hooks",
    creator: "@iikigami",
    images: ["https://nextjs.org/og.png"],
  },
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
