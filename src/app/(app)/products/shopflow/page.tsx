import type { Metadata } from "next";

import {
  ShopFlowCTA,
  ShopFlowDemo,
  ShopFlowFeatures,
  ShopFlowHero,
  ShopFlowTechStack,
} from "@/features/products/shopflow/components";

export const metadata: Metadata = {
  title: "ShopFlow",
  description:
    "A shop management system with point-of-sale and inventory features.",
  openGraph: {
    title: "ShopFlow",
    description:
      "A shop management system with point-of-sale and inventory features.",
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
