import ServiceSection from "./ServiceSection";
// МЕНЯТЬ ИКОНКУ ЗДЕСЬ
import { Search, FileText, Share2, TrendingUp, Mail, BarChart } from 'lucide-react';

export default function MarketingSection() {
    const marketingGroups = [
        {
            // МЕНЯТЬ ТЕКСТ ЗДЕСЬ
            category: "SEO & Optimization",
            items: [
                // МЕНЯТЬ ТЕКСТ ЗДЕСЬ
                { title: "Technical SEO Audit", icon: <Search size={24} /> },
                // МЕНЯТЬ ТЕКСТ ЗДЕСЬ
                { title: "Keyword Research and Strategy", icon: <Search size={24} /> },
                // МЕНЯТЬ ТЕКСТ ЗДЕСЬ
                { title: "On-Page SEO Optimization", icon: <TrendingUp size={24} /> },
                // МЕНЯТЬ ТЕКСТ ЗДЕСЬ
                { title: "Link Building and Off-Page SEO", icon: <TrendingUp size={24} /> },
            ]
        },
        {
            // МЕНЯТЬ ТЕКСТ ЗДЕСЬ
            category: "Content Strategy",
            items: [
                // МЕНЯТЬ ТЕКСТ ЗДЕСЬ
                { title: "Content Marketing Strategy", icon: <FileText size={24} /> },
                // МЕНЯТЬ ТЕКСТ ЗДЕСЬ
                { title: "Blog Writing and Copywriting", icon: <FileText size={24} /> },
                // МЕНЯТЬ ТЕКСТ ЗДЕСЬ
                { title: "Video Content Production", icon: <FileText size={24} /> },
                // МЕНЯТЬ ТЕКСТ ЗДЕСЬ
                { title: "Email Marketing Campaigns", icon: <Mail size={24} /> },
            ]
        },
        {
            // МЕНЯТЬ ТЕКСТ ЗДЕСЬ
            category: "Digital Marketing",
            items: [
                // МЕНЯТЬ ТЕКСТ ЗДЕСЬ
                { title: "Social Media Strategy", icon: <Share2 size={24} /> },
                // МЕНЯТЬ ТЕКСТ ЗДЕСЬ
                { title: "Community Management", icon: <Share2 size={24} /> },
                // МЕНЯТЬ ТЕКСТ ЗДЕСЬ
                { title: "Paid Advertising Campaigns", icon: <TrendingUp size={24} /> },
                // МЕНЯТЬ ТЕКСТ ЗДЕСЬ
                { title: "Analytics and Reporting", icon: <BarChart size={24} /> },
            ]
        }
    ];

    return (
        <ServiceSection
            // МЕНЯТЬ ТЕКСТ ЗДЕСЬ
            title="Marketing"
            // МЕНЯТЬ ТЕКСТ ЗДЕСЬ
            description="Our marketing team helps you reach and engage your target audience through data-driven strategies. From SEO to social media, we create compelling campaigns that drive growth and build lasting brand presence."
            groups={marketingGroups}
        />
    );
}
