'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

interface Testimonial {
    title: string;
    content: string;
    author: string;
    role: string;
    avatar: string;
    link: string; // Добавили поле для ссылки
}

const testimonials: Testimonial[] = [
    {
        title: "SquareUp has been Instrumental in Transforming our Online Presence.",
        content: "Their team's expertise in web development and design resulted in a visually stunning and user-friendly e-commerce platform. Our online sales have skyrocketed, and we couldn't be happier.",
        author: "John Smith",
        role: "CEO of Chic Boutique",
        avatar: "/Avatars/john.png",
        link: "https://example.com/chic"
    },
    {
        title: "Working with SquareUp was a breeze.",
        content: "They understood our vision for a mobile app that streamlined our food delivery service. The app they delivered exceeded our expectations, and our customers love the seamless ordering experience.",
        author: "Sarah Johnson",
        role: "Founder of HungryBites",
        avatar: "/Avatars/sarah.png",
        link: "https://example.com/hungry"
    },
    {
        title: "SquareUp developed a comprehensive booking system for our event management.",
        content: "Their attention to detail and commitment to delivering a user-friendly platform was evident throughout the project. The system has streamlined our operations and enhanced our clients' experience.",
        author: "Mark Thompson",
        role: "CEO of EventMasters",
        avatar: "/Avatars/mark.png",
        link: "https://example.com/event"
    },
    {
        title: "ProTech Solutions turned to SquareUp to automate our workflow.",
        content: "They delivered an exceptional custom software solution. The system has significantly increased our productivity and reduced manual errors. SquareUp's expertise and professionalism made them a trusted partner.",
        author: "Laura Adams",
        role: "COO of ProTech Solutions",
        avatar: "/Avatars/laura.png",
        link: "https://example.com/protech"
    },
    {
        title: "SquareUp designed and developed a captivating web portal for showcasing our real estate listings.",
        content: "The platform is visually appealing and easy to navigate, allowing potential buyers to find their dream homes effortlessly. SquareUp's expertise in the real estate industry is unmatched.",
        author: "Michael Anderson",
        role: "Founder of Dream Homes Realty",
        avatar: "/Avatars/michael.png",
        link: "https://example.com/dream"
    },
    {
        title: "FitLife Tracker wanted a mobile app that tracked fitness activities and provided personalized workout plans.",
        content: "SquareUp's team developed an intuitive and feature-rich app that has helped our users stay motivated and achieve their fitness goals. We highly recommend SquareUp for any health and fitness app development needs.",
        author: "Emily Turner",
        role: "CEO of FitLife Tracker",
        avatar: "/Avatars/emily.png",
        link: "https://example.com/fitlife"
    }
];

const neonVariants = {
    rest: { clipPath: 'inset(0 100% 0 0)', opacity: 0 },
    hover: { clipPath: 'inset(0 0% 0 0)', opacity: 1, transition: { duration: 0.4, ease: 'easeOut' as const } },
};

const bgVariants = {
    rest: { opacity: 0 },
    hover: { opacity: 1, transition: { duration: 0.3 } },
};

const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({ opacity: 1, y: 0, transition: { duration: 0.6, delay: i * 0.1 } }),
};

const TestimonialsGrid: React.FC = () => {

    const handleOpenWebsite = (url: string) => {
        window.open(url, '_blank', 'noopener,noreferrer');
    };

    return (
        <section className="bg-[#1A1A1A]">
            <div className="max-w-[1440px] mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-[#262626] border-b border-[#262626]">
                    {testimonials.map((item, index) => (
                        <motion.div
                            key={index}
                            custom={index}
                            variants={cardVariants}
                            initial="hidden"
                            whileInView="visible"
                            whileHover="hover"
                            animate="rest"
                            viewport={{ once: true }}
                            className="relative overflow-hidden bg-[#1A1A1A] p-8 md:p-16 flex flex-col justify-between min-h-[450px] md:min-h-[500px] cursor-default"
                        >
                            {/* Neon top sweep */}
                            <motion.div
                                variants={neonVariants}
                                className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-[#D8FF99] to-transparent pointer-events-none"
                            />

                            {/* Subtle bg glow */}
                            <motion.div
                                variants={bgVariants}
                                className="absolute inset-0 bg-[#D8FF99]/[0.03] pointer-events-none"
                            />

                            <div className="relative mb-8">
                                <h3 className="text-[#D8FF99] text-xl md:text-2xl font-semibold mb-6 leading-tight">
                                    {item.title}
                                </h3>
                                <p className="text-gray-400 text-sm md:text-lg leading-relaxed">
                                    {item.content}
                                </p>
                            </div>

                            <div className="relative flex flex-col sm:flex-row items-start sm:items-center justify-between bg-[#1C1C1C] p-4 md:p-5 rounded-xl border border-[#262626] gap-4">
                                <div className="flex items-center gap-3">
                                    <div className="relative w-10 h-10 md:w-12 md:h-12 rounded-lg overflow-hidden flex-shrink-0 bg-[#262626]">
                                        <Image
                                            src={item.avatar}
                                            alt={item.author}
                                            fill
                                            className="object-cover"
                                            sizes="(max-width: 768px) 40px, 48px"
                                        />
                                    </div>
                                    <div className="flex flex-col">
                                        <h4 className="text-white font-medium text-sm md:text-lg leading-tight">
                                            {item.author}
                                        </h4>
                                        <p className="text-gray-500 text-xs md:text-sm mt-1">
                                            {item.role}
                                        </p>
                                    </div>
                                </div>

                                <button
                                    onClick={() => handleOpenWebsite(item.link)}
                                    className="w-full sm:w-auto bg-[#262626] hover:bg-[#333333] text-white px-5 py-2.5 rounded-lg border border-[#333333] transition-all text-xs md:text-sm font-medium active:scale-95 text-center"
                                >
                                    Open Website
                                </button>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default TestimonialsGrid;