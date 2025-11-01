import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "ExpertAnswer - Get Paid Expert Answers to Your Questions",
  description: "Connect with verified experts and get professional answers to your questions. Pay per question or subscribe for unlimited access.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
