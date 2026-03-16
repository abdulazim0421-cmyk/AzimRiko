'use client'; // Если кнопка будет иметь onClick, этот файл должен быть клиентским

import React from 'react';

type Props = {
    children: React.ReactNode;
    onClick?: () => void; // Добавляем обработчик клика
    className?: string;   // Позволяем добавлять стили извне
    type?: "button" | "submit" | "reset";
};

export default function Button({ children, onClick, className, type = "button" }: Props) {
    return (
        <button
            type={type}
            onClick={onClick}
            className={`bg-[#C5FF32] text-black px-6 py-3 rounded-lg font-medium transition-all hover:bg-[#d4ff63] active:scale-95 shadow-sm ${className}`}
        >
            {children}
        </button>
    );
}