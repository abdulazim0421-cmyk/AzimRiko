'use client'; // Обязательно, так как используем Framer Motion и whileInView

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

const CTASection: React.FC = () => {
    return (
        <section className="relative bg-[#1A1A1A] py-24 md:py-32 overflow-hidden border-t border-[#262626]">

            {/* Background Image Container */}
            <div className="absolute inset-0 z-0">
                <Image
                    src="/Hero/service-br5.png" // Файл должен лежать в public/Hero/service-br5.png
                    alt="Background Wave"
                    fill // Заменяет w-full h-full для фоновых изображений
                    className="object-cover object-center opacity-80 scale-105"
                    quality={90}
                />
                {/* Мягкий градиент сверху для бесшовного стыка */}
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
                    {/* Иконка проекта */}
                    <div className="w-20 h-20 md:w-24 md:h-24 bg-[#C5FF32] rounded-3xl flex items-center justify-center shadow-lg mb-10 p-5 md:p-6 hover:scale-105 transition-transform duration-300">
                        <Image
                            src="/Logo/logo.svg"
                            alt="SquareUp Cube Icon"
                            width={80} // Указываем размеры для SVG
                            height={80}
                            className="text-[#1A1A1A]"
                        />
                    </div>

                    {/* Заголовок */}
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 tracking-tight max-w-4xl">
                        Thank you for your Interest in SquareUp.
                    </h2>

                    {/* Подзаголовок */}
                    <p className="max-w-3xl mx-auto text-gray-300 text-base md:text-lg leading-relaxed mb-12 px-2">
                        We would love to hear from you and discuss how we can help bring your digital ideas to life.
                        Here are the different ways you can get in touch with us.
                    </p>

                    {/* Кнопка действия */}
                    <Link href="/contact">
                        <motion.div
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="bg-[#C5FF32] text-[#1A1A1A] px-10 py-4 rounded-xl font-bold text-lg shadow-md hover:bg-[#d4ff63] transition-colors cursor-pointer"
                        >
                            Start Project
                        </motion.div>
                    </Link>
                </motion.div>
            </div>

        </section>
    );
};

export default CTASection;