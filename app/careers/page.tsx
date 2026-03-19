import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import CareersHero from "@/components/sections/careers/CareersHero";
import CareersIntro from "@/components/sections/careers/CareersIntro";
import CareersBenefits from "@/components/sections/careers/CareersBenefits";
import CareersOpenings from "@/components/sections/careers/CareersOpenings";
import CTASection from "@/components/sections/home/CTA/CTASection";
import React from "react";
import AboutFinalCTA from "@/components/sections/about/AboutFinalCTA";

export default function CareersPage() {
    return (
        <div>
            <Navbar />
            <main className="relative z-10 bg-[#1A1A1A]">
                <CareersHero />
                <CareersIntro />
                <CareersBenefits />
                <CareersOpenings />
                <AboutFinalCTA />
            </main>
            <Footer />
        </div>
    );
}
