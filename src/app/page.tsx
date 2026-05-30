import React from "react";
import HomeClient from "@/components/HomeClient";

export const metadata = {
  title: "MITRIXO — Enterprise Software House & SaaS Product Studio",
  description: "We engineer high-fidelity digital infrastructure, proprietary SaaS products, and custom CMS systems for the next generation. Incorporating Mitry Visuals creative studio.",
  openGraph: {
    title: "MITRIXO — Enterprise Software House & SaaS Product Studio",
    description: "We engineer high-fidelity digital infrastructure for the next generation.",
    url: "https://mitrixo.com",
    siteName: "MITRIXO",
    locale: "en_US",
    type: "website",
  },
};

export default function Home() {
  return <HomeClient />;
}

