import { Star } from "lucide-react";
import CallActionPopover from "@/components/CallActionPopover";

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

          <div className="mt-8 flex flex-col items-center">
            <CallActionPopover
              phone="425-442-9328"
              variant="default"
              size="lg"
              className="bg-accent text-accent-foreground border border-accent-border"
              testId="button-about-call"
            />
            <div className="flex items-center justify-center gap-2 mt-4">
              <div className="flex gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <span className="text-sm text-muted-foreground">200+ 5 stars</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
