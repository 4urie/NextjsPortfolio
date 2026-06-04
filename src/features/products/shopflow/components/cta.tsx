import { ArrowRight, Mail } from "lucide-react";
import Link from "next/link";

import { Button } from "@/components/ui/button";

export function ShopFlowCTA() {
  return (
    <section className="py-20 md:py-32">
      <div className="mx-auto max-w-4xl">
        <div className="relative overflow-hidden rounded-2xl border bg-linear-to-br from-primary/10 via-primary/5 to-background p-12 md:p-16">
          <div className="relative z-10 text-center">
            <h2 className="mb-4 text-3xl font-bold md:text-4xl">
              Ready to Streamline Your Shop Operations?
            </h2>
            <p className="mx-auto mb-8 max-w-2xl text-lg text-muted-foreground">
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

            <div className="mt-12 grid gap-6 text-sm md:grid-cols-3">
              <div className="rounded-lg border bg-background/50 p-6 backdrop-blur-sm">
                <div className="mb-2 text-2xl font-bold text-primary">1</div>
                <div className="font-medium">Capstone Project</div>
                <div className="text-muted-foreground">AquaServe</div>
              </div>
              <div className="rounded-lg border bg-background/50 p-6 backdrop-blur-sm">
                <div className="mb-2 text-2xl font-bold text-primary">3</div>
                <div className="font-medium">Core Areas</div>
                <div className="text-muted-foreground">Web, Mobile, IoT</div>
              </div>
              <div className="rounded-lg border bg-background/50 p-6 backdrop-blur-sm">
                <div className="mb-2 text-2xl font-bold text-primary">AI</div>
                <div className="font-medium">Ordering Assistant</div>
                <div className="text-muted-foreground">Smart chatbot flow</div>
              </div>
            </div>
          </div>

          <div className="absolute -top-20 -right-20 h-64 w-64 rounded-full bg-primary/10 blur-3xl" />
          <div className="absolute -bottom-20 -left-20 h-64 w-64 rounded-full bg-primary/10 blur-3xl" />
        </div>
      </div>
    </section>
  );
}
