import {
  Bell,
  Bot,
  CalendarDays,
  CheckCircle2,
  Gauge,
  MapPinned,
  PackageSearch,
  Star,
} from "lucide-react";

const features = [
  {
    icon: Bot,
    title: "AI Chatbot Ordering",
    description:
      "Customers can place water orders through a guided AI chatbot flow that feels natural and fast.",
  },
  {
    icon: PackageSearch,
    title: "Order Tracking",
    description:
      "Monitor active orders, statuses, and delivery progress in one clear dashboard.",
  },
  {
    icon: CalendarDays,
    title: "Delivery Scheduling",
    description:
      "Schedule deliveries, manage time slots, and keep operations organized for busy days.",
  },
  {
    icon: Gauge,
    title: "Admin Dashboard",
    description:
      "View key metrics, recent orders, and management tools in a simple admin interface.",
  },
  {
    icon: Bell,
    title: "Notifications",
    description:
      "Keep customers informed with timely updates for orders, schedules, and reminders.",
  },
  {
    icon: Star,
    title: "Ratings & Reorders",
    description:
      "Support quick reorder flows and ratings to improve repeat ordering experience.",
  },
  {
    icon: MapPinned,
    title: "Delivery Tracking",
    description:
      "Help riders and admins stay on top of delivery routes and drop-off progress.",
  },
  {
    icon: CheckCircle2,
    title: "Reliable Workflow",
    description:
      "Designed as a practical capstone solution with a smooth and reliable ordering workflow.",
  },
];

export function ShopFlowFeatures() {
  return (
    <section id="features" className="py-20 md:py-32">
      <div className="mx-auto max-w-5xl">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-3xl font-bold md:text-4xl">
            Everything You Need for Smart Water Ordering
          </h2>
          <p className="text-lg text-muted-foreground">
            Built with modern technologies to provide a seamless customer and
            admin experience
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-2">
          {features.map((feature) => {
            const Icon = feature.icon;
            return (
              <div
                key={feature.title}
                className="group relative overflow-hidden rounded-xl border bg-background p-8 transition-all hover:border-primary/50 hover:shadow-lg"
              >
                <div className="mb-4 inline-flex rounded-lg bg-primary/10 p-3">
                  <Icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="mb-3 text-xl font-semibold">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
                <div className="absolute top-0 right-0 -mt-8 -mr-8 h-24 w-24 rounded-full bg-primary/5 transition-transform group-hover:scale-150" />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
