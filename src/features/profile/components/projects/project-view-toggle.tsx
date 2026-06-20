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
      className="inline-flex rounded-full border border-edge bg-background/80 p-1 shadow-sm backdrop-blur"
    >
      <Button
        type="button"
        role="tab"
        aria-selected={value === "grid"}
        variant="ghost"
        size="sm"
        className={cn(
          "h-8 rounded-full px-3 text-xs transition-all",
          value === "grid" && "bg-accent text-accent-foreground"
        )}
        onClick={() => onChange("grid")}
      >
        <LayoutGridIcon className="size-4" />
        Grid View
      </Button>
      <Button
        type="button"
        role="tab"
        aria-selected={value === "list"}
        variant="ghost"
        size="sm"
        className={cn(
          "h-8 rounded-full px-3 text-xs transition-all",
          value === "list" && "bg-accent text-accent-foreground"
        )}
        onClick={() => onChange("list")}
      >
        <Rows3Icon className="size-4" />
        List View
      </Button>
    </div>
  );
}
