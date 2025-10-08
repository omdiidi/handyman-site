import { Button } from "@/components/ui/button";
import { Phone } from "lucide-react";

export default function About() {
  return (
    <div className="min-h-screen bg-background py-16">
      <div className="max-w-4xl mx-auto px-4 md:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6" data-testid="text-about-title">
            Meet Reza
          </h1>
          
          <div className="prose prose-lg max-w-none">
            <p className="text-lg text-foreground leading-relaxed mb-6" data-testid="text-about-bio">
              I run Rez The Builder LLC, a local handyman and contractor serving Redmond and the Eastside. 
              Homeowners call me for clean, careful work and clear communication. With 200+ 5-star reviews, 
              I keep projects simple and stress-free. If it's on your to-do list, I can likely take care of it.
            </p>
          </div>

          <div className="mt-8">
            <a href="tel:4254429328">
              <Button size="lg" variant="default" className="bg-accent text-accent-foreground border border-accent-border" data-testid="button-about-call">
                <Phone className="w-5 h-5" />
                <span className="font-bold">Call 425-442-9328</span>
              </Button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
