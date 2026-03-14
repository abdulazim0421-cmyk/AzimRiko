import ServiceSection from "./ServiceSection";
// МЕНЯТЬ ИКОНКУ ЗДЕСЬ
import { Globe, Smartphone, TestTube, Code2, Database, Cloud } from 'lucide-react';

export default function EngineeringSection() {
    const engineeringGroups = [
        {
            // МЕНЯТЬ ТЕКСТ ЗДЕСЬ
            category: "Web Development",
            items: [
                // МЕНЯТЬ ТЕКСТ ЗДЕСЬ
                { title: "Frontend Development (React, Vue, Angular)", icon: <Code2 size={24} /> },
                // МЕНЯТЬ ТЕКСТ ЗДЕСЬ
                { title: "Backend Development (Node.js, Python, Java)", icon: <Database size={24} /> },
                // МЕНЯТЬ ТЕКСТ ЗДЕСЬ
                { title: "Full-Stack Solutions", icon: <Globe size={24} /> },
                // МЕНЯТЬ ТЕКСТ ЗДЕСЬ
                { title: "API Development and Integration", icon: <Cloud size={24} /> },
            ]
        },
        {
            // МЕНЯТЬ ТЕКСТ ЗДЕСЬ
            category: "Mobile Development",
            items: [
                // МЕНЯТЬ ТЕКСТ ЗДЕСЬ
                { title: "iOS App Development", icon: <Smartphone size={24} /> },
                // МЕНЯТЬ ТЕКСТ ЗДЕСЬ
                { title: "Android App Development", icon: <Smartphone size={24} /> },
                // МЕНЯТЬ ТЕКСТ ЗДЕСЬ
                { title: "Cross-Platform Development", icon: <Smartphone size={24} /> },
                // МЕНЯТЬ ТЕКСТ ЗДЕСЬ
                { title: "Progressive Web Apps (PWA)", icon: <Globe size={24} /> },
            ]
        },
        {
            // МЕНЯТЬ ТЕКСТ ЗДЕСЬ
            category: "Testing & Quality Assurance",
            items: [
                // МЕНЯТЬ ТЕКСТ ЗДЕСЬ
                { title: "Automated Testing", icon: <TestTube size={24} /> },
                // МЕНЯТЬ ТЕКСТ ЗДЕСЬ
                { title: "Manual Testing and QA", icon: <TestTube size={24} /> },
                // МЕНЯТЬ ТЕКСТ ЗДЕСЬ
                { title: "Performance Testing", icon: <TestTube size={24} /> },
                // МЕНЯТЬ ТЕКСТ ЗДЕСЬ
                { title: "Security Testing", icon: <TestTube size={24} /> },
            ]
        }
    ];

    return (
        <ServiceSection
            // МЕНЯТЬ ТЕКСТ ЗДЕСЬ
            title="Engineering"
            // МЕНЯТЬ ТЕКСТ ЗДЕСЬ
            description="Our engineering team delivers robust, scalable solutions across web and mobile platforms. From frontend to backend, we build high-performance applications with cutting-edge technologies and rigorous testing practices."
            groups={engineeringGroups}
        />
    );
}
