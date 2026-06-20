"use client";

import { ChevronDownIcon, ExternalLinkIcon, GithubIcon } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import Image from "next/image";
import { useState } from "react";

import { Icons } from "@/components/icons";
import { Markdown } from "@/components/markdown";
import { Button } from "@/components/ui/button";
import { Tag } from "@/components/ui/tag";
import { UTM_PARAMS } from "@/config/site";
import { addQueryParams } from "@/utils/url";

import type { Project } from "../../types/projects";
import { getProjectStatus, getStatusStyles } from "./project-utils";

export function ProjectListItem({ project }: { project: Project }) {
  const [open, setOpen] = useState(Boolean(project.isExpanded));
  const status = getProjectStatus(project);

  return (
    <motion.article
      layout
      className="group border-b border-edge px-1 py-5 transition-colors hover:bg-accent/30"
    >
      <div className="grid gap-4 md:grid-cols-[auto,1fr,auto] md:items-start">
        <div className="flex items-center gap-3">
          <div className="flex size-14 items-center justify-center overflow-hidden rounded-2xl border border-edge bg-muted/30">
            {project.logo ? (
              <Image
                src={project.logo}
                alt={project.title}
                width={64}
                height={64}
                unoptimized
                className="size-full object-cover"
              />
            ) : (
              <Icons.project className="size-6 text-muted-foreground" />
            )}
          </div>
          <span
            className={`inline-flex items-center rounded-full border px-2.5 py-1 text-xs font-medium ${getStatusStyles(status)}`}
          >
            {status}
          </span>
        </div>

        <div className="space-y-3">
          <div>
            <h3 className="text-lg font-semibold tracking-tight">
              {project.title}
            </h3>
            <p className="mt-1 text-sm text-muted-foreground">
              {project.period.start}
              {project.period.end ? ` - ${project.period.end}` : " - Present"}
            </p>
          </div>

          {project.description && (
            <p className="max-w-3xl text-sm leading-6 text-muted-foreground">
              {project.description}
            </p>
          )}

          {project.skills.length > 0 && (
            <ul className="flex flex-wrap gap-2">
              {project.skills.map((skill) => (
                <li key={skill}>
                  <Tag className="border-edge bg-background/70 px-2 py-1 text-xs text-foreground/80">
                    {skill}
                  </Tag>
                </li>
              ))}
            </ul>
          )}

          <AnimatePresence initial={false}>
            {open && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.25, ease: "easeOut" }}
                className="overflow-hidden"
              >
                <div className="mt-3 rounded-2xl border border-edge bg-background/60 p-4">
                  <Markdown>
                    {project.description ?? "No additional details available."}
                  </Markdown>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        <div className="flex flex-wrap gap-2 md:justify-end">
          <a
            href={addQueryParams(project.link, UTM_PARAMS)}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 rounded-full border border-edge px-3 py-1.5 text-sm text-muted-foreground transition-colors hover:border-foreground/20 hover:text-foreground"
          >
            <GithubIcon className="size-4" />
            GitHub
          </a>
          <a
            href={addQueryParams(project.link, UTM_PARAMS)}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 rounded-full border border-edge px-3 py-1.5 text-sm text-muted-foreground transition-colors hover:border-foreground/20 hover:text-foreground"
          >
            <ExternalLinkIcon className="size-4" />
            Live Demo
          </a>
          <Button
            type="button"
            variant="ghost"
            size="sm"
            className="rounded-full"
            onClick={() => setOpen((value) => !value)}
          >
            <span>{open ? "Collapse" : "Expand"}</span>
            <ChevronDownIcon
              className={`size-4 transition-transform ${open ? "rotate-180" : ""}`}
            />
          </Button>
        </div>
      </div>
    </motion.article>
  );
}
