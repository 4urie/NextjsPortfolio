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
    case "In Progress":
      return "border-transparent bg-foreground text-background";
    case "Completed":
      return "border-edge text-muted-foreground";
    case "Planned":
      return "border-dashed border-faint/50 text-faint";
  }
}
