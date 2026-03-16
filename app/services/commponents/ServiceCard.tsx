'use client';
import { useState } from 'react';
import { motion, useMotionValue, useMotionTemplate, AnimatePresence } from 'framer-motion';
import { ReactNode } from 'react';
import { ChevronDown } from 'lucide-react';

/** Компонент карточки услуги. Описание раскрывается поверх сетки без смещения соседних карточек. */
export default function ServiceCard({ title, icon, description }: { title: string; icon: ReactNode; description?: string }) {
    const [isOpen, setIsOpen] = useState(false);
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    function onMouseMove({ currentTarget, clientX, clientY }: React.MouseEvent) {
        const { left, top } = currentTarget.getBoundingClientRect();
        mouseX.set(clientX - left);
        mouseY.set(clientY - top);
    }

    return (
        <motion.div
            onMouseMove={onMouseMove}
            onClick={() => description && setIsOpen(!isOpen)}
            variants={{
                hidden: { opacity: 0, y: 20 },
                visible: {
                    opacity: 1,
                    y: 0,
                    transition: { duration: 0.5, ease: [0.21, 0.45, 0.32, 0.9] }
                }
            }}
            animate={isOpen ? { scale: 1.02 } : { scale: 1 }}
            whileHover={!isOpen ? { scale: 1.02, y: -5, borderRadius: "12px" } : {}}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className={`group relative flex flex-col w-full p-6 md:p-8 border-r border-b border-zinc-800 bg-[#1A1A1A] hover:shadow-2xl hover:shadow-black/50 overflow-visible ${isOpen ? 'z-[100]' : 'z-10'} ${description ? 'cursor-pointer' : ''}`}
        >
            {/* Spotlight layer */}
            <motion.div
                className="pointer-events-none absolute -inset-px opacity-0 transition duration-300 group-hover:opacity-100"
                style={{
                    background: useMotionTemplate`radial-gradient(600px circle at ${mouseX}px ${mouseY}px, rgba(255,255,255,0.06), transparent 40%)`,
                }}
            />

            {/* Card content — fixed height, never changes */}
            <div className="relative z-10 flex flex-col gap-6 md:gap-10">
                {/* Icon + chevron */}
                <div className="flex items-start justify-between">
                    <div className="w-12 h-12 md:w-14 md:h-14 bg-[#242424] rounded-lg flex items-center justify-center text-[#C6FF00]">
                        {icon}
                    </div>
                    {description && (
                        <motion.div
                            animate={{ rotate: isOpen ? 180 : 0 }}
                            transition={{ duration: 0.3, ease: "easeOut" }}
                            className={`mt-1 transition-opacity duration-200 ${isOpen ? 'opacity-100 text-zinc-300' : 'opacity-0 group-hover:opacity-100 text-zinc-500'}`}
                        >
                            <ChevronDown size={18} />
                        </motion.div>
                    )}
                </div>

                <h3 className="text-base font-semibold text-white leading-tight" style={{ fontFamily: 'Barlow, sans-serif' }}>
                    {title}
                </h3>
            </div>

            {/* Expanding overlay — absolute, does not affect grid layout */}
            <AnimatePresence>
                {isOpen && description && (
                    <motion.div
                        key="overlay"
                        initial={{ opacity: 0, y: -8 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -8 }}
                        transition={{ duration: 0.25, ease: "easeOut" }}
                        className="absolute top-full left-0 w-full z-50 bg-[#1A1A1A] rounded-b-2xl shadow-2xl shadow-black/60 px-6 md:px-8 py-5"
                    >
                        <p className="text-sm text-zinc-400 leading-relaxed">
                            {description}
                        </p>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.div>
    );
}
