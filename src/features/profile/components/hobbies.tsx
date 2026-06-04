"use client";

import Image from "next/image";

import {
  CollapsibleChevronsIcon,
  CollapsibleContent,
  CollapsibleTrigger,
  CollapsibleWithContext,
} from "@/components/ui/collapsible";
import { cn } from "@/lib/utils";

import { HOBBIES } from "../data/hobbies";
import { Panel, PanelHeader, PanelTitle } from "./panel";

export function Hobbies() {
  return (
    <Panel id="hobbies">
      <PanelHeader>
        <PanelTitle>
          Hobbies
          <sup className="ml-1 font-mono text-sm text-muted-foreground select-none">
            ({HOBBIES.length})
          </sup>
        </PanelTitle>
      </PanelHeader>

      <div className="divide-y divide-edge">
        {HOBBIES.map((hobby, index) => (
          <HobbyItem
            key={hobby.title}
            hobby={hobby}
            defaultOpen={index === 0}
          />
        ))}
      </div>
    </Panel>
  );
}

function HobbyItem({
  hobby,
  defaultOpen,
}: {
  hobby: (typeof HOBBIES)[number];
  defaultOpen?: boolean;
}) {
  return (
    <CollapsibleWithContext defaultOpen={defaultOpen} asChild>
      <div className="group bg-background/40 transition-colors hover:bg-accent/30">
        <div className="flex items-stretch">
          <div className="flex w-20 shrink-0 items-center justify-center border-r border-edge bg-gradient-to-br from-muted/40 to-transparent p-2">
            <div className="relative aspect-square w-full overflow-hidden rounded-2xl border border-edge bg-background shadow-sm">
              <Image
                src={hobby.images[0]}
                alt={`${hobby.title} preview`}
                fill
                className="object-cover"
                sizes="80px"
                unoptimized
              />
            </div>
          </div>

          <div className="min-w-0 flex-1 border-l border-dashed border-edge">
            <CollapsibleTrigger className="flex w-full items-center gap-4 p-4 pr-2 text-left select-none">
              <div className="min-w-0 flex-1">
                <h3 className="mb-1 text-base font-medium text-balance">
                  {hobby.title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {hobby.description}
                </p>
              </div>

              <div
                className="shrink-0 text-muted-foreground [&_svg]:size-4"
                aria-hidden
              >
                <CollapsibleChevronsIcon />
              </div>
            </CollapsibleTrigger>
          </div>
        </div>

        <CollapsibleContent className="group overflow-hidden duration-300 data-[state=closed]:animate-collapsible-up data-[state=open]:animate-collapsible-down">
          <div className="border-t border-edge bg-background/70 shadow-inner">
            <div className="grid gap-3 p-4 duration-300 group-data-[state=closed]:animate-fade-out group-data-[state=open]:animate-fade-in sm:grid-cols-3">
              {hobby.images.map((image, index) => (
                <div
                  key={image}
                  className={cn(
                    "group/card relative aspect-[4/3] overflow-hidden rounded-2xl border border-edge",
                    "bg-muted shadow-sm"
                  )}
                >
                  <Image
                    src={image}
                    alt={`${hobby.title} image ${index + 1}`}
                    fill
                    className="object-cover transition-transform duration-300 group-hover/card:scale-[1.03]"
                    sizes="(max-width: 640px) 100vw, 33vw"
                    unoptimized
                  />
                </div>
              ))}
            </div>
          </div>
        </CollapsibleContent>
      </div>
    </CollapsibleWithContext>
  );
}
