import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Star } from "lucide-react";

const reviews = [
  {
    text: "Reza fixed our fence and installed a new ceiling fan. Professional, on time, and very fair pricing!",
    author: "Sarah M.",
    location: "Redmond",
  },
  {
    text: "Best handyman we've found on the Eastside. Great communication and really cares about doing quality work.",
    author: "Mike T.",
    location: "Bellevue",
  },
  {
    text: "Called Reza for a honey-do list. He knocked out everything in one visit. Highly recommend!",
    author: "Jennifer L.",
    location: "Kirkland",
  },
];

export default function Reviews() {
  return (
    <section className="py-16 md:py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-foreground mb-12" data-testid="text-reviews-title">
          What your neighbors say
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {reviews.map((review, index) => (
            <Card key={index} className="p-6" data-testid={`card-review-${index}`}>
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <p className="text-foreground mb-4 italic" data-testid={`text-review-${index}`}>"{review.text}"</p>
              <p className="text-sm text-muted-foreground" data-testid={`text-reviewer-${index}`}>
                — {review.author}, {review.location}
              </p>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <a href="tel:4254429328">
            <Button variant="default" className="bg-accent text-accent-foreground border border-accent-border" data-testid="button-reviews-call">
              Call 425-442-9328
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
}
