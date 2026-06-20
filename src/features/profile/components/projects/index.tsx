"use client";

import { AnimatePresence, motion } from "motion/react";
import { useEffect, useRef, useState } from "react";

import { PROJECTS } from "../../data/projects";
import { Panel, PanelHeader, PanelTitle } from "../panel";
import { ProjectCard } from "./project-card";
import { ProjectListItem } from "./project-list-item";
import { type ProjectViewMode, ProjectViewToggle } from "./project-view-toggle";

const STORAGE_KEY = "projects:view-mode";

export function Projects() {
  const [view, setView] = useState<ProjectViewMode>("grid");
  const hasLoadedStoredView = useRef(false);

  useEffect(() => {
    const storedView = window.localStorage.getItem(STORAGE_KEY);

    if (storedView === "grid" || storedView === "list") {
      window.requestAnimationFrame(() => {
        setView(storedView);
        hasLoadedStoredView.current = true;
      });
      return;
    }

    hasLoadedStoredView.current = true;
  }, []);

  useEffect(() => {
    if (!hasLoadedStoredView.current) return;

    window.localStorage.setItem(STORAGE_KEY, view);
  }, [view]);

  return (
    <Panel id="projects">
      <PanelHeader className="flex flex-wrap items-center justify-between gap-3 py-4">
        <PanelTitle>
          Projects
          <sup className="ml-1 font-mono text-sm text-muted-foreground select-none">
            ({PROJECTS.length})
          </sup>
        </PanelTitle>

        <ProjectViewToggle value={view} onChange={setView} />
      </PanelHeader>

      <div className="px-4 py-5">
        <AnimatePresence mode="wait" initial={false}>
          {view === "grid" ? (
            <motion.div
              key="grid"
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -14 }}
              transition={{ duration: 0.22, ease: "easeOut" }}
              className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3"
            >
              {PROJECTS.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </motion.div>
          ) : (
            <motion.div
              key="list"
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -14 }}
              transition={{ duration: 0.22, ease: "easeOut" }}
              className="space-y-0"
            >
              {PROJECTS.map((project) => (
                <ProjectListItem key={project.id} project={project} />
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </Panel>
  );
}
