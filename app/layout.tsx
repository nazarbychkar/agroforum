import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "Агрофорум",
  description: "Агрофорум",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="uk" className="max-w-7xl mx-auto">
      <body>
        <Header />
        <main className="pt-10">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
