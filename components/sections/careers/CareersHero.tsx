'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

export default function CareersHero() {
    return (
        <section className="relative w-full h-[280px] md:h-[340px] flex items-center justify-center text-center overflow-hidden">
            <div className="absolute inset-0 z-0">
                <Image
                    src="/Hero/servicer-br4.png"
                    alt=""
                    fill
                    className="object-cover object-center"
                    priority
                />
                <div className="absolute inset-0 bg-[#1A1A1A]/60" />
            </div>

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, ease: 'easeOut' }}
                className="relative z-10 flex flex-col items-center gap-3 px-6"
            >
                <h1 className="text-white font-semibold text-2xl md:text-4xl lg:text-5xl leading-tight">
                    Join Our Team at SquareUp
                </h1>
                <p className="text-zinc-400 text-sm md:text-base max-w-xl">
                    Unlock your potential and join our team of innovators and problem solvers.
                </p>
            </motion.div>
        </section>
    );
}
