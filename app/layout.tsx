import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import AnimatedBackground from "@/components/features/animated-background";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Jaymar Yecyec | Portfolio",
  description: "Web Developer Portfolio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    // suppressHydrationWarning is REQUIRED for next-themes to work on Vercel
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider 
          attribute="class" 
          defaultTheme="system" 
          enableSystem
        >
          <AnimatedBackground />
          <main className="relative z-10">
            {children}
          </main>
        </ThemeProvider>
      </body>
    </html>
  );
}