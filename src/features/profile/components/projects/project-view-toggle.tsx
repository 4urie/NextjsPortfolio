"use client";

import { LayoutGridIcon, Rows3Icon } from "lucide-react";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export type ProjectViewMode = "grid" | "list";

export function ProjectViewToggle({
  value,
  onChange,
}: {
  value: ProjectViewMode;
  onChange: (value: ProjectViewMode) => void;
}) {
  return (
    <div
      role="tablist"
      aria-label="Project view"
      className="inline-flex rounded-full border border-edge bg-background/80 p-1 backdrop-blur"
    >
      <Button
        type="button"
        role="tab"
        aria-selected={value === "grid"}
        variant="ghost"
        size="sm"
        className={cn(
          "h-8 rounded-full px-3 font-mono text-[11px] tracking-[0.08em] uppercase transition-colors",
          value === "grid" &&
            "bg-foreground text-background hover:bg-foreground"
        )}
        onClick={() => onChange("grid")}
      >
        <LayoutGridIcon className="size-4" />
        Grid
      </Button>
      <Button
        type="button"
        role="tab"
        aria-selected={value === "list"}
        variant="ghost"
        size="sm"
        className={cn(
          "h-8 rounded-full px-3 font-mono text-[11px] tracking-[0.08em] uppercase transition-colors",
          value === "list" &&
            "bg-foreground text-background hover:bg-foreground"
        )}
        onClick={() => onChange("list")}
      >
        <Rows3Icon className="size-4" />
        List
      </Button>
    </div>
  );
}
