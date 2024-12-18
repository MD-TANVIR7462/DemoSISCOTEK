import { Achievements } from "@/components/About/achievements";
import { MissionVision } from "@/components/About/mission-vision";
import { OurStory } from "@/components/About/our-story";
import { Stats } from "@/components/About/stats";
import { TeamSection } from "@/components/About/team-section";
import { Values } from "@/components/About/values";
import SubHero from "@/components/Shared/SubHero";
import { Testimonials } from "@/components/testimonials";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About | Siscotek",
  description: "Siscotek Software Agency",
};

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gray-900">
      <SubHero heroTittle="About Us" subHeroTittle="Discover our journey, mission, and the passion driving us forward."/>
      <Stats />
      <OurStory />
      <MissionVision />
      <Values />
      <Achievements />
      <TeamSection />
      <Testimonials />
    </div>

  );
}