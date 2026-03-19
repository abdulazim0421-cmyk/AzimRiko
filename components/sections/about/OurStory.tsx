'use client';
import { motion } from 'framer-motion';
import FadeInUp from '../../animations/FadeInUp';
import StepCard, { cardVariants } from '../../ui/StepCard';

const steps = [
    { number: '01', title: 'Design', description: 'Once upon a time, in a world driven by technology, a group of talented designers came together with a shared vision — to create digital experiences that would captivate, inspire, and make a lasting impact.' },
    { number: '02', title: 'Engineering', description: 'Meanwhile, a team of brilliant engineers was busy crafting the backbone of digital innovation. They built robust, scalable systems and pushed the boundaries of what technology could achieve.' },
    { number: '03', title: 'Project Management', description: 'In the midst of the creative and technical minds, a group of project managers emerged as the glue that held everything together. They orchestrated timelines, resources, and communication with precision.' },
    { number: '04', title: 'Collaboration', description: 'At SquareUp, these three departments came together to form a cohesive and collaborative unit. Designers, engineers, and project managers worked hand in hand, combining their unique strengths to deliver exceptional results.' },
    { number: '05', title: 'Client-Centric Approach', description: 'SquareUp\'s success was not solely measured by their technical prowess or design skills but by their unwavering commitment to their clients. Every decision, every pixel, and every line of code was driven by the desire to exceed client expectations.' },
    { number: '06', title: 'Driving Success', description: 'With each project, SquareUp\'s reputation grew. Their portfolio expanded to include a diverse range of industries, from startups to enterprise-level organizations, each one a testament to their dedication and expertise.' },
];

const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.1 } },
};

export default function OurStory() {
    return (
        <section className="bg-[#1A1A1A] py-20 md:py-28 border-b border-zinc-800">
            <div className="container mx-auto px-4 md:px-8 max-w-7xl">

                <FadeInUp delay={0.1}>
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-white mb-4 md:mb-6">
                        Our Story
                    </h2>
                </FadeInUp>

                <FadeInUp delay={0.2}>
                    <p className="text-zinc-400 text-sm md:text-base max-w-3xl mb-8">
                        The story of SquareUp is one of passion, collaboration, and a relentless pursuit of excellence in the digital world.
                    </p>
                </FadeInUp>

                <FadeInUp delay={0.3}>
                    <div className="inline-flex mb-12 px-5 py-3 bg-[#262626] rounded-md border border-zinc-800 text-zinc-400 text-sm">
                        Here's how it all began:
                    </div>
                </FadeInUp>

                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: '-60px' }}
                    variants={containerVariants}
                    className="grid grid-cols-1 md:grid-cols-2 border-l border-t border-zinc-800"
                >
                    {steps.map((step) => (
                        <StepCard key={step.number} step={step} titleColor="#D8FF99" />
                    ))}
                </motion.div>

            </div>
        </section>
    );
}
