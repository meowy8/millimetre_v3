import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import AuthProvider from "@/components/providers/AuthProvider";
import { Suspense } from "react";
import Loading from "@/components/Loading";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Millimetre",
  description: "A film diary website",
  icons: {
    icon: "/images/cigarette.jpg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={inter.className + " bg-[#0B0618] text-[#FBF7F4] mx-auto"}
      >
        <AuthProvider>
          <Navbar />
          <main className="mx-auto my-22 min-h-screen bg-[#0B0618]">
            {children}
          </main>
        </AuthProvider>
      </body>
    </html>
  );
}
