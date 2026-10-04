import { ArrowRight, Mail } from "lucide-react";
import Link from "next/link";

import { Button } from "@/components/ui/button";

export function ShopFlowCTA() {
  return (
    <section className="py-20 md:py-32">
      <div className="mx-auto max-w-3xl">
        <div className="rounded-2xl border border-edge bg-muted/50 p-12 md:p-16">
          <div className="text-center">
            <h2 className="text-[1.3rem] font-semibold tracking-[-0.02em]">
              Ready to Streamline Your Shop Operations?
            </h2>
            <p className="mx-auto mt-3 mb-8 max-w-2xl text-sm text-muted-foreground">
              AquaServe is a capstone project built to demonstrate full-stack
              capabilities across web, mobile, and backend systems. Contact me
              to discuss custom water ordering and delivery solutions.
            </p>

            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button size="lg" asChild>
                <Link
                  href="https://4urie.me"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Visit Live Site
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>

              <Button size="lg" variant="outline" asChild>
                <Link href="/#experience">
                  View Experience
                  <Mail className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>

            <div className="mt-12 grid gap-3 text-sm md:grid-cols-3">
              <div className="rounded-xl border border-edge bg-background/60 p-6 backdrop-blur-sm">
                <div className="mb-2 font-pixel text-xl">1</div>
                <div className="text-sm font-medium">Capstone Project</div>
                <div className="mt-1 micro-label">AquaServe</div>
              </div>
              <div className="rounded-xl border border-edge bg-background/60 p-6 backdrop-blur-sm">
                <div className="mb-2 font-pixel text-xl">3</div>
                <div className="text-sm font-medium">Core Areas</div>
                <div className="mt-1 micro-label">Web, Mobile, IoT</div>
              </div>
              <div className="rounded-xl border border-edge bg-background/60 p-6 backdrop-blur-sm">
                <div className="mb-2 font-pixel text-xl">AI</div>
                <div className="text-sm font-medium">Ordering Assistant</div>
                <div className="mt-1 micro-label">Smart chatbot flow</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
