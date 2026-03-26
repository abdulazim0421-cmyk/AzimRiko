'use client';

import React from 'react';
import { motion } from 'framer-motion';

const benefits = [
    {
        title: 'Innovative and Impactful Projects',
        description: "At SquareUp, you'll have the opportunity to work on exciting and impactful projects that shape the digital landscape. From designing intuitive user interfaces to developing robust software solutions, you'll be part of a team that creates products that make a difference.",
    },
    {
        title: 'Supportive Environment',
        description: "At SquareUp, you'll have the opportunity to work on exciting and impactful projects that shape the digital landscape. From designing intuitive user interfaces to developing robust software solutions, you'll be part of a team that creates products that make a difference.",
    },
    {
        title: 'Continuous Learning and Growth',
        description: "We believe in investing in our team's growth and development. We provide opportunities for continuous learning, whether it's through workshops, training programs, or attending industry conferences. At SquareUp, you'll have the chance to expand your skill set and stay up-to-date with the latest trends and technologies.",
    },
    {
        title: 'Challenging and Rewarding Work',
        description: "Our projects are challenging, but the rewards are even greater. We tackle complex problems and push ourselves to deliver innovative solutions. You'll be empowered to take ownership of your work, make a real impact, and see your ideas come to life.",
    },
];

const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.1 } },
};

const cardVariants = {
    hidden: { opacity: 0, y: 24 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: 'easeOut' as const } },
};

const titleVariants = {
    rest: { y: 3, opacity: 0.85 },
    hover: { y: 0, opacity: 1, transition: { duration: 0.25, ease: 'easeOut' as const } },
};

const descVariants = {
    rest: { opacity: 0.6 },
    hover: { opacity: 1, transition: { duration: 0.3, ease: 'easeOut' as const } },
};

const neonVariants = {
    rest: { clipPath: 'inset(0 100% 0 0)', opacity: 0 },
    hover: { clipPath: 'inset(0 0% 0 0)', opacity: 1, transition: { duration: 0.4, ease: 'easeOut' as const } },
};

export default function CareersBenefits() {
    return (
        <section className="bg-[#1A1A1A]">
            <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-60px' }}
                variants={containerVariants}
                className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 border-t border-l border-zinc-800"
            >
                {benefits.map((b) => (
                    <motion.div
                        key={b.title}
                        variants={cardVariants}
                        initial="rest"
                        whileHover="hover"
                        animate="rest"
                        className="relative overflow-hidden flex flex-col gap-8 p-10 md:p-14 border-r border-b border-zinc-800 cursor-default"
                    >
                        {/* Neon top sweep */}
                        <motion.div
                            variants={neonVariants}
                            className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-[#D8FF99] to-transparent pointer-events-none"
                        />

                        {/* Subtle bg glow */}
                        <motion.div
                            variants={{
                                rest: { opacity: 0 },
                                hover: { opacity: 1, transition: { duration: 0.3 } },
                            }}
                            className="absolute inset-0 bg-[#D8FF99]/[0.03] pointer-events-none"
                        />

                        {/* Scale wrapper */}
                        <motion.div
                            variants={{
                                rest: { scale: 1 },
                                hover: { scale: 1.02, transition: { duration: 0.3, ease: 'easeOut' as const } },
                            }}
                            className="relative flex flex-col gap-8 origin-center"
                        >
                            <motion.h3
                                variants={titleVariants}
                                className="text-xl md:text-2xl font-semibold"
                                style={{ color: '#D8FF99' }}
                            >
                                {b.title}
                            </motion.h3>
                            <motion.p
                                variants={descVariants}
                                className="text-zinc-400 text-sm md:text-base leading-relaxed"
                            >
                                {b.description}
                            </motion.p>
                        </motion.div>
                    </motion.div>
                ))}
            </motion.div>
        </section>
    );
}
