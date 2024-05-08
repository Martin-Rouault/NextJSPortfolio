import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/react"
import { SpeedInsights } from "@vercel/speed-insights/next"
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Martin's Portfolio",
  description:
    "Hi! I'm Martin, a web developper from Paris. I love building cool and minimalist UIs. I'm passionate about interfaces, design and providing the best experience.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} antialiased flex min-h-screen flex-col mx-auto pt-12 pb-20 px-4 z-10 w-full max-w-screen-sm`}
      >
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
