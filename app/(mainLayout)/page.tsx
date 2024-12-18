import { Banner } from "@/components/banner";
import { Services } from "@/components/services";
import { Features } from "@/components/features";
import { Gallery } from "@/components/gallery";
import { Testimonials } from "@/components/testimonials";
import { TeamSection } from "@/components/About/team-section";
import type { Metadata } from "next";


export const metadata: Metadata = {
  title: "Home | Siscotek",
  description: "Siscotek Software Agency",
};

export default function Home() {
  return (
    <>
      <main>
        <Banner />
        <Services />
        <Features />
        <Gallery />
        <TeamSection />
        <Testimonials />
      </main>
    </>
  );
}
