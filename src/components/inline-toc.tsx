import type { TOCItemType } from "fumadocs-core/toc";
import { TextIcon } from "lucide-react";

import type { Collapsible } from "@/components/ui/collapsible";
import {
  CollapsibleChevronsIcon,
  CollapsibleContent,
  CollapsibleTrigger,
  CollapsibleWithContext,
} from "@/components/ui/collapsible";
import { cn } from "@/lib/utils";

export function InlineTOC({
  items,
  className,
  children,
  ...props
}: React.ComponentProps<typeof Collapsible> & {
  items: TOCItemType[];
}) {
  if (!items.length) {
    return null;
  }

  return (
    <CollapsibleWithContext
      className={cn(
        "not-prose rounded-xl border border-edge bg-muted/50 font-sans",
        className
      )}
      {...props}
    >
      <CollapsibleTrigger className="group/toc inline-flex w-full items-center gap-2 py-2.5 pr-2 pl-4 font-mono text-[11px] tracking-[0.08em] text-faint uppercase [&_svg]:size-4">
        <TextIcon className="-translate-x-0.5" />
        {children ?? "On this page"}
        <div className="ml-auto shrink-0" aria-hidden>
          <CollapsibleChevronsIcon />
        </div>
      </CollapsibleTrigger>

      <CollapsibleContent className="overflow-hidden duration-300 data-[state=closed]:animate-collapsible-fade-up data-[state=open]:animate-collapsible-fade-down">
        <ul className="flex flex-col px-4 pb-2 text-[13px] text-muted-foreground">
          {items.map((item) => (
            <li
              key={item.url}
              className="flex py-1"
              style={{
                paddingInlineStart: 16 * Math.max(item.depth - 2, 0),
              }}
            >
              <a
                className="underline-offset-[2px] transition-colors hover:text-foreground hover:underline"
                href={item.url}
              >
                {item.title}
              </a>
            </li>
          ))}
        </ul>
      </CollapsibleContent>
    </CollapsibleWithContext>
  );
}
