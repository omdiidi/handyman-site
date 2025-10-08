import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { Wrench, Tv, Package, Paintbrush, Droplet, Zap, Hammer, Sparkles, Home } from "lucide-react";

const services = [
  {
    icon: Wrench,
    title: "Repairs",
    description: "Drywall, doors, cabinets, fences, decks, siding, tile, grout, leaks, toilets, screens, small wood rot",
  },
  {
    icon: Tv,
    title: "Install and Mount",
    description: "TVs, soundbars, lights, fans, shelves, pictures, curtains, smart home, doorbells, thermostats, locks, grab bars",
  },
  {
    icon: Package,
    title: "Assembly",
    description: "Furniture, beds, desks, bookshelves, exercise gear, outdoor sets, sheds, playsets",
  },
  {
    icon: Paintbrush,
    title: "Paint and Finish",
    description: "Interior, exterior trim, touch ups, caulking, deck and fence stain, grout seal",
  },
  {
    icon: Droplet,
    title: "Light Plumbing",
    description: "Faucets, toilets, disposals, shower heads, drains, minor leaks, dishwashers",
  },
  {
    icon: Zap,
    title: "Light Electrical",
    description: "Fixtures, fans, outlets, switches, dimmers, detectors, outdoor lights",
  },
  {
    icon: Hammer,
    title: "Carpentry",
    description: "Trim, hardware, stairs and rails, small shelves",
  },
  {
    icon: Sparkles,
    title: "Outdoor & Maintenance",
    description: "Pressure wash, gutters, deck cleaning, soffit and fascia, weatherstrip, holiday lights",
  },
  {
    icon: Home,
    title: "General Help",
    description: "Home repairs, property care, honey do lists, odd jobs, baby proofing, home sale prep",
  },
];

export default function ServicesOverview() {
  return (
    <section className="py-16 md:py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4" data-testid="text-services-title">
            What we do
          </h2>
          <Link href="/job-finder">
            <Button variant="outline" data-testid="button-browse-all-services">
              Browse all services
            </Button>
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card key={index} className="p-6 hover-elevate active-elevate-2 transition-all cursor-pointer" data-testid={`card-service-${index}`}>
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-md flex items-center justify-center">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-lg font-semibold text-foreground mb-2" data-testid={`text-service-title-${index}`}>
                      {service.title}
                    </h3>
                    <p className="text-sm text-muted-foreground" data-testid={`text-service-desc-${index}`}>
                      {service.description}
                    </p>
                  </div>
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
