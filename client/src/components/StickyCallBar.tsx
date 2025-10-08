import { Phone, MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";

export default function StickyCallBar() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 400);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 bg-card/95 backdrop-blur-lg border-t border-card-border shadow-2xl md:hidden" data-testid="sticky-call-bar">
      <div className="px-4 py-3 flex items-center justify-center gap-3">
        <a href="tel:4254429328" className="flex-1">
          <Button variant="default" className="w-full bg-accent text-accent-foreground border border-accent-border" data-testid="button-sticky-call">
            <Phone className="w-4 h-4" />
            <span className="font-bold">Call</span>
          </Button>
        </a>
        <a href="sms:4254429328" className="flex-1">
          <Button variant="default" className="w-full bg-accent text-accent-foreground border border-accent-border" data-testid="button-sticky-text">
            <MessageSquare className="w-4 h-4" />
            <span className="font-bold">Text</span>
          </Button>
        </a>
      </div>
    </div>
  );
}
