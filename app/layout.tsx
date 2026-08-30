import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "velrey.dev",
  description:
    "We build mobile apps and Roblox games. Clean code, polished experiences, shipped on time.",
  metadataBase: new URL("https://velrey.dev"),
  openGraph: {
    title: "velrey.dev",
    description:
      "We build mobile apps and Roblox games. Clean code, polished experiences, shipped on time.",
    url: "https://velrey.dev",
    siteName: "Velrey",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "velrey.dev",
    description: "We build mobile apps and Roblox games. Clean code, polished experiences, shipped on time.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-[#080808] text-[#f0f0f0]">
        <div className="grain" aria-hidden="true" />
        {children}
      </body>
    </html>
  );
}
