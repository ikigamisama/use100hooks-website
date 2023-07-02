import Navbar from "@/components/Navbar";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react";

export const metadata = {
  title:
    "use100hooks - Maximize Reusability with use100hooks: 100+ React Hooks",
  description:
    "use100hooks is a comprehensive collection of 100+ ready-to-use React Hooks",
  author: "ikigami-sama",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
        <Analytics />
      </body>
    </html>
  );
}
