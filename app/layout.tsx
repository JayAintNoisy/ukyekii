import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
// This is the fix: Removed the curly braces to use the Default Import
import AnimatedBackground from "@/components/features/animated-background";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "My App",
  description: "Created with Next.js",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {/* Usage of the component */}
        <AnimatedBackground />
        <main className="relative z-10">
          {children}
        </main>
      </body>
    </html>
  );
}