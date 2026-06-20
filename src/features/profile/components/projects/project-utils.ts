export type ProjectStatus = "Completed" | "In Progress" | "Planned";

export function getProjectStatus(project: {
  period: { end?: string };
  isExpanded?: boolean;
}): ProjectStatus {
  if (project.period.end) {
    return "Completed";
  }

  return project.isExpanded ? "In Progress" : "Planned";
}

export function getStatusStyles(status: ProjectStatus) {
  switch (status) {
    case "Completed":
      return "border-emerald-500/20 bg-emerald-500/10 text-emerald-400";
    case "In Progress":
      return "border-sky-500/20 bg-sky-500/10 text-sky-400";
    case "Planned":
      return "border-amber-500/20 bg-amber-500/10 text-amber-400";
  }
}
