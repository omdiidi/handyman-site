import { useState, useEffect, useRef } from "react";
import { Search, Phone } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import CallActionPopover from "./CallActionPopover";

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

  // Calculate match score for sorting
  const getMatchScore = (service: Service, query: string): number => {
    const serviceName = normalize(service.name);
    const serviceDesc = normalize(service.desc);

    // Exact name match - highest priority
    if (serviceName.includes(query)) return 100;

    // Tag match
    if (service.tags.some((tag) => normalize(tag).includes(query))) return 80;

    // Description match
    if (serviceDesc.includes(query)) return 60;

    // Fuzzy match on name
    if (fuzzyMatch(serviceName, query)) return 40;

    // Fuzzy match on tags
    if (service.tags.some((tag) => fuzzyMatch(tag, query))) return 20;

    // Partial keyword match (for closest matches)
    const queryWords = query.split(/\s+/);
    let partialScore = 0;
    queryWords.forEach(word => {
      if (serviceName.includes(word) || service.tags.some(tag => normalize(tag).includes(word))) {
        partialScore += 10;
      }
    });
    if (partialScore > 0) return partialScore;

    return 0;
  };

  const filteredServices = !debouncedQuery.trim()
    ? services
    : services
      .map((service, index) => ({
        service,
        score: getMatchScore(service, normalize(debouncedQuery)),
        originalIndex: index
      }))
      .filter(item => item.score > 0)
      .sort((a, b) => {
        // Sort by score first, then by original index to maintain order
        if (b.score !== a.score) return b.score - a.score;
        return a.originalIndex - b.originalIndex;
      })
      .map(item => item.service);

  // For uncertain/no matches, get top 3 closest matches
  const hasExactMatch = debouncedQuery.trim() && filteredServices.length > 0;
  const showClosestMatches = debouncedQuery.trim() && filteredServices.length === 0;

  const closestMatches = showClosestMatches
    ? services
      .map((service, index) => ({
        service,
        score: getMatchScore(service, normalize(debouncedQuery)),
        originalIndex: index
      }))
      .sort((a, b) => {
        if (b.score !== a.score) return b.score - a.score;
        return a.originalIndex - b.originalIndex;
      })
      .slice(0, 3)
      .map(item => item.service)
    : [];

  const handleSearch = (value: string) => {
    setSearchQuery(value);
  };

  const displayServices = showClosestMatches ? closestMatches : filteredServices;

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
        {debouncedQuery && hasExactMatch && (
          <p className="text-center mt-4 text-sm text-muted-foreground" data-testid="text-results-count">
            {filteredServices.length} {filteredServices.length === 1 ? "service" : "services"} found
          </p>
        )}
        {showClosestMatches && (
          <p className="text-center mt-4 text-sm text-muted-foreground" data-testid="text-closest-matches">
            Here are the closest matches
          </p>
        )}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {displayServices.map((service, index) => (
          <Card key={index} className="p-6 flex flex-col" data-testid={`card-job-${index}`}>
            <h3 className="text-lg font-semibold text-foreground mb-2" data-testid={`text-job-name-${index}`}>
              {service.name}
            </h3>
            <p className="text-sm text-muted-foreground mb-4 flex-grow" data-testid={`text-job-desc-${index}`}>
              {service.desc}
            </p>
            <CallActionPopover
              phone="425-442-9328"
              trigger={
                <Button variant="default" size="default" className="w-full bg-accent text-accent-foreground border border-accent-border" data-testid={`button-job-call-${index}`}>
                  <Phone className="w-4 h-4" />
                  Call to discuss
                </Button>
              }
            />
          </Card>
        ))}

        {showClosestMatches && (
          <Card className="p-8 flex flex-col items-center justify-center text-center md:col-span-2 lg:col-span-3" data-testid="card-cant-find">
            <p className="text-lg font-semibold text-foreground mb-4" data-testid="text-cant-find">
              Can't find what you're looking for?
            </p>
            <CallActionPopover
              phone="425-442-9328"
              trigger={
                <Button size="lg" variant="default" className="bg-accent text-accent-foreground border border-accent-border" data-testid="button-cant-find-call">
                  <Phone className="w-5 h-5" />
                  Call to discuss
                </Button>
              }
            />
          </Card>
        )}
      </div>

      {!debouncedQuery && (
        <div className="fixed bottom-4 right-4 z-30 hidden md:block">
          <CallActionPopover
            phone="425-442-9328"
            trigger={
              <Button size="lg" variant="default" className="bg-accent text-accent-foreground border border-accent-border shadow-lg" data-testid="button-fixed-call">
                <Phone className="w-5 h-5" />
                Call to discuss
              </Button>
            }
          />
        </div>
      )}
    </div>
  );
}
