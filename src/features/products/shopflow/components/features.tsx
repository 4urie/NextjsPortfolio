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
      <div className="mx-auto max-w-3xl">
        <div className="mb-12">
          <h2 className="text-[1.3rem] font-semibold tracking-[-0.02em]">
            Everything You Need for Smart Water Ordering
          </h2>
          <p className="mt-2 text-sm text-muted-foreground">
            Built with modern technologies to provide a seamless customer and
            admin experience
          </p>
        </div>

        <div className="grid gap-3 md:grid-cols-2">
          {features.map((feature) => {
            const Icon = feature.icon;
            return (
              <div
                key={feature.title}
                className="group rounded-2xl border border-edge bg-background/90 p-6 shadow-card backdrop-blur-sm transition-shadow duration-350 hover:shadow-card-hover"
              >
                <div className="mb-4 inline-flex rounded-md border border-edge bg-muted p-3">
                  <Icon className="h-5 w-5 text-faint" />
                </div>
                <h3 className="mb-2 text-[15px] font-medium">
                  {feature.title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
