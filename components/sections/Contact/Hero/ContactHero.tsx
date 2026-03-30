'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

const ContactHero = () => {
    return (
        <section className="relative bg-[#1A1A1A] pt-40 pb-20 overflow-hidden">
            {/* Background Layer — Слой с темной волной и сеткой */}
            <div className="absolute inset-0 z-0 select-none pointer-events-none">
                {/* Фоновая волна с приглушенной яркостью */}
                <Image
                    src="/Contact/ContactHero.png"
                    alt="Background Wave"
                    fill
                    className="object-cover object-center opacity-60"
                    priority
                />

                {/* Еле заметная сетка (grid) поверх волны */}
                <div className="absolute inset-0 bg-[url('/patterns/grid.svg')] opacity-20 mix-blend-overlay" />

                {/* Градиент, который "вписывает" контент в темный фон */}
                <div className="absolute inset-0 bg-gradient-to-b from-[#1A1A1A] via-transparent to-[#1A1A1A] opacity-80" />
            </div>

            {/* Контентная часть (Текст по центру) */}
            <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                >
                    {/* Чисто белый заголовок без лишних цветов */}
                    <h1 className="text-[42px] md:text-5xl lg:text-6xl font-medium text-white mb-6 tracking-tight">
                        Contact Us
                    </h1>

                    {/* Тонкий серый текст с ограничением по ширине */}
                    <p className="max-w-xl mx-auto text-gray-400 text-sm md:text-base lg:text-[17px] font-light leading-relaxed">
                        Get in touch with us today and let us help you with any questions or inquiries you may have.
                    </p>
                </motion.div>
            </div>
        </section>
    );
};

export default ContactHero;