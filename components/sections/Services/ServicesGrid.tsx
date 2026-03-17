'use client';

import React, { useState } from 'react';
import { Palette, Cpu, Briefcase, X, CheckCircle2 } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface Service {
    title: string;
    icon: React.ReactNode;
    description: string;
    href: string;
    features: string[]; // Добавили список особенностей для модалки
}

const services: Service[] = [
    {
        title: 'Design',
        icon: <Palette className="w-6 h-6 text-[#C5FF32]" />,
        href: '/services/design',
        description: "At Squareup, our design team is passionate about creating stunning, user-centric designs that captivate your audience and elevate your brand.",
        features: ["User Experience Design", "Visual Identity", "Prototyping", "UI Design"]
    },
    {
        title: 'Engineering',
        icon: <Cpu className="w-6 h-6 text-[#C5FF32]" />,
        href: '/services/engineering',
        description: "Our engineering team combines technical expertise with a passion for innovation to build robust and scalable digital solutions.",
        features: ["Web Development", "Mobile Apps", "Cloud Infrastructure", "API Integration"]
    },
    {
        title: 'Project Management',
        icon: <Briefcase className="w-6 h-6 text-[#C5FF32]" />,
        href: '/services/management',
        description: "Our experienced project management team ensures that your projects are delivered on time, within budget, and according to specifications.",
        features: ["Agile Methodology", "Resource Planning", "Quality Assurance", "Timeline Management"]
    }
];

const ServicesGrid: React.FC = () => {
    const [selectedService, setSelectedService] = useState<Service | null>(null);

    return (
        <section className="bg-[#1A1A1A] pb-0 px-4 md:px-0 border-t border-[#262626]">
            <div className="max-w-[1440px] mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-[#262626]">
                    {services.map((service, index) => (
                        <div
                            key={index}
                            className="bg-[#1A1A1A] p-10 md:p-14 flex flex-col items-start min-h-[500px] hover:bg-[#1E1E1E] transition-colors duration-300"
                        >
                            <div className="w-14 h-14 bg-[#262626] rounded-xl flex items-center justify-center mb-10 border border-[#333333] shadow-inner">
                                {service.icon}
                            </div>
                            <h3 className="text-3xl font-semibold text-white mb-6">{service.title}</h3>
                            <p className="text-gray-400 text-base leading-relaxed mb-12 flex-grow">{service.description}</p>

                            <button
                                onClick={() => setSelectedService(service)}
                                className="mt-auto w-full bg-[#262626] hover:bg-[#333333] text-white py-4 rounded-xl border border-[#333333] transition-all font-medium text-center active:scale-[0.98]"
                            >
                                Learn More
                            </button>
                        </div>
                    ))}
                </div>
            </div>

            {/* Modal Window */}
            <AnimatePresence>
                {selectedService && (
                    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
                        {/* Backdrop */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setSelectedService(null)}
                            className="absolute inset-0 bg-black/80 backdrop-blur-sm"
                        />

                        {/* Modal Content */}
                        <motion.div
                            initial={{ scale: 0.9, opacity: 0, y: 20 }}
                            animate={{ scale: 1, opacity: 1, y: 0 }}
                            exit={{ scale: 0.9, opacity: 0, y: 20 }}
                            className="relative w-full max-w-xl bg-[#1A1A1A] border border-[#262626] rounded-[24px] p-8 md:p-12 overflow-hidden shadow-2xl"
                        >
                            {/* Close Button */}
                            <button
                                onClick={() => setSelectedService(null)}
                                className="absolute top-6 right-6 text-gray-500 hover:text-white transition-colors"
                            >
                                <X size={24} />
                            </button>

                            <div className="flex items-center gap-4 mb-8">
                                <div className="w-12 h-12 bg-[#262626] rounded-lg flex items-center justify-center border border-[#333333]">
                                    {selectedService.icon}
                                </div>
                                <h2 className="text-2xl font-bold text-white">{selectedService.title}</h2>
                            </div>

                            <p className="text-gray-400 text-lg leading-relaxed mb-8">
                                {selectedService.description}
                            </p>

                            <div className="space-y-4 mb-10">
                                <h4 className="text-white font-medium mb-2 text-sm uppercase tracking-wider opacity-50">What we offer:</h4>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                    {selectedService.features.map((feature) => (
                                        <div key={feature} className="flex items-center gap-2 text-gray-300">
                                            <CheckCircle2 size={18} className="text-[#C5FF32]" />
                                            <span className="text-sm">{feature}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <button
                                onClick={() => setSelectedService(null)}
                                className="w-full bg-[#C5FF32] text-black py-4 rounded-xl font-bold hover:bg-[#d4ff63] transition-all active:scale-95 shadow-[0_0_20px_rgba(197,255,50,0.15)]"
                            >
                                Close Details
                            </button>
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>
        </section>
    );
};

export default ServicesGrid;