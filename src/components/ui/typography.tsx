import { LinkIcon } from "lucide-react";
import { Slot as SlotPrimitive } from "radix-ui";
import React from "react";

import { cn } from "@/lib/utils";

const Slot = SlotPrimitive.Slot;

function Prose({
  className,
  asChild = false,
  ...props
}: React.ComponentProps<"div"> & {
  asChild?: boolean;
}) {
  const Comp = asChild ? Slot : "div";

  return (
    <Comp
      data-slot="prose"
      className={cn(
        "prose prose-sm max-w-none font-sans text-foreground prose-gray dark:prose-invert",
        "prose-headings:font-sans prose-headings:font-semibold prose-headings:text-balance",
        "prose-h2:border-b prose-h2:border-edge prose-h2:pb-2 prose-h2:text-2xl",
        "prose-lead:text-base",
        "prose-a:font-medium prose-a:wrap-break-word prose-a:text-foreground prose-a:underline prose-a:decoration-foreground/25 prose-a:underline-offset-[2px] hover:prose-a:decoration-foreground",
        "prose-code:rounded-md prose-code:border prose-code:bg-muted/50 prose-code:px-[0.3rem] prose-code:py-[0.2rem] prose-code:text-sm prose-code:font-normal prose-code:before:content-none prose-code:after:content-none",
        "prose-hr:border-edge",
        "prose-blockquote:border-s-edge prose-blockquote:[&_p:first-of-type]:before:content-none prose-blockquote:[&_p:last-of-type]:after:content-none",
        className
      )}
      {...props}
    />
  );
}

// Long-form article body (blog posts): serif at 17px with a roomy 1.75 line-height.
function Article({
  className,
  asChild = false,
  ...props
}: React.ComponentProps<"div"> & {
  asChild?: boolean;
}) {
  const Comp = asChild ? Slot : "div";

  return (
    <Comp
      data-slot="article"
      className={cn(
        "prose max-w-none font-serif text-[17px] leading-[1.75] text-foreground prose-gray dark:prose-invert",
        "prose-headings:font-sans prose-headings:font-semibold prose-headings:tracking-[-0.02em] prose-headings:text-balance",
        "prose-h1:text-[1.6rem] prose-h2:text-[1.3rem] prose-h3:text-[1.1rem]",
        "prose-a:font-medium prose-a:wrap-break-word prose-a:text-foreground prose-a:underline prose-a:decoration-foreground/25 prose-a:underline-offset-[2px] hover:prose-a:decoration-foreground",
        "prose-code:rounded-md prose-code:border prose-code:bg-muted/50 prose-code:px-[0.3rem] prose-code:py-[0.2rem] prose-code:font-mono prose-code:text-sm prose-code:font-normal prose-code:before:content-none prose-code:after:content-none",
        "prose-hr:border-edge",
        "prose-blockquote:border-s-edge prose-blockquote:[&_p:first-of-type]:before:content-none prose-blockquote:[&_p:last-of-type]:after:content-none",
        className
      )}
      {...props}
    />
  );
}

function Code({ className, ...props }: React.ComponentProps<"code">) {
  const isCodeBlock = "data-language" in props;

  return (
    <code
      data-slot={isCodeBlock ? "code-block" : "code-inline"}
      className={cn(
        !isCodeBlock &&
          "not-prose rounded-md border bg-muted/50 px-1.5 py-0.5 font-mono text-sm",
        className
      )}
      {...props}
    />
  );
}

type HeadingTypes = "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
type HeadingProps<T extends HeadingTypes> = React.ComponentProps<T> & {
  as?: T;
};

function Heading<T extends HeadingTypes = "h1">({
  as,
  className,
  ...props
}: HeadingProps<T>): React.ReactElement {
  const Comp = as ?? "h1";

  if (!props.id) {
    return <Comp className={className} {...props} />;
  }

  return (
    <Comp
      className={cn("flex flex-row items-center gap-2", className)}
      {...props}
    >
      <a href={`#${props.id}`} className="peer not-prose">
        {props.children}
      </a>

      <LinkIcon
        className="size-4 shrink-0 text-muted-foreground opacity-0 transition-opacity peer-hover:opacity-100"
        aria-label="Link to section"
      />
    </Comp>
  );
}

export { Article, Code, Heading, Prose };
