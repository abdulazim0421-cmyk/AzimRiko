'use client';

import React from 'react';
import Image from 'next/image';

const PageHero = () => {
    return (
        <section className="relative bg-[#1A1A1A] pt-32 pb-20 overflow-hidden border-b border-[#262626]">
            {/* Background Layer */}
            <div className="absolute inset-0 z-0 select-none pointer-events-none">
                <Image
                    src="/Contact/ContactHero.png"
                    alt="Background Wave"
                    fill
                    className="object-cover object-center opacity-60"
                    priority
                />

                {/* Overlay Pattern (Сетка) */}
                <div className="absolute inset-0 bg-[url('/patterns/grid.svg')] opacity-30 mix-blend-overlay" />

                {/* Глубокий градиент для эффекта "входа" текста в тень */}
                <div className="absolute inset-0 bg-gradient-to-b from-[#1A1A1A] via-transparent to-[#1A1A1A] opacity-90" />
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
                {/* Заголовок с увеличенным трекингом */}
                <h1 className="text-[42px] md:text-5xl lg:text-6xl font-bold text-white mb-6 tracking-tight">
                    Contact Us
                </h1>

                {/* Описание с ограниченной шириной для правильных переносов */}
                <p className="max-w-2xl mx-auto text-gray-400 text-sm md:text-base lg:text-lg font-light leading-relaxed">
                    Get in touch with us today and let us help you with any questions or inquiries you may have.
                </p>
            </div>
        </section>
    );
};

export default PageHero;