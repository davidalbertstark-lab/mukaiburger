import type { Metadata } from "next";
import "./globals.css";
import { Navbar } from "@/components/site/Navbar";
import { Footer } from "@/components/site/Footer";

export const metadata: Metadata = {
  metadataBase: new URL("https://mukaiburger.vercel.app"),
  title: {
    default: "Mukaiburger Engineering Nigeria Limited",
    template: "%s | Mukaiburger Engineering",
  },
  description:
    "Engineering, construction & infrastructure solutions built on precision, reliability and trust across Nigeria.",
  keywords: [
    "engineering",
    "construction Nigeria",
    "infrastructure",
    "Abuja engineering contractor",
    "civil engineering",
    "project management",
  ],
  authors: [{ name: "Albert David", url: "https://github.com/davidalbertstark-lab" }],
  creator: "Albert David",
  openGraph: {
    title: "Mukaiburger Engineering Nigeria Limited",
    description:
      "Engineering, construction & infrastructure solutions built on precision, reliability and trust across Nigeria.",
    url: "https://mukaiburger.vercel.app",
    siteName: "Mukaiburger Engineering",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mukaiburger Engineering Nigeria Limited",
    description:
      "Engineering, construction & infrastructure solutions built on precision, reliability and trust across Nigeria.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=IBM+Plex+Sans:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://api.fontshare.com/v2/css?f[]=general-sans@400,500,600,700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
