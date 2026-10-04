"use client";

import { ExternalLinkIcon, GithubIcon, InfoIcon } from "lucide-react";
import { motion } from "motion/react";
import Image from "next/image";

import { Icons } from "@/components/icons";
import { Markdown } from "@/components/markdown";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Tag } from "@/components/ui/tag";
import { UTM_PARAMS } from "@/config/site";
import { addQueryParams } from "@/utils/url";

import type { Project } from "../../types/projects";
import { getProjectStatus, getStatusStyles } from "./project-utils";

const MAX_VISIBLE_SKILLS = 5;

export function ProjectCard({ project }: { project: Project }) {
  const status = getProjectStatus(project);
  const visibleSkills = project.skills.slice(0, MAX_VISIBLE_SKILLS);
  const remainingCount = project.skills.length - MAX_VISIBLE_SKILLS;

  return (
    <motion.article
      layout
      whileHover={{ y: -2 }}
      transition={{ duration: 0.42, ease: [0.16, 1, 0.3, 1] }}
      className="group flex h-full flex-col overflow-hidden rounded-2xl border border-edge bg-background/90 shadow-card backdrop-blur-sm transition-shadow duration-350 hover:shadow-card-hover"
    >
      {/* Thumbnail */}
      <div className="relative overflow-hidden">
        {project.logo ? (
          <Image
            src={project.logo}
            alt={project.title}
            width={1200}
            height={675}
            unoptimized
            className="aspect-video w-full object-cover transition-transform duration-500 group-hover:scale-[1.04]"
          />
        ) : (
          <div className="flex aspect-video w-full items-center justify-center bg-muted/30 text-muted-foreground">
            <Icons.project className="size-12" />
          </div>
        )}
      </div>

      {/* Content */}
      <div className="flex flex-1 flex-col gap-3 p-5">
        {/* Title row */}
        <div>
          <h3 className="text-[15px] font-medium tracking-tight">
            {project.title}
          </h3>
          <p className="mt-1 micro-label">
            {project.period.start}
            {project.period.end ? ` — ${project.period.end}` : " — Present"}
          </p>
        </div>

        {/* Description (clamped) */}
        {project.description && (
          <p className="line-clamp-2 text-sm leading-relaxed text-muted-foreground">
            {project.description}
          </p>
        )}

        {/* Tech stack */}
        {project.skills.length > 0 && (
          <ul className="flex flex-wrap gap-1.5">
            {visibleSkills.map((skill) => (
              <li key={skill}>
                <Tag>{skill}</Tag>
              </li>
            ))}
            {remainingCount > 0 && (
              <li>
                <Tag>+{remainingCount}</Tag>
              </li>
            )}
          </ul>
        )}

        {/* Footer */}
        <div className="mt-auto flex items-center justify-between border-t border-edge/50 pt-3">
          <Tag
            featured={status === "In Progress"}
            className={getStatusStyles(status)}
          >
            {status === "In Progress" && <span className="status-dot size-1" />}
            {status}
          </Tag>

          <div className="flex items-center gap-0.5">
            <a
              href={addQueryParams(project.link, UTM_PARAMS)}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub repository"
              className="inline-flex size-8 items-center justify-center rounded-full text-faint transition-colors hover:bg-accent hover:text-foreground"
            >
              <GithubIcon className="size-4" />
            </a>
            <a
              href={addQueryParams(project.link, UTM_PARAMS)}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Live demo"
              className="inline-flex size-8 items-center justify-center rounded-full text-faint transition-colors hover:bg-accent hover:text-foreground"
            >
              <ExternalLinkIcon className="size-4" />
            </a>
            <Dialog>
              <DialogTrigger asChild>
                <button
                  type="button"
                  aria-label="View details"
                  className="inline-flex size-8 items-center justify-center rounded-full text-faint transition-colors hover:bg-accent hover:text-foreground"
                >
                  <InfoIcon className="size-4" />
                </button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-xl">
                <DialogHeader>
                  <DialogTitle>{project.title}</DialogTitle>
                </DialogHeader>
                <div className="max-h-[60vh] overflow-y-auto">
                  <Markdown>
                    {project.description ?? "No additional details available."}
                  </Markdown>
                </div>
              </DialogContent>
            </Dialog>
          </div>
        </div>
      </div>
    </motion.article>
  );
}
