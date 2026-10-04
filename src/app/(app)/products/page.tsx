import { ArrowRight, Package } from "lucide-react";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import { Tag } from "@/components/ui/tag";

export const metadata: Metadata = {
  title: "Products",
  description: "Practical builds across web, mobile, and IoT.",
};

const products = [
  {
    id: "aquaserve",
    name: "AquaServe",
    description:
      "A mobile water ordering application with AI chatbot ordering, tracking, scheduling, and admin management.",
    href: "/products/aquaserve",
    status: "Live",
    tech: ["Next.js", "Flutter", "Supabase", "TypeScript"],
    image: "/images/avatar-placeholder.svg",
  },
];

export default function ProductsPage() {
  return (
    <div className="mx-auto md:max-w-3xl">
      <div className="screen-line-after px-4 pt-10 pb-6">
        <h1 className="font-pixel text-5xl lowercase">products</h1>
      </div>

      <div className="screen-line-after p-4">
        <p className="micro-label text-balance">{metadata.description}</p>
      </div>

      <div className="grid gap-3 p-4">
        {products.map((product) => (
          <Link
            key={product.id}
            href={product.href}
            className="group flex flex-col gap-4 rounded-2xl border border-edge bg-background/90 p-5 shadow-card backdrop-blur-sm transition-shadow duration-350 hover:shadow-card-hover sm:flex-row"
          >
            <div className="flex aspect-4/3 shrink-0 items-center justify-center overflow-hidden rounded-xl border border-edge bg-muted sm:w-44">
              {product.image ? (
                <Image
                  src={product.image}
                  alt={product.name}
                  width={400}
                  height={300}
                  className="h-full w-full object-cover"
                />
              ) : (
                <Package className="h-10 w-10 text-faint" />
              )}
            </div>

            <div className="flex flex-1 flex-col gap-2">
              <div className="flex items-center gap-2">
                <h2 className="text-[15px] font-medium">{product.name}</h2>
                <Tag featured>{product.status}</Tag>
              </div>

              <p className="text-sm text-muted-foreground">
                {product.description}
              </p>

              <ul className="mt-auto flex flex-wrap gap-1.5">
                {product.tech.map((tech) => (
                  <li key={tech}>
                    <Tag>{tech}</Tag>
                  </li>
                ))}
              </ul>
            </div>

            <ArrowRight
              className="size-4 shrink-0 self-center text-faint transition-transform duration-200 group-hover:translate-x-0.5"
              aria-hidden
            />
          </Link>
        ))}
      </div>

      <div className="screen-line-before border-x border-edge p-8 text-center">
        <p className="mb-2 micro-label">more coming soon</p>
        <p className="text-sm text-muted-foreground">
          I&apos;m continuously building new solutions for school, personal, and
          capstone work.
        </p>
      </div>
    </div>
  );
}
