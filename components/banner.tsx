"use client";

import { ArrowRight } from "lucide-react";
import { HeroImage } from "@/components/ui/hero-image";
import { StatsSection } from "@/components/ui/stats-section";
import Link from "next/link";

export const Banner = () => {
  return (
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-b from-gray-900 via-purple-900 to-gray-900">
      <div className="relative z-10 mx-auto max-w-[85rem] px-4 sm:px-6 lg:px-8">
        <div className="flex min-h-screen items-center py-20">
          <div className="grid gap-12 lg:grid-cols-2">
            {/* Left Column - Content */}
            <div className="flex flex-col justify-center">
              <div className="relative">
                <div className="absolute -left-4 -top-4 h-20 w-20 rounded-full bg-purple-500/10 blur-xl" />
                <div className="absolute -right-4 -bottom-4 h-20 w-20 rounded-full bg-blue-500/10 blur-xl" />

                <h1 className="relative  font-bold leading-tight text-white  ">
                  <span className="text-3xl md:text-6xl lg:text-7xl">
                    WELCOME TO
                  </span>
                  <span className="text-5xl mt-2 sm:mt-0 md:text-6xl lg:text-7xl block bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                    SiSCOTEK
                  </span>
                </h1>
              </div>

              <p className="mt-6 text-lg leading-relaxed text-gray-300">
                We have years of experience providing network and web-based
                custom software solutions. Over the past decade, SiSCOTEK has
                served hundreds of customers with its maintenance, web design,
                troubleshooting, and development services.
              </p>

              <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                <button className="group flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 px-8 py-4 text-white transition-all hover:opacity-90">
                  Start Your Journey
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </button>
                <button className="rounded-full border border-white/20 bg-white/5 px-8 py-4 text-white backdrop-blur-lg transition-all hover:bg-white/10">
                  <Link href={"/Portfolio"}>View Portfolio</Link>{" "}
                </button>
              </div>

              <StatsSection />
            </div>

            {/* Right Column - Image */}
            <div className="hidden lg:block">
              <HeroImage />
            </div>
          </div>
        </div>
      </div>

      {/* Additional Background Elements */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-purple-500 to-transparent" />
      <div className="absolute left-1/2 top-0 h-[1px] w-[600px] -translate-x-1/2 bg-gradient-to-r from-transparent via-purple-500/50 to-transparent blur-sm" />
    </div>
  );
};
