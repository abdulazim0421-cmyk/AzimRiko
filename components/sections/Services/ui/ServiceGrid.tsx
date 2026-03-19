'use client';
import { motion } from 'framer-motion';
import DesignSection from "../DesignSection";
import EngineeringSection from "../EngineeringSection";
import MarketingSection from "../MarketingSection";
import ServiceCard from './ServiceCard';
import {
    Layers, MousePointer2, Smartphone, Palette,
    Layout, PenTool, Search, MessageSquare,
    Target, ShieldCheck, Briefcase, FileText
} from 'lucide-react'; // Используем Lucide иконки

const designData = [
    {
        category: "User Experience (UX) Design",
        items: [
            { title: "User Research and Persona Development", icon: <Search size={24} /> },
            { title: "Information Architecture and Wireframing", icon: <Layers size={24} /> },
            { title: "Interactive Prototyping and User Testing", icon: <MousePointer2 size={24} /> },
            { title: "UI Design and Visual Branding", icon: <Palette size={24} /> },
        ]
    },
    {
        category: "User Interface (UI) Design",
        items: [
            { title: "Intuitive and Visually Appealing Interface Design", icon: <Layout size={24} /> },
            { title: "Custom Iconography and Illustration", icon: <PenTool size={24} /> },
            { title: "Typography and Color Palette Selection", icon: <Palette size={24} /> },
            { title: "Responsive Design for Various Devices", icon: <Smartphone size={24} /> },
        ]
    },
    {
        category: "Branding and Identity",
        items: [
            { title: "Logo Design and Visual Identity Development", icon: <Target size={24} /> },
            { title: "Brand Strategy and Positioning", icon: <Briefcase size={24} /> },
            { title: "Brand Guidelines and Style Guides", icon: <ShieldCheck size={24} /> },
            { title: "Marketing Collateral Design (Brochures, Business Cards, etc.)", icon: <FileText size={24} /> },
        ]
    }
];


export default function ServiceGrid() {
    return (
        <div>
            <DesignSection/>
            <EngineeringSection/>
            <MarketingSection/>
            <section className="bg-[#1A1A1A] pb-20">
                <div className="container mx-auto px-4 md:px-8 max-w-7xl">
                    {designData.map((group, groupIdx) => (
                        <div key={groupIdx} className="mb-12">
                            <h2 className="text-zinc-400 text-lg md:text-xl mb-6 border-b border-zinc-800 pb-4" style={{ fontFamily: 'Barlow, sans-serif' }}>
                                {group.category}
                            </h2>

                            <motion.div
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true, margin: "-100px" }}
                                transition={{ staggerChildren: 0.08 }} // Быстрый "каскад"
                                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4"
                            >
                                {group.items.map((item, itemIdx) => (
                                    <ServiceCard
                                        key={itemIdx}
                                        title={item.title}
                                        icon={item.icon} // Сюда встанет твоя иконка
                                    />
                                ))}
                            </motion.div>
                        </div>
                    ))}
                </div>
            </section>
        </div>


    );
}