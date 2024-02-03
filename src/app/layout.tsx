import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import "./globals.css";
import { Toaster } from "@/components/ui/sonner";
import Page from "@/components/Page";
import ConvexClientProvider from "@/components/ConvexClientProvider";

export const metadata: Metadata = {
  title: "infs.world",
  description:
    "Bringing web experiences out of this universe. Exploring design, UX and back-end.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <ConvexClientProvider>
        <body className={GeistSans.className}>
          <Toaster />
          <Page>{children}</Page>
        </body>
      </ConvexClientProvider>
    </html>
  );
}
