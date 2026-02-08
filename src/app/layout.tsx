import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { WhatsAppButton } from "@/components/layout/WhatsAppButton";
import { Analytics } from "@vercel/analytics/next";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const siteUrl = "https://descomplicacomliz.com.br";
const siteName = "Descomplica com Liz";
const title = "Descomplica com Liz";
const description =
  "Mentoria financeira individual que transforma sua relação emocional com o dinheiro. Com mais de 24 anos de experiência em instituições financeiras e especialização em PNL, ajudo mulheres a organizarem suas finanças com consciência, leveza e humanidade.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: title,
    template: `%s | ${siteName}`,
  },
  description,
  keywords: [
    "mentoria financeira",
    "mentoria financeira feminina",
    "organização financeira",
    "educação financeira para mulheres",
    "finanças comportamentais",
    "consultoria financeira",
    "PNL e finanças",
    "Lizandra Bortoluzzi",
    "planejamento financeiro pessoal",
    "desenvolvimento financeiro",
    "mentoria individual",
    "finanças conscientes",
    "Santa Catarina",
    "Itajaí",
  ],
  authors: [{ name: "Lizandra Bortoluzzi", url: siteUrl }],
  creator: "Lizandra Bortoluzzi",
  alternates: {
    canonical: siteUrl,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: siteUrl,
    title,
    description,
    siteName,
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
        <WhatsAppButton />
        <Analytics />
      </body>
    </html>
  );
}
