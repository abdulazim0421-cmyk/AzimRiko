'use client';
import { ReactNode } from 'react';
import { motion } from 'framer-motion';
import FadeInUp from './FadeInUp';
import ServiceCard from './ServiceCard';

interface ServiceGroup {
    category: string;
    items: { title: string; icon: ReactNode }[];
}

interface ServiceSectionProps {
    title: string;
    description: string;
    groups: ServiceGroup[];
}

export default function ServiceSection({ title, description, groups }: ServiceSectionProps) {
    return (
        <div className="bg-[#1A1A1A] border-b border-zinc-800 last:border-0">
            <section className="container mx-auto px-4 md:px-8 max-w-7xl pt-16 md:pt-24 pb-10">
                <FadeInUp delay={0.1}>
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-white mb-4 md:mb-6">{title}</h2>
                </FadeInUp>
                <FadeInUp delay={0.2}>
                    <p className="text-zinc-400 text-sm md:text-base max-w-4xl">{description}</p>
                </FadeInUp>
                <FadeInUp delay={0.3}>
                    <div className="inline-flex mt-8 px-5 py-3 bg-[#262626] rounded-md border border-zinc-800 text-zinc-300 text-sm">
                        Our {title.toLowerCase()} services include:
                    </div>
                </FadeInUp>
            </section>

            <section className="container mx-auto px-4 md:px-8 max-w-7xl pb-20">
                {groups.map((group, gIdx) => (
                    <div key={gIdx} className="mb-12 last:mb-0">
                        <h3 className="text-zinc-400 text-lg mb-6 border-b border-zinc-800 pb-4">{group.category}</h3>
                        <motion.div
                            initial="hidden" whileInView="visible" viewport={{ once: true }}
                            transition={{ staggerChildren: 0.08 }}
                            className="grid grid-cols-2 md:grid-cols-4 border-l border-t border-zinc-800"
                        >
                            {group.items.map((item, iIdx) => (
                                <ServiceCard key={iIdx} title={item.title} icon={item.icon} />
                            ))}
                        </motion.div>
                    </div>
                ))}
            </section>
        </div>
    );
}