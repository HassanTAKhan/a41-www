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

export const metadata: Metadata = {
  title: "A41 MOTs & Tyres Services | MOT Testing in Aston Clinton, Aylesbury",
  description:
    "Professional MOT testing and tyre services at Unit 1, College Road North Business Park, Aston Clinton, Aylesbury HP22 5EZ. Check your MOT status online. Call 07377 745544.",
  keywords: [
    "MOT",
    "MOT test",
    "Aston Clinton",
    "Aylesbury",
    "tyres",
    "vehicle testing",
    "car MOT",
    "A41",
    "HP22 5EZ",
  ],
  openGraph: {
    title: "A41 MOTs & Tyres Services",
    description:
      "Professional MOT testing and tyre services in Aston Clinton, Aylesbury. Check your MOT status online.",
    type: "website",
    locale: "en_GB",
  },
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
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
