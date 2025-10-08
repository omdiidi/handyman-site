import { useState, useEffect, useRef } from "react";
import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface Service {
  name: string;
  desc: string;
  tags: string[];
}

interface JobFinderSearchProps {
  services: Service[];
}

export default function JobFinderSearch({ services }: JobFinderSearchProps) {
  const [searchQuery, setSearchQuery] = useState("");
  const searchInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    if (params.get('focus') === 'true') {
      searchInputRef.current?.focus();
    }
  }, []);

  const filteredServices = services.filter((service) => {
    const query = searchQuery.toLowerCase();
    return (
      service.name.toLowerCase().includes(query) ||
      service.desc.toLowerCase().includes(query) ||
      service.tags.some((tag) => tag.toLowerCase().includes(query))
    );
  });

  const handleSearch = (value: string) => {
    setSearchQuery(value);
    console.log("Search triggered:", value);
  };

  return (
    <div className="space-y-6">
      <div className="sticky top-16 z-30 bg-background py-6">
        <div className="relative max-w-2xl mx-auto">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
          <Input
            ref={searchInputRef}
            type="search"
            placeholder="Search for a service... (e.g., 'drywall', 'TV mount', 'faucet')"
            value={searchQuery}
            onChange={(e) => handleSearch(e.target.value)}
            className="pl-12 h-12 text-base"
            data-testid="input-job-search"
          />
        </div>
        {searchQuery && (
          <p className="text-center mt-4 text-sm text-muted-foreground" data-testid="text-results-count">
            {filteredServices.length} {filteredServices.length === 1 ? "service" : "services"} found
          </p>
        )}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredServices.length > 0 ? (
          filteredServices.map((service, index) => (
            <Card key={index} className="p-6" data-testid={`card-job-${index}`}>
              <h3 className="text-lg font-semibold text-foreground mb-2" data-testid={`text-job-name-${index}`}>
                {service.name}
              </h3>
              <p className="text-sm text-muted-foreground mb-4" data-testid={`text-job-desc-${index}`}>
                {service.desc}
              </p>
              <a href="tel:4254429328">
                <Button variant="outline" size="sm" className="w-full" data-testid={`button-job-call-${index}`}>
                  Call to discuss
                </Button>
              </a>
            </Card>
          ))
        ) : (
          <div className="col-span-full text-center py-12">
            <p className="text-lg text-foreground mb-2" data-testid="text-no-results">
              Yes, I can likely help.
            </p>
            <a href="tel:4254429328">
              <Button variant="default" className="bg-accent text-accent-foreground border border-accent-border" data-testid="button-no-results-call">
                Call 425-442-9328
              </Button>
            </a>
          </div>
        )}
      </div>
    </div>
  );
}
