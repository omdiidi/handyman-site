import { Link, useLocation } from "wouter";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import CallActionPopover from "./CallActionPopover";

export default function Header() {
  const [location] = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { path: "/", label: "Home" },
    { path: "/job-finder", label: "Find your service" },
    { path: "/testimonials", label: "Testimonials" },
    { path: "/contact", label: "Contact" },
    { path: "/faq", label: "FAQ" },
    { path: "/about", label: "About" },
  ];

  return (
    <header className="sticky top-0 z-50 bg-card border-b border-card-border">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 gap-4">
          <Link href="/" className="flex items-center hover-elevate active-elevate-2 rounded-md px-2 py-1 -ml-2">
            <span className="text-lg md:text-xl font-bold text-primary" data-testid="text-logo">Rez The Builder</span>
          </Link>

          <nav className="hidden md:flex items-center gap-1">
            {navItems.map((item) => (
              <Link key={item.path} href={item.path}>
                <Button
                  variant={location === item.path ? "secondary" : "ghost"}
                  size="sm"
                  data-testid={`link-nav-${item.label.toLowerCase().replace(" ", "-")}`}
                >
                  {item.label}
                </Button>
              </Link>
            ))}
          </nav>

          <div className="hidden md:block">
            <CallActionPopover
              phone="425-442-9328"
              variant="default"
              size="default"
              className="bg-accent text-accent-foreground border border-accent-border"
              testId="button-header-call"
            />
          </div>

          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            data-testid="button-mobile-menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </Button>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="md:hidden border-t border-card-border bg-card">
          <nav className="flex flex-col p-4 gap-2">
            {navItems.map((item) => (
              <Link key={item.path} href={item.path}>
                <Button
                  variant={location === item.path ? "secondary" : "ghost"}
                  className="w-full justify-start"
                  onClick={() => setMobileMenuOpen(false)}
                  data-testid={`link-mobile-nav-${item.label.toLowerCase().replace(" ", "-")}`}
                >
                  {item.label}
                </Button>
              </Link>
            ))}
            <div className="mt-2">
              <CallActionPopover
                phone="425-442-9328"
                variant="default"
                size="default"
                className="w-full bg-accent text-accent-foreground border border-accent-border"
                testId="button-mobile-call"
              />
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
