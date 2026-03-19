import ServiceSection from "./ui/ServiceSection";
import {
    Search,
    FileText,
    Share2,
    TrendingUp,
    Mail,
    BarChart,
    Database,
    ShieldCheck,
    Puzzle,
    Wrench, Wand2, Briefcase, HardDrive, HardDriveDownload, GamepadDirectional
} from 'lucide-react';

/** Секция маркетинговых услуг: SEO, контент-стратегия и digital-маркетинг. */
export default function MarketingSection() {
    const marketingGroups = [
        {
            category: "Project Planning and Scoping",
            items: [
                { title: "Requirements Gathering and Analysis",            icon: <HardDriveDownload size={24} />,     description: "Full technical crawl analysis covering site speed, indexability, structured data and Core Web Vitals to identify and prioritize every issue holding back your search rankings." },
                { title: "Project Roadmap and Timeline Development",  icon: <BarChart size={24} />,     description: "Data-driven keyword mapping that uncovers the exact queries your audience uses at every stage of the funnel, giving your content a clear path to visibility and traffic." },
                { title: "Resource Allocation and Task Assignment",       icon: <GamepadDirectional size={24} />, description: "Systematic improvements to content, metadata, internal linking and page structure that increase topical relevance, click-through rates and time on page." },
                { title: "Risk Assessment and Mitigation Strategies", icon: <BarChart size={24} />, description: "Strategic acquisition of high-quality backlinks through editorial outreach and digital PR to build domain authority and long-term organic search performance." },
            ]
        },
        {
            category: "Agile Development",
            items: [
                { title: "Iterative Development and Sprints",  icon: <HardDrive size={24} />, description: "A full editorial strategy aligned with your business funnel — from awareness to conversion — covering topics, formats, channels and a realistic publishing cadence." },
                { title: "Scrum or Kanban Methodology Implementation", icon: <Database size={24} />, description: "Clear, authoritative long-form content and conversion-focused copy written by specialists who understand both your audience and the nuances of your industry." },
                { title: "Regular Progress Updates and Demos",    icon: <Briefcase size={24} />, description: "End-to-end video production from scripting and storyboarding to filming and editing, creating assets optimized for social, paid ads and your website." },
                { title: "Continuous Improvement and Feedback Incorporation",   icon: <Wand2 size={24} />,     description: "Segmented, behavior-triggered email flows and broadcast campaigns that nurture leads, re-engage dormant users and drive measurable revenue for your business." },
            ]
        },
        {
            category: "Quality Assurance and Testing",
            items: [
                { title: "Test Planning and Execution",       icon: <Puzzle size={24} />,    description: "Platform-specific content strategies tailored to your audience's behavior on each channel, designed to grow reach, deepen engagement and convert followers into customers." },
                { title: "Functional and Usability Testing",        icon: <ShieldCheck size={24} />,    description: "Proactive moderation, conversation and relationship-building across your social channels to foster a loyal brand community and turn customers into advocates." },
                { title: "Performance and Security Testing",  icon: <TrendingUp size={24} />, description: "ROI-focused paid campaigns across Google, Meta and other key platforms, with rigorous audience targeting, creative testing and ongoing optimization to maximize return." },
                { title: "Bug Tracking and Issue Resolution",     icon: <Wrench size={24} />,  description: "Custom dashboards and regular performance reports that translate raw data into clear insights, so you always know what's working and where to invest next." },
            ]
        }
    ];

    return (
        <ServiceSection
            title="Project Management"
            description="Our experienced project management team ensures that your projects are delivered on time, within budget, and according to your specifications. We follow industry-standard methodologies and employ effective communication and collaboration tools to keep you informed throughout the development process."
            groups={marketingGroups}
        />
    );
}
