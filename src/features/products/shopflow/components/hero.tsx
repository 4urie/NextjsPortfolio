import { ArrowRight } from "lucide-react";
import Link from "next/link";

import { Button } from "@/components/ui/button";

export function ShopFlowHero() {
  return (
    <section className="py-20 md:py-32">
      <div className="mx-auto max-w-3xl">
        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-edge px-4 py-1.5">
          <span className="status-dot size-2" />
          <span className="micro-label">Built with modern tech stack</span>
        </div>

        <h1 className="font-pixel text-5xl lowercase">shopflow</h1>

        <p className="mt-4 mb-6 text-[15px] font-medium">
          Complete Shop Management System
        </p>

        <p className="mb-8 max-w-2xl text-[15px] text-muted-foreground">
          A comprehensive PERN stack solution for managing your shop operations.
          Real-time dashboards, inventory tracking, invoice management and
          financial analytics all in one place.
        </p>

        <div className="flex flex-col items-start gap-4 sm:flex-row">
          <Button size="lg" asChild>
            <Link
              href="https://4urie.me"
              target="_blank"
              rel="noopener noreferrer"
            >
              View Live
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
          <Button size="lg" variant="outline" asChild>
            <Link href="#demo">Watch Demo</Link>
          </Button>
        </div>

        <div className="mt-12 grid grid-cols-2 gap-8 border-t border-edge pt-8 md:grid-cols-4">
          <div>
            <div className="font-pixel text-xl">100%</div>
            <div className="mt-2 micro-label">Type Safe</div>
          </div>
          <div>
            <div className="font-pixel text-xl">Real-time</div>
            <div className="mt-2 micro-label">Dashboards</div>
          </div>
          <div>
            <div className="font-pixel text-xl">JWT</div>
            <div className="mt-2 micro-label">Auth System</div>
          </div>
          <div>
            <div className="font-pixel text-xl">PERN</div>
            <div className="mt-2 micro-label">Stack Powered</div>
          </div>
        </div>
      </div>
    </section>
  );
}
