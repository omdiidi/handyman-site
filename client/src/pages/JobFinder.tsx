import JobFinderSearch from "@/components/JobFinderSearch";

const services = [
  {"name":"Drywall repair and patching","desc":"Patch, mud, sand, and prep for paint","tags":["drywall","hole","patch","repair"]},
  {"name":"Hole in wall repair","desc":"Cut to solid, patch, mud, blend","tags":["drywall","patch","hole"]},
  {"name":"Ceiling crack repair","desc":"Tape and mud hairline cracks","tags":["ceiling","crack","drywall"]},
  {"name":"Door repair","desc":"Fix sticking and latching, tune hinges","tags":["door","latch","hinge","sticking"]},
  {"name":"Cabinet door and drawer repair","desc":"Fix slides and soft close, align fronts","tags":["cabinet","drawer","hinge","slide"]},
  {"name":"Fence and gate repair","desc":"Replace pickets and posts, adjust gates","tags":["fence","gate","picket","post"]},
  {"name":"Deck board and railing repair","desc":"Swap damaged boards and tighten rails","tags":["deck","board","railing"]},
  {"name":"Siding repair minor","desc":"Replace small sections and seal","tags":["siding","repair"]},
  {"name":"Tile and grout repair","desc":"Reset tiles and regrout or caulk","tags":["tile","grout"]},
  {"name":"Leaky faucet and sink repair","desc":"Replace cartridges and seals","tags":["faucet","leak","sink"]},
  {"name":"Running toilet repair","desc":"Replace fill valve and flapper","tags":["toilet","running","flapper"]},
  {"name":"Window screen repair","desc":"Rescreen frames and replace spline","tags":["screen","window","mesh"]},
  {"name":"Wood rot repair small","desc":"Remove soft wood, patch or replace","tags":["wood","rot","trim"]},
  {"name":"TV mounting","desc":"Find studs, mount level, tidy cables","tags":["tv","mount","bracket"]},
  {"name":"Flat screen TV installation","desc":"Mount and connect devices","tags":["tv","install","wall"]},
  {"name":"Soundbar mounting","desc":"Mount under TV and connect","tags":["soundbar","audio","mount"]},
  {"name":"Light fixture installation","desc":"Replace fixtures and test","tags":["light","fixture","install"]},
  {"name":"Ceiling fan installation and replacement","desc":"Install on rated box and balance","tags":["fan","ceiling","install"]},
  {"name":"Shelving installation","desc":"Mount shelves into studs and anchors","tags":["shelf","floating","garage"]},
  {"name":"Picture and mirror hanging","desc":"Place, level, and anchor heavy items","tags":["picture","mirror","hang"]},
  {"name":"Art installation","desc":"Plan layout and hang securely","tags":["art","gallery","hang"]},
  {"name":"Curtain rod and blind installation","desc":"Mount brackets straight and secure","tags":["curtain","rod","blinds"]},
  {"name":"Smart home device installation","desc":"Set up basic devices and connect","tags":["smart","wifi","setup"]},
  {"name":"Ring doorbell installation","desc":"Mount and wire or battery setup","tags":["ring","doorbell","video"]},
  {"name":"Smart thermostat installation","desc":"Swap thermostat and set schedule","tags":["thermostat","nest","ecobee"]},
  {"name":"Smart lock installation","desc":"Install deadbolt and pair app","tags":["smart","lock","deadbolt"]},
  {"name":"Grab bar installation","desc":"Anchor bars into framing","tags":["grab","bar","bathroom"]},
  {"name":"Mailbox installation and replacement","desc":"Set post and mount box square","tags":["mailbox","post"]},
  {"name":"Pet door installation","desc":"Cut and install sealed pet door","tags":["pet","door","dog","cat"]},
  {"name":"Furniture assembly","desc":"Build flat pack pieces cleanly","tags":["assembly","furniture","ikea"]},
  {"name":"Bed frame and desk assembly","desc":"Assemble solid and level","tags":["bed","desk","assembly"]},
  {"name":"Bookshelf assembly","desc":"Build and secure to wall if needed","tags":["bookshelf","assembly","anchor"]},
  {"name":"Exercise equipment assembly","desc":"Assemble and test operation","tags":["treadmill","bike","rack"]},
  {"name":"Outdoor furniture and grill assembly","desc":"Assemble and place sets and grills","tags":["outdoor","grill","patio"]},
  {"name":"Shed assembly and construction","desc":"Build kit shed on level base","tags":["shed","assembly","kit"]},
  {"name":"Playground and playset assembly","desc":"Assemble kits and stake safely","tags":["playset","swing","playground"]},
  {"name":"Interior painting","desc":"Paint rooms, walls, and ceilings","tags":["paint","interior","wall"]},
  {"name":"Exterior trim and door painting","desc":"Prep and paint exterior trim and doors","tags":["paint","exterior","trim"]},
  {"name":"Touch up painting","desc":"Spot repair and blend small areas","tags":["paint","touchup"]},
  {"name":"Caulking and re-caulking","desc":"Remove old bead and apply new","tags":["caulk","seal"]},
  {"name":"Deck staining and sealing","desc":"Prep, stain, and seal wood","tags":["deck","stain","seal"]},
  {"name":"Fence staining and painting","desc":"Stain or paint for uniform look","tags":["fence","stain","paint"]},
  {"name":"Grout sealing","desc":"Clean and seal grout lines","tags":["grout","seal"]},
  {"name":"Faucet installation and replacement","desc":"Swap faucets and connect supplies","tags":["faucet","install","replace"]},
  {"name":"Toilet installation and replacement","desc":"Set new toilet and test","tags":["toilet","install","replace"]},
  {"name":"Garbage disposal install and repair","desc":"Install or replace and clear jams","tags":["disposal","garburator","disposer"]},
  {"name":"Shower head replacement","desc":"Replace and seal for proper flow","tags":["shower","head","replace"]},
  {"name":"Sink drain repair","desc":"Fix traps and seals","tags":["drain","p trap","leak"]},
  {"name":"Minor leak fixes","desc":"Track and stop small leaks","tags":["leak","water"]},
  {"name":"Dishwasher installation","desc":"Hook up water, drain, and power","tags":["dishwasher","install"]},
  {"name":"Light fixture replacement","desc":"Replace and test fixtures","tags":["light","replace"]},
  {"name":"Ceiling fan replacement","desc":"Swap fans and balance blades","tags":["fan","replace"]},
  {"name":"Outlet and switch replacement","desc":"Replace worn devices and test","tags":["outlet","switch","receptacle"]},
  {"name":"Dimmer switch installation","desc":"Install compatible dimmers","tags":["dimmer","switch"]},
  {"name":"Smoke detector install and battery","desc":"Mount and test smoke alarms","tags":["smoke","detector","alarm"]},
  {"name":"Carbon monoxide detector install","desc":"Place and test CO detectors","tags":["co","detector","alarm"]},
  {"name":"Outdoor lighting replacement","desc":"Replace wall and post lights","tags":["outdoor","light"]},
  {"name":"Trim repair and installation","desc":"Repair or add baseboards and casings","tags":["trim","baseboard","casing"]},
  {"name":"Cabinet hardware replacement","desc":"Swap knobs and pulls","tags":["cabinet","hardware","knob","pull"]},
  {"name":"Stair and handrail repair","desc":"Tighten treads and secure rails","tags":["stair","handrail","rail"]},
  {"name":"Small custom shelving","desc":"Build and mount simple shelves","tags":["shelf","custom"]},
  {"name":"Pressure washing","desc":"Wash driveways, decks, and siding","tags":["pressure","wash","power"]},
  {"name":"Power washing","desc":"Adjust pressure for each surface","tags":["power","wash"]},
  {"name":"Gutter cleaning","desc":"Clear gutters and flush downspouts","tags":["gutter","downspout","clean"]},
  {"name":"Deck cleaning and maintenance","desc":"Clean, tighten, and spot seal","tags":["deck","clean","maintain"]},
  {"name":"Soffit and fascia repair","desc":"Replace damaged sections","tags":["soffit","fascia","repair"]},
  {"name":"Weatherstripping installation","desc":"Install door and window seals","tags":["weatherstrip","seal","draft"]},
  {"name":"Holiday light install and removal","desc":"Hang and remove safely","tags":["holiday","lights","christmas"]},
  {"name":"General home repairs","desc":"Handle small fixes in one visit","tags":["general","repair"]},
  {"name":"Property maintenance services","desc":"Set recurring small upkeep visits","tags":["maintenance","property"]},
  {"name":"Home maintenance plans","desc":"Group seasonal tasks into one plan","tags":["maintenance","plan","seasonal"]},
  {"name":"Honey do list services","desc":"Knock out a mixed list quickly","tags":["list","honeydo","tasks"]},
  {"name":"Odd jobs","desc":"Help with one-off tasks","tags":["odd","misc","help"]},
  {"name":"Baby proofing and childproofing","desc":"Install latches and safety gear","tags":["baby","child","proof"]},
  {"name":"Home sale preparation tasks","desc":"Small fixes and touch ups before listing","tags":["sale","prep","realtor"]}
];

export default function JobFinder() {
  return (
    <div className="min-h-screen bg-background py-8">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4" data-testid="text-job-finder-title">
            Find Your Service
          </h1>
          <p className="text-muted-foreground" data-testid="text-job-finder-subtitle">
            Search from {services.length} services or browse below
          </p>
        </div>
        
        <JobFinderSearch services={services} />
      </div>
    </div>
  );
}
