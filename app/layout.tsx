import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
// Ensure this path matches your ThemeProvider file location
import { ThemeProvider } from "@/components/theme-provider"; 
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
    // suppressHydrationWarning is essential for theme switching
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider 
          attribute="class" 
          defaultTheme="system" 
          enableSystem 
          disableTransitionOnChange
        >
          {/* Your background and children stay inside the provider */}
          <AnimatedBackground />
          <main className="relative z-10">
            {children}
          </main>
        </ThemeProvider>
      </body>
    </html>
  );
}