'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { X, Send } from 'lucide-react';

const CTASection: React.FC = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [status, setStatus] = useState<'idle' | 'submitting' | 'success'>('idle');

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus('submitting');
        await new Promise(resolve => setTimeout(resolve, 1500));
        setStatus('success');
        setTimeout(() => {
            setIsModalOpen(false);
            setStatus('idle');
        }, 2000);
    };

    return (
        <section className="relative bg-[#1A1A1A] py-20 md:py-32 overflow-hidden border-t border-[#262626]">

            {/* Background Image Container */}
            <div className="absolute inset-0 z-0 select-none pointer-events-none">
                <Image
                    src="/Hero/service-br5.png"
                    alt="Background Wave"
                    fill
                    className="object-cover object-center opacity-80 scale-105"
                    quality={90}
                />
                <div className="absolute inset-0 bg-gradient-to-b from-[#1A1A1A] via-transparent to-transparent opacity-70" />
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-5 text-center flex flex-col items-center">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="flex flex-col items-center w-full"
                >

                    <div className="w-16 h-16 md:w-20 md:h-20 bg-[#C5FF32] rounded-2xl flex items-center justify-center shadow-lg mb-8 p-4 hover:scale-105 transition-transform duration-300">
                        <Image src="/Logo/logo.svg" alt="SquareUp Logo" width={50} height={50} className="w-full h-auto" />
                    </div>

                    <h2 className="text-[26px] leading-[1.2] md:text-4xl lg:text-5xl font-bold text-white mb-6 tracking-tight max-w-4xl hyphens-auto">
                        Let us Bring your Ideas to Life in the Digital World.
                    </h2>

                    <p className="max-w-3xl mx-auto text-gray-400 text-[15px] md:text-lg leading-relaxed mb-10 px-2 opacity-90">
                        No matter which services you choose, we are committed to delivering exceptional results that exceed your expectations. Our multidisciplinary team works closely together to ensure seamless collaboration.
                    </p>

                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => setIsModalOpen(true)}
                        className="bg-[#C5FF32] text-[#1A1A1A] px-8 py-4 rounded-xl font-bold text-base md:text-lg shadow-md hover:bg-[#d4ff63] transition-colors whitespace-nowrap"
                    >
                        Start Project
                    </motion.button>
                </motion.div>
            </div>

            <AnimatePresence>
                {isModalOpen && (
                    <div className="fixed inset-0 z-[100] flex items-center justify-center p-5">
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setIsModalOpen(false)}
                            className="absolute inset-0 bg-black/90 backdrop-blur-sm"
                        />

                        <motion.div
                            initial={{ scale: 0.9, opacity: 0, y: 20 }}
                            animate={{ scale: 1, opacity: 1, y: 0 }}
                            exit={{ scale: 0.9, opacity: 0, y: 20 }}
                            className="relative w-full max-w-md bg-[#1A1A1A] border border-[#262626] rounded-[24px] md:rounded-[32px] p-6 md:p-10 shadow-2xl"
                        >
                            <button
                                onClick={() => setIsModalOpen(false)}
                                className="absolute top-4 right-4 text-gray-500 hover:text-white transition-colors p-2"
                            >
                                <X size={20} />
                            </button>

                            {status === 'success' ? (
                                <div className="text-center py-8">
                                    <div className="w-16 h-16 bg-[#C5FF32]/20 rounded-full flex items-center justify-center mx-auto mb-4">
                                        <Send className="text-[#C5FF32]" size={28} />
                                    </div>
                                    <h3 className="text-xl font-bold text-white mb-2">Message Sent!</h3>
                                    <p className="text-gray-400 text-sm">We will get back to you shortly.</p>
                                </div>
                            ) : (
                                <>
                                    <h3 className="text-xl md:text-2xl font-bold text-white mb-2">Start Project</h3>
                                    <p className="text-gray-400 text-sm mb-6">Fill in the details and we&apos;ll reach out.</p>

                                    <form onSubmit={handleSubmit} className="space-y-3">
                                        <input required type="text" placeholder="Your Name" className="w-full bg-[#1e1e1e] border border-[#262626] rounded-lg px-4 py-3 text-sm text-white focus:border-[#C5FF32] outline-none transition-colors" />
                                        <input required type="email" placeholder="Email Address" className="w-full bg-[#1e1e1e] border border-[#262626] rounded-lg px-4 py-3 text-sm text-white focus:border-[#C5FF32] outline-none transition-colors" />
                                        <textarea required placeholder="Describe your idea" rows={3} className="w-full bg-[#1e1e1e] border border-[#262626] rounded-lg px-4 py-3 text-sm text-white focus:border-[#C5FF32] outline-none transition-colors resize-none" />

                                        <button
                                            disabled={status === 'submitting'}
                                            type="submit"
                                            className="w-full bg-[#C5FF32] text-black py-3 rounded-lg font-bold text-base hover:bg-[#d4ff63] transition-all disabled:opacity-50"
                                        >
                                            {status === 'submitting' ? 'Sending...' : 'Send Request'}
                                        </button>
                                    </form>
                                </>
                            )}
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>
        </section>
    );
};

export default CTASection;