import type { Metadata } from "next";
import "./globals.css";
import { Jost } from "next/font/google";
import StyledComponentsRegistry from "../lib/styled-registry";

import { ThemeProvider } from "styled-components";
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

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={jost.variable}>
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
