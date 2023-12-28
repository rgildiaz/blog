import type { Metadata } from "next";
import "@/src/styles/globals.css";

import { fontSans, fontSerif } from "@/src/assets/fonts";
import { cn } from "@/src/lib/utils";
import { siteConfig } from "@/src/config/site";

export const metadata: Metadata = {
  title: siteConfig.name,
  description: siteConfig.description,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${fontSans.variable} ${fontSerif.variable}`} suppressHydrationWarning>
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased"
        )}>
        {children}
      </body>
    </html >
  );
}
