import { Star, MessageSquare, Clock, CheckSquare } from "lucide-react";

const reasons = [
  {
    icon: Star,
    title: "200+ 5-star reviews",
    description: "From Eastside homeowners",
  },
  {
    icon: MessageSquare,
    title: "Clear communication",
    description: "And on-time arrivals",
  },
  {
    icon: CheckSquare,
    title: "Protected work areas",
    description: "Cleaned and checked before leaving",
  },
  {
    icon: Clock,
    title: "Upfront scope",
    description: "Simple scheduling by phone",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="py-16 md:py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-foreground mb-12" data-testid="text-why-title">
          Why neighbors call Reza
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {reasons.map((reason, index) => {
            const Icon = reason.icon;
            const isReviewsItem = reason.title === "200+ 5-star reviews";
            
            const content = (
              <>
                <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-4">
                  <Icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2" data-testid={`text-reason-title-${index}`}>
                  {reason.title}
                </h3>
                <p className="text-muted-foreground" data-testid={`text-reason-desc-${index}`}>
                  {reason.description}
                </p>
              </>
            );
            
            if (isReviewsItem) {
              return (
                <a
                  key={index}
                  href="https://g.page/r/CZhYbbZMOPPqEAE/review"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-center hover-elevate active-elevate-2 rounded-md p-4 -m-4 transition-all"
                  data-testid={`reason-${index}`}
                >
                  {content}
                </a>
              );
            }
            
            return (
              <div key={index} className="text-center" data-testid={`reason-${index}`}>
                {content}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
