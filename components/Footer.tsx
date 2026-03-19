import React from 'react';
import { Mail, Phone, MapPin, Facebook, Twitter, Linkedin } from 'lucide-react';

const Footer: React.FC = () => {
    const navLinks = ['Home', 'Services', 'Work', 'Process', 'About', 'Careers', 'Contact'];

    return (
        <footer className="relative z-50 bg-[#1A1A1A] text-white pt-12 pb-6 px-8 border-t border-[#262626]">
            <div className="max-w-7xl mx-auto">

                {/* Top Section */}
                <div className="flex flex-col md:flex-row justify-between items-center mb-10 gap-8">
                    {/* Logo */}
                    <div className="flex items-center gap-2">
                        <img src="/Logo/logo.svg" alt="SquareUp Logo" className="w-10 h-10" />
                        <span className="text-white font-semibold text-xl">SquareUp</span>
                    </div>

                    {/* Footer Nav */}
                    <nav className="flex flex-wrap justify-center gap-6">
                        {navLinks.map((link) => (
                            <a key={link} href="#" className="text-gray-300 hover:text-[#C5FF32] transition-colors text-sm">
                                {link}
                            </a>
                        ))}
                    </nav>

                    {/* Social Links */}
                    <div className="flex items-center gap-3 p-2 bg-[#262626] rounded-xl border border-[#333333]">
                        <span className="px-3 text-sm font-medium">Stay Connected</span>
                        <div className="flex gap-2">
                            <SocialIcon icon={<Facebook size={18} />} />
                            <SocialIcon icon={<Twitter size={18} />} />
                            <SocialIcon icon={<Linkedin size={18} />} />
                        </div>
                    </div>
                </div>

                <hr className="border-[#262626] mb-8" />

                {/* Bottom Section */}
                <div className="flex flex-col md:flex-row justify-between items-center gap-6">
                    <div className="flex flex-wrap justify-center md:justify-start gap-6 text-sm text-gray-400">
                        <a href="mailto:hello@squareup.com" className="flex items-center gap-2 hover:text-white">
                            <Mail size={16} className="text-[#C5FF32]" /> hello@squareup.com
                        </a>
                        <a href="tel:+9191813232309" className="flex items-center gap-2 hover:text-white">
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

// Helper component for social icons
const SocialIcon = ({ icon }: { icon: React.ReactNode }) => (
    <a href="#" className="w-10 h-10 flex items-center justify-center bg-[#333333] rounded-lg text-[#C5FF32] hover:bg-[#C5FF32] hover:text-black transition-all">
        {icon}
    </a>
);

export default Footer;