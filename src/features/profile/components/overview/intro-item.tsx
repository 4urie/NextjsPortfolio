import { cn } from "@/lib/utils";

export function IntroItem({
  className,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <div
      className={cn("flex items-center gap-3 font-sans text-[15px]", className)}
      {...props}
    />
  );
}

export function IntroItemIcon({
  className,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <div
      className={cn(
        "flex size-6 shrink-0 items-center justify-center rounded-md border border-edge bg-muted text-faint",
        "[&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4",
        className
      )}
      aria-hidden="true"
      {...props}
    />
  );
}

export function IntroItemContent({
  className,
  ...props
}: React.ComponentProps<"p">) {
  return <p className={cn("text-balance", className)} {...props} />;
}

export function IntroItemLink({
  className,
  ...props
}: React.ComponentProps<"a">) {
  return (
    <a
      className={cn(
        "underline decoration-foreground/25 underline-offset-[2px] hover:decoration-foreground",
        className
      )}
      target="_blank"
      rel="noopener noreferrer"
      {...props}
    />
  );
}
