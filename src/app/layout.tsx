import ConvexClientProvider from "@/components/ConvexClientProvider";
import Page from "@/components/Page";
import { Toaster } from "@/components/ui/sonner";
import { GeistSans } from "geist/font/sans";
import type { Metadata } from "next";
import NextTopLoader from "nextjs-toploader";
import "./globals.css";

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
          <NextTopLoader easing="ease" color="#701a75" showSpinner={false} />
          <Toaster />
          <Page>{children}</Page>
        </body>
      </ConvexClientProvider>
    </html>
  );
}
