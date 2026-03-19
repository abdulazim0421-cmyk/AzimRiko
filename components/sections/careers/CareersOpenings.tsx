'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { MousePointer2, ClipboardList, Wrench, Code2, Terminal, Settings2, Briefcase, Database, Users, TrendingUp, ShieldCheck } from 'lucide-react';

const designJobs = [
    {
        icon: MousePointer2,
        title: 'UI Designer',
        description: 'Bring your creativity and expertise to our team as a UI Designer. Collaborate with cross-functional teams to design visually stunning and user-friendly interfaces. Utilize your skills in layout design, typography, and color theory to create engaging digital experiences that leave a lasting impression.',
    },
    {
        icon: ClipboardList,
        title: 'UX Designer',
        description: 'Join us as a UX Designer and help shape exceptional user experiences. Conduct user research, analyze data, and create wireframes and prototypes to design intuitive and user-centric interfaces. Collaborate closely with UI Designers, developers, and stakeholders to ensure seamless and enjoyable user journeys.',
    },
    {
        icon: Wrench,
        title: 'Design Head',
        description: 'Lead our design team as a Design Head and drive the creative vision of our products. Provide strategic direction, mentorship, and guidance to UI and UX designers. Collaborate with cross-functional teams to ensure design consistency and elevate our brand identity through innovative and visually impactful designs.',
    },
];

const devJobs = [
    {
        icon: Code2,
        title: 'Front – End Developer',
        description: 'Join our team as a Front-End Developer and bring our designs to life. Transform UI/UX wireframes into interactive web interfaces using HTML, CSS, and JavaScript. Collaborate closely with designers and back-end developers to ensure seamless integration and optimal user experiences.',
    },
    {
        icon: Terminal,
        title: 'Back – End Developer',
        description: 'Be part of our team as a Backend Developer and contribute to building robust and scalable web applications. Develop server-side logic, integrate databases, and optimize system performance. Collaborate with front-end developers to ensure smooth communication between the server and the user interface.',
    },
    {
        icon: Settings2,
        title: 'Full Stack Developer',
        description: 'Join us as a Full Stack Developer and take on end-to-end responsibility for web application development. Combine your skills in both front-end and back-end technologies to create dynamic and responsive websites. Collaborate with designers, developers, and stakeholders to deliver comprehensive and user-friendly solutions.',
    },
];

const managementJobs = [
    {
        icon: Briefcase,
        title: 'BA Manager',
        description: 'Lead our business analysis team as a BA Manager and drive strategic initiatives. Gather and analyze requirements, facilitate communication between stakeholders, and ensure project alignment with business objectives. Provide leadership and mentorship to a team of talented business analysts.',
    },
    {
        icon: Database,
        title: 'Project Manager',
        description: 'Join our team as a Project Manager and oversee the successful delivery of projects from initiation to completion. Define project scope, manage timelines and resources, and ensure effective communication across cross-functional teams. Utilize your leadership and organizational skills to drive project success.',
    },
    {
        icon: Users,
        title: 'HR Manager',
        description: 'Be part of our team as an HR Manager and play a vital role in managing our human resources. Lead talent acquisition, employee engagement, and performance management initiatives. Collaborate with leadership to develop and implement HR strategies that foster a positive and inclusive work culture.',
    },
];

const qaJobs = [
    {
        icon: Wrench,
        title: 'QA Tester',
        description: 'Ensure the quality of our software products as a QA Tester. Develop test plans, execute test cases, and identify and report software defects. Collaborate with developers and stakeholders to ensure that our products meet high-quality standards and deliver an exceptional user experience.',
    },
    {
        icon: TrendingUp,
        title: 'SQL Tester',
        description: 'Join us as an SQL Tester and play a key role in testing and validating the integrity of our databases. Write complex SQL queries to perform data validation and identify any anomalies. Collaborate with developers and QA testers to ensure the accuracy and reliability of our data.',
    },
    {
        icon: ShieldCheck,
        title: 'Manual Tester',
        description: 'Be part of our team as a Manual Tester and perform comprehensive manual testing to ensure the quality and functionality of our software applications. Develop test cases, execute test scripts, and document test results. Collaborate with developers and QA testers to troubleshoot issues and enhance software performance.',
    },
];

const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.08 } },
};

const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' as const } },
};

