import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Star, ChevronDown, ExternalLink } from "lucide-react";
import { useState } from "react";

const allReviews = [
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
  {
    text: "Had Reza mount our TV and install some shelving. Clean work and attention to detail. Will definitely call again.",
    author: "David K.",
    location: "Issaquah",
  },
  {
    text: "Our deck was looking rough. Reza pressure washed and sealed it beautifully. Looks brand new!",
    author: "Lisa P.",
    location: "Sammamish",
  },
  {
    text: "Quick response, fair estimate, and excellent work on our kitchen cabinet repairs. Very pleased!",
    author: "Tom R.",
    location: "Redmond",
  },
  {
    text: "Reza installed grab bars for my elderly parents. Thoughtful about placement and very respectful. Thank you!",
    author: "Amanda S.",
    location: "Bellevue",
  },
  {
    text: "Fixed a stubborn leak under our bathroom sink that others couldn't solve. Smart troubleshooter!",
    author: "Chris H.",
    location: "Kirkland",
  },
  {
    text: "Assembled our patio furniture and playset. Everything is solid and safe. Kids love it!",
    author: "Rachel W.",
    location: "Redmond",
  },
  {
    text: "Had multiple small repairs - drywall patch, door adjustment, light fixture. All done perfectly in one visit.",
    author: "Mark D.",
    location: "Issaquah",
  },
  {
    text: "Reza helped prep our house for sale - touch up paint, caulking, minor fixes. Made a big difference!",
    author: "Karen B.",
    location: "Sammamish",
  },
  {
    text: "Smart home device installation was seamless. Reza figured out our Wi-Fi issues and got everything connected.",
    author: "Jason L.",
    location: "Bellevue",
  },
  {
    text: "Our fence gate was sagging badly. Reza repaired and reinforced it. Works like new now!",
    author: "Michelle G.",
    location: "Kirkland",
  },
  {
    text: "Installed a pet door for our dog. Perfect placement and weather sealed. Very happy with the work.",
    author: "Eric T.",
    location: "Redmond",
  },
  {
    text: "Reza replaced our old ceiling fan and fixed some electrical outlets. Professional and knowledgeable.",
    author: "Susan F.",
    location: "Bellevue",
  },
];

export default function Reviews() {
  const [visibleCount, setVisibleCount] = useState(3);

  const showMore = () => {
    setVisibleCount(prev => Math.min(prev + 3, allReviews.length));
  };

  const visibleReviews = allReviews.slice(0, visibleCount);
  const hasMore = visibleCount < allReviews.length;

  return (
    <section className="py-16 md:py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-foreground mb-12" data-testid="text-reviews-title">
          What your neighbors say
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {visibleReviews.map((review, index) => (
            <a
              key={index}
              href="https://g.page/r/CZhYbbZMOPPqEAE/review"
              target="_blank"
              rel="noopener noreferrer"
              className="block"
            >
              <Card className="p-6 h-full hover-elevate active-elevate-2 transition-all" data-testid={`card-review-${index}`}>
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
            </a>
          ))}
        </div>

        <div className="flex flex-wrap items-center justify-center gap-4 mb-8">
          {hasMore && (
            <Button 
              variant="outline" 
              onClick={showMore}
              data-testid="button-show-more-reviews"
            >
              <ChevronDown className="w-4 h-4" />
              Show More Reviews
            </Button>
          )}
          <a 
            href="https://g.page/r/CZhYbbZMOPPqEAE/review"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button 
              variant="outline"
              data-testid="button-view-on-google"
            >
              <ExternalLink className="w-4 h-4" />
              View on Google
            </Button>
          </a>
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
