import { Phone, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import heroImage from "@assets/generated_images/Professional_handyman_hero_image_5a6b69b4.png";

export default function Hero() {
  return (
    <section className="relative min-h-[600px] md:min-h-[700px] flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroImage})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/60" />

      <div className="relative z-10 max-w-4xl mx-auto px-4 md:px-6 lg:px-8 text-center py-20">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight" data-testid="text-hero-headline">
          Reliable handyman for Redmond and the Eastside
        </h1>
        
        <p className="text-lg md:text-xl text-white/95 mb-8 max-w-3xl mx-auto" data-testid="text-hero-subhead">
          200+ 5-star reviews. Fast, clean, and stress-free help for repairs, installs, and upkeep.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
          <a href="tel:4254429328">
            <Button size="lg" variant="default" className="bg-accent text-accent-foreground border border-accent-border text-lg px-8 py-6 rounded-full" data-testid="button-hero-call">
              <Phone className="w-5 h-5" />
              <span className="font-bold">Call 425-442-9328</span>
            </Button>
          </a>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-3 text-white/90">
          <Badge variant="outline" className="bg-white/10 text-white border-white/30 backdrop-blur-sm" data-testid="badge-licensed">
            <CheckCircle className="w-4 h-4" />
            Licensed
          </Badge>
          <Badge variant="outline" className="bg-white/10 text-white border-white/30 backdrop-blur-sm" data-testid="badge-bonded">
            <CheckCircle className="w-4 h-4" />
            Bonded
          </Badge>
          <Badge variant="outline" className="bg-white/10 text-white border-white/30 backdrop-blur-sm" data-testid="badge-insured">
            <CheckCircle className="w-4 h-4" />
            Insured
          </Badge>
        </div>
      </div>
    </section>
  );
}
