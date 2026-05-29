import React from "react";
import "./globals.css";

export const metadata = {
  title: "MITRIXO — Enterprise Software House & SaaS Product Studio",
  description: "We engineer high-fidelity digital infrastructure, proprietary SaaS products, and custom CMS systems for the next generation. Incorporating Mitry Visuals creative studio.",
  metadataBase: new URL("https://mitrixo.com"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth dark">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
        <meta name="theme-color" content="#0A0A0C" />
      </head>
      <body className="bg-brand-dark text-brand-white min-h-screen flex flex-col antialiased">
        {children}
      </body>
    </html>
  );
}
