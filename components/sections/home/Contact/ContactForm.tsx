'use client';

import React, { useState } from 'react';
import * as Slider from '@radix-ui/react-slider';
import { motion, AnimatePresence } from 'framer-motion';
import { Check } from 'lucide-react';

const ContactForm = () => {
    const [budget, setBudget] = useState([1000, 5000]);
    const [selectedServices, setSelectedServices] = useState<string[]>(['Web Design']);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const services = [
        { id: 'web', label: 'Web Design' },
        { id: 'collaboration', label: 'Collaboration' },
        { id: 'mobile', label: 'Mobile App Design' },
        { id: 'others', label: 'Others' }
    ];

    return (
        <section className="bg-[#1A1A1A] relative overflow-hidden">
            {/* Верхняя горизонтальная линия, стыкующаяся с боковыми */}
            <div className="w-full h-[1px] bg-[#262626] relative z-20" />

            <div className="max-w-[1280px] mx-auto flex">
                {/* Левая вертикальная линия */}
                <div className="w-[1px] bg-[#262626] shrink-0 hidden md:block" />

                <div className="flex-1 py-16 px-4 md:px-12">
                    <form
                        className="max-w-[1100px] mx-auto space-y-6 md:space-y-8"
                        onSubmit={(e) => { e.preventDefault(); setIsModalOpen(true); }}
                    >
                        {/* Имя и Email с разделительными линиями внутри */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="bg-[#1E1E1E] border border-[#262626] rounded-xl p-6 relative after:absolute after:bottom-8 after:left-6 after:right-6 after:h-[1px] after:bg-[#262626]">
                                <label className="text-white font-medium block mb-4 text-sm md:text-base">Full Name</label>
                                <input type="text" placeholder="Type here" className="w-full bg-transparent text-gray-400 outline-none pb-2 placeholder:text-[#4C4C4C]" />
                            </div>
                            <div className="bg-[#1E1E1E] border border-[#262626] rounded-xl p-6 relative after:absolute after:bottom-8 after:left-6 after:right-6 after:h-[1px] after:bg-[#262626]">
                                <label className="text-white font-medium block mb-4 text-sm md:text-base">Email</label>
                                <input type="email" placeholder="Type here" className="w-full bg-transparent text-gray-400 outline-none pb-2 placeholder:text-[#4C4C4C]" />
                            </div>
                        </div>

                        {/* Причина обращения */}
                        <div className="bg-[#1E1E1E] border border-[#262626] rounded-xl p-6 md:p-10">
                            <label className="text-white font-medium block mb-8 text-lg">Why are you contacting us?</label>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-y-6">
                                {services.map((s) => (
                                    <div key={s.id} onClick={() => setSelectedServices(prev => prev.includes(s.label) ? prev.filter(i => i !== s.label) : [...prev, s.label])} className="flex items-center gap-3 cursor-pointer group">
                                        <div className={`w-6 h-6 rounded border flex items-center justify-center transition-all ${selectedServices.includes(s.label) ? 'bg-[#C5FF32] border-[#C5FF32]' : 'bg-[#262626] border-[#333333]'}`}>
                                            {selectedServices.includes(s.label) && <Check size={14} className="text-black stroke-[4px]" />}
                                        </div>
                                        <span className="text-gray-400 group-hover:text-white transition-colors text-sm md:text-base">{s.label}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Бюджет: Без линии на цифрах и с увеличенным шрифтом */}
                        <div className="bg-[#1E1E1E] border border-[#262626] rounded-xl p-6 md:p-10">
                            <label className="text-white font-medium block mb-1">Your Budget</label>
                            <p className="text-gray-500 text-xs mb-12">Slide to indicate your budget range</p>

                            <div className="relative mb-10">
                                <Slider.Root className="relative flex items-center w-full h-5" value={budget} onValueChange={setBudget} max={10000} min={500} step={100}>
                                    <Slider.Track className="bg-[#262626] relative grow rounded-full h-[4px]">
                                        <Slider.Range className="absolute bg-[#C5FF32] rounded-full h-full" />
                                    </Slider.Track>
                                    <Slider.Thumb className="block w-5 h-5 bg-[#C5FF32] border-[3px] border-[#333333] rounded-full outline-none cursor-pointer transition-transform hover:scale-110" />
                                    <Slider.Thumb className="block w-5 h-5 bg-[#C5FF32] border-[3px] border-[#333333] rounded-full outline-none cursor-pointer transition-transform hover:scale-110" />
                                </Slider.Root>
                            </div>

                            <div className="flex justify-between text-gray-300 text-base md:text-lg font-medium tracking-tight">
                                <span>${budget[0]}</span>
                                <span>${budget[1]}</span>
                            </div>
                        </div>

                        {/* Сообщение */}
                        <div className="bg-[#1E1E1E] border border-[#262626] rounded-xl p-6 md:p-8 relative after:absolute after:bottom-10 after:left-8 after:right-8 after:h-[1px] after:bg-[#262626]">
                            <label className="text-white font-medium block mb-4">Your Message</label>
                            <textarea placeholder="Type here" rows={3} className="w-full bg-transparent text-gray-400 outline-none resize-none placeholder:text-[#4C4C4C]" />
                        </div>

                        <div className="flex justify-center pt-4">
                            <button type="submit" className="bg-[#C5FF32] text-black px-14 py-4 rounded-xl font-bold text-lg hover:bg-[#d4ff63] transition-all active:scale-95">
                                Submit
                            </button>
                        </div>
                    </form>
                </div>

                {/* Правая вертикальная линия */}
                <div className="w-[1px] bg-[#262626] shrink-0 hidden md:block" />
            </div>

            {/* Нижняя горизонтальная линия */}
            <div className="w-full h-[1px] bg-[#262626]" />
        </section>
    );
};

export default ContactForm;