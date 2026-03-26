import ServicesHero from "@/components/sections/Services/ServicesHero";
import DesignSection from "@/components/sections/Services/DesignSection";
import EngineeringSection from "@/components/sections/Services/EngineeringSection";
import MarketingSection from "@/components/sections/Services/MarketingSection";
import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";
import CTASection from "@/components/sections/home/CTA/CTASection";
import React from "react";

export default function ServicesPage() {
    return (
        <div>
            <Navbar/>
                <main className="relative z-10 bg-[#1A1A1A]">
                    <ServicesHero/>
                    <DesignSection/>
                    <EngineeringSection/>
                    <MarketingSection/>
                    <CTASection />
                </main>
            <Footer/>
        </div>
    );
}
