import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ServicesHero from "@/app/services/commponents/ServicesHero";
import DesignSection from "@/app/services/commponents/DesignSection";
import EngineeringSection from "@/app/services/commponents/EngineeringSection";
import MarketingSection from "@/app/services/commponents/MarketingSection";

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
