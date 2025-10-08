import JobFinderSearch from "@/components/JobFinderSearch";

const services = [
  {
    "name": "Drywall Repair & Patching",
    "desc": "Fixing holes, cracks, or dents in walls and ceilings — patched, sanded, and ready for paint.",
    "tags": ["drywall", "hole", "patch", "crack", "dent", "wall", "ceiling", "repair", "hole in wall", "patch drywall", "drywall crack"]
  },
  {
    "name": "Fence & Gate Repair",
    "desc": "Replacing damaged posts or pickets, tightening hinges, and realigning sagging gates.",
    "tags": ["fence", "gate", "post", "picket", "hinge", "repair", "sagging", "fence post", "post replacement", "gate repair"]
  },
  {
    "name": "Toilet Replacement & Repair",
    "desc": "Installing new toilets, fixing leaks, and replacing fill valves or flappers for smooth operation.",
    "tags": ["toilet", "replace", "repair", "leak", "flapper", "fill valve", "running toilet", "new toilet", "toilet install"]
  },
  {
    "name": "Tile & Grout Repair",
    "desc": "Resetting loose tiles, regrouting, or sealing joints in kitchens, bathrooms, or entryways.",
    "tags": ["tile", "grout", "repair", "loose", "regrout", "seal", "bathroom", "kitchen", "tile loose", "regrout", "cracked tile"]
  },
  {
    "name": "Painting (Interior & Exterior)",
    "desc": "Clean, even painting for walls, ceilings, trim, and small outdoor surfaces like doors or fences.",
    "tags": ["paint", "painting", "interior", "exterior", "wall", "ceiling", "trim", "door", "fence", "paint room", "touch up", "paint trim"]
  },
  {
    "name": "Furniture Assembly",
    "desc": "Building desks, bed frames, shelves, and outdoor sets from flat-pack kits quickly and correctly.",
    "tags": ["furniture", "assembly", "desk", "bed", "shelf", "ikea", "flat pack", "build", "assemble"]
  },
  {
    "name": "Pressure Washing",
    "desc": "Cleaning decks, driveways, siding, and patios to remove dirt, mold, and buildup.",
    "tags": ["pressure wash", "power wash", "deck", "driveway", "siding", "patio", "clean", "pressure washing driveway", "power wash patio"]
  },
  {
    "name": "Caulking & Re-Caulking",
    "desc": "Applying clean, sealed caulk lines in kitchens, bathrooms, and windows for a fresh look and leak protection.",
    "tags": ["caulk", "caulking", "recaulk", "seal", "silicone", "bathroom", "kitchen", "window", "caulk tub", "recaulk shower"]
  },
  {
    "name": "Trim & Baseboard Repair / Installation",
    "desc": "Fixing or replacing interior trim, baseboards, and door casings for a neat, finished appearance.",
    "tags": ["trim", "baseboard", "casing", "molding", "repair", "install", "door casing", "crown molding"]
  },
  {
    "name": "Deck Repair & Maintenance",
    "desc": "Replacing loose boards, tightening rails, cleaning, and resealing deck surfaces.",
    "tags": ["deck", "repair", "board", "rail", "railing", "maintenance", "clean", "seal", "deck boards", "loose rail", "stain deck"]
  },
  {
    "name": "Light Fixture Installation",
    "desc": "Installing or replacing light fixtures, checking wiring, and ensuring safe operation.",
    "tags": ["light", "fixture", "install", "replace", "ceiling", "wall", "chandelier", "pendant"]
  },
  {
    "name": "Door Repair (Sticking / Alignment)",
    "desc": "Adjusting hinges, handles, and latches so doors close smoothly and securely.",
    "tags": ["door", "repair", "sticking", "alignment", "hinge", "latch", "handle", "fix door latch", "door sticks"]
  },
  {
    "name": "Faucet & Sink Repair / Replacement",
    "desc": "Fixing leaks, replacing faucets, and tightening loose fittings in kitchens and bathrooms.",
    "tags": ["faucet", "sink", "repair", "replace", "leak", "tap", "leaking", "leaky", "kitchen", "bathroom"]
  },
  {
    "name": "Gutter Cleaning & Downspout Clearing",
    "desc": "Removing leaves and debris, flushing downspouts, and checking for drainage issues.",
    "tags": ["gutter", "clean", "downspout", "clearing", "flush", "debris", "clean gutters", "gutter flush"]
  },
  {
    "name": "Ceiling Fan Installation",
    "desc": "Installing or replacing ceiling fans, balancing blades, and confirming proper wiring.",
    "tags": ["ceiling fan", "fan", "install", "replace", "balance", "wiring"]
  },
  {
    "name": "Outlet & Switch Replacement",
    "desc": "Swapping old outlets and switches for new ones, adding dimmers where needed.",
    "tags": ["outlet", "switch", "replace", "receptacle", "plug", "dimmer", "electrical"]
  },
  {
    "name": "Weatherstripping Installation",
    "desc": "Sealing door and window edges to prevent drafts and improve energy efficiency.",
    "tags": ["weatherstrip", "seal", "draft", "door", "window", "insulation", "energy"]
  },
  {
    "name": "Smart Device Installation",
    "desc": "Mounting and setting up Ring doorbells, smart locks, and thermostats.",
    "tags": ["smart", "ring", "doorbell", "lock", "thermostat", "nest", "ecobee", "wifi", "smart home", "video doorbell"]
  },
  {
    "name": "Power Washing (Heavy Duty Surfaces)",
    "desc": "Deep cleaning concrete, brick, and commercial walkways with the right pressure.",
    "tags": ["power wash", "pressure wash", "concrete", "brick", "commercial", "heavy duty", "walkway"]
  },
  {
    "name": "Mailbox Installation",
    "desc": "Installing or replacing mailboxes on sturdy posts or walls, aligned and leveled.",
    "tags": ["mailbox", "install", "post", "replace", "mount"]
  },
  {
    "name": "Picture / Mirror Hanging",
    "desc": "Mounting heavy frames, mirrors, and artwork securely and level.",
    "tags": ["picture", "mirror", "hang", "frame", "art", "mount", "level", "heavy"]
  },
  {
    "name": "Cabinet Door & Drawer Repair",
    "desc": "Fixing sagging hinges, misaligned slides, or broken pulls and knobs.",
    "tags": ["cabinet", "drawer", "door", "hinge", "slide", "pull", "knob", "repair", "sagging"]
  },
  {
    "name": "Shower Head Replacement",
    "desc": "Installing or upgrading shower heads with leak-free connections.",
    "tags": ["shower", "head", "replace", "install", "upgrade", "bathroom", "showerhead"]
  },
  {
    "name": "Small Wood Rot Repair",
    "desc": "Removing damaged wood and restoring structure with treated replacements.",
    "tags": ["wood", "rot", "repair", "replace", "damaged", "trim", "siding", "deck"]
  },
  {
    "name": "Outdoor Light Replacement",
    "desc": "Installing or updating wall-mounted and landscape lights safely.",
    "tags": ["outdoor", "light", "replace", "install", "wall", "landscape", "exterior"]
  },
  {
    "name": "Fence & Deck Staining / Sealing",
    "desc": "Applying stain or sealant to protect wood surfaces and refresh appearance.",
    "tags": ["fence", "deck", "stain", "seal", "wood", "protect", "finish", "staining"]
  },
  {
    "name": "Handrail & Stair Repair",
    "desc": "Tightening loose rails and securing steps for safety and stability.",
    "tags": ["handrail", "stair", "rail", "repair", "tighten", "steps", "safety", "railing"]
  },
  {
    "name": "Pet Door Installation",
    "desc": "Cutting and sealing pet doors for dogs and cats, mounted in doors or walls.",
    "tags": ["pet door", "dog door", "cat door", "install", "cut", "mount"]
  },
  {
    "name": "Window Screen Repair",
    "desc": "Replacing torn mesh or broken screen frames for better airflow and pest control.",
    "tags": ["window", "screen", "repair", "replace", "mesh", "torn", "frame"]
  },
  {
    "name": "Holiday Light Installation & Removal",
    "desc": "Hanging seasonal lighting safely on homes or small commercial spaces.",
    "tags": ["holiday", "lights", "christmas", "install", "remove", "seasonal", "hang"]
  },
  {
    "name": "Odd Jobs & Custom Requests",
    "desc": "Helping with one-off projects, small repairs, or unique to-do list tasks.",
    "tags": ["odd jobs", "custom", "misc", "help", "unique", "one-off", "tasks"]
  },
  {
    "name": "Home / Property Maintenance",
    "desc": "Regular maintenance visits for residential or commercial spaces.",
    "tags": ["maintenance", "property", "home", "commercial", "residential", "regular", "recurring"]
  },
  {
    "name": "Home Sale Preparation",
    "desc": "Pre-sale touch-ups, small repairs, and cleanup to get properties ready to list.",
    "tags": ["sale", "prep", "preparation", "realtor", "listing", "pre-sale", "touch up", "cleanup"]
  }
];

export default function JobFinder() {
  return (
    <div className="min-h-screen bg-background py-8">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4" data-testid="text-job-finder-title">
            Find Your Service
          </h1>
          <p className="text-muted-foreground mb-2" data-testid="text-job-finder-subtitle">
            Search repairs, installs, painting, plumbing, and more
          </p>
          <p className="text-sm text-muted-foreground" data-testid="text-service-count">
            {services.length} services available
          </p>
        </div>
        
        <JobFinderSearch services={services} />
      </div>
    </div>
  );
}
