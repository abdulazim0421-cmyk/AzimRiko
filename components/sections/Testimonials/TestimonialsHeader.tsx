'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

const TestimonialsHeader: React.FC = () => {
    return (
        // Контейнер секции
        <section className="relative bg-[#1A1A1A] pt-0 pb-32 overflow-hidden border-t border-[#262626]">

            {/* Background Image Container */}
            <div className="absolute inset-0 z-0">
                <Image
                    src="/Hero/servicer-br3.png" // Файл должен лежать в public/Hero/servicer-br3.png
                    alt="Testimonials Background"
                    fill
                    className="object-cover object-center opacity-90 scale-105"
                    priority // Ускоряем загрузку фонового изображения
                />
                {/* Градиент для плавного перехода от предыдущей секции */}
                <div className="absolute inset-0 bg-gradient-to-b from-[#1A1A1A] via-[#1A1A1A]/50 to-transparent opacity-100" />
            </div>

            {/* Content */}
            <div className="relative z-10 max-w-7xl mx-auto px-4 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="pt-32"
                >
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-6 tracking-tight">
                        What our Clients say About us
                    </h2>
                    <p className="max-w-3xl mx-auto text-gray-300 text-sm md:text-lg leading-relaxed px-4">
                        At SquareUp, we take pride in delivering exceptional digital products and services that drive success for our clients.
                        Here&apos;s what some of our satisfied clients have to say about their experience working with us.
                    </p>
                </motion.div>
            </div>

        </section>
    );
};

export default TestimonialsHeader;