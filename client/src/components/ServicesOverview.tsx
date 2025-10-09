import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { Wrench, Tv, Package, Paintbrush, Droplet, Zap, Hammer, Sparkles, Home, Search, Phone, Mail } from "lucide-react";

const services = [
  {
    icon: Wrench,
    title: "Drywall & Repairs",
    description: "Fixing holes, cracks, and dents in walls and ceilings. Repairing tile and grout, doors that stick, cabinet hinges and drawers, window screens, and addressing small wood rot issues throughout your home.",
  },
  {
    icon: Droplet,
    title: "Plumbing Services",
    description: "Installing and repairing faucets, sinks, and toilets. Fixing leaks, replacing shower heads, and handling light plumbing tasks in kitchens and bathrooms to keep your water flowing smoothly.",
  },
  {
    icon: Zap,
    title: "Electrical Work",
    description: "Installing light fixtures, ceiling fans, outlets, and switches. Setting up smart home devices like Ring doorbells, smart locks, and thermostats. Replacing outdoor lighting and adding dimmers where needed.",
  },
  {
    icon: Paintbrush,
    title: "Painting & Finishing",
    description: "Clean, even painting for interior walls, ceilings, and trim. Exterior painting for doors, fences, and small surfaces. Plus caulking, re-caulking, deck and fence staining, and grout sealing for a polished finish.",
  },
  {
    icon: Tv,
    title: "Installation & Mounting",
    description: "Installing bathroom exhaust fans, mounting pictures, mirrors, and artwork securely and level. Installing mailboxes, pet doors, weatherstripping, and handrails. Setting up all types of fixtures and home improvements.",
  },
  {
    icon: Package,
    title: "Furniture Assembly",
    description: "Building desks, bed frames, shelves, and outdoor furniture sets from flat-pack kits. Quick, correct assembly of IKEA and other furniture so you can start using it right away.",
  },
  {
    icon: Sparkles,
    title: "Outdoor Services",
    description: "Pressure washing decks, driveways, siding, and patios. Cleaning gutters and clearing downspouts. Deck repair, cleaning, and sealing. Holiday light installation and removal for homes and small commercial spaces.",
  },
  {
    icon: Hammer,
    title: "Carpentry & Trim",
    description: "Installing and repairing interior trim, baseboards, and door casings for a neat finish. Tightening handrails and securing stairs for safety. Quality carpentry work that enhances your home's appearance.",
  },
  {
    icon: Home,
    title: "General Services",
    description: "Fence and gate repairs, odd jobs, custom requests, regular home and property maintenance, and home sale preparation. Whatever's on your to-do list, we'll help you check it off.",
  },
];

export default function ServicesOverview() {
  return (
    <section className="pt-8 pb-16 md:pb-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        <Card className="p-6 mb-8 max-w-2xl mx-auto" data-testid="card-contact-info">
          <h3 className="text-lg font-semibold text-foreground mb-4 text-center">Contact Information</h3>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <a href="tel:4254429328" className="flex items-center gap-2 text-foreground hover-elevate active-elevate-2 rounded-md px-3 py-2 transition-all" data-testid="link-contact-phone">
              <Phone className="w-5 h-5 text-primary" />
              <span className="font-medium">425-442-9328</span>
            </a>
            <a href="mailto:reza-z@hotmail.com" className="flex items-center gap-2 text-foreground hover-elevate active-elevate-2 rounded-md px-3 py-2 transition-all" data-testid="link-contact-email">
              <Mail className="w-5 h-5 text-primary" />
              <span className="font-medium">reza-z@hotmail.com</span>
            </a>
          </div>
        </Card>

        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4" data-testid="text-services-title">
            Services
          </h2>
          <Link href="/job-finder?focus=true">
            <Button variant="outline" data-testid="button-browse-all-services">
              <Search className="w-4 h-4" />
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

        <div className="text-center mt-12">
          <Link href="/job-finder?focus=true">
            <Button variant="outline" data-testid="button-browse-services-bottom">
              <Search className="w-4 h-4" />
              Browse all services
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
