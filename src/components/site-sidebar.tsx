"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { SITE_INFO, SOURCE_CODE_GITHUB_URL } from "@/config/site";
import { SOCIAL_LINKS } from "@/features/profile/data/social-links";
import { cn } from "@/lib/utils";

import { CommandMenuTrigger } from "./command-menu";
import { Nav } from "./nav";
import { NavScrollspy } from "./nav-scrollspy";
import { SIDEBAR_INDEX_NAV, SIDEBAR_PAGES_NAV } from "./site-nav";
import { ToggleTheme } from "./toggle-theme";
import { SimpleTooltip } from "./ui/tooltip";

export function SiteSidebar() {
  const pathname = usePathname();
  const isHome = ["/", "/index"].includes(pathname);

  return (
    <aside className="fixed inset-y-0 left-0 z-40 hidden w-56 flex-col overflow-y-auto border-r border-edge px-4 py-6 lg:flex">
      <Link
        href="/"
        className="mb-8 block font-pixel text-2xl leading-none lowercase"
        aria-label="Home"
      >
        4urie
      </Link>

      <nav aria-label="Portfolio sections" className="flex flex-col gap-1">
        <span className="mb-2 micro-label">index</span>
        {isHome ? (
          <NavScrollspy orientation="vertical" items={SIDEBAR_INDEX_NAV} />
        ) : (
          <Nav
            orientation="vertical"
            items={[{ title: "portfolio", href: "/" }]}
            activeId={pathname}
          />
        )}
      </nav>

      <div className="my-6 h-px w-full bg-edge" />

      <nav aria-label="Pages" className="flex flex-col gap-1">
        <span className="mb-2 micro-label">pages</span>
        <Nav
          orientation="vertical"
          items={SIDEBAR_PAGES_NAV}
          activeId={pathname}
        />
      </nav>

      <div className="my-6 h-px w-full bg-edge" />

      <nav aria-label="Connect" className="flex flex-col gap-1">
        <span className="mb-2 micro-label">connect</span>
        {SOCIAL_LINKS.map((link) => {
          const external = link.href.startsWith("http");

          return (
            <Link
              key={link.title}
              href={link.href}
              target={external ? "_blank" : undefined}
              rel={external ? "noopener" : undefined}
              className={cn(
                "flex items-center font-mono text-[13px] text-faint lowercase transition-colors duration-200 hover:text-foreground",
                external && "link-external"
              )}
            >
              {link.title}
            </Link>
          );
        })}
        <a
          href="/vcard"
          className="flex items-center gap-1 font-mono text-[13px] text-faint lowercase transition-colors duration-200 hover:text-foreground"
        >
          vcard
          <span aria-hidden className="text-[0.9em]">
            ↓
          </span>
        </a>
      </nav>

      <div className="mt-auto pt-6">
        <div className="mb-4 h-px w-full bg-edge" />

        <div className="flex items-center justify-between">
          <CommandMenuTrigger />
          <ToggleTheme />
        </div>

        <div className="mt-4 flex items-center gap-3">
          <a
            className="font-mono text-[11px] tracking-[0.08em] text-faint uppercase transition-colors duration-200 hover:text-foreground"
            href={`${SITE_INFO.url}/llms.txt`}
            target="_blank"
            rel="noopener noreferrer"
          >
            llms.txt
          </a>
          <a
            className="font-mono text-[11px] tracking-[0.08em] text-faint uppercase transition-colors duration-200 hover:text-foreground"
            href={`${SITE_INFO.url}/rss`}
            target="_blank"
            rel="noopener noreferrer"
          >
            rss
          </a>
          <SimpleTooltip content="Coding since 14y/o">
            <a
              className="font-mono text-[11px] tracking-[0.08em] text-faint uppercase transition-colors duration-200 hover:text-foreground"
              href={SOURCE_CODE_GITHUB_URL}
              target="_blank"
              rel="noopener"
            >
              source
            </a>
          </SimpleTooltip>
        </div>
      </div>
    </aside>
  );
}
