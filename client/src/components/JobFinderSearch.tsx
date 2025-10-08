import { useState, useEffect, useRef } from "react";
import { Search, Phone } from "lucide-react";
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

// Fuzzy match helper - allows minor typos
const fuzzyMatch = (str: string, query: string): boolean => {
  str = str.toLowerCase();
  query = query.toLowerCase();
  
  // Exact match
  if (str.includes(query)) return true;
  
  // Simple fuzzy: allow 1-2 character differences for longer queries
  if (query.length >= 4) {
    let matchCount = 0;
    for (let char of query) {
      if (str.includes(char)) matchCount++;
    }
    return matchCount >= query.length - 1;
  }
  
  return false;
};

// Normalize text: lowercase, remove punctuation
const normalize = (text: string): string => {
  return text.toLowerCase().replace(/[^\w\s]/g, '').trim();
};

export default function JobFinderSearch({ services }: JobFinderSearchProps) {
  const [searchQuery, setSearchQuery] = useState("");
  const [debouncedQuery, setDebouncedQuery] = useState("");
  const searchInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    if (params.get('focus') === 'true') {
      searchInputRef.current?.focus();
    }
  }, []);

  // Debounce search input
  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedQuery(searchQuery);
    }, 300);
    return () => clearTimeout(timer);
  }, [searchQuery]);

  const filteredServices = services.filter((service) => {
    if (!debouncedQuery.trim()) return true;
    
    const query = normalize(debouncedQuery);
    const serviceName = normalize(service.name);
    const serviceDesc = normalize(service.desc);
    
    // Priority 1: Exact name match
    if (serviceName.includes(query)) return true;
    
    // Priority 2: Tag match (includes synonyms)
    if (service.tags.some((tag) => normalize(tag).includes(query))) return true;
    
    // Priority 3: Description match
    if (serviceDesc.includes(query)) return true;
    
    // Priority 4: Fuzzy match on name or tags
    if (fuzzyMatch(serviceName, query)) return true;
    if (service.tags.some((tag) => fuzzyMatch(tag, query))) return true;
    
    return false;
  });

  const handleSearch = (value: string) => {
    setSearchQuery(value);
  };

  return (
    <div className="space-y-6">
      <div className="sticky top-16 z-30 bg-background py-6">
        <label htmlFor="service-search" className="sr-only">Find your service</label>
        <div className="relative max-w-2xl mx-auto">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
          <Input
            id="service-search"
            ref={searchInputRef}
            type="search"
            placeholder="Search repairs, installs, painting, plumbing..."
            value={searchQuery}
            onChange={(e) => handleSearch(e.target.value)}
            className="pl-12 h-12 text-base"
            data-testid="input-job-search"
          />
        </div>
        {debouncedQuery && (
          <p className="text-center mt-4 text-sm text-muted-foreground" data-testid="text-results-count">
            {filteredServices.length} {filteredServices.length === 1 ? "service" : "services"} found
          </p>
        )}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredServices.length > 0 ? (
          filteredServices.map((service, index) => (
            <Card key={index} className="p-6 flex flex-col" data-testid={`card-job-${index}`}>
              <h3 className="text-lg font-semibold text-foreground mb-2" data-testid={`text-job-name-${index}`}>
                {service.name}
              </h3>
              <p className="text-sm text-muted-foreground mb-4 flex-grow" data-testid={`text-job-desc-${index}`}>
                {service.desc}
              </p>
              <a href="tel:4254429328" className="block">
                <Button variant="default" size="default" className="w-full bg-accent text-accent-foreground border border-accent-border" data-testid={`button-job-call-${index}`}>
                  <Phone className="w-4 h-4" />
                  Call
                </Button>
              </a>
            </Card>
          ))
        ) : (
          <div className="col-span-full text-center py-12">
            <p className="text-xl text-foreground mb-4" data-testid="text-no-results">
              Yes, I can likely help.
            </p>
            <a href="tel:4254429328">
              <Button size="lg" variant="default" className="bg-accent text-accent-foreground border border-accent-border" data-testid="button-no-results-call">
                <Phone className="w-5 h-5" />
                Call
              </Button>
            </a>
          </div>
        )}
      </div>
    </div>
  );
}
