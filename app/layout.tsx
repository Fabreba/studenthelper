import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { Patrick_Hand } from 'next/font/google'
const patrickHand = Patrick_Hand({
  weight: '400',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: "Student Helper",
  description: "Helping students",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${patrickHand.className} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
