'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';

const HeroCTA = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <section className="bg-[#1A1A1A] w-full border-t border-[#262626] relative">
            <div className="max-w-[1280px] mx-auto flex">
                <div className="w-[1px] bg-[#262626] shrink-0 hidden md:block" />

                <div className="flex-1 flex flex-col">
                    <div className="flex flex-col md:flex-row items-center md:items-start gap-10 p-10 md:p-14">
                        <div className="shrink-0 w-24 h-24 md:w-28 md:h-28 bg-[#C5FF32] rounded-2xl flex items-center justify-center p-4">
                            <Image
                                src="/Logo/logo.svg"
                                alt="SquareUp Logo"
                                width={60}
                                height={60}
                                className="w-full h-full object-contain"
                            />
                        </div>
                        <div className="text-center md:text-left space-y-4 max-w-[850px]">
                            {/* Заголовок стал чуть меньше */}
                            <h2 className="text-white text-2xl md:text-3xl font-medium leading-tight">
                                Today, SquareUp Continues to Thrive as a Leading Digital Product Agency.....
                            </h2>
                            {/* Текст стал темнее (text-gray-500) и меньше (text-sm/base) */}
                            <p className="text-gray-500 text-sm md:text-base font-normal leading-relaxed">
                                Combining the power of design, engineering, and project management to create transformative digital experiences. They invite you to join them on their journey and discover how they can help bring your digital ideas to life.
                            </p>
                        </div>
                    </div>

                    <div className="px-10 pb-14">
                        <div className="bg-[#1E1E1E]/50 border border-[#262626] rounded-2xl p-3 md:p-4 flex flex-col md:flex-row items-center justify-between gap-4">
                            <div className="flex items-center gap-6 pl-4">
                                <span className="text-gray-500 text-xs md:text-sm whitespace-nowrap uppercase tracking-wider">Welcome to SquareUp</span>
                                <div className="hidden lg:block bg-[#262626] border border-[#262626] px-5 py-3 rounded-xl">
                                    <p className="text-gray-400 text-xs md:text-sm">
                                        Where collaboration, Expertise, and Client-Centricity Intersect to Shape the Future of Digital Innovation.
                                    </p>
                                </div>
                            </div>

                            <button
                                onClick={() => setIsModalOpen(true)}
                                className="bg-[#C5FF32] text-black px-8 py-3.5 rounded-xl font-bold text-sm hover:bg-[#b8f02d] transition-colors shrink-0"
                            >
                                Start Project
                            </button>
                        </div>
                    </div>
                </div>

                <div className="w-[1px] bg-[#262626] shrink-0 hidden md:block" />
            </div>

            <AnimatePresence>
                {isModalOpen && (
                    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.95 }}
                            className="bg-[#1A1A1A] w-full max-w-[500px] rounded-[32px] border border-[#262626] p-8 relative shadow-2xl"
                        >
                            <button
                                onClick={() => setIsModalOpen(false)}
                                className="absolute top-6 right-6 text-gray-500 hover:text-white transition-colors"
                            >
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <path d="M18 6L6 18M6 6l12 12" />
                                </svg>
                            </button>

                            <div className="space-y-6">
                                <div className="space-y-2">
                                    <h3 className="text-white text-xl font-semibold">Start Your Project</h3>
                                    <p className="text-gray-500 text-xs md:text-sm">Fill in the details and we'll reach out.</p>
                                </div>

                                <form className="space-y-4">
                                    <input
                                        type="text"
                                        placeholder="Your Name"
                                        className="w-full bg-[#212121] border border-[#262626] rounded-xl px-5 py-3.5 text-sm text-white placeholder:text-gray-600 focus:outline-none"
                                    />
                                    <input
                                        type="email"
                                        placeholder="Email Address"
                                        className="w-full bg-[#212121] border border-[#262626] rounded-xl px-5 py-3.5 text-sm text-white placeholder:text-gray-600 focus:outline-none"
                                    />
                                    <textarea
                                        placeholder="Briefly describe your idea"
                                        rows={4}
                                        className="w-full bg-[#212121] border border-[#262626] rounded-xl px-5 py-3.5 text-sm text-white placeholder:text-gray-600 focus:outline-none resize-none"
                                    />

                                    <button
                                        type="submit"
                                        className="w-full bg-[#C5FF32] text-black py-4 rounded-xl font-bold text-base hover:bg-[#b8f02d] transition-transform active:scale-[0.98]"
                                    >
                                        Send Request
                                    </button>
                                </form>
                            </div>
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>
        </section>
    );
};

export default HeroCTA;