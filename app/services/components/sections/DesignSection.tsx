import ServiceSection from "../ui/ServiceSection";
import {
    Search, Layers, MousePointer2, Palette, Layout, PenTool, Smartphone, Target, Briefcase, ShieldCheck, FileText,
    SquaresSubtract, MousePointerClick, Sparkles, GalleryThumbnails, MousePointer, SunDim, BookMinus, CircleDotDashed,
    Move, GitFork
} from 'lucide-react';

/** Секция дизайн-услуг: UX, UI и брендинг. */
export default function DesignSection() {
    const designGroups = [
        {
            category: "User Experience (UX) Design",
            items: [
                { title: "User Research and Persona Development",    icon: <SquaresSubtract size={24} />,       description: "Comprehensive user research including in-depth interviews, competitive analysis, and persona mapping to ensure every design decision is backed by real-world user data and business goals." },
                { title: "Information Architecture and Wireframing", icon: <FileText size={24} />,       description: "Structured content hierarchies and low-fidelity wireframes that validate layout, navigation flow and feature prioritization before a single pixel of UI is designed." },
                { title: "Interactive Prototyping and User Testing", icon: <MousePointerClick size={24} />, description: "High-fidelity clickable prototypes tested with real users across multiple rounds to surface usability issues early and reduce costly changes during development." },
                { title: "UI Design and Visual Branding",            icon: <Sparkles size={24} />,      description: "Pixel-perfect interface design that translates your brand identity into a cohesive visual language, covering color, typography, spacing and component libraries." },
            ]
        },
        {
            category: "User Interface (UI) Design",
            items: [
                { title: "Intuitive and Visually Appealing Interface Design", icon: <MousePointer size={24} />,     description: "Clean, purposeful layouts built around user mental models that guide people naturally through your product without friction or confusion." },
                { title: "Custom Iconography and Illustration",               icon: <SunDim size={24} />,    description: "Bespoke icon sets and illustrations crafted to reinforce your visual language and add personality to your product at every scale." },
                { title: "Typography and Color Palette Selection",            icon: <PenTool size={24} />,    description: "Carefully curated type pairings and accessible color systems that ensure consistency, readability and brand recognition across all touchpoints." },
                { title: "Responsive Design for Various Devices",             icon: <GalleryThumbnails size={24} />, description: "Fluid, adaptive layouts designed and tested across mobile, tablet and desktop to deliver a seamless experience regardless of screen size or input method." },
            ]
        },
        {
            category: "Branding and Identity",
            items: [
                { title: "Logo Design and Visual Identity Development",                     icon: <CircleDotDashed size={24} />,     description: "Memorable, versatile logos and cohesive visual identity systems built to work across digital and print, making your brand instantly recognizable in any context." },
                { title: "Brand Strategy and Positioning",                                  icon: <Move size={24} />,  description: "Clear brand narrative, tone of voice and market positioning that differentiates your business and resonates deeply with your target audience." },
                { title: "Brand Guidelines and Style Guides",                               icon: <GitFork size={24} />, description: "Comprehensive documentation covering logo usage, color, typography and imagery rules to keep your brand consistent across every team and channel." },
                { title: "Marketing Collateral Design (Brochures, Business Cards, etc.)",   icon: <BookMinus size={24} />,   description: "Print and digital marketing materials designed with precision and purpose, ensuring every customer touchpoint reflects the quality and character of your brand." },
            ]
        }
    ];
    
    return (
        <ServiceSection
            title="Design"
            description="At Squareup, our design team is passionate about creating stunning, user-centric designs that captivate your audience and elevate your brand. We believe that great design is not just about aesthetics; it's about creating seamless and intuitive user experiences."
            groups={designGroups}
        />
    );
}
