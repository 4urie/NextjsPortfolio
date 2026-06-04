import type { Experience } from "../types/experiences";

export const EXPERIENCES: Experience[] = [
  {
    id: "education",
    companyName: "Davao del Norte State College",
    companyLogo:
      "https://ui-avatars.com/api/?name=Davao+del+Norte+State+College&background=0F172A&color=fff&size=200",
    positions: [
      {
        id: "bsit-student",
        title: "Bachelor of Science in Information Technology",
        employmentPeriod: {
          start: "2024",
        },
        employmentType: "Student",
        icon: "education",
        description: `- 3rd-year BSIT student focused on building practical and modern software solutions.
- Studying web development, mobile app development, IoT systems, AI, and database design.
- Developing capstone and academic projects that solve real-world problems.`,
        skills: [
          "Web Development",
          "Mobile Development",
          "IoT Development",
          "Database Design",
          "AI Applications",
          "Problem Solving",
        ],
        isExpanded: true,
      },
    ],
    theme: true,
  },
  {
    id: "projects",
    companyName: "Selected Projects",
    companyLogo: "https://api.dicebear.com/7.x/shapes/svg?seed=Aurie+Projects",
    positions: [
      {
        id: "aqua-serve-capstone",
        title: "Capstone Developer",
        employmentPeriod: {
          start: "2026",
        },
        employmentType: "Project-Based",
        icon: "code",
        description: `- Building AquaServe as a mobile water ordering application with AI ordering support.
- Implementing delivery scheduling, order tracking, and admin management features.
- Applying full-stack development practices to a real capstone product.`,
        skills: ["Next.js", "Flutter", "Supabase", "TypeScript", "AI"],
      },
      {
        id: "feedsmart-project",
        title: "IoT Systems Developer",
        employmentPeriod: {
          start: "2026",
        },
        employmentType: "Project-Based",
        icon: "code",
        description: `- Designing FeedSmart as an IoT-based smart feeding system.
- Integrating sensors, microcontrollers, and a Flutter companion app.
- Using cloud storage and dashboards to manage device data.`,
        skills: ["ESP32", "Arduino", "Flutter", "Supabase", "IoT"],
      },
    ],
  },
];
