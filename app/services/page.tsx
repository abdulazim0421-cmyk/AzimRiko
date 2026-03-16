import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ServicesHero from "@/app/services/components/sections/ServicesHero";
import DesignSection from "@/app/services/components/sections/DesignSection";
import EngineeringSection from "@/app/services/components/sections/EngineeringSection";
import MarketingSection from "@/app/services/components/sections/MarketingSection";
import FinalCTA from "@/app/services/components/sections/FinalCTA";

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
