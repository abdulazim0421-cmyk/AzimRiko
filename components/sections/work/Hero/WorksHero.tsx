'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

const WorksHero: React.FC = () => {
    return (
        <section className="relative min-h-[50vh] md:min-h-[60vh] flex flex-col items-center justify-center bg-[#1A1A1A] overflow-hidden px-4 py-20 md:py-0 border-b border-[#262626]">

            {/* Background Image Container */}
            <div className="absolute inset-0 z-0 select-none pointer-events-none">
                <Image
                    src="/Hero/service-br5.png" // Убедись, что файл лежит по этому пути в папке public
                    alt="Abstract Wave Background"
                    fill // Заполняет весь родительский контейнер
                    priority // Загружается в первую очередь, так как это Hero
                    quality={100}
                    className="object-cover object-center opacity-70" // opacity-70 делает фон темнее, как на макете
                />

                {/* Мягкий градиент сверху и снизу для плавного перехода, как на фото */}
                <div className="absolute inset-0 bg-gradient-to-b from-[#1A1A1A] via-transparent to-[#1A1A1A]/50" />
            </div>

            {/* Content Container */}
            <div className="relative z-10 text-center max-w-5xl mx-auto flex flex-col items-center">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="flex flex-col items-center"
                >
                    {/* Заголовок */}
                    <h1 className="text-[42px] leading-[1.1] md:leading-normal md:text-6xl lg:text-7xl font-bold text-white mb-6 md:mb-8 tracking-tight px-2">
                        Our Works
                    </h1>

                    {/* Описание */}
                    {/* На мобилках text-sm, на десктопе text-xl и max-w-3xl для удобства чтения */}
                    <p className="text-gray-400 text-sm md:text-xl leading-relaxed max-w-[90%] md:max-w-3xl px-1">
                        Discover a portfolio of visually stunning and strategically crafted digital projects
                        that showcase our creativity and expertise.
                    </p>
                </motion.div>
            </div>

        </section>
    );
};

export default WorksHero;