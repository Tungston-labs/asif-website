import type { Metadata, Viewport } from "next";
import "./globals.css";
import { Jost, Caveat, Manrope } from "next/font/google";
import StyledComponentsRegistry from "../lib/styled-registry";
import Providers from "@/providers/providers";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#000000",
};

export const metadata: Metadata = {
  title: "Architect Asif | Visionary Architecture & Design Studio",
  description:
    "We design thoughtful, contemporary spaces tailored for your lifestyle. Leading professional architecture firm specializing in residential and commercial projects.",
  keywords: [
    "Architect",
    "Architecture Firm",
    "Residential Architect",
    "Commercial Architect",
    "Interior Design",
    "Architect Asif",
  ],
  authors: [{ name: "Architect Asif" }],
  icons: {
    icon: "/images/logofav.svg",
    apple: "/images/logofav.svg",
  },
  openGraph: {
    title: "Architect Asif | Visionary Architecture Studio",
    description: "Thoughtful architectural spaces designed for the way you live.",
    url: "https://architectasif.com",
    siteName: "Architect Asif",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Architect Asif | Visionary Architecture Studio",
    description: "Thoughtful architectural spaces designed for the way you live.",
  },
};

const jost = Jost({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-jost",
});
const caveat = Caveat({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-caveat",
});
const manrope = Manrope({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-manrope",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${jost.className} ${caveat.variable} ${manrope.variable}`}
    >
      <body>
        <StyledComponentsRegistry>
          <Providers>{children}</Providers>
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
