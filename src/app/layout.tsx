import type { Metadata } from "next";
import "./globals.css";
import { Providers } from "./providers";

export const metadata: Metadata = {
  title: "sitenow.ai | From Idea to Live Website, Instantly",
  description:
    "AI-powered website builder. Describe your vision and launch a production-ready site in seconds.",
  authors: [{ name: "sitenow.ai" }],
  manifest: "/site.webmanifest",
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/favicon-96x96.png", type: "image/png", sizes: "96x96" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180" }],
  },
  openGraph: {
    title: "sitenow.ai | From Idea to Live Website, Instantly",
    description:
      "AI-powered website builder. Describe your vision and launch a production-ready site in seconds.",
    type: "website",
    images: [
      {
        url: "/assets/og-image-sm-sitenow.png",
        alt: "sitenow.ai",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@sitenowai",
    images: ["/assets/og-image-sm-sitenow.png"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/all.min.css"
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
        />
      </head>
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
