import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://a41mots.com";

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: "A41 MOTs & Tyres | MOT Testing in Aston Clinton, Aylesbury",
    template: "%s | A41 MOTs & Tyres",
  },
  description:
    "DVSA-approved MOT testing station in Aston Clinton, Aylesbury. Class 4 & 7 MOTs, tyre fitting, vehicle repairs and free retest. Call 07377 745544.",
  keywords: [
    "MOT test Aylesbury",
    "MOT test Aston Clinton",
    "MOT station A41",
    "tyres Aylesbury",
    "tyre fitting Aston Clinton",
    "vehicle repairs Aylesbury",
    "DVSA approved MOT",
    "Class 4 MOT",
    "Class 7 MOT",
    "cheap MOT Aylesbury",
    "HP22 5EZ",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "A41 MOTs & Tyres | MOT Testing in Aston Clinton, Aylesbury",
    description:
      "DVSA-approved MOT testing station in Aston Clinton, Aylesbury. Class 4 & 7 MOTs, tyre fitting, vehicle repairs and free retest.",
    url: BASE_URL,
    siteName: "A41 MOTs & Tyres",
    locale: "en_GB",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "A41 MOTs & Tyres | MOT Testing in Aston Clinton, Aylesbury",
    description:
      "DVSA-approved MOT testing station in Aston Clinton, Aylesbury. Class 4 & 7 MOTs, tyre fitting and free retest.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "AutoRepair",
  name: "F & A A41 MOTs and Tyres Services Ltd",
  image: `${BASE_URL}/logo.jpg`,
  url: BASE_URL,
  telephone: "07377745544",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Unit 1, College Road North Business Park",
    addressLocality: "Aston Clinton",
    addressRegion: "Buckinghamshire",
    postalCode: "HP22 5EZ",
    addressCountry: "GB",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 51.798,
    longitude: -0.722,
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "08:00",
      closes: "18:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: "Saturday",
      opens: "08:00",
      closes: "16:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: "Sunday",
      opens: "09:00",
      closes: "14:00",
    },
  ],
  priceRange: "££",
  description:
    "DVSA-approved MOT testing station offering Class 4 and Class 7 MOT tests, tyre fitting, vehicle repairs, and free retest in Aston Clinton, Aylesbury.",
  sameAs: [
    "https://www.facebook.com/people/F-A-A41-MOTs-and-Tyres-Services-Ltd/61587421875236/",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
