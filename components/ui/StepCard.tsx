'use client';
import { motion } from 'framer-motion';

export interface Step {
    number: string;
    title: string;
    description: string;
}

const titleVariants = {
    rest: { y: 4, opacity: 0.8 },
    hover: { y: 0, opacity: 1, transition: { duration: 0.25, delay: 0.05, ease: 'easeOut' as const } },
};

const descVariants = {
    rest: { y: 6, opacity: 0.6 },
    hover: { y: 0, opacity: 1, transition: { duration: 0.25, delay: 0.15, ease: 'easeOut' as const } },
};

const neonVariants = {
    rest: { clipPath: 'inset(0 100% 0 0)', opacity: 0 },
    hover: { clipPath: 'inset(0 0% 0 0)', opacity: 1, transition: { duration: 0.4, ease: 'easeOut' as const } },
};

export const cardVariants = {
    hidden: { opacity: 0, y: 24 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' as const } },
};

export default function StepCard({ step, titleColor = '#D8FF99' }: { step: Step; titleColor?: string }) {
    return (
        <motion.div
            variants={cardVariants}
            initial="rest"
            whileHover="hover"
            animate="rest"
            className="relative overflow-hidden flex flex-col gap-6 p-10 md:p-12 border-r border-b border-zinc-800 bg-[#1A1A1A]"
        >
            {/* Neon border sweep */}
            <motion.div
                variants={neonVariants}
                className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-[#D8FF99] to-transparent pointer-events-none"
            />

            {/* Subtle bg glow */}
            <motion.div
                variants={{ rest: { opacity: 0 }, hover: { opacity: 1, transition: { duration: 0.3 } } }}
                className="absolute inset-0 bg-[#D8FF99]/[0.03] pointer-events-none"
            />

            {/* Number + Title row — shared glow on hover */}
            <motion.div
                variants={{
                    rest: { scale: 1, filter: 'drop-shadow(0 0 0px transparent)' },
                    hover: { scale: 1.05, filter: 'drop-shadow(0 0 14px rgba(216,255,153,0.55))', transition: { duration: 0.3, ease: 'easeOut' as const } },
                }}
                className="relative flex items-end gap-5 origin-left"
            >
                <span className="text-7xl md:text-8xl font-black text-[#D8FF99] leading-none inline-block">
                    {step.number}
                </span>
                <motion.h3
                    variants={titleVariants}
                    style={{ color: titleColor }}
                    className="text-xl md:text-2xl font-semibold leading-tight pb-2"
                >
                    {step.title}
                </motion.h3>
            </motion.div>

            {/* Divider */}
            <div className="relative border-t border-zinc-700" />

            {/* Description */}
            <motion.p variants={descVariants} className="relative text-zinc-400 text-sm leading-relaxed">
                {step.description}
            </motion.p>
        </motion.div>
    );
}
