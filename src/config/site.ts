import { USER } from "@/features/profile/data/user";
import type { NavItem } from "@/types/nav";

export const SITE_INFO = {
  name: USER.displayName,
  url: process.env.APP_URL || "https://4urie.me",
  ogImage: USER.ogImage,
  description: USER.bio,
  keywords: USER.keywords,
};

export const META_THEME_COLORS = {
  light: "#ffffff",
  dark: "#09090b",
};

export const MAIN_NAV: NavItem[] = [
  {
    title: "Portfolio",
    href: "/",
  },
  // {
  //   title: "Blog",
  //   href: "/blog",
  // },
  // {
  //   title: "Projects",
  //   href: "/products",
  // },
  // {
  //   title: "Components",
  //   href: "/components",
  // },
];

export const GITHUB_USERNAME = "4urie";
export const SOURCE_CODE_GITHUB_REPO = "4urie/My-Portfolio";
export const SOURCE_CODE_GITHUB_URL = "https://github.com/4urie/My-Portfolio";

export const UTM_PARAMS = {
  utm_source: "https://4urie.me",
  utm_medium: "portfolio_website",
  utm_campaign: "referral",
};
