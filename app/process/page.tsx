import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ProcessHero from "@/components/sections/process/ProcessHero";
import ProcessSteps from "@/components/sections/process/ProcessSteps";
import ContactForm from "@/components/sections/Contact/ContactForm";
import React from "react";
import CTASection from "@/components/sections/home/CTA/CTASection";

export default function ProcessPage() {
    return (
        <div>
            <Navbar />
            <main className="relative z-10 bg-[#1A1A1A]">
                <ProcessHero />
                <ProcessSteps />
                <CTASection />
                <ContactForm/>
            </main>
            <Footer />
        </div>
    );
}
