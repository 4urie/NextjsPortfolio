import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "AquaServe",
  description:
    "A mobile water ordering application with AI chatbot ordering, delivery tracking, scheduling, ratings, and admin management.",
};

export default function AquaServePage() {
  return (
    <div className="mx-auto md:max-w-3xl">
      <div className="mx-4 my-10 rounded-2xl border border-edge bg-background/90 p-8 shadow-card backdrop-blur-sm md:p-12">
        <p className="mb-4 micro-label">capstone project</p>
        <h1 className="font-pixel text-5xl lowercase">aquaserve</h1>
        <p className="mt-6 max-w-2xl text-[15px] text-muted-foreground">
          A mobile water ordering application with AI chatbot ordering, delivery
          tracking, scheduling, quick reorder, notifications, ratings, and admin
          management.
        </p>
      </div>
    </div>
  );
}
