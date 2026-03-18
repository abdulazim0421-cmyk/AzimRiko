import ServiceSection from "../../ui/ServiceSection";
import {
    Globe,
    Smartphone,
    TestTube,
    Code2,
    Database,
    Cloud,
    SquareTerminal,
    Cog,
    Siren,
    Vibrate,
    MousePointerClick, Pointer, SquareDashed, MonitorCheck, Blocks, Layers
} from 'lucide-react';

/** Секция инженерных услуг: веб-разработка, мобильные приложения и тестирование. */
export default function EngineeringSection() {
    const engineeringGroups = [
        {
            category: "Web Development",
            items: [
                { title: "Front-End Development (HTML, CSS, JavaScript)",  icon: <Code2 size={24} />,    description: "Modern, performant user interfaces built with the latest frameworks, optimized for speed, accessibility and long-term maintainability across all browsers and devices." },
                { title: "Back-End Development (PHP, Python, Ruby)", icon: <SquareTerminal size={24} />, description: "Robust server-side architecture, business logic and database design that scales reliably under load and adapts as your product requirements evolve." },
                { title: "Content Management System (CMS) Development (WordPress, Drupal)", icon: <Cog size={24} />,    description: "End-to-end product development from database schema to polished UI, delivered by a unified team with full ownership of quality and performance at every layer." },
                { title: "E-Commerce Platform Development (Magento, Shopify)",             icon: <Siren size={24} />,    description: "RESTful and GraphQL APIs designed for security, reliability and developer experience, plus seamless integration with third-party services and internal systems." },
            ]
        },
        {
            category: "Mobile App Development",
            items: [
                { title: "Native iOS and Android App Development",        icon: <Smartphone size={24} />, description: "Native Swift applications built to Apple's Human Interface Guidelines, optimized for performance, battery life and a premium feel across the full iPhone and iPad lineup." },
                { title: "Cross-Platform App Development (React Native, Flutter)",    icon: <Vibrate size={24} />, description: "Kotlin-based Android apps engineered for the full diversity of Android devices, screen sizes and OS versions, with a focus on stability and smooth performance." },
                { title: "App Prototyping and UI/UX Design Integration", icon: <MousePointerClick size={24} />, description: "React Native and Flutter solutions that maximize code sharing across iOS and Android while preserving native-quality interactions and platform-specific conventions." },
                { title: "App Testing, Deployment, and Maintenance", icon: <Pointer size={24} />,      description: "Web applications with offline support, push notifications and installability that deliver a native-like experience on any device without the friction of an app store." },
            ]
        },
        {
            category: "Custom Software Development",
            items: [
                { title: "Enterprise Software Development",     icon: <SquareDashed size={24} />, description: "Comprehensive CI-integrated test suites covering unit, integration and end-to-end scenarios that catch regressions automatically before they ever reach production." },
                { title: "Custom Web Application Development", icon: <MonitorCheck size={24} />, description: "Thorough exploratory and scenario-based testing by experienced QA engineers who uncover the edge cases and real-world issues that automated tools consistently miss." },
                { title: "Integration with Third-Party APIs and Systems",   icon: <Blocks size={24} />, description: "Load, stress and scalability testing that simulates real-world traffic spikes to identify bottlenecks and ensure your application holds up when it matters most." },
                { title: "Legacy System Modernization and Migration",      icon: <Layers size={24} />, description: "Vulnerability assessments, penetration testing and code reviews that identify and remediate security risks before they can be exploited, protecting your users and data." },
            ]
        }
    ];

    return (
        <ServiceSection
            title="Engineering"
            description="Our engineering team delivers robust, scalable solutions across web and mobile platforms. From frontend to backend, we build high-performance applications with cutting-edge technologies and rigorous testing practices."
            groups={engineeringGroups}
        />
    );
}
