'use client'; // Обязательно: компонент использует состояние и анимации

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface FAQItem {
    id: string;
    question: string;
    answer: string;
}

const faqs: FAQItem[] = [
    { id: "01", question: "What services does SquareUp provide?", answer: "SquareUp offers a range of services including design, engineering, and project management. We specialize in user experience design, web development, mobile app development, custom software development, branding and identity, and more." },
    { id: "02", question: "How can SquareUp help my business?", answer: "We focus on building high-performance digital products that enhance user experience and drive conversion, ensuring your brand stands out in a competitive market." },
    { id: "03", question: "What industries does SquareUp work with?", answer: "We work across various sectors, including E-commerce, Fintech, Healthcare, Real Estate, and SaaS, adapting to specific functional needs." },
    { id: "04", question: "How long does it take to complete a project with SquareUp?", answer: "Project timelines vary: a standard website might take 4-8 weeks, while complex platforms can take 3-6 months depending on requirements." },
    { id: "05", question: "Do you offer ongoing support and maintenance after the project is completed?", answer: "Yes, we provide long-term partnership options including regular updates, security monitoring, and performance optimization." },
    { id: "06", question: "Can you work with existing design or development frameworks?", answer: "Absolutely. We can act as an extension of your in-house team, providing specialized expertise in design or engineering to accelerate your goals." },
    { id: "07", question: "How involved will I be in the project development process?", answer: "Our process is highly collaborative. We involve you in discovery, wireframing, and interactive prototyping to ensure alignment with your vision." },
    { id: "08", question: "Can you help with website or app maintenance and updates?", answer: "Yes, we offer flexible maintenance packages to keep your digital products secure, up-to-date, and performing at their best." }
];

const FAQSection: React.FC = () => {
    // Состояние открытого вопроса
    const [openId, setOpenId] = useState<string | null>(null);

    return (
        <section className="bg-[#1A1A1A] border-t border-[#262626]">
            <div className="max-w-[1440px] mx-auto">
                {/* Сетка с разделителями через gap и background */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-[#262626]">
                    {faqs.map((faq) => {
                        const isOpen = openId === faq.id;

                        return (
                            <div
                                key={faq.id}
                                className="bg-[#1A1A1A] p-8 md:p-12 lg:p-16 flex items-start gap-6 transition-colors duration-500"
                            >
                                {/* НОМЕР ВОПРОСА */}
                                <div
                                    className="flex-shrink-0 w-14 h-14 md:w-16 md:h-16 rounded-xl border border-[#262626] flex items-center justify-center text-xl md:text-2xl font-bold transition-all duration-300 select-none shadow-inner"
                                    style={{
                                        background: 'linear-gradient(180deg, rgba(38, 38, 38, 0.5) 0%, rgba(30, 30, 30, 0.5) 100%)'
                                    }}
                                >
                                    <span className={isOpen ? 'text-[#C5FF32]' : 'text-white'}>
                                        {faq.id}
                                    </span>
                                </div>

                                <div className="flex-grow pt-3 md:pt-4">
                                    <button
                                        className="w-full flex items-center justify-between gap-4 cursor-pointer group text-left outline-none"
                                        onClick={() => setOpenId(isOpen ? null : faq.id)}
                                    >
                                        {/* ЗАГОЛОВОК */}
                                        <h3 className={`text-lg md:text-xl lg:text-2xl font-medium leading-tight transition-colors duration-300 ${isOpen ? 'text-[#C5FF32]' : 'text-white group-hover:text-[#C5FF32]'}`}>
                                            {faq.question}
                                        </h3>

                                        {/* КРЕСТИК / ИКОНКА */}
                                        <div className="relative flex-shrink-0 w-8 h-8 flex items-center justify-center transition-transform duration-300">
                                            {/* Горизонтальная линия */}
                                            <span
                                                className={`absolute h-[2px] w-5 transition-all duration-300 ${
                                                    isOpen ? 'bg-[#C5FF32] rotate-45' : 'bg-white'
                                                }`}
                                            />
                                            {/* Вертикальная линия (вращается, чтобы стать второй частью крестика) */}
                                            <span
                                                className={`absolute h-[2px] w-5 transition-all duration-300 ${
                                                    isOpen ? 'bg-[#C5FF32] -rotate-45' : 'bg-white rotate-90'
                                                }`}
                                            />
                                        </div>
                                    </button>

                                    {/* ВЫПАДАЮЩИЙ ТЕКСТ */}
                                    <AnimatePresence initial={false}>
                                        {isOpen && (
                                            <motion.div
                                                initial={{ height: 0, opacity: 0 }}
                                                animate={{ height: "auto", opacity: 1 }}
                                                exit={{ height: 0, opacity: 0 }}
                                                transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
                                                className="overflow-hidden"
                                            >
                                                <div className="pt-6 mt-6 border-t border-[#262626]">
                                                    <p className="text-gray-400 text-sm md:text-base lg:text-lg leading-relaxed">
                                                        {faq.answer}
                                                    </p>
                                                </div>
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default FAQSection;