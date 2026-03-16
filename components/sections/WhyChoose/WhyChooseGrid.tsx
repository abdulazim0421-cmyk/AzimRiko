'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Award, Users, Zap, Handshake } from 'lucide-react';

interface Reason {
    title: string;
    icon: React.ReactNode;
    description: string;
}

const reasons: Reason[] = [
    {
        title: 'Expertise',
        icon: <Award className="w-6 h-6 text-[#C5FF32]" />,
        description: "Our team consists of highly skilled professionals who have a deep understanding of the digital landscape. We stay updated with the latest industry trends and best practices to deliver cutting-edge solutions."
    },
    {
        title: 'Client-Centric Approach',
        icon: <Users className="w-6 h-6 text-[#C5FF32]" />,
        description: "We prioritize our clients and their unique needs. We listen to your ideas, challenges, and goals, and tailor our services to meet your specific requirements. Your success is our success."
    },
    {
        title: 'Results-Driven Solutions',
        icon: <Zap className="w-6 h-6 text-[#C5FF32]" />,
        description: "Our primary focus is on delivering results. We combine creativity and technical expertise to create digital products that drive business growth, enhance user experiences, and provide a competitive advantage."
    },
    {
        title: 'Collaborative Partnership',
        icon: <Handshake className="w-6 h-6 text-[#C5FF32]" />,
        description: "We value long-term relationships with our clients. We see ourselves as your digital partner, providing ongoing support, maintenance, and updates to ensure your digital products continue to thrive."
    }
];

const WhyChooseGrid: React.FC = () => {
    return (
        <section className="bg-[#1A1A1A] pb-24">
            <div className="max-w-[1440px] mx-auto">
                {/* Сетка в 2 колонки. Эффект линий через gap-px и фоновый цвет #262626 */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-[#262626] border-y border-[#262626]">
                    {reasons.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            className="bg-[#1A1A1A] p-10 md:p-16 flex flex-col items-start hover:bg-[#1C1C1C] transition-colors group"
                        >
                            {/* Header: Иконка + Заголовок */}
                            <div className="flex items-center gap-5 mb-8">
                                <div className="w-14 h-14 bg-[#262626] rounded-xl flex items-center justify-center border border-[#333333] group-hover:border-[#C5FF32]/30 transition-all duration-300 shadow-inner">
                                    {item.icon}
                                </div>
                                <h3 className="text-2xl md:text-3xl font-semibold text-white tracking-tight">
                                    {item.title}
                                </h3>
                            </div>

                            {/* Описание */}
                            <p className="text-gray-400 text-base md:text-lg leading-relaxed">
                                {item.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default WhyChooseGrid;