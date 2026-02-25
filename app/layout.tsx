import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { BackgroundGrid } from "@/components/ui/background-grid";
import { ThemeProvider } from "@/components/theme-provider";
import { NavbarCinematic } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { PageRails } from "@/components/layout/page-rails";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Developer Dashboard",
    template: "%s | Developer Dashboard",
  },
  description: "A modern developer portfolio dashboard built with Next.js, TypeScript, and TailwindCSS",
  keywords: ["Next.js", "React", "TypeScript", "TailwindCSS", "Portfolio", "Dashboard"],
  authors: [{ name: "Developer" }],
  creator: "Developer",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://portfolio.dev",
    title: "Developer Dashboard",
    description: "A modern developer portfolio dashboard",
    siteName: "Developer Dashboard",
  },
  twitter: {
    card: "summary_large_image",
    title: "Developer Dashboard",
    description: "A modern developer portfolio dashboard",
  },
  robots: {
    index: true,
    follow: true,
  },
};



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} font-sans antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {/* BackgroundGrid removed for minimal UI */}
          <div className="pt-3">
            <NavbarCinematic />
          </div>
          <main className="min-h-screen relative z-10">
            <PageRails />
            {children}
          </main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
