'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

const Hero: React.FC = () => {
    const tags = [
        { text: 'Startups', active: false },
        { text: 'Enterprise leaders', active: false },
        { text: 'Media & Publishers', active: false },
        { text: 'Social Good', active: false },
    ];

    return (
        <section className="relative min-h-[90vh] flex flex-col items-center justify-center bg-[#1A1A1A] overflow-hidden px-4 pt-20 md:pt-0">

            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10 pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]" />

            {/* Main Content */}
            <div className="relative z-10 text-center max-w-5xl mx-auto">
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    /* ADAPTIVE: text-[38px] для мобилок */
                    className="text-[38px] leading-[1.1] md:leading-normal md:text-6xl lg:text-7xl font-bold text-white mb-6 md:mb-8 tracking-tight"
                >
                    A Digital Product Studio <br />
                    <span className="text-white">that will Work</span>
                </motion.h1>

                {/* Tags / Description Container */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.4, duration: 0.8 }}
                    className="bg-[#212121]/50 md:bg-[#262626]/50 backdrop-blur-md border border-[#262626] md:border-[#333333] rounded-2xl p-6 md:p-6 mb-10"
                >
                    {/* МОБИЛКА: Текст строкой */}
                    <div className="block md:hidden text-gray-400 text-[15px] leading-relaxed">
                        For startups, enterprise leaders, media & publishers, and social good.
                    </div>

                    {/* ДЕСКТОП: Твои оригинальные теги */}
                    <div className="hidden md:flex flex-wrap items-center justify-center gap-3 text-gray-400 text-base">
                        <span>For</span>
                        {tags.map((tag, index) => (
                            <React.Fragment key={tag.text}>
                                <span className="bg-[#2D2D2D] text-white px-4 py-2 rounded-lg border border-[#3d3d3d] hover:border-[#C5FF32] transition-colors cursor-default">
                                  {tag.text}
                                </span>
                                {index < tags.length - 1 && index !== 2 && <span>,</span>}
                                {index === 2 && <span className="mx-1">and</span>}
                            </React.Fragment>
                        ))}
                    </div>
                </motion.div>

                {/* CTA Buttons */}
                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6 }}
                    className="flex flex-row items-center justify-center gap-3 md:gap-4"
                >
                    <Link href="/work" className="bg-[#1e1e1e] md:bg-[#262626] text-white px-6 md:px-8 py-3.5 rounded-xl text-sm md:text-base font-medium border border-[#262626] md:border-[#333333] hover:bg-[#333333] transition-all active:scale-95">
                        Our Works
                    </Link>
                    <Link href="/contact" className="bg-[#C5FF32] text-black px-6 md:px-8 py-3.5 rounded-xl text-sm md:text-base font-bold hover:bg-[#d4ff63] transition-all active:scale-95 shadow-[0_0_20px_rgba(197,255,50,0.1)]">
                        Contact Us
                    </Link>
                </motion.div>
            </div>

            {/* Animated Mountain - ADAPTIVE: hidden на мобилке, md:block на десктопе */}
            <div className="hidden md:block absolute bottom-0 w-full z-0 pointer-events-none opacity-80">
                <Image
                    src="/Hero/mountain.svg"
                    alt="Abstract Mountain"
                    width={1920}
                    height={600}
                    priority
                    className="w-full h-auto object-cover"
                />
            </div>

        </section>
    );
};

export default Hero;