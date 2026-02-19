import type { Metadata } from "next";
import "./globals.css";
import { Jost,Caveat, Manrope } from "next/font/google";
import StyledComponentsRegistry from "../lib/styled-registry";

import Providers from "@/providers/providers";

export const metadata: Metadata = {
  title: "ASIF WEBSITE",
  description: "VISIONARY ARCHITECT DESIGNED FOR THE WAY YOU LIVE",
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
    <html lang="en" className={`${jost.className} ${caveat.variable} ${manrope.variable}`}>
    <body>
        <StyledComponentsRegistry>
          <Providers>
            {children}
          </Providers>
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
