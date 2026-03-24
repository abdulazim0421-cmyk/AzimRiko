'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Menu } from 'lucide-react';

const Navbar = () => {
    const pathname = usePathname();
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const navLinks = [
        { name: 'Home', href: '/' },
        { name: 'Services', href: '/services' },
        { name: 'Work', href: '/work' },
        { name: 'Process', href: '/process' },
        { name: 'About', href: '/about' },
        { name: 'Careers', href: '/careers' },
    ];

    return (
        <>
            <nav className="sticky top-0 z-50 bg-[#1A1A1A]/95 backdrop-blur-sm border-b border-[#262626]">
            <div className="max-w-7xl mx-auto px-6 md:px-12 py-4 flex items-center justify-between">
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

                {/* Desktop Contact Button - Теперь это просто ссылка */}
                <Link
                    href="/contact"
                    className="hidden md:block bg-[#C5FF32] text-black px-6 py-2.5 rounded-lg font-medium hover:bg-[#d4ff63] transition-colors active:scale-95"
                >
                    Contact Us
                </Link>

                {/* Mobile Menu Button */}
                <button
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    className="md:hidden p-2.5 bg-[#262626] border border-[#333333] rounded-lg text-[#C5FF32] transition-colors"
                >
                    {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>
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
                            {/* Mobile Contact Link */}
                            <Link
                                href="/contact"
                                onClick={() => setIsMobileMenuOpen(false)}
                                className="mt-4 bg-[#C5FF32] text-black py-4 rounded-xl font-bold text-center transition-all active:scale-95"
                            >
                                Contact Us
                            </Link>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};

export default Navbar;