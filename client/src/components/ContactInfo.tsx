import { Card } from "@/components/ui/card";
import { Phone, Mail } from "lucide-react";

export default function ContactInfo() {
    return (
        <section className="py-8 bg-background">
            <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
                <Card className="p-6 max-w-2xl mx-auto" data-testid="card-contact-info">
                    <h3 className="text-lg font-semibold text-foreground mb-4 text-center">Contact Information</h3>
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                        <a href="tel:4254429328" className="flex items-center gap-2 text-foreground hover-elevate active-elevate-2 rounded-md px-3 py-2 transition-all" data-testid="link-contact-phone">
                            <Phone className="w-5 h-5 text-primary" />
                            <span className="font-medium">425-442-9328</span>
                        </a>
                        <a href="mailto:reza-z@hotmail.com" className="flex items-center gap-2 text-foreground hover-elevate active-elevate-2 rounded-md px-3 py-2 transition-all" data-testid="link-contact-email">
                            <Mail className="w-5 h-5 text-primary" />
                            <span className="font-medium">reza-z@hotmail.com</span>
                        </a>
                    </div>
                </Card>
            </div>
        </section>
    );
}
