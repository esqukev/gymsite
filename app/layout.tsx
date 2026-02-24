import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "FFO GYM | Forja tu mejor versión",
  description: "Gym premium · Musculación · Comunidad. Coaches de élite, equipamiento de primer nivel, resultados reales.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es">
      <body>
        {children}
      </body>
    </html>
  );
}
