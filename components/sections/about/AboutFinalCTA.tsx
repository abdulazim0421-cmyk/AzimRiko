'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

export default function AboutFinalCTA() {
    return (
        <section className="bg-[#191919] border-t border-b border-zinc-800">
            <div className="max-w-7xl mx-auto px-6 md:px-12 py-14 md:py-16 flex flex-col gap-8 border-l border-r border-zinc-800">

                {/* Row 1: big cube icon + heading/description */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, ease: 'easeOut' }}
                    className="flex flex-row items-center gap-6 md:gap-8"
                >
                    {/* Green cube */}
                    <div
                        className="shrink-0 w-16 h-16 md:w-[72px] md:h-[72px] flex items-center justify-center"
                        style={{ background: '#C6FF00', borderRadius: '12px' }}
                    >
                        <Image src="/Logo/logo.svg" alt="SquareUp" width={36} height={36} />
                    </div>

                    {/* Text */}
                    <div className="flex flex-col gap-2">
                        <h2 className="text-white font-semibold text-lg md:text-2xl leading-snug">
                            Today, SquareUp Continues to Thrive as a Leading Digital Product Agency.....
                        </h2>
                        <p className="text-zinc-400 text-sm leading-relaxed max-w-3xl">
                            Combining the power of design, engineering, and project management to create transformative
                            digital experiences. They invite you to join them on their journey and discover how they can
                            help bring your digital ideas to life.
                        </p>
                    </div>
                </motion.div>

                {/* Divider */}
                <div className="border-t border-zinc-800" />

                {/* Row 2: label + badge (flex-1) + button — all in one line */}
                <motion.div
                    initial={{ opacity: 0, y: 14 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.15, ease: 'easeOut' }}
                    className="flex flex-row items-center gap-3"
                >
                    <span className="text-zinc-400 text-sm whitespace-nowrap shrink-0">
                        Welcome to SquareUp
                    </span>

                    <span
                        className="flex-1 px-4 py-3 rounded-lg text-zinc-300 text-sm leading-snug"
                        style={{ background: '#1E1E1E', border: '1px solid #333333' }}
                    >
                        Where collaboration, Expertise, and Client-Centricity Intersect to Shape the Future of Digital Innovation.
                    </span>

                    <Link href="/contact" className="shrink-0">
                        <motion.span
                            whileHover={{ scale: 1.04 }}
                            whileTap={{ scale: 0.96 }}
                            transition={{ type: 'spring', stiffness: 400, damping: 17 }}
                            className="inline-flex items-center justify-center font-bold text-sm px-6 py-3 rounded-lg cursor-pointer whitespace-nowrap"
                            style={{ background: '#C6FF00', color: '#111111' }}
                        >
                            Start Project
                        </motion.span>
                    </Link>
                </motion.div>

            </div>
        </section>
    );
}