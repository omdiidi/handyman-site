import { Phone, CheckCircle, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useState, useEffect } from "react";
import image1 from "@assets/image1_1759899454942.webp";
import image2 from "@assets/image2_1759899454944.webp";
import image3 from "@assets/image3_1759899454944.webp";
import image4 from "@assets/image4_1759899454945.webp";
import image5 from "@assets/image5_1759899454945.webp";
import image6 from "@assets/image6_1759899454945.webp";
import image9 from "@assets/image9_1759899454946.webp";
import image10 from "@assets/image10_1759899454947.webp";
import image11 from "@assets/image11_1759899454947.webp";
import image12 from "@assets/image12_1759899454947.webp";
import image13 from "@assets/image13_1759899454948.webp";
import image14 from "@assets/image14_1759899454948.webp";
import image17 from "@assets/image17_1759899454948.webp";
import image18 from "@assets/image18_1759899454948.webp";

const heroImages = [
  image1,
  image2,
  image3,
  image4,
  image5,
  image6,
  image9,
  image10,
  image11,
  image12,
  image13,
  image14,
  image17,
  image18,
];

export default function Hero() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % heroImages.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-[600px] md:min-h-[700px] flex items-center justify-center overflow-hidden">
      {heroImages.map((image, index) => (
        <div
          key={index}
          className={`absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ${
            index === currentImageIndex ? "opacity-100" : "opacity-0"
          }`}
          style={{ backgroundImage: `url(${image})` }}
        />
      ))}
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
        
        <a 
          href="https://g.page/r/CZhYbbZMOPPqEAE/review" 
          target="_blank" 
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 mt-4 hover-elevate active-elevate-2 inline-flex rounded-md px-3 py-1 transition-all" 
          data-testid="rating-display"
        >
          <div className="flex gap-1">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
            ))}
          </div>
          <span className="text-white/95 font-semibold">5.0 (200+ reviews)</span>
        </a>
        
        <p className="text-sm text-white/80 mt-2" data-testid="text-service-areas">
          Redmond • Bellevue • Kirkland • Issaquah • Sammamish
        </p>
      </div>
    </section>
  );
}
