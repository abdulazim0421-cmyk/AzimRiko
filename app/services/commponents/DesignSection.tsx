import ServiceSection from "./ServiceSection";
// МЕНЯТЬ ИКОНКУ ЗДЕСЬ
import { Search, Layers, MousePointer2, Palette, Layout, PenTool, Smartphone, Target, Briefcase, ShieldCheck, FileText } from 'lucide-react';

export default function DesignSection() {
    const designGroups = [
        {
            // МЕНЯТЬ ТЕКСТ ЗДЕСЬ
            category: "User Experience (UX) Design",
            items: [
                // МЕНЯТЬ ТЕКСТ ЗДЕСЬ
                { title: "User Research and Persona Development", icon: <Search size={24} /> },
                // МЕНЯТЬ ТЕКСТ ЗДЕСЬ
                { title: "Information Architecture and Wireframing", icon: <Layers size={24} /> },
                // МЕНЯТЬ ТЕКСТ ЗДЕСЬ
                { title: "Interactive Prototyping and User Testing", icon: <MousePointer2 size={24} /> },
                // МЕНЯТЬ ТЕКСТ ЗДЕСЬ
                { title: "UI Design and Visual Branding", icon: <Palette size={24} /> },
            ]
        },
        {
            // МЕНЯТЬ ТЕКСТ ЗДЕСЬ
            category: "User Interface (UI) Design",
            items: [
                // МЕНЯТЬ ТЕКСТ ЗДЕСЬ
                { title: "Intuitive and Visually Appealing Interface Design", icon: <Layout size={24} /> },
                // МЕНЯТЬ ТЕКСТ ЗДЕСЬ
                { title: "Custom Iconography and Illustration", icon: <PenTool size={24} /> },
                // МЕНЯТЬ ТЕКСТ ЗДЕСЬ
                { title: "Typography and Color Palette Selection", icon: <Palette size={24} /> },
                // МЕНЯТЬ ТЕКСТ ЗДЕСЬ
                { title: "Responsive Design for Various Devices", icon: <Smartphone size={24} /> },
            ]
        },
        {
            // МЕНЯТЬ ТЕКСТ ЗДЕСЬ
            category: "Branding and Identity",
            items: [
                // МЕНЯТЬ ТЕКСТ ЗДЕСЬ
                { title: "Logo Design and Visual Identity Development", icon: <Target size={24} /> },
                // МЕНЯТЬ ТЕКСТ ЗДЕСЬ
                { title: "Brand Strategy and Positioning", icon: <Briefcase size={24} /> },
                // МЕНЯТЬ ТЕКСТ ЗДЕСЬ
                { title: "Brand Guidelines and Style Guides", icon: <ShieldCheck size={24} /> },
                // МЕНЯТЬ ТЕКСТ ЗДЕСЬ
                { title: "Marketing Collateral Design (Brochures, Business Cards, etc.)", icon: <FileText size={24} /> },
            ]
        }
    ];

    return (
        <ServiceSection
            // МЕНЯТЬ ТЕКСТ ЗДЕСЬ
            title="Design"
            // МЕНЯТЬ ТЕКСТ ЗДЕСЬ
            description="At Squareup, our design team is passionate about creating stunning, user-centric designs that captivate your audience and elevate your brand. We believe that great design is not just about aesthetics; it's about creating seamless and intuitive user experiences."
            groups={designGroups}
        />
    );
}
