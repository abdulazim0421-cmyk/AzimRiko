'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation'; // Импортируем хук для определения текущего пути

const Navbar = () => {
    const pathname = usePathname(); // Получаем текущий URL (например, "/" или "/services")

    const navLinks = [
        { name: 'Home', href: '/' },
        { name: 'Services', href: '/services' },
        { name: 'Work', href: '/work' },
        { name: 'Process', href: '/process' },
        { name: 'About', href: '/about' },
        { name: 'Careers', href: '/careers' },
    ];

    return (
        <nav className="sticky top-0 z-50 flex items-center justify-between px-8 py-4 bg-[#1A1A1A]/95 backdrop-blur-sm border-b border-[#262626]">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2">
                <Image
                    src="/Logo/logo.svg"
                    alt="SquareUp Logo"
                    width={40}
                    height={40}
                    priority // Логотип должен грузиться быстро
                />
                <span className="text-white font-semibold text-xl tracking-tight">SquareUp</span>
            </Link>

            {/* Navigation Links */}
            <div className="hidden md:flex items-center bg-[#262626] rounded-lg p-1 border border-[#333333]">
                {navLinks.map((link) => {
                    // Проверяем, совпадает ли href ссылки с текущим путем
                    const isActive = pathname === link.href;

                    return (
                        <Link
                            key={link.name}
                            href={link.href}
                            className={`px-5 py-2 rounded-md text-sm font-medium transition-all ${
                                isActive
                                    ? 'bg-[#333333] text-white shadow-inner' // Стиль для активной страницы
                                    : 'text-gray-400 hover:text-white hover:bg-[#2d2d2d]' // Стиль для обычных
                            }`}
                        >
                            {link.name}
                        </Link>
                    );
                })}
            </div>

            {/* Contact Button */}
            <Link
                href="/contact"
                className="bg-[#C5FF32] text-black px-6 py-2.5 rounded-lg font-medium hover:bg-[#d4ff63] transition-colors shadow-sm active:scale-95"
            >
                Contact Us
            </Link>
        </nav>
    );
};

export default Navbar;