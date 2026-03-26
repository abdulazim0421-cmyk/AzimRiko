import Navbar from "@/components/layout/Navbar";
import WorksHero from "@/components/sections/work/Hero/WorksHero";
import NotableWorks from "@/components/sections/work/WorksCard/NotableWorks";
import WorksCTA from "@/components/sections/work/Hero/WorksCTA";
import Footer from "@/components/layout/Footer";


export default function WorkPage() {
    return (
        <div>
            <Navbar />
            <WorksHero/>
            <NotableWorks />
            <WorksCTA/>
            <Footer />
        </div>
    );
}
