import { Phone, Clock, Shield } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-card border-t border-card-border py-12">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-lg font-bold text-foreground mb-3" data-testid="text-footer-company">
              Rez The Builder LLC
            </h3>
            <p className="text-muted-foreground mb-2">Handyman and contractor</p>
            <div className="flex items-center gap-2 text-muted-foreground">
              <Shield className="w-4 h-4" />
              <span className="text-sm" data-testid="text-footer-credentials">Licensed, bonded, insured</span>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-bold text-foreground mb-3" data-testid="text-footer-hours-title">Hours</h3>
            <div className="flex items-center gap-2 text-muted-foreground">
              <Clock className="w-4 h-4" />
              <span data-testid="text-footer-hours">8:30 AM to 9:00 PM daily</span>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-bold text-foreground mb-3" data-testid="text-footer-contact-title">Contact</h3>
            <a href="tel:4254429328" className="flex items-center gap-2 text-primary hover:underline">
              <Phone className="w-4 h-4" />
              <span className="font-semibold" data-testid="text-footer-phone">425-442-9328</span>
            </a>
          </div>
        </div>

        <div className="pt-8 border-t border-card-border text-center text-sm text-muted-foreground">
          <p data-testid="text-footer-copyright">© {new Date().getFullYear()} Rez The Builder LLC. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
