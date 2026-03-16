'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

const brands = [
    { name: 'Zapier', src: '/logos/zapier.svg' },
    { name: 'Spotify', src: '/logos/spotify.svg' },
    { name: 'Zoom', src: '/logos/zoom.svg' },
    { name: 'Slack', src: '/logos/slack.svg', isNarrow: true },
    { name: 'Amazon', src: '/logos/amazon.svg' },
    { name: 'Adobe', src: '/logos/adobe.svg' },
];

const doubledBrands = [...brands, ...brands, ...brands];

const LogosSection: React.FC = () => {
    return (
        <section className="bg-[#1A1A1A] pt-12 md:pt-16 relative overflow-hidden">
            {/* Контейнер: на мобилках h-64 (примерно по 85px на ячейку), на десктопе h-44 */}
            <div className="relative border-y border-[#262626] bg-[#1C1C1C]/30  md:h-44 flex items-center">

                {/* Надпись-бейдж */}
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-20">
                    <div className="bg-[#1A1A1A] border border-[#262626] px-6 py-2 rounded-full shadow-lg">
                        <span className="text-gray-300 text-xs md:text-sm font-medium whitespace-nowrap">
                            Trusted By 250+ Companies
                        </span>
                    </div>
                </div>

                {/* МОБИЛЬНАЯ ВЕРСИЯ: Статичная сетка 2x3 без анимации */}
                <div className="md:hidden grid grid-cols-2 w-full">
                    {brands.map((brand, index) => (
                        <div
                            key={brand.name}
                            /* h-20 сохраняет узкую ширину между линиями, как в оригинале */
                            className={`flex items-center justify-center h-30 border-[#262626] 
                                ${index % 2 === 0 ? 'border-r' : ''} 
                                ${index < 4 ? 'border-b' : ''}`}
                        >
                            <div className="relative w-34 h-10 flex items-center justify-center">
                                <Image
                                    src={brand.src}
                                    alt={brand.name}
                                    fill
                                    className={`opacity-50 grayscale object-contain ${brand.isNarrow ? 'scale-125' : 'scale-100'}`}
                                />
                            </div>
                        </div>
                    ))}
                </div>

                {/* ДЕСКТОПНАЯ ВЕРСИЯ: Анимированная лента */}
                <div className="hidden md:flex relative w-full overflow-hidden items-center h-full">
                    <div className="absolute inset-y-0 left-0 w-64 bg-gradient-to-r from-[#1A1A1A] to-transparent z-10" />
                    <div className="absolute inset-y-0 right-0 w-64 bg-gradient-to-l from-[#1A1A1A] to-transparent z-10" />

                    <motion.div
                        className="flex items-center"
                        animate={{ x: ["0%", "-33.33%"] }}
                        transition={{
                            duration: 30,
                            ease: "linear",
                            repeat: Infinity
                        }}
                    >
                        {doubledBrands.map((brand, index) => (
                            <div
                                key={index}
                                className="flex-shrink-0 flex items-center justify-center w-52 h-14 mx-10"
                            >
                                <div className="relative w-full h-full flex items-center justify-center">
                                    <Image
                                        src={brand.src}
                                        alt={brand.name}
                                        fill
                                        className={`opacity-40 grayscale hover:opacity-100 transition-all duration-500 cursor-pointer object-contain
                                            ${brand.isNarrow ? 'scale-125' : 'scale-100'}
                                        `}
                                    />
                                </div>
                            </div>
                        ))}
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default LogosSection;