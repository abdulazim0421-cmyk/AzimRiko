import ServicesHero from "@/components/sections/Services/ServicesHero";
import DesignSection from "@/components/sections/Services/DesignSection";
import EngineeringSection from "@/components/sections/Services/EngineeringSection";
import MarketingSection from "@/components/sections/Services/MarketingSection";
import FinalCTA from "@/components/sections/Services/FinalCTA";
import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";

export default function ServicesPage() {
    return (
        <div>
            <Navbar/>
                <main className="relative z-10 bg-[#1A1A1A]">
                    <ServicesHero/>
                    <DesignSection/>
                    <EngineeringSection/>
                    <MarketingSection/>
                    <FinalCTA/>
                </main>
            <Footer/>
        </div>
    );
}
