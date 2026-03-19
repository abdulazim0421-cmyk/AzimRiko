'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

const ACCENT = '#D8FF99';
const GLOW_NEAR = 'rgba(216,255,153,0.55)';
const GLOW_FAR  = 'rgba(216,255,153,0.2)';

export default function AboutFinalCTA() {
    return (
        <section className="relative bg-[#111111] overflow-hidden border-t border-zinc-800">
            <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 py-16 md:py-20 flex flex-col gap-10">

                {/* Row 1 — mobile: centered column / desktop: icon + text row */}
                <motion.div
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, ease: 'easeOut' }}
                    className="flex flex-col items-center text-center md:flex-row md:items-start md:text-left gap-6 md:gap-8"
                >
                    {/* Logo cube */}
                    <div
                        className="shrink-0 w-20 h-20 rounded-2xl flex items-center justify-center"
                        style={{
                            background: ACCENT,
                            boxShadow: `0 0 24px ${GLOW_NEAR}, 0 0 60px ${GLOW_FAR}`,
                        }}
                    >
                        <Image src="/Logo/logo.svg" alt="SquareUp" width={40} height={40} />
                    </div>

                    {/* Text */}
                    <div className="flex flex-col gap-3">
                        <h2 className="text-white font-semibold text-xl md:text-2xl leading-snug">
                            Today, SquareUp Continues to Thrive as a Leading Digital Product Agency.....
                        </h2>
                        <p className="text-zinc-400 text-sm md:text-base leading-relaxed max-w-2xl">
                            Combining the power of design, engineering, and project management to create transformative
                            digital experiences. They invite you to join them on their journey and discover how they can
                            help bring your digital ideas to life.
                        </p>
                    </div>
                </motion.div>

                {/* Divider */}
                <div className="border-t border-zinc-800" />

                {/* Row 2 — mobile: stacked centered column / desktop: single row */}
                <motion.div
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.55, delay: 0.15, ease: 'easeOut' }}
                    className="flex flex-col items-center gap-4 md:flex-row md:items-center"
                >
                    {/* Label */}
                    <span className="text-zinc-400 text-sm whitespace-nowrap">
                        Welcome to SquareUp
                    </span>

                    {/* Badge */}
                    <span
                        className="w-full md:flex-1 px-5 py-4 rounded-xl text-zinc-300 text-sm leading-snug text-center md:text-left"
                        style={{ background: '#1E1E1E', border: '1px solid #2e2e2e' }}
                    >
                        Where collaboration, Expertise, and Client-Centricity Intersect to Shape the Future of Digital Innovation.
                    </span>

                    {/* Button — full width on mobile, auto on desktop */}
                    <Link href="/contact" className="w-full md:w-auto">
                        <motion.span
                            whileHover={{
                                scale: 1.05,
                                boxShadow: `0 0 28px ${GLOW_NEAR}, 0 0 56px ${GLOW_FAR}`,
                            }}
                            whileTap={{ scale: 0.95 }}
                            transition={{ type: 'spring', stiffness: 400, damping: 17 }}
                            className="flex items-center justify-center whitespace-nowrap font-bold text-sm md:text-base px-8 py-4 rounded-xl cursor-pointer w-full md:w-auto"
                            style={{
                                background: ACCENT,
                                color: '#111111',
                                boxShadow: `0 0 20px ${GLOW_FAR}`,
                            }}
                        >
                            Start Project
                        </motion.span>
                    </Link>
                </motion.div>

            </div>
        </section>
    );
}
