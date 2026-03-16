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
}

const testimonials: Testimonial[] = [
    {
        title: "SquareUp has been Instrumental in Transforming our Online Presence.",
        content: "Their team's expertise in web development and design resulted in a visually stunning and user-friendly e-commerce platform. Our online sales have skyrocketed, and we couldn't be happier.",
        author: "John Smith",
        role: "CEO of Chic Boutique",
        avatar: "/Avatars/john.png"
    },
    {
        title: "Working with SquareUp was a breeze.",
        content: "They understood our vision for a mobile app that streamlined our food delivery service. The app they delivered exceeded our expectations, and our customers love the seamless ordering experience.",
        author: "Sarah Johnson",
        role: "Founder of HungryBites",
        avatar: "/Avatars/sarah.png"
    },
    {
        title: "SquareUp developed a comprehensive booking system for our event management.",
        content: "Their attention to detail and commitment to delivering a user-friendly platform was evident throughout the project. The system has streamlined our operations and enhanced our clients' experience.",
        author: "Mark Thompson",
        role: "CEO of EventMasters",
        avatar: "/Avatars/mark.png"
    },
    {
        title: "ProTech Solutions turned to SquareUp to automate our workflow.",
        content: "They delivered an exceptional custom software solution. The system has significantly increased our productivity and reduced manual errors. SquareUp's expertise and professionalism made them a trusted partner.",
        author: "Laura Adams",
        role: "COO of ProTech Solutions",
        avatar: "/Avatars/laura.png"
    },
    {
        title: "SquareUp designed and developed a captivating web portal for showcasing our real estate listings.",
        content: "The platform is visually appealing and easy to navigate, allowing potential buyers to find their dream homes effortlessly. SquareUp's expertise in the real estate industry is unmatched.",
        author: "Michael Anderson",
        role: "Founder of Dream Homes Realty",
        avatar: "/Avatars/michael.png"
    },
    {
        title: "FitLife Tracker wanted a mobile app that tracked fitness activities and provided personalized workout plans.",
        content: "SquareUp's team developed an intuitive and feature-rich app that has helped our users stay motivated and achieve their fitness goals. We highly recommend SquareUp for any health and fitness app development needs.",
        author: "Emily Turner",
        role: "CEO of FitLife Tracker",
        avatar: "/Avatars/emily.png"
    }
];

const TestimonialsGrid: React.FC = () => {
    return (
        <section className="bg-[#1A1A1A]">
            <div className="max-w-[1440px] mx-auto">
                {/* Сетка: создаем эффект границ через gap-px и цвет фона контейнера */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-[#262626] border-b border-[#262626]">
                    {testimonials.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            className="bg-[#1A1A1A] p-10 md:p-16 flex flex-col justify-between min-h-[500px]"
                        >
                            <div className="mb-8">
                                <h3 className="text-[#C5FF32] text-xl md:text-2xl font-semibold mb-6 leading-tight">
                                    {item.title}
                                </h3>
                                <p className="text-gray-400 text-base md:text-lg leading-relaxed">
                                    {item.content}
                                </p>
                            </div>

                            {/* Блок автора и кнопки */}
                            <div className="flex items-center justify-between bg-[#1C1C1C] p-4 md:p-5 rounded-xl border border-[#262626]">
                                <div className="flex items-center gap-3">
                                    {/* Аватарка через Next.js Image */}
                                    <div className="relative w-12 h-12 rounded-lg overflow-hidden flex-shrink-0 bg-[#262626]">
                                        <Image
                                            src={item.avatar}
                                            alt={item.author}
                                            fill
                                            className="object-cover"
                                            // Если картинки нет, можно использовать плейсхолдер
                                            sizes="48px"
                                        />
                                    </div>
                                    {/* Имя и Роль */}
                                    <div className="flex flex-col">
                                        <h4 className="text-white font-medium text-base md:text-lg leading-tight">
                                            {item.author}
                                        </h4>
                                        <p className="text-gray-500 text-sm mt-1">
                                            {item.role}
                                        </p>
                                    </div>
                                </div>

                                {/* Кнопка действия */}
                                <button className="bg-[#262626] hover:bg-[#333333] text-white px-5 py-2.5 rounded-lg border border-[#333333] transition-all text-sm font-medium active:scale-95">
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