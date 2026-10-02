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
  title: "Boopathi M | Gen AI & Cloud Developer Portfolio",
  description:
    "Portfolio of Boopathi M — Gen AI & Cloud Intern at Cloud Kinetics, B.Tech AI & Data Science (2026). Specialized in LLMs, AWS Bedrock, Cloud Engineering, and Full Stack Architecture.",
  keywords: [
    "Boopathi M",
    "Portfolio",
    "Generative AI",
    "Cloud Kinetics",
    "AWS Bedrock",
    "AI & Data Science",
    "Python",
    "Full Stack Developer"
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
