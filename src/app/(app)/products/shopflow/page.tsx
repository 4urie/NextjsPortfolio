import type { Metadata } from "next";

import {
  ShopFlowCTA,
  ShopFlowDemo,
  ShopFlowFeatures,
  ShopFlowHero,
  ShopFlowTechStack,
} from "@/features/products/shopflow/components";

export const metadata: Metadata = {
  title: "AquaServe - Mobile Water Ordering App",
  description:
    "A mobile water ordering application with AI chatbot ordering, delivery tracking, scheduling, and admin management.",
  openGraph: {
    title: "AquaServe - Mobile Water Ordering App",
    description:
      "A mobile water ordering application with AI chatbot ordering, delivery tracking, scheduling, and admin management.",
    type: "website",
  },
};

export default function ShopFlowPage() {
  return (
    <div className="flex flex-col">
      <ShopFlowHero />
      <ShopFlowDemo />
      <ShopFlowFeatures />
      <ShopFlowTechStack />
      <ShopFlowCTA />
    </div>
  );
}
