import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "AquaServe - Aurie Nellas",
  description:
    "A mobile water ordering application with AI chatbot ordering, delivery tracking, scheduling, ratings, and admin management.",
};

export default function AquaServePage() {
  return (
    <div className="mx-auto max-w-4xl py-20">
      <div className="rounded-3xl border bg-background p-8 md:p-12">
        <p className="mb-4 text-sm font-medium tracking-[0.3em] text-muted-foreground uppercase">
          Capstone Project
        </p>
        <h1 className="text-4xl font-bold tracking-tight md:text-6xl">
          AquaServe
        </h1>
        <p className="mt-6 max-w-2xl text-lg text-muted-foreground">
          A mobile water ordering application with AI chatbot ordering, delivery
          tracking, scheduling, quick reorder, notifications, ratings, and admin
          management.
        </p>
      </div>
    </div>
  );
}
