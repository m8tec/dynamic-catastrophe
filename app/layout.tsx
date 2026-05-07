import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const vesperLibre = localFont({
  src: [
    {
      path: './fonts/vesper-libre-all-400.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: './fonts/vesper-libre-all-700.woff2',
      weight: '700',
      style: 'normal',
    }
  ],
  variable: '--font-vesper',
});

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Home | Dynamic Catastrophe",
    description: "Interaktive Entscheidungsbäume. Konfrontiere dich mit den Konsequenzen deiner Entscheidungen in einer dynamischen Katastrophensimulation.",
  };
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${vesperLibre.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
