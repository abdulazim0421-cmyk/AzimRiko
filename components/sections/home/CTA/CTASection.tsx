'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { X, Send } from 'lucide-react';

const CTASection: React.FC = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [status, setStatus] = useState<'idle' | 'submitting' | 'success'>('idle');

    // Функция обработки отправки формы
    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus('submitting');
        // Имитация отправки
        await new Promise(resolve => setTimeout(resolve, 1500));
        setStatus('success');
        setTimeout(() => {
            setIsModalOpen(false);
            setStatus('idle');
        }, 2000);
    };

    return (
        <section className="relative bg-[#1A1A1A] py-24 md:py-32 overflow-hidden border-t border-[#262626]">

            {/* Background Image Container */}
            <div className="absolute inset-0 z-0">
                <Image
                    src="/Hero/service-br5.png"
                    alt="Background Wave"
                    fill
                    className="object-cover object-center opacity-80 scale-105"
                    quality={90}
                />
                <div className="absolute inset-0 bg-gradient-to-b from-[#1A1A1A] via-transparent to-transparent opacity-70" />
            </div>

            {/* Content */}
            <div className="relative z-10 max-w-7xl mx-auto px-4 text-center flex flex-col items-center">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="flex flex-col items-center"
                >
                    {/* Logo icon */}
                    <div className="w-20 h-20 md:w-24 md:h-24 bg-[#C5FF32] rounded-3xl flex items-center justify-center shadow-lg mb-10 p-5 md:p-6 hover:scale-105 transition-transform duration-300">
                        <Image src="/Logo/logo.svg" alt="SquareUp Logo" width={80} height={80} />
                    </div>

                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 tracking-tight max-w-4xl px-4">
                        Thank you for your Interest in SquareUp.
                    </h2>

                    <p className="max-w-3xl mx-auto text-gray-300 text-base md:text-lg leading-relaxed mb-12 px-6">
                        We would love to hear from you and discuss how we can help bring your digital ideas to life.
                        Here are the different ways you can get in touch with us.
                    </p>

                    {/* Кнопка теперь открывает модалку */}
                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => setIsModalOpen(true)}
                        className="bg-[#C5FF32] text-[#1A1A1A] px-10 py-4 rounded-xl font-bold text-lg shadow-md hover:bg-[#d4ff63] transition-colors"
                    >
                        Start Project
                    </motion.button>
                </motion.div>
            </div>

            {/* Modal Window */}
            <AnimatePresence>
                {isModalOpen && (
                    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
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
                            className="relative w-full max-w-lg bg-[#1A1A1A] border border-[#262626] rounded-[32px] p-8 md:p-10 shadow-2xl"
                        >
                            <button onClick={() => setIsModalOpen(false)} className="absolute top-6 right-6 text-gray-500 hover:text-white transition-colors">
                                <X size={24} />
                            </button>

                            {status === 'success' ? (
                                <div className="text-center py-10">
                                    <div className="w-20 h-20 bg-[#C5FF32]/20 rounded-full flex items-center justify-center mx-auto mb-6">
                                        <Send className="text-[#C5FF32]" size={32} />
                                    </div>
                                    <h3 className="text-2xl font-bold text-white mb-2">Message Sent!</h3>
                                    <p className="text-gray-400">We will get back to you shortly.</p>
                                </div>
                            ) : (
                                <>
                                    <h3 className="text-2xl font-bold text-white mb-2">Start Your Project</h3>
                                    <p className="text-gray-400 mb-8">Fill in the details and we'll reach out.</p>

                                    <form onSubmit={handleSubmit} className="space-y-4">
                                        <div className="space-y-1">
                                            <input required type="text" placeholder="Your Name" className="w-full bg-[#1e1e1e] border border-[#262626] rounded-xl px-5 py-4 text-white focus:border-[#C5FF32] outline-none transition-colors" />
                                        </div>
                                        <div className="space-y-1">
                                            <input required type="email" placeholder="Email Address" className="w-full bg-[#1e1e1e] border border-[#262626] rounded-xl px-5 py-4 text-white focus:border-[#C5FF32] outline-none transition-colors" />
                                        </div>
                                        <div className="space-y-1">
                                            <textarea required placeholder="Briefly describe your idea" rows={4} className="w-full bg-[#1e1e1e] border border-[#262626] rounded-xl px-5 py-4 text-white focus:border-[#C5FF32] outline-none transition-colors resize-none" />
                                        </div>

                                        <button
                                            disabled={status === 'submitting'}
                                            type="submit"
                                            className="w-full bg-[#C5FF32] text-black py-4 rounded-xl font-bold text-lg hover:bg-[#d4ff63] transition-all disabled:opacity-50 disabled:cursor-not-allowed"
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