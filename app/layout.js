import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "LarHub - Sua Plataforma de Gerenciamento Imobiliário",
  description:
    "Gerencie seus imóveis de forma eficiente e fácil com LarHub. Encontre tudo que você precisa em um só lugar.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />

        <meta property="og:title" content={metadata.title} />
        <meta property="og:description" content={metadata.description} />
        <meta property="og:image" content="/assets/hero.jpg" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.larhub.com.br/" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
