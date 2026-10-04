import Link from "next/link";
import React from "react";

import { cn } from "@/lib/utils";
import type { NavItem } from "@/types/nav";

export function Nav({
  items,
  activeId,
  className,
  orientation = "horizontal",
}: {
  items: NavItem[];
  activeId?: string;
  className?: string;
  orientation?: "horizontal" | "vertical";
}) {
  const vertical = orientation === "vertical";

  return (
    <nav
      data-active-id={activeId}
      className={cn(
        "flex items-center gap-4",
        vertical && "flex-col items-start gap-1",
        className
      )}
    >
      {items.map(({ title, href }) => {
        const active =
          activeId === href ||
          (href.includes("#") && activeId === `#${href.split("#")[1]}`) ||
          (href === "/" // Home page
            ? ["/", "/index"].includes(activeId || "")
            : activeId?.startsWith(href));

        return (
          <NavItem key={href} href={href} active={active} vertical={vertical}>
            {vertical && (
              <span
                aria-hidden
                className={cn(
                  "w-3 shrink-0 transition-opacity duration-200",
                  active ? "opacity-100" : "opacity-0"
                )}
              >
                →
              </span>
            )}
            {title}
          </NavItem>
        );
      })}
    </nav>
  );
}

export function NavItem({
  active,
  vertical = false,
  ...props
}: React.ComponentProps<typeof Link> & {
  active?: boolean;
  vertical?: boolean;
}) {
  return (
    <Link
      className={cn(
        "font-mono text-sm font-medium text-muted-foreground transition-[color] duration-300",
        vertical &&
          "flex w-full items-center text-[13px] font-normal text-faint lowercase transition-[color] duration-200 hover:text-foreground",
        active && "text-foreground"
      )}
      {...props}
    />
  );
}
