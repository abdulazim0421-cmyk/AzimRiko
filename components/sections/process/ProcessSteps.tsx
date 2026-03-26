'use client';
import { motion } from 'framer-motion';
import FadeInUp from '../../animations/FadeInUp';
import StepCard, { cardVariants } from '../../ui/StepCard';

const steps = [
    { number: '01', title: 'Discovery', description: 'We begin by thoroughly understanding your business goals, target audience, and project requirements. We conduct in-depth research and analysis to lay a solid foundation for the project.' },
    { number: '02', title: 'Planning and Strategy', description: 'Based on the gathered information, we create a comprehensive project plan and strategy. This includes defining project scope, timelines, deliverables, and resource allocation.' },
    { number: '03', title: 'Design', description: 'Our expert designers translate the project requirements into captivating visual designs. We create wireframes, prototypes, and high-fidelity mockups, ensuring an intuitive and engaging user experience.' },
    { number: '04', title: 'Development', description: 'Once the designs are approved, our skilled development team brings them to life. We follow industry best practices and coding standards to build robust, scalable, and high-performing digital products.' },
    { number: '05', title: 'Testing and Quality Assurance', description: 'We conduct rigorous testing across all aspects of the project to ensure flawless functionality, performance, and security. Any issues are identified and resolved promptly to maintain the highest quality standards.' },
    { number: '06', title: 'Deployment', description: 'After thorough testing and client approval, we deploy the project to the live environment. Our team ensures a smooth and seamless transition, minimizing any disruptions to your business operations.' },
    { number: '07', title: 'Post-Launch Support', description: 'Our commitment to your success extends beyond the project launch. We provide ongoing support and maintenance services, promptly addressing any issues and keeping your digital product up-to-date.' },
    { number: '08', title: 'Continuous Improvement', description: 'We believe in the power of continuous improvement. We monitor the performance of your digital product, gather user feedback, and make iterative enhancements to optimize its effectiveness and drive business growth.' },
];

const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.1 } },
};

export default function ProcessSteps() {
    return (
        <section className="bg-[#1A1A1A] py-20 md:py-28 border-b border-zinc-800">
            <div className="container mx-auto px-4 md:px-8 max-w-7xl">

                <FadeInUp delay={0.1}>
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-white mb-4 md:mb-6">
                        At SquareUp
                    </h2>
                </FadeInUp>

                <FadeInUp delay={0.2}>
                    <p className="text-zinc-400 text-sm md:text-base max-w-3xl mb-8">
                        We follow a structured and collaborative process to ensure the successful delivery of exceptional digital products. Here's a step-by-step overview of how we work.
                    </p>
                </FadeInUp>

                <FadeInUp delay={0.3}>
                    <div className="inline-flex mb-12 px-5 py-3 bg-[#262626] rounded-md border border-zinc-800 text-zinc-400 text-sm">
                        Here's an overview of our typical process:
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
                        <StepCard key={step.number} step={step} titleColor="#98989A" />
                    ))}
                </motion.div>

            </div>
        </section>
    );
}
