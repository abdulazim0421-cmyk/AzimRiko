import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import AboutHero from "@/components/sections/about/AboutHero";
import AboutIntro from "@/components/sections/about/AboutIntro";
import OurStory from "@/components/sections/about/OurStory";
import AboutFinalCTA from "@/components/sections/about/AboutFinalCTA";
import React from "react";

export default function AboutPage() {
    return (
        <div>
            <Navbar />
            <main className="relative z-10 bg-[#1A1A1A]">
                <AboutHero />
                <AboutIntro />
                <OurStory />
                <AboutFinalCTA />
            </main>
            <Footer />
        </div>
    );
}
