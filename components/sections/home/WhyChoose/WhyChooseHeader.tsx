'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

const WhyChooseHeader: React.FC = () => {
    return (
        <section className="relative bg-[#1A1A1A] py-24 overflow-hidden border-t border-[#262626]">
            {/* Background Image Container */}
            <div className="absolute inset-0 z-0">
                <Image
                    src="/Hero/services-br2.png" // Файл в public/Hero/services-br2.png
                    alt="Background Pattern"
                    fill
                    className="object-cover opacity-90"
                    priority
                />
                {/* Затемняем верх для плавного перехода от предыдущей секции */}
                <div className="absolute inset-0 bg-gradient-to-b from-[#1A1A1A] via-transparent to-transparent opacity-80" />
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-4 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7, ease: "easeOut" }}
                >
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight">
                        Why Choose SquareUp?
                    </h2>
                    <p className="max-w-3xl mx-auto text-gray-400 text-sm md:text-base leading-relaxed px-4">
                        Experience excellence in digital craftsmanship with our team of skilled professionals
                        dedicated to delivering exceptional results.
                    </p>
                </motion.div>
            </div>
        </section>
    );
};

export default WhyChooseHeader;