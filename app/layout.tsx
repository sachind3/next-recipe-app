import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/shared/Header";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Recipe App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        <section className="py-6">
          <div className="container px-4 mx-auto">{children}</div>
        </section>
      </body>
    </html>
  );
}