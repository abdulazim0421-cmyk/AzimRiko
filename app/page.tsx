import React from 'react';
import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/sections/home/Hero/Hero";
import LogosSection from "@/components/sections/home/Logos/LogosSection";
import ServicesHeader from "@/components/sections/Services/ServicesHeader";
import ServicesGrid from "@/components/sections/Services/ServicesGrid";
import WhyChooseHeader from "@/components/sections/home/WhyChoose/WhyChooseHeader";
import WhyChooseGrid from "@/components/sections/home/WhyChoose/WhyChooseGrid";
import TestimonialsHeader from "@/components/sections/home/Testimonials/TestimonialsHeader";
import TestimonialsGrid from "@/components/sections/home/Testimonials/TestimonialsGrid";
import PricingHeader from "@/components/sections/home/Pricing/PricingHeader";
import FAQSection from "@/components/sections/home/FAQ/FAQSection";
import CTASection from "@/components/sections/home/CTA/CTASection";
import ContactForm from "@/components/sections/Contact/ContactForm";
import Footer from "@/components/layout/Footer";


// Добавил PricingHeader, если он у тебя в папке соотв. секции

export default function HomePage() {
    return (
        <main className="bg-[#1A1A1A]">
            <Navbar/>

            <Hero />
            <LogosSection />

            <ServicesHeader />
            <ServicesGrid />

            <WhyChooseHeader />
            <WhyChooseGrid />

            <TestimonialsHeader />
            <TestimonialsGrid />

            <PricingHeader />
            <FAQSection />
            <CTASection />
            <ContactForm/>

            <Footer/>
        </main>
    );
}