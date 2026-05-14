import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { notFound } from 'next/navigation';

const locales = ['de', 'en'] as const;

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
      path: '../../fonts/vesper-libre-all-400.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../../fonts/vesper-libre-all-700.woff2',
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

export default async function RootLayout({
  children,
  params
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  if (!locales.includes(locale as (typeof locales)[number])) {
    notFound();
  }

  const messages = await getMessages();

  return (
    <html
      lang={locale}
      className={`${geistSans.variable} ${geistMono.variable} ${vesperLibre.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <NextIntlClientProvider messages={messages}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
