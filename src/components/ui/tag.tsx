import React from "react";

import { cn } from "@/lib/utils";

function Tag({
  className,
  featured = false,
  ...props
}: React.ComponentProps<"span"> & {
  featured?: boolean;
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full border px-2 py-0.5 font-mono text-[9px] tracking-[0.08em] uppercase",
        featured
          ? "border-transparent bg-foreground text-background"
          : "border-ring text-muted-foreground",
        className
      )}
      {...props}
    />
  );
}

export { Tag };
