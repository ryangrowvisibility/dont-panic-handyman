import type { Metadata } from "next";
import { Nunito } from "next/font/google";
import { DM_Sans } from "next/font/google";
import "./globals.css";

const nunito = Nunito({
  variable: "--font-nunito",
  subsets: ["latin"],
  weight: ["400", "600", "700", "800", "900"],
});

const dmSans = DM_Sans({
  variable: "--font-dmsans",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  title: "Don't Panic Handyman | Mississauga, Toronto & GTA | 5★ Rated",
  description:
    "Don't Panic Handyman serves Mississauga, Toronto, and the GTA with professional curtain installation, TV mounting, furniture assembly, painting, drywall, appliance repair, and more. 5 stars across 26 Google reviews. Call 647-678-6858.",
  openGraph: {
    title: "Don't Panic Handyman | Mississauga & GTA | Perfect 5-Star Rating",
    description:
      "Same-day service, professional finish, honest pricing. Curtains, TV mounting, painting, drywall, appliances — Dimitry handles it all. 5★/26 reviews.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Don't Panic Handyman",
    description:
      "Professional handyman services in Mississauga, Toronto, and the GTA. Curtain installation, TV mounting, furniture assembly, painting, drywall, appliance repair, and more.",
    telephone: "647-678-6858",
    address: {
      "@type": "PostalAddress",
      streetAddress: "4033 Hurontario St",
      addressLocality: "Mississauga",
      addressRegion: "ON",
      postalCode: "L4Z 0B8",
      addressCountry: "CA",
    },
    areaServed: ["Mississauga", "Toronto", "GTA"],
    openingHours: "Mo-Su 00:00-21:00",
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "5.0",
      reviewCount: "26",
      bestRating: "5",
    },
  };

  return (
    <html
      lang="en"
      className={`${nunito.variable} ${dmSans.variable} antialiased`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-[100dvh] flex flex-col">{children}</body>
    </html>
  );
}
