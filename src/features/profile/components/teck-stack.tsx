import Image from "next/image";
import React from "react";

import { SimpleTooltip } from "@/components/ui/tooltip";
import { cn } from "@/lib/utils";

import { TECH_STACK } from "../data/tech-stack";
import { Panel, PanelContent, PanelHeader, PanelTitle } from "./panel";

export function TeckStack() {
  return (
    <Panel id="stack">
      <PanelHeader>
        <PanelTitle>Stack</PanelTitle>
      </PanelHeader>

      <PanelContent className="p-0">
        {/* Hairline-divided cell grid: the dividers are the design.
            Icons stay in permanent grayscale (strict monochrome). */}
        <ul className="grid grid-cols-4 border-t border-l border-edge sm:grid-cols-6 md:grid-cols-8">
          {TECH_STACK.map((tech) => (
            <li
              key={tech.key}
              className="border-r border-b border-edge [&:nth-child(4n)]:border-r-0 sm:[&:nth-child(6n)]:border-r-0 md:[&:nth-child(8n)]:border-r-0"
            >
              <SimpleTooltip content={tech.title}>
                <a
                  href={tech.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={tech.title}
                  className="flex aspect-square items-center justify-center transition-colors duration-200 hover:bg-accent"
                >
                  <Image
                    src={tech.iconUrl}
                    alt={`${tech.title} icon`}
                    width={32}
                    height={32}
                    unoptimized
                    className={cn(
                      "h-7 w-7 object-contain opacity-70 grayscale transition-opacity duration-200 hover:opacity-100",
                      tech.theme && "dark:invert"
                    )}
                  />
                  <span className="sr-only">{tech.title}</span>
                </a>
              </SimpleTooltip>
            </li>
          ))}
        </ul>
      </PanelContent>
    </Panel>
  );
}
