'use client';
import { motion } from 'framer-motion';
import { ReactNode } from 'react';

// Общий конфиг для всей страницы
export const smoothAnimation = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    transition: {
        duration: 0.8, // Чуть медленнее для солидности
        ease: [0.21, 0.45, 0.32, 0.9] as const, // Плавное замедление в конце
    }
};

export default function FadeInUp({ children, delay = 0 }: { children: ReactNode; delay?: number }) {
    return (
        <motion.div
            {...smoothAnimation}
            transition={{ ...smoothAnimation.transition, delay }}
            viewport={{ once: true, margin: "-50px" }}
        >
            {children}
        </motion.div>
    );
}