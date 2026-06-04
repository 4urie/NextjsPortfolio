import type { Project } from "../types/projects";

export const PROJECTS: Project[] = [
  {
    id: "aquaserve",
    title: "AquaServe",
    period: { start: "2026" },
    link: "https://4urie.me",
    skills: ["Next.js", "TypeScript", "Flutter", "Supabase", "AI"],
    isExpanded: true,
    description: `A mobile water ordering application with AI chatbot ordering assistant, order tracking, quick reorder, notifications, ratings, delivery scheduling, and admin dashboard.`,
    logo: "https://api.dicebear.com/7.x/shapes/svg?seed=AquaServe",
  },
  //commit test
  {
    id: "feedsmart",
    title: "FeedSmart",
    period: { start: "2026" },
    link: "https://github.com/4urie",
    skills: ["ESP32", "Arduino", "Flutter", "Supabase", "IoT"],
    description: `An IoT-based smart feeding system using ESP32, RFID, load cell, ultrasonic sensor, MLX90614 temperature sensor, MQ135 air quality sensor, Flutter mobile app, and Supabase database.`,
    logo: "https://api.dicebear.com/7.x/shapes/svg?seed=FeedSmart",
  },
  {
    id: "omniread",
    title: "OmniRead",
    period: { start: "2026" },
    link: "https://github.com/4urie",
    skills: [
      "Laravel",
      "Livewire",
      "Tailwind CSS",
      "MySQL",
      "Chart.js",
      "Ollama",
    ],
    description: `An adaptive digital reading system built with Laravel, Livewire, Tailwind CSS, MySQL, Chart.js, and Ollama AI.`,
    logo: "https://api.dicebear.com/7.x/shapes/svg?seed=OmniRead",
  },
];
