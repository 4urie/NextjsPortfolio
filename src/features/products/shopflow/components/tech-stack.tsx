import Image from "next/image";

const techStack = [
  {
    name: "React",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
    description: "Modern UI library for building interactive interfaces",
  },
  {
    name: "Redux",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg",
    description: "State management for complex application logic",
  },
  {
    name: "Node.js",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
    description: "JavaScript runtime for building scalable backend",
  },
  {
    name: "Express.js",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
    description: "Fast, unopinionated web framework for Node.js",
  },
  {
    name: "PostgreSQL",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
    description: "Powerful, open-source relational database",
  },
  {
    name: "Prisma",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/prisma/prisma-original.svg",
    description: "Next-generation ORM for type-safe database access",
  },
  {
    name: "TypeScript",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
    description: "Type-safe JavaScript for robust applications",
  },
  {
    name: "JWT",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/json/json-original.svg",
    description: "Secure authentication and authorization system",
  },
];

const keyFeatures = [
  {
    title: "RESTful APIs",
    description: "Well-structured API endpoints",
  },
  {
    title: "Type Safety",
    description: "End-to-end TypeScript",
  },
  {
    title: "Real-time Updates",
    description: "Live data synchronization",
  },
  {
    title: "Secure Authentication",
    description: "JWT-based auth system",
  },
  {
    title: "Database Migrations",
    description: "Prisma ORM management",
  },
  {
    title: "Excel Integration",
    description: "Handontable data grids",
  },
];

export function ShopFlowTechStack() {
  return (
    <section className="border-y border-edge py-20">
      <div className="mx-auto max-w-3xl">
        <div className="mb-12">
          <h2 className="text-[1.3rem] font-semibold tracking-[-0.02em]">
            Built with Modern Technology Stack
          </h2>
          <p className="mt-2 text-sm text-muted-foreground">
            Powered by industry-leading technologies for reliability and
            performance
          </p>
        </div>

        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {techStack.map((tech) => (
            <div
              key={tech.name}
              className="flex flex-col items-center rounded-2xl border border-edge bg-background/90 p-6 text-center shadow-card backdrop-blur-sm transition-shadow duration-350 hover:shadow-card-hover"
            >
              <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-md border border-edge bg-muted">
                <Image
                  src={tech.logo}
                  alt={tech.name}
                  width={40}
                  height={40}
                  className="h-10 w-10 opacity-70 grayscale dark:invert-[0.9]"
                />
              </div>
              <h3 className="mb-2 text-[15px] font-medium">{tech.name}</h3>
              <p className="text-xs text-muted-foreground">
                {tech.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-12 rounded-2xl border border-edge bg-background/90 p-8 shadow-card backdrop-blur-sm">
          <h3 className="mb-6 text-center font-pixel text-xl lowercase">
            key technical features
          </h3>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {keyFeatures.map((feature) => (
              <div key={feature.title} className="flex items-start gap-3">
                <div className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-edge bg-muted font-mono text-xs text-muted-foreground">
                  ✓
                </div>
                <div>
                  <div className="text-sm font-medium">{feature.title}</div>
                  <div className="text-xs text-muted-foreground">
                    {feature.description}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
