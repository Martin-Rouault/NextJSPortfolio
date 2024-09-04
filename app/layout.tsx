import type { Metadata } from "next";
import { GoogleTagManager } from "@next/third-parties/google";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import { Providers } from "./providers";
import "./globals.css";

export const metadata: Metadata = {
  title: "Martin Rouault - Web Developer",
  description:
    "Hi! I'm Martin, a web developper from Paris. I love building cool and minimalist UIs. I'm passionate about interfaces, design and providing the best experience.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${GeistSans.variable} ${GeistMono.variable}`}
      suppressHydrationWarning
    >
      <body className="antialiased max-w-xl mb-32 flex flex-col md:flex-row mx-4 mt-20 lg:mx-auto">
        <Providers>
          <GoogleTagManager gtmId="GTM-TR8CKLHN" />
          <div className="pointer-events-none fixed left-0 top-0 z-50 h-12 w-full bg-neutral-100 to-transparent backdrop-blur-xl [-webkit-mask-image:linear-gradient(to_bottom,black,transparent)] dark:bg-neutral-900"></div>
          <main>{children}</main>
        </Providers>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
