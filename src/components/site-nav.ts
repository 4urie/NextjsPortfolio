import type { NavItem } from "@/types/nav";

// Homepage section anchors, in page order (used by sidebar scrollspy + mobile menu).
export const SIDEBAR_INDEX_NAV: NavItem[] = [
  { title: "music", href: "/#music" },
  { title: "overview", href: "/#overview" },
  { title: "about", href: "/#about" },
  { title: "stack", href: "/#stack" },
  { title: "experience", href: "/#experience" },
  { title: "projects", href: "/#projects" },
  { title: "awards", href: "/#awards" },
  { title: "certs", href: "/#certs" },
];

export const SIDEBAR_PAGES_NAV: NavItem[] = [
  { title: "blog", href: "/blog" },
  { title: "products", href: "/products" },
];
