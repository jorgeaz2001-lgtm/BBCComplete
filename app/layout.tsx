import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import "@/app/globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://bbc-factoring.vercel.app"),
  title: "BBC Factoring | Servicio de Factoraje México",
  description:
    "Factoraje nacional e internacional con depósitos en menos de 24 horas, sin deuda, sin límites y en cualquier divisa.",
  openGraph: {
    title: "BBC Factoring | Servicio de Factoraje México",
    description:
      "Factoraje nacional e internacional con depósitos en menos de 24 horas, sin deuda, sin límites y en cualquier divisa.",
    type: "website",
    locale: "es_MX",
    siteName: "BBC Factoring"
  },
  twitter: {
    card: "summary_large_image",
    title: "BBC Factoring | Servicio de Factoraje México",
    description:
      "Factoraje nacional e internacional con depósitos en menos de 24 horas, sin deuda, sin límites y en cualquier divisa."
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="es">
      <body>
        <a className="skipLink" href="#main-content">
          Skip to main content
        </a>
        <Header />
        <main id="main-content">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
