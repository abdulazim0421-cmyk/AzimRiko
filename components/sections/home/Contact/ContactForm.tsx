'use client';

import React, { useState } from 'react';
import * as Slider from '@radix-ui/react-slider';
import { motion, AnimatePresence } from 'framer-motion';
import { Check, X } from 'lucide-react';
import { saveToNeon } from '@/app/actions';

const ContactForm = () => {
    // Состояния полей формы
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [budget, setBudget] = useState([1000, 5000]);
    const [selectedServices, setSelectedServices] = useState<string[]>(['Web Design']);

    // Состояния интерфейса
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [loading, setLoading] = useState(false);

    const services = [
        { id: 'web', label: 'Web Design' },
        { id: 'collaboration', label: 'Collaboration' },
        { id: 'mobile', label: 'Mobile App Design' },
        { id: 'others', label: 'Others' }
    ];

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);

        const fullDescription = `
            Services: ${selectedServices.join(', ')}
            Budget: $${budget[0]} - $${budget[1]}
            Message: ${message}
        `;

        const result = await saveToNeon({
            name,
            email,
            message: fullDescription
        });

        if (result.success) {
            setIsModalOpen(true);
            // Очистка полей
            setName('');
            setEmail('');
            setMessage('');
            setSelectedServices(['Web Design']);
        } else {
            alert('Error connecting to database. Check your .env or npx prisma db push.');
        }
        setLoading(false);
    };

    return (
        <section className="bg-[#1A1A1A] relative overflow-hidden">
            <div className="w-full h-[1px] bg-[#262626] relative z-20" />

            <div className="max-w-[1280px] mx-auto flex">
                <div className="w-[1px] bg-[#262626] shrink-0 hidden md:block" />

                <div className="flex-1 py-16 px-4 md:px-12">
                    <form className="max-w-[1100px] mx-auto space-y-6 md:space-y-8" onSubmit={handleSubmit}>

                        {/* Имя и Email */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="bg-[#1E1E1E] border border-[#262626] rounded-xl p-6 relative after:absolute after:bottom-8 after:left-6 after:right-6 after:h-[1px] after:bg-[#262626]">
                                <label className="text-white font-medium block mb-4 text-sm md:text-base">Full Name</label>
                                <input
                                    type="text" required placeholder="Type here" value={name} onChange={(e) => setName(e.target.value)}
                                    className="w-full bg-transparent text-gray-400 outline-none pb-2 placeholder:text-[#4C4C4C]"
                                />
                            </div>
                            <div className="bg-[#1E1E1E] border border-[#262626] rounded-xl p-6 relative after:absolute after:bottom-8 after:left-6 after:right-6 after:h-[1px] after:bg-[#262626]">
                                <label className="text-white font-medium block mb-4 text-sm md:text-base">Email</label>
                                <input
                                    type="email" required placeholder="Type here" value={email} onChange={(e) => setEmail(e.target.value)}
                                    className="w-full bg-transparent text-gray-400 outline-none pb-2 placeholder:text-[#4C4C4C]"
                                />
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

                        {/* Бюджет */}
                        <div className="bg-[#1E1E1E] border border-[#262626] rounded-xl p-6 md:p-10">
                            <label className="text-white font-medium block mb-1">Your Budget</label>
                            <p className="text-gray-500 text-xs mb-12">Slide to indicate your budget range</p>
                            <div className="relative mb-10">
                                <Slider.Root className="relative flex items-center w-full h-5" value={budget} onValueChange={setBudget} max={10000} min={500} step={100}>
                                    <Slider.Track className="bg-[#262626] relative grow rounded-full h-[4px]">
                                        <Slider.Range className="absolute bg-[#C5FF32] rounded-full h-full" />
                                    </Slider.Track>
                                    <Slider.Thumb className="block w-5 h-5 bg-[#C5FF32] border-[3px] border-[#333333] rounded-full outline-none cursor-pointer" />
                                    <Slider.Thumb className="block w-5 h-5 bg-[#C5FF32] border-[3px] border-[#333333] rounded-full outline-none cursor-pointer" />
                                </Slider.Root>
                            </div>
                            <div className="flex justify-between text-gray-300 font-medium">
                                <span>${budget[0]}</span><span>${budget[1]}</span>
                            </div>
                        </div>

                        {/* Сообщение */}
                        <div className="bg-[#1E1E1E] border border-[#262626] rounded-xl p-6 md:p-8 relative after:absolute after:bottom-10 after:left-8 after:right-8 after:h-[1px] after:bg-[#262626]">
                            <label className="text-white font-medium block mb-4">Your Message</label>
                            <textarea
                                required value={message} onChange={(e) => setMessage(e.target.value)}
                                placeholder="Type here" rows={3} className="w-full bg-transparent text-gray-400 outline-none resize-none placeholder:text-[#4C4C4C]"
                            />
                        </div>

                        <div className="flex justify-center pt-4">
                            <button
                                type="submit" disabled={loading}
                                className="bg-[#C5FF32] text-black px-14 py-4 rounded-xl font-bold text-lg hover:bg-[#d4ff63] transition-all active:scale-95 disabled:opacity-50"
                            >
                                {loading ? 'Sending...' : 'Submit'}
                            </button>
                        </div>
                    </form>
                </div>
                <div className="w-[1px] bg-[#262626] shrink-0 hidden md:block" />
            </div>

            {/* Модальное окно (Success) */}
            <AnimatePresence>
                {isModalOpen && (
                    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.95 }}
                            className="relative bg-[#1E1E1E] border border-[#333] rounded-2xl w-full max-w-[500px] overflow-hidden shadow-2xl"
                        >
                            <div className="flex justify-between items-center p-6 pb-2">
                                <h3 className="text-white font-bold tracking-tight">SUCCESS!</h3>
                                <button onClick={() => setIsModalOpen(false)} className="text-gray-500 hover:text-white"><X size={20} /></button>
                            </div>
                            <div className="p-6 pt-0 text-center">
                                <p className="text-gray-400 text-left mb-8">Your project request has been successfully submitted! Our team will get back to you soon.</p>
                                <div className="flex justify-center my-10">
                                    <div className="text-[#C5FF32]">
                                        <Check size={80} strokeWidth={3} />
                                    </div>
                                </div>
                                <button onClick={() => setIsModalOpen(false)} className="w-full bg-[#262626] border border-[#333] text-white py-3 rounded-lg font-bold hover:bg-[#333] transition-all tracking-widest text-xs">
                                    CLOSE
                                </button>
                            </div>
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>
        </section>
    );
};

export default ContactForm;