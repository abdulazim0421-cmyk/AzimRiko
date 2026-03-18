import React from 'react';

// Импорты из папки sections согласно твоей структуре на скриншоте
import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/sections/Hero/Hero";
import LogosSection from "@/components/sections/Logos/LogosSection";
import ServicesHeader from "@/components/sections/Services/ServicesHeader";
import ServicesGrid from "@/components/sections/Services/ServicesGrid";
import WhyChooseHeader from "@/components/sections/WhyChoose/WhyChooseHeader";
import WhyChooseGrid from "@/components/sections/WhyChoose/WhyChooseGrid";
import TestimonialsHeader from "@/components/sections/Testimonials/TestimonialsHeader";
import TestimonialsGrid from "@/components/sections/Testimonials/TestimonialsGrid";
import PricingHeader from "@/components/sections/Pricing/PricingHeader";
import FAQSection from "@/components/sections/FAQ/FAQSection";
import CTASection from "@/components/sections/CTA/CTASection";
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