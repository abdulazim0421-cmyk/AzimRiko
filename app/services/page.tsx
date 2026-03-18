import ServicesHero from "@/app/services/components/sections/ServicesHero";
import DesignSection from "@/app/services/components/sections/DesignSection";
import EngineeringSection from "@/app/services/components/sections/EngineeringSection";
import MarketingSection from "@/app/services/components/sections/MarketingSection";
import FinalCTA from "@/app/services/components/sections/FinalCTA";
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
