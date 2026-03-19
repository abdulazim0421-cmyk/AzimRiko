import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ContactHero from "@/components/sections/Contact/Hero/ContactHero";
import ContactInfoCards from "@/components/sections/Contact/Card/ContactInfoCards";
import PricingContact from "@/components/sections/Contact/Pricing/PricingContact";
import ContactInfoBar from "@/components/sections/Contact/Card/ContactInfoBar";
import FAQSection from "@/components/sections/home/FAQ/FAQSection";
import FAQHeader from "@/components/sections/home/Pricing/PricingHeader";
import HeroCTA from "@/components/sections/Contact/CTA/HeroCTA";

export default function ContactPage() {
    return (
        <div>
            <Navbar />
            <ContactHero/>
            <ContactInfoCards />
            <PricingContact/>
            <ContactInfoBar/>
            <FAQHeader/>
            <FAQSection/>
            <HeroCTA/>
            <Footer />
        </div>
    );
}
