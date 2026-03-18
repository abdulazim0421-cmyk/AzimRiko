import React from 'react';
import { Palette, Cpu, Briefcase } from 'lucide-react';
import Link from 'next/link';

// Описываем типы для сервисов
interface Service {
    title: string;
    icon: React.ReactNode;
    description: string;
    href: string; // Добавили путь для ссылки
}

const services: Service[] = [
    {
        title: 'Design',
        icon: <Palette className="w-6 h-6 text-[#C5FF32]" />,
        href: '/services/design',
        description: "At Squareup, our design team is passionate about creating stunning, user-centric designs that captivate your audience and elevate your brand. We believe that great design is not just about aesthetics; it's about creating seamless and intuitive user experiences."
    },
    {
        title: 'Engineering',
        icon: <Cpu className="w-6 h-6 text-[#C5FF32]" />,
        href: '/services/engineering',
        description: "Our engineering team combines technical expertise with a passion for innovation to build robust and scalable digital solutions. We leverage the latest technologies and best practices to deliver high-performance applications tailored to your specific needs."
    },
    {
        title: 'Project Management',
        icon: <Briefcase className="w-6 h-6 text-[#C5FF32]" />,
        href: '/services/management',
        description: "Our experienced project management team ensures that your projects are delivered on time, within budget, and according to your specifications. We follow industry-standard methodologies and employ effective communication and collaboration tools to keep you informed throughout the development process."
    }
];

const ServicesGrid: React.FC = () => {
    return (
        <section className="bg-[#1A1A1A] pb-0 px-4 md:px-0 border-t border-[#262626]">
            <div className="max-w-[1440px] mx-auto">
                {/* Сетка с тонкими разделителями через background цвета #262626 */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-[#262626]">
                    {services.map((service, index) => (
                        <div
                            key={index}
                            className="bg-[#1A1A1A] p-10 md:p-14 flex flex-col items-start min-h-[500px] hover:bg-[#1E1E1E] transition-colors duration-300"
                        >
                            {/* Контейнер иконки */}
                            <div className="w-14 h-14 bg-[#262626] rounded-xl flex items-center justify-center mb-10 border border-[#333333] shadow-inner">
                                {service.icon}
                            </div>

                            {/* Заголовок */}
                            <h3 className="text-3xl font-semibold text-white mb-6">
                                {service.title}
                            </h3>

                            {/* Описание */}
                            <p className="text-gray-400 text-base leading-relaxed mb-12 flex-grow">
                                {service.description}
                            </p>

                            {/* Кнопка через Link для SEO и скорости */}
                            <Link
                                href={service.href}
                                className="mt-auto w-full bg-[#262626] hover:bg-[#333333] text-white py-4 rounded-xl border border-[#333333] transition-all font-medium text-center active:scale-[0.98]"
                            >
                                Learn More
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ServicesGrid;