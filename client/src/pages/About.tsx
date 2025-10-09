import { Button } from "@/components/ui/button";
import { Phone } from "lucide-react";

export default function About() {
  return (
    <div className="min-h-screen bg-background py-16">
      <div className="max-w-4xl mx-auto px-4 md:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6" data-testid="text-about-title">
            About Reza
          </h1>
          
          <div className="prose prose-lg max-w-none text-left">
            <p className="text-lg text-foreground leading-relaxed mb-6" data-testid="text-about-bio">
              Hi, I'm Reza, the owner of Rez The Builder LLC. My work is built on honesty, craftsmanship, and good communication - but most of all, on genuine care for my clients. I believe every project deserves attention, respect, and a personal touch.
            </p>
            <p className="text-lg text-foreground leading-relaxed mb-6">
              People often describe me as friendly, dependable, and easy to work with. I take pride in explaining each step clearly, staying transparent about costs, and making sure homeowners feel confident and comfortable from start to finish. Whether it's a small repair or a major remodel, I treat every job as if it were for my own home.
            </p>
            <p className="text-lg text-foreground leading-relaxed mb-6">
              If you're looking for a contractor who brings both skill and sincerity to the job, give me a call - I'd love to help make your project a success.
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
