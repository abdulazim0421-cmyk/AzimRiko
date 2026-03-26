'use client';

import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

const ContactInfoCards = () => {
    const contactData = [
        {
            icon: <Mail size={20} className="text-[#C5FF32]" />,
            text: 'hello@squareup.com',
            href: 'mailto:hello@squareup.com'
        },
        {
            icon: <Phone size={20} className="text-[#C5FF32]" />,
            text: '+91 91813 23 2309',
            href: 'tel:+9191813232309'
        },
        {
            icon: <MapPin size={20} className="text-[#C5FF32]" />,
            text: 'Get Location',
            href: '#' // Здесь можно вставить ссылку на Google Maps
        }
    ];

    return (
        <section className="bg-[#1A1A1A] py-8">
            <div className="max-w-7xl mx-auto px-6">
                <div className="flex flex-wrap justify-center gap-4">
                    {contactData.map((item, index) => (
                        <a
                            key={index}
                            href={item.href}
                            className="flex items-center gap-3 bg-[#262626] border border-[#333333] px-6 py-4 rounded-xl transition-all hover:bg-[#2d2d2d] hover:border-[#C5FF32]/30 group"
                        >
                            {/* Icon Wrapper */}
                            <div className="flex items-center justify-center">
                                {item.icon}
                            </div>

                            {/* Text */}
                            <span className="text-white text-sm md:text-base font-medium tracking-wide">
                                {item.text}
                            </span>
                        </a>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ContactInfoCards;