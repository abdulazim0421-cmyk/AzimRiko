'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { X, CheckCircle2, Menu } from 'lucide-react';

const Navbar = () => {
    const pathname = usePathname();
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);

    const navLinks = [
        { name: 'Home', href: '/' },
        { name: 'Services', href: '/services' },
        { name: 'Work', href: '/work' },
        { name: 'Process', href: '/process' },
        { name: 'About', href: '/about' },
        { name: 'Careers', href: '/careers' },
    ];

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        await new Promise((resolve) => setTimeout(resolve, 1500));
        setIsSubmitting(false);
        setIsSuccess(true);
        setTimeout(() => {
            setIsModalOpen(false);
            setIsSuccess(false);
        }, 2000);
    };

    return (
        <>
            <nav className="sticky top-0 z-50 flex items-center justify-between px-6 md:px-8 py-4 bg-[#1A1A1A]/95 backdrop-blur-sm border-b border-[#262626]">
                {/* Logo */}
                <Link href="/" className="flex items-center gap-2">
                    <Image src="/Logo/logo.svg" alt="SquareUp Logo" width={32} height={32} className="md:w-10 md:h-10" priority />
                    <span className="text-white font-semibold text-lg md:text-xl tracking-tight">SquareUp</span>
                </Link>

                {/* Desktop Navigation */}
                <div className="hidden md:flex items-center bg-[#262626] rounded-lg p-1 border border-[#333333]">
                    {navLinks.map((link) => {
                        const isActive = pathname === link.href;
                        return (
                            <Link
                                key={link.name}
                                href={link.href}
                                className={`px-5 py-2 rounded-md text-sm font-medium transition-all ${
                                    isActive ? 'bg-[#333333] text-white shadow-inner' : 'text-gray-400 hover:text-white hover:bg-[#2d2d2d]'
                                }`}
                            >
                                {link.name}
                            </Link>
                        );
                    })}
                </div>

                {/* Desktop Contact Button */}
                <button
                    onClick={() => setIsModalOpen(true)}
                    className="hidden md:block bg-[#C5FF32] text-black px-6 py-2.5 rounded-lg font-medium hover:bg-[#d4ff63] transition-colors active:scale-95"
                >
                    Contact Us
                </button>

                {/* Mobile Menu Button - Точно как на макете */}
                <button
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    className="md:hidden p-2.5 bg-[#262626] border border-[#333333] rounded-lg text-[#C5FF32] transition-colors"
                >
                    {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </nav>

            {/* Mobile Navigation Menu */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className="fixed inset-x-0 top-[73px] z-40 bg-[#1A1A1A] border-b border-[#262626] p-6 md:hidden shadow-2xl"
                    >
                        <div className="flex flex-col gap-4">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.name}
                                    href={link.href}
                                    onClick={() => setIsMobileMenuOpen(false)}
                                    className={`text-lg font-medium py-2 border-b border-[#262626]/50 ${
                                        pathname === link.href ? 'text-[#C5FF32]' : 'text-gray-400'
                                    }`}
                                >
                                    {link.name}
                                </Link>
                            ))}
                            <button
                                onClick={() => {
                                    setIsMobileMenuOpen(false);
                                    setIsModalOpen(true);
                                }}
                                className="mt-4 bg-[#C5FF32] text-black py-4 rounded-xl font-bold text-center transition-all active:scale-95"
                            >
                                Contact Us
                            </button>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* CONTACT MODAL */}
            <AnimatePresence>
                {isModalOpen && (
                    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setIsModalOpen(false)}
                            className="absolute inset-0 bg-black/80 backdrop-blur-sm"
                        />

                        <motion.div
                            initial={{ scale: 0.9, opacity: 0, y: 20 }}
                            animate={{ scale: 1, opacity: 1, y: 0 }}
                            exit={{ scale: 0.9, opacity: 0, y: 20 }}
                            className="relative w-full max-w-2xl bg-[#1A1A1A] border border-[#262626] rounded-3xl overflow-hidden shadow-2xl"
                        >
                            <button
                                onClick={() => setIsModalOpen(false)}
                                className="absolute top-6 right-6 text-gray-400 hover:text-white transition-colors z-10"
                            >
                                <X size={28} />
                            </button>

                            <div className="p-8 md:p-12">
                                {isSuccess ? (
                                    <div className="flex flex-col items-center justify-center py-12 text-center">
                                        <CheckCircle2 size={80} className="text-[#C5FF32] mb-6" />
                                        <h2 className="text-3xl font-bold text-white mb-2">Message Sent!</h2>
                                        <p className="text-gray-400">We will contact you soon.</p>
                                    </div>
                                ) : (
                                    <>
                                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Get in Touch</h2>
                                        <form onSubmit={handleSubmit} className="space-y-6">
                                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                                <div className="bg-[#212121] p-6 rounded-xl border border-[#262626]">
                                                    <label className="text-white block mb-2 text-sm">Full Name</label>
                                                    <input required type="text" placeholder="Type here" className="w-full bg-transparent border-b border-[#333333] py-2 outline-none focus:border-[#C5FF32] text-white" />
                                                </div>
                                                <div className="bg-[#212121] p-6 rounded-xl border border-[#262626]">
                                                    <label className="text-white block mb-2 text-sm">Email</label>
                                                    <input required type="email" placeholder="Type here" className="w-full bg-transparent border-b border-[#333333] py-2 outline-none focus:border-[#C5FF32] text-white" />
                                                </div>
                                            </div>
                                            <div className="bg-[#212121] p-6 rounded-xl border border-[#262626]">
                                                <label className="text-white block mb-2 text-sm">Your Message</label>
                                                <textarea required rows={3} placeholder="How can we help?" className="w-full bg-transparent border-b border-[#333333] py-2 outline-none focus:border-[#C5FF32] text-white resize-none" />
                                            </div>
                                            <button
                                                disabled={isSubmitting}
                                                type="submit"
                                                className="w-full bg-[#C5FF32] text-black py-4 rounded-xl font-bold hover:bg-[#d4ff63] transition-all disabled:opacity-50"
                                            >
                                                {isSubmitting ? 'Sending...' : 'Send Message'}
                                            </button>
                                        </form>
                                    </>
                                )}
                            </div>
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>
        </>
    );
};

export default Navbar;