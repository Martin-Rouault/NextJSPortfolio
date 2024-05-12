import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/react"
import { SpeedInsights } from "@vercel/speed-insights/next"
import { GeistSans } from 'geist/font/sans'
import { GeistMono } from 'geist/font/mono'
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
    <html lang="en" className={`${GeistSans.variable} ${GeistMono.variable}`}>
      <body
        className="antialiased flex min-h-screen flex-col mx-auto pt-12 pb-20 px-4 z-10 w-full max-w-screen-sm"
      >
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
