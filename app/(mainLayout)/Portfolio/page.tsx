
import IndustryExpertise from "@/components/Porfolio/IndustryExpertise";
import ProcessSection2 from "@/components/Porfolio/ProcessSection";
import ProjectsSection from "@/components/Porfolio/ProjectsSection";
import FAQSection from "@/components/Shared/Faq/FAQSection";
import SubHero from "@/components/Shared/SubHero";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Portfolio | Siscotek",
  description: "Siscotek Software Agency",
};

const Portfolio = () => {
  return (
    <div>
      <SubHero
        heroTittle={"Our Portfolio"}
        subHeroTittle={
          " Discover our successful projects and digital innovations that have transformed businesses across industries."
        }
      />
      <span>
        <ProjectsSection />
        <ProcessSection2 />
        <IndustryExpertise />
        <FAQSection />
      </span>
    </div>
  );
};

export default Portfolio;
