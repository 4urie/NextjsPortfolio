"use client";

import Link from "next/link";
import { useState } from "react";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { SOCIAL_LINKS } from "@/features/profile/data/social-links";

import { SIDEBAR_INDEX_NAV, SIDEBAR_PAGES_NAV } from "./site-nav";

type MenuLink = {
  title: string;
  href: string;
};

export function MobileMenu() {
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant="ghost" size="icon" aria-label="Open menu">
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            aria-hidden
          >
            <path
              d="M2 4.5h12M2 8h12M2 11.5h12"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
          </svg>
        </Button>
      </DialogTrigger>

      <DialogContent
        overlay={false}
        className="inset-0 h-dvh w-screen max-w-none translate-x-0 translate-y-0 rounded-none border-none bg-background p-6 pt-16 ring-0 data-[state=open]:zoom-in-0"
      >
        <DialogTitle className="sr-only">Menu</DialogTitle>

        <div className="flex h-full flex-col overflow-y-auto">
          <MobileMenuGroup
            heading="index"
            links={SIDEBAR_INDEX_NAV}
            onNavigate={close}
          />
          <MobileMenuGroup
            heading="pages"
            links={SIDEBAR_PAGES_NAV}
            onNavigate={close}
          />
          <MobileMenuGroup
            heading="connect"
            links={SOCIAL_LINKS.map((link) => ({
              title: link.title,
              href: link.href,
            }))}
            onNavigate={close}
          />
        </div>
      </DialogContent>
    </Dialog>
  );
}

function MobileMenuGroup({
  heading,
  links,
  onNavigate,
}: {
  heading: string;
  links: MenuLink[];
  onNavigate: () => void;
}) {
  return (
    <nav aria-label={heading} className="py-6 first:pt-0">
      <span className="mb-3 block micro-label">{heading}</span>
      <ul className="flex flex-col border-t border-edge">
        {links.map((link) => {
          const external = link.href.startsWith("http");

          return (
            <li key={link.href} className="border-b border-edge">
              <Link
                href={link.href}
                target={external ? "_blank" : undefined}
                rel={external ? "noopener" : undefined}
                onClick={onNavigate}
                className="block py-3 font-mono text-lg text-foreground lowercase transition-colors duration-200 hover:text-faint"
              >
                {link.title}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
