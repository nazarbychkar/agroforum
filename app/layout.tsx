import type { Metadata } from "next";
import "./globals.css";

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
    <html lang="uk">
      <body>{children}</body>
    </html>
  );
}
