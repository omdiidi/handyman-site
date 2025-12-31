import Hero from "@/components/Hero";
import ServicesOverview from "@/components/ServicesOverview";
import WhyChooseUs from "@/components/WhyChooseUs";
import Reviews from "@/components/Reviews";
import ServiceAreas from "@/components/ServiceAreas";
import ContactInfo from "@/components/ContactInfo";

export default function Home() {
  return (
    <div>
      <Hero />
      <ServicesOverview />
      <Reviews />
      <WhyChooseUs />
      <ServiceAreas />
      <ContactInfo />
    </div>
  );
}