// Framer Motion variants for hover children
const iconVariants = {
    rest: { scale: 1, filter: 'drop-shadow(0 0 0px transparent)' },
    hover: {
        scale: 1.15,
        filter: 'drop-shadow(0 0 8px rgba(216,255,153,0.7))',
        transition: { duration: 0.25, ease: 'easeOut' as const },
    },
};


const neonVariants = {
    rest: { clipPath: 'inset(0 100% 0 0)', opacity: 0 },
    hover: { clipPath: 'inset(0 0% 0 0)', opacity: 1, transition: { duration: 0.4, ease: 'easeOut' as const } },
};

function JobCard({ icon: Icon, title, description }: { icon: React.ElementType; title: string; description: string }) {
    return (
        <motion.div
            variants={cardVariants}
            initial="rest"
            whileHover="hover"
            animate="rest"
            className="relative overflow-hidden flex flex-col gap-6 p-8 md:p-10 border-r border-b border-zinc-800 bg-[#1A1A1A] cursor-default"
        >
            {/* Neon top sweep */}
            <motion.div
                variants={neonVariants}
                className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-[#D8FF99] to-transparent pointer-events-none"
            />

            {/* Subtle bg glow */}
            <motion.div
                variants={{
                    rest: { opacity: 0 },
                    hover: { opacity: 1, transition: { duration: 0.3 } },
                }}
                className="absolute inset-0 bg-[#D8FF99]/[0.025] pointer-events-none"
            />

            {/* Icon with hover scale + glow */}
            <motion.div
                variants={iconVariants}
                className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0 origin-center"
                style={{ background: '#242424', border: '1px solid #2e2e2e' }}
            >
                <Icon size={22} color="#D8FF99" strokeWidth={1.8} />
            </motion.div>

            {/* Title */}
            <h3 className="text-white font-semibold text-base md:text-lg leading-snug relative">
                {title}
            </h3>

            {/* Description */}
            <p className="text-zinc-400 text-sm leading-relaxed flex-1 relative">
                {description}
            </p>

            {/* Apply button — reacts to parent hover via variants + spring tap */}
            <Link href="/careers/apply">
                <motion.span
                    whileHover={{
                        scale: 1.03,
                        backgroundColor: '#3a3a3a',
                    }}
                    whileTap={{ scale: 0.97 }}
                    transition={{ type: 'spring', stiffness: 400, damping: 17 }}
                    className="relative flex items-center justify-center w-full py-3 rounded-lg text-white text-sm font-medium cursor-pointer"
                    style={{ background: '#2a2a2a', border: '1px solid #333' }}
                >
                    Apply Now
                </motion.span>
            </Link>
        </motion.div>
    );
}

function JobGroup({ label, jobs }: { label: string; jobs: typeof designJobs }) {
    return (
        <div className="flex flex-col">
            <div className="border-t border-zinc-800 pt-10 pb-6">
                <span className="text-zinc-500 text-sm md:text-base font-medium">{label}</span>
            </div>
            <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-40px' }}
                variants={containerVariants}
                className="grid grid-cols-1 md:grid-cols-3 border-l border-t border-zinc-800"
            >
                {jobs.map((job) => (
                    <JobCard key={job.title} icon={job.icon} title={job.title} description={job.description} />
                ))}
            </motion.div>
        </div>
    );
}

export default function CareersOpenings() {
    return (
        <section className="bg-[#1A1A1A] py-20 md:py-28 border-t border-zinc-800">
            <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col gap-12">

                <div className="flex flex-col gap-4">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, ease: 'easeOut' }}
                        className="text-white font-bold text-3xl md:text-4xl"
                    >
                        Current Openings
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 14 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.1, ease: 'easeOut' }}
                        className="text-zinc-400 text-sm md:text-base leading-relaxed max-w-3xl"
                    >
                        We are always on the lookout for talented individuals who are passionate about creating
                        exceptional digital experiences. Whether you're a designer, engineer, project manager,
                        or have skills that align with our agency's mission, we encourage you to explore our open positions.
                    </motion.p>
                </div>

                <JobGroup label="Design Job Openings" jobs={designJobs} />
                <JobGroup label="Development Job Openings" jobs={devJobs} />
                <JobGroup label="Management Job Openings" jobs={managementJobs} />
                <JobGroup label="QA Job Openings" jobs={qaJobs} />

            </div>
        </section>
    );
}
