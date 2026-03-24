'use client';

import React from 'react';
import { motion } from 'framer-motion';

export default function CareersIntro() {
    return (
        <section className="bg-[#1A1A1A] border-b border-zinc-800 py-16 md:py-24">
            <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col items-start gap-6">

                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, ease: 'easeOut' }}
                    className="text-white font-bold text-2xl md:text-3xl lg:text-4xl leading-tight max-w-3xl"
                >
                    Welcome to SquareUp, where talent meets opportunity!
                </motion.h2>

                <motion.p
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.1, ease: 'easeOut' }}
                    className="text-zinc-400 text-sm md:text-base leading-relaxed max-w-2xl"
                >
                    At SquareUp, we believe that the success of our agency lies in the talent, passion, and
                    dedication of our team members. We are a digital product agency that thrives on innovation,
                    creativity, and collaboration. If you're ready to make a difference and contribute to
                    cutting-edge projects, we invite you to explore career opportunities with us.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 12 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.2, ease: 'easeOut' }}
                    className="px-5 py-2.5 rounded-md text-zinc-300 text-sm font-medium"
                    style={{ background: '#242424', border: '1px solid #333333' }}
                >
                    Why Work at SquareUp?
                </motion.div>

            </div>
        </section>
    );
}
