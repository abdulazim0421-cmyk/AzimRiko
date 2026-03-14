'use client';
import { motion, useMotionValue, useMotionTemplate } from 'framer-motion';
import { ReactNode } from 'react';
import { smoothAnimation } from './FadeInUp';

export default function ServiceCard({ title, icon }: { title: string; icon: ReactNode }) {
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
            variants={{
                hidden: smoothAnimation.initial,
                visible: {
                    ...smoothAnimation.whileInView,
                    transition: smoothAnimation.transition
                }
            }}
            whileHover={{ scale: 1.02, y: -5, borderRadius: "12px" }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="group relative overflow-hidden flex flex-col justify-between w-full h-full p-8 border-r border-b border-zinc-800 bg-[#1A1A1A] hover:shadow-2xl hover:shadow-black/50"
        >
            {/* Слой с фонариком */}
            <motion.div
                className="pointer-events-none absolute -inset-px opacity-0 transition duration-300 group-hover:opacity-100"
                style={{
                    background: useMotionTemplate`radial-gradient(600px circle at ${mouseX}px ${mouseY}px, rgba(255,255,255,0.06), transparent 40%)`,
                }}
            />

            {/* Контент карточки */}
            <div className="relative z-10 flex flex-col justify-between h-full gap-8 md:gap-12">
                <div className="w-12 h-12 md:w-14 md:h-14 rounded-lg bg-[#262626] border border-zinc-800 flex items-center justify-center text-[#C6FF00]">
                    {/* ИКОНКА ИЛИ КАРТИНКА ТУТ */}
                    {icon}
                </div>
                <h3 className="text-white text-sm md:text-base font-medium leading-tight" style={{ fontFamily: 'Barlow, sans-serif' }}>
                    {title}
                </h3>
            </div>
        </motion.div>
    );
}
