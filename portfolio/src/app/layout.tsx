import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Portfolio | Pukazhendhi Raju",
  description: "Personal portfolio of Pukazhendhi Raju - Full Stack Developer",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className + " text-white"}>
        {children}
      </body>
    </html>
  );
}
