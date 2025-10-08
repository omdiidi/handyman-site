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
          
          <div className="prose prose-lg max-w-none text-left">
            <p className="text-lg text-foreground leading-relaxed mb-6" data-testid="text-about-bio">
              Hi, I'm Reza - owner of Rez The Builder LLC. For over 10 years, I've been helping clients across Redmond, Bellevue, Kirkland, Issaquah, and Sammamish with reliable handyman and contractor work.
            </p>
            <p className="text-lg text-foreground leading-relaxed mb-6">
              When you call me, you're not talking to a big company — you're speaking directly with me. I take pride in clean, careful work and clear, honest communication every step of the way. My goal is to make sure the job gets done right and without any stress.
            </p>
            <p className="text-lg text-foreground leading-relaxed mb-6">
              With 200+ 5-star reviews, most of my work comes from referrals and repeat customers who know they can count on me. Whether it's a repair, installation, or maintenance project, I'll make it simple to get done and done well.
            </p>
            <p className="text-lg text-foreground leading-relaxed mb-6">
              If you're not sure where to start, just give me a call at 425-442-9328 — I'll walk you through your best options and help you get it handled quickly.
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
