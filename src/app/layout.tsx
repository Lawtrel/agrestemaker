import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
});

export const metadata: Metadata = {
  title: "Agreste Maker — Inovação e Resiliência em Cada Camada",
  description:
    "Laboratório de Impressão 3D e Eletrônica mantido por estudantes de Engenharia de Software. Código, hardware e impressão 3D no coração do Agreste.",
  keywords: [
    "maker",
    "impressão 3D",
    "eletrônica",
    "IoT",
    "Agreste",
    "caatinga",
    "engenharia de software",
    "prototipagem",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      className={`${inter.variable} ${spaceGrotesk.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
