'use client';

import React from 'react';
import { motion } from 'framer-motion';

const FAQHeader: React.FC = () => {
    return (
        <section className="relative bg-[#1A1A1A] py-20 md:py-28 overflow-hidden border-t border-[#262626]">
            {/* Фоновое изображение из файла Text Container (6).jpg */}
            <div className="absolute inset-0 z-0">
                <img
                    src="/Hero/servicer-br4.png"
                    alt="FAQ Background"
                    className="w-full h-full object-cover opacity-60"
                />
                {/* Мягкое затемнение для читаемости текста */}
                <div className="absolute inset-0 bg-[#1A1A1A]/40" />
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-4 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    {/* Заголовок точно как на фото */}
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 tracking-tight">
                        Frequently Asked Questions
                    </h2>

                    {/* Подзаголовок с почтой */}
                    <p className="text-gray-400 text-base md:text-lg max-w-2xl mx-auto">
                        Still you have any questions? Contact our Team via hello@squareup.com
                    </p>
                </motion.div>
            </div>
        </section>
    );
};

export default FAQHeader;