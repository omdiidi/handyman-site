import JobFinderSearch from '../JobFinderSearch'

const mockServices = [
  { name: "Drywall repair", desc: "Patch, mud, sand, and prep for paint", tags: ["drywall", "hole", "patch"] },
  { name: "TV mounting", desc: "Find studs, mount level, tidy cables", tags: ["tv", "mount", "bracket"] },
  { name: "Faucet replacement", desc: "Swap faucets and connect supplies", tags: ["faucet", "install"] },
];

export default function JobFinderSearchExample() {
  return <JobFinderSearch services={mockServices} />
}
