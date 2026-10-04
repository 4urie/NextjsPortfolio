import Link from "next/link";

import { CommandMenuTrigger } from "@/components/command-menu";
import { MobileMenu } from "@/components/mobile-menu";
import { ToggleTheme } from "@/components/toggle-theme";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-edge bg-background/90 backdrop-blur lg:hidden">
      <div className="flex h-12 items-center justify-between gap-2 px-4">
        <Link
          href="/"
          className="font-pixel text-xl leading-none lowercase"
          aria-label="Home"
        >
          4urie
        </Link>

        <div className="flex items-center gap-1">
          <CommandMenuTrigger />
          <ToggleTheme />
          <MobileMenu />
        </div>
      </div>
    </header>
  );
}
