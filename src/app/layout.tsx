import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import AuthProvider from "@/components/providers/AuthProvider";

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
        className={
          inter.className +
          " bg-[#0B0618] text-[#FBF7F4] max-w-[1920px] mx-auto"
        }
      >
        <AuthProvider>
          <Navbar />
          <main className="max-w-[1000px] mx-auto px-4 my-24">{children}</main>
        </AuthProvider>
      </body>
    </html>
  );
}
