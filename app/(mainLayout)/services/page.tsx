import { ServicesGrid } from "@/components/services/services-grid";
import { TechnologyStack } from "@/components/services/technology-stack";
import { ServicesCTA } from "@/components/services/services-cta";
import SubHero from "@/components/Shared/SubHero";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Services | Siscotek",
  description: "Siscotek Software Agency",
};

const ServicePage = () => {
  return (
    <>
      <SubHero
        heroTittle={"Our Services"}
        subHeroTittle={
          "Comprehensive digital solutions tailored to transform your business and drive growth in the modern digital landscape."
        }
      ></SubHero>
      <ServicesGrid />
      <TechnologyStack />
      <ServicesCTA />
    </>
  );
};

export default ServicePage;
