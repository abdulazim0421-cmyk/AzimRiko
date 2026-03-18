'use client';

import React, { useState } from 'react';
import * as Slider from '@radix-ui/react-slider';
import { motion, AnimatePresence } from 'framer-motion';
import { Check } from 'lucide-react';

const ContactForm = () => {
    const [budget, setBudget] = useState([1000, 5000]);
    const [selectedServices, setSelectedServices] = useState<string[]>(['Web Design']);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const services = ['Web Design', 'Collaboration', 'Mobile App Design', 'Others'];

    return (
        <section className="bg-[#1A1A1A] py-20 px-4">
            <div className="max-w-[1000px] mx-auto bg-[#1C1C1C] border border-[#262626] rounded-2xl p-8 md:p-16">
                <form className="space-y-12" onSubmit={(e) => { e.preventDefault(); setIsModalOpen(true); }}>

                    {/* Ряд: Имя и Email */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="bg-[#212121] border border-[#262626] rounded-xl p-8">
                            <label className="text-white font-medium block mb-6 text-lg">Full Name</label>
                            <input
                                type="text"
                                placeholder="Type here"
                                className="w-full bg-transparent text-gray-400 outline-none placeholder:text-[#4C4C4C] border-b border-[#262626] pb-2 focus:border-[#C5FF32] transition-colors"
                            />
                        </div>
                        <div className="bg-[#212121] border border-[#262626] rounded-xl p-8">
                            <label className="text-white font-medium block mb-6 text-lg">Email</label>
                            <input
                                type="email"
                                placeholder="Type here"
                                className="w-full bg-transparent text-gray-400 outline-none placeholder:text-[#4C4C4C] border-b border-[#262626] pb-2 focus:border-[#C5FF32] transition-colors"
                            />
                        </div>
                    </div>

                    {/* Причина обращения */}
                    <div className="bg-[#212121] border border-[#262626] rounded-xl p-8 md:p-10">
                        <label className="text-white font-medium block mb-10 text-lg">Why are you contacting us?</label>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-y-8 gap-x-12">
                            {services.map((item) => (
                                <div
                                    key={item}
                                    onClick={() => setSelectedServices(prev => prev.includes(item) ? prev.filter(i => i !== item) : [...prev, item])}
                                    className="flex items-center gap-4 cursor-pointer group"
                                >
                                    <div className={`w-6 h-6 rounded-md border flex items-center justify-center transition-all ${
                                        selectedServices.includes(item) ? 'bg-[#C5FF32] border-[#C5FF32]' : 'bg-[#212121] border-[#333333]'
                                    }`}>
                                        {selectedServices.includes(item) && <Check size={14} className="text-black stroke-[3px]" />}
                                    </div>
                                    <span className="text-gray-300 group-hover:text-white transition-colors">{item}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Слайдер Бюджета — Исправленный по фото */}
                    <div className="bg-[#212121] border border-[#262626] rounded-xl p-8 md:p-10">
                        <label className="text-white font-medium block mb-2 text-lg">Your Budget</label>
                        <p className="text-gray-500 text-sm mb-10 ">Slide to indicate your budget range</p>

                        <div className="relative px-2">
                            <Slider.Root
                                className="relative flex items-center select-none touch-none w-full h-5"
                                value={budget}
                                onValueChange={setBudget}
                                max={10000}
                                min={500}
                                step={100}
                                minStepsBetweenThumbs={1}
                            >
                                <Slider.Track className="bg-[#333333] relative grow rounded-full h-[6px]">
                                    <Slider.Range className="absolute bg-[#C5FF32] rounded-full h-full" />
                                </Slider.Track>

                                {/* Ползунок 1 */}
                                <Slider.Thumb className="relative block w-7 h-7 bg-[#C5FF32] border-[6px] border-[#333333] shadow-lg rounded-full focus:outline-none transition-transform hover:scale-110 cursor-pointer">
                                    <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 text-white font-medium whitespace-nowrap">
                                        ${budget[0]}
                                    </div>
                                </Slider.Thumb>

                                {/* Ползунок 2 */}
                                <Slider.Thumb className="relative block w-7 h-7 bg-[#C5FF32] border-[6px] border-[#333333] shadow-lg rounded-full focus:outline-none transition-transform hover:scale-110 cursor-pointer">
                                    <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 text-white font-medium whitespace-nowrap">
                                        ${budget[1]}
                                    </div>
                                </Slider.Thumb>
                            </Slider.Root>
                        </div>
                    </div>

                    {/* Сообщение */}
                    <div className="bg-[#212121] border border-[#262626] rounded-xl p-8">
                        <label className="text-white font-medium block mb-6 text-lg">Your Message</label>
                        <textarea
                            placeholder="Type here"
                            rows={4}
                            className="w-full bg-transparent text-gray-400 outline-none placeholder:text-[#4C4C4C] border-b border-[#262626] pb-2 focus:border-[#C5FF32] transition-colors resize-none"
                        />
                    </div>

                    {/* Кнопка */}
                    <div className="flex justify-center pt-4">
                        <button
                            type="submit"
                            className="bg-[#C5FF32] text-black px-14 py-4 rounded-xl font-bold text-lg hover:bg-[#d4ff63] transition-all active:scale-95 shadow-[0_0_20px_rgba(197,255,50,0.2)]"
                        >
                            Submit
                        </button>
                    </div>
                </form>
            </div>

            {/* MODAL SUCCESS (без изменений) */}
            <AnimatePresence>
                {isModalOpen && (
                    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
                        <motion.div initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}} onClick={() => setIsModalOpen(false)} className="absolute inset-0 bg-black/80 backdrop-blur-md" />
                        <motion.div initial={{scale:0.9, opacity:0}} animate={{scale:1, opacity:1}} exit={{scale:0.9, opacity:0}} className="relative bg-[#1C1C1C] border border-[#262626] p-10 rounded-3xl text-center max-w-sm">
                            <div className="w-20 h-20 bg-[#C5FF32]/10 rounded-full flex items-center justify-center mx-auto mb-6">
                                <Check className="text-[#C5FF32]" size={40} />
                            </div>
                            <h3 className="text-2xl font-bold text-white mb-2">Success!</h3>
                            <p className="text-gray-400 mb-8">Your message has been received. Our team will contact you soon.</p>
                            <button onClick={() => setIsModalOpen(false)} className="w-full bg-[#262626] text-white py-3 rounded-xl hover:bg-[#333]">Close</button>
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>
        </section>
    );
};

export default ContactForm;