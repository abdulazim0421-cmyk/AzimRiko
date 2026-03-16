import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ServicesHero from "@/app/services/components/sections/ServicesHero";
import DesignSection from "@/app/services/components/sections/DesignSection";
import EngineeringSection from "@/app/services/components/sections/EngineeringSection";
import MarketingSection from "@/app/services/components/sections/MarketingSection";

export default function ServicesPage() {
    return (
        <div>
            <Navbar/>
                <main className="bg-[#1A1A1A]">
                    <ServicesHero/>
                    <DesignSection/>
                    <EngineeringSection/>
                    <MarketingSection/>
                </main>
            <Footer/>
        </div>
    );
}
