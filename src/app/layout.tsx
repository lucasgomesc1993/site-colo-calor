import type { Metadata } from "next";
import { Cormorant_Garamond, Raleway } from "next/font/google";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import "./globals.css";

import { OrganizationSchema } from "@/components/seo/Schemas";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-cormorant",
  weight: ["300", "400", "500", "600", "700"],
});

const raleway = Raleway({
  subsets: ["latin"],
  variable: "--font-raleway",
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://colocalor.com.br'),
  title: {
    default: "Colo & Calor - Amamentação com Acolhimento e Segurança",
    template: "%s | Colo & Calor"
  },
  description: "Consultoria em amamentação e laserterapia em São Paulo. Recupere o prazer de amamentar com apoio especializado de Camila Toniatti.",
  keywords: ["amamentação", "consultoria amamentação", "laserterapia", "pós-parto", "gestação", "São Paulo", "Camila Toniatti"],
  authors: [{ name: "Camila Toniatti" }],
  creator: "Camila Toniatti",
  openGraph: {
    type: 'website',
    locale: 'pt_BR',
    url: 'https://colocalor.com.br',
    siteName: 'Colo & Calor',
    title: 'Colo & Calor - Amamentação com Acolhimento e Segurança',
    description: 'Consultoria em amamentação e laserterapia em São Paulo. Recupere o prazer de amamentar com apoio especializado.',
    images: [
      {
        url: '/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Colo & Calor - Amamentação com Acolhimento',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Colo & Calor - Amamentação com Acolhimento',
    description: 'Consultoria em amamentação e laserterapia em São Paulo.',
    images: ['/images/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: '/',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <body
        className={`${cormorant.variable} ${raleway.variable} antialiased`}
        suppressHydrationWarning
      >
        <OrganizationSchema />
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
