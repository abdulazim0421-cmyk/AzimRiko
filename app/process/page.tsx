import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ProcessHero from "@/components/sections/process/ProcessHero";
import ProcessSteps from "@/components/sections/process/ProcessSteps";
import FinalCTA from "@/components/sections/Services/FinalCTA";
import ContactForm from "@/components/sections/home/Contact/ContactForm";
import React from "react";

export default function ProcessPage() {
    return (
        <div>
            <Navbar />
            <main className="relative z-10 bg-[#1A1A1A]">
                <ProcessHero />
                <ProcessSteps />
                <FinalCTA />
                <ContactForm/>
            </main>
            <Footer />
        </div>
    );
}
