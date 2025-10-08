import Hero from "@/components/Hero";
import ServicesOverview from "@/components/ServicesOverview";
import WhyChooseUs from "@/components/WhyChooseUs";
import Reviews from "@/components/Reviews";
import ServiceAreas from "@/components/ServiceAreas";

export default function Home() {
  return (
    <div>
      <Hero />
      <ServicesOverview />
      <WhyChooseUs />
      <Reviews />
      <ServiceAreas />
    </div>
  );
}
