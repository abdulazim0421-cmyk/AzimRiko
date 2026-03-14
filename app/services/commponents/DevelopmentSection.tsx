import ServiceSection from "./ServiceSection";
import { Code, Smartphone, Terminal, Cpu } from 'lucide-react';

export default function DevelopmentSection() {
    const devGroups = [
        {
            category: "Web Development",
            items: [
                { title: "Custom Website Development", icon: <Code size={24} /> },
                { title: "E-commerce Solutions", icon: <Terminal size={24} /> },
            ]
        }
    ];

    return (
        <ServiceSection
            title="Development"
            description="Our engineering team builds scalable, high-performance web applications..."
            groups={devGroups}
        />
    );
}