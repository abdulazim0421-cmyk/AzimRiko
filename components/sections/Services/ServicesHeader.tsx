'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

const ServicesHeader: React.FC = () => {
    return (
        <section className="relative bg-[#1A1A1A] pt-24 pb-16 overflow-hidden border-t border-[#262626]">
            {/* Контейнер фонового изображения */}
            <div className="absolute inset-0 z-0">
                <Image
                    src="/Hero/services-br.png" //
                    alt="Services Background"
                    fill
                    className="object-cover opacity-90 scale-105"
                    priority // Так как это заголовок важной секции
                />
                {/* Градиент для плавного перехода */}
                <div className="absolute inset-0 bg-gradient-to-b from-[#1A1A1A]/50 via-transparent to-[#1A1A1A] opacity-90" />
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-4 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight">
                        Our Services
                    </h2>
                    <p className="max-w-3xl mx-auto text-gray-400 text-sm md:text-base px-6 leading-relaxed">
                        Transform your brand with our innovative digital solutions
                        that captivate and engage your audience.
                    </p>
                </motion.div>
            </div>
        </section>
    );
};

export default ServicesHeader;