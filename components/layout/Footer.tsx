'use client';

import React from 'react';
import { Mail, Phone, MapPin, Facebook, Twitter, Linkedin, ArrowUp } from 'lucide-react';

const Footer: React.FC = () => {
    // Функция для плавного возврата в начало страницы
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <footer className="bg-[#1A1A1A] text-white border-t border-[#262626]">
            {/* Контейнер с макс. шириной и вертикальными линиями по бокам */}
            <div className="max-w-[1280px] mx-auto border-x border-[#262626]">

                {/* Top Section */}
                <div className="flex flex-col md:flex-row justify-between items-center p-8 md:p-12 gap-8">
                    {/* Logo */}
                    <div className="flex items-center gap-2 cursor-pointer" onClick={scrollToTop}>
                        <img src="/Logo/logo.svg" alt="SquareUp Logo" className="w-10 h-10" />
                        <span className="text-white font-semibold text-xl tracking-tight">SquareUp</span>
                    </div>

                    {/* Right Section: Стрелка + Соцсети */}
                    <div className="flex items-center gap-4 md:gap-6">

                        {/* Кнопка "Наверх" — перед иконками */}
                        <button
                            onClick={scrollToTop}
                            className="group flex items-center justify-center w-14 h-14 bg-[#262626] border border-[#333333] rounded-xl hover:border-[#C5FF32] transition-all active:scale-90"
                            title="Back to top"
                        >
                            <ArrowUp size={22} className="text-white group-hover:text-[#C5FF32] transition-colors" />
                        </button>

                        {/* Social Links Box */}
                        <div className="flex items-center gap-3 p-2 bg-[#262626] rounded-xl border border-[#333333]">
                            <span className="hidden sm:inline px-3 text-sm font-medium text-gray-400">Stay Connected</span>
                            <div className="flex gap-2">
                                <SocialIcon icon={<Facebook size={18} />} />
                                <SocialIcon icon={<Twitter size={18} />} />
                                <SocialIcon icon={<Linkedin size={18} />} />
                            </div>
                        </div>
                    </div>
                </div>

                <hr className="border-[#262626] mx-8 md:mx-12" />

                {/* Bottom Section */}
                <div className="flex flex-col md:flex-row justify-between items-center p-8 md:p-12 gap-6">
                    <div className="flex flex-wrap justify-center md:justify-start gap-6 text-sm text-gray-400">
                        <a href="mailto:hello@squareup.com" className="flex items-center gap-2 hover:text-white transition-colors">
                            <Mail size={16} className="text-[#C5FF32]" /> hello@squareup.com
                        </a>
                        <a href="tel:+9191813232309" className="flex items-center gap-2 hover:text-white transition-colors">
                            <Phone size={16} className="text-[#C5FF32]" /> +91 91813 23 2309
                        </a>
                        <span className="flex items-center gap-2">
                            <MapPin size={16} className="text-[#C5FF32]" /> Somewhere in the World
                        </span>
                    </div>

                    <p className="text-gray-500 text-sm">
                        © 2023 SquareUp. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
};

// Исправленный вспомогательный компонент для иконок
const SocialIcon = ({ icon }: { icon: React.ReactNode }) => (
    <a href="#" className="w-10 h-10 flex items-center justify-center bg-[#333333] rounded-lg text-[#C5FF32] border border-transparent hover:border-[#C5FF32]/50 hover:bg-[#3d3d3d] transition-all">
        {icon}
    </a>
);

export default Footer;