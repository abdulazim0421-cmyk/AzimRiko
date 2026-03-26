import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ProcessHero from "@/components/sections/process/ProcessHero";
import ProcessSteps from "@/components/sections/process/ProcessSteps";
import ContactForm from "@/components/sections/home/Contact/ContactForm";
import React from "react";
import AboutFinalCTA from "@/components/sections/about/AboutFinalCTA";

export default function ProcessPage() {
    return (
        <div>
            <Navbar />
            <main className="relative z-10 bg-[#1A1A1A]">
                <ProcessHero />
                <ProcessSteps />
                <AboutFinalCTA />
                <ContactForm/>
            </main>
            <Footer />
        </div>
    );
}
