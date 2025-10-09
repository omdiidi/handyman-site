import { Phone, Clock, MapPin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

export default function Contact() {
  return (
    <div className="min-h-screen bg-background py-16">
      <div className="max-w-3xl mx-auto px-4 md:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6" data-testid="text-contact-title">
            Get in Touch
          </h1>
          <p className="text-xl text-muted-foreground mb-8" data-testid="text-contact-subtitle">
            The fastest way to book is to call
          </p>

          <div className="mb-8">
            <a href="tel:4254429328" className="inline-block mb-4">
              <div className="text-4xl md:text-5xl font-extrabold text-primary hover:text-primary/80 transition-colors" data-testid="text-contact-phone">
                425-442-9328
              </div>
            </a>
            <a href="mailto:reza-z@hotmail.com" className="flex items-center justify-center gap-2 text-foreground hover-elevate active-elevate-2 rounded-md px-4 py-2 mx-auto w-fit transition-all" data-testid="link-contact-email">
              <Mail className="w-5 h-5 text-primary" />
              <span className="text-lg font-medium">reza-z@hotmail.com</span>
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
            <Card className="p-6">
              <div className="flex items-center gap-3 mb-3">
                <Clock className="w-6 h-6 text-primary" />
                <h3 className="text-lg font-semibold text-foreground" data-testid="text-contact-hours-title">Hours</h3>
              </div>
              <p className="text-muted-foreground" data-testid="text-contact-hours">
                8:30 AM to 9:00 PM<br />
                7 days a week
              </p>
            </Card>

            <Card className="p-6">
              <div className="flex items-center gap-3 mb-3">
                <MapPin className="w-6 h-6 text-primary" />
                <h3 className="text-lg font-semibold text-foreground" data-testid="text-contact-areas-title">Service Areas</h3>
              </div>
              <p className="text-muted-foreground" data-testid="text-contact-areas">
                Redmond, Bellevue, Kirkland,<br />
                Issaquah, Sammamish
              </p>
            </Card>
          </div>

          <div className="mt-12 p-6 bg-muted/30 rounded-lg">
            <p className="text-muted-foreground" data-testid="text-contact-note">
              <strong>Note:</strong> No forms or emails, quick answers by phone
            </p>
          </div>

          <div className="mt-8">
            <a href="tel:4254429328">
              <Button size="lg" variant="default" className="bg-accent text-accent-foreground border border-accent-border" data-testid="button-contact-call">
                <Phone className="w-5 h-5" />
                <span className="font-bold">Call Now</span>
              </Button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
