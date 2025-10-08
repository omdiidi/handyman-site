import { MapPin } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const areas = ["Redmond", "Bellevue", "Kirkland", "Issaquah", "Sammamish"];

export default function ServiceAreas() {
  return (
    <section className="py-16 md:py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 text-center">
        <div className="inline-flex items-center justify-center gap-2 mb-6">
          <MapPin className="w-6 h-6 text-primary" />
          <h2 className="text-2xl md:text-3xl font-bold text-foreground" data-testid="text-areas-title">
            Service Areas
          </h2>
        </div>
        
        <div className="flex flex-wrap justify-center gap-3">
          {areas.map((area, index) => (
            <Badge key={index} variant="secondary" className="text-base px-4 py-2" data-testid={`badge-area-${index}`}>
              {area}
            </Badge>
          ))}
        </div>
      </div>
    </section>
  );
}
