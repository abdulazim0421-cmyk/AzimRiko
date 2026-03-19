'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';

interface Project {
    id: number;
    category: string;
    title: string;
    description: string;
    image: string;
    link: string;
}

const projects: Project[] = [
    {
        id: 1,
        category: "E-Commerce Platform for Fashion Hub",
        title: "Chic Boutique",
        description: "We developed a visually stunning and user-friendly e-commerce platform for Chic Boutique, a renowned fashion retailer. The platform featured seamless product browsing, secure payment integration, and personalized recommendations.",
        image: "/Work/Card/ChicBoutique.png", //
        link: "https://www.chicboutique.com"
    },
    {
        id: 2,
        category: "Mobile App for Food Delivery Service",
        title: "HungryBites",
        description: "HungryBites approached us to create a mobile app that streamlined their food delivery service. The app included features like real-time order tracking, easy menu customization, and secure payment options.",
        image: "/Work/Card/HungryBites.png", //
        link: "https://www.hungrybites.com"
    },
    {
        id: 3,
        category: "Booking and Reservation System for Event Management",
        title: "EventMasters",
        description: "EventMasters required a comprehensive booking and reservation system for their event management services. We designed a user-friendly platform that allowed seamless event registration and ticketing.",
        image: "/Work/Card/EventMasters.png", //
        link: "https://www.eventmasters.com"
    },
    {
        id: 4,
        category: "Custom Software for Workflow Automation",
        title: "ProTech Solutions",
        description: "ProTech Solutions approached us to create a mobile app that streamlined their operations. The app included features like real-time order tracking, easy customization, and secure payment options.",
        image: "/Work/Card/ProTech Solutions.png", //
        link: "https://www.protechsolutions.com"
    },
    {
        id: 5,
        category: "Web Portal for Real Estate Listings",
        title: "Dream Homes Realty",
        description: "Dream Homes Realty wanted an intuitive web portal for showcasing their property listings. We created a visually appealing platform with advanced search filters and virtual tours.",
        image: "/Work/Card/Dream Homes Realty.png", //
        link: "https://www.dreamhomesrealty.com"
    },
    {
        id: 6,
        category: "Mobile App for Fitness Tracking",
        title: "FitLife Tracker",
        description: "FitLife Tracker approached us to develop a mobile app that tracked fitness activities and provided personalized workout plans. The app included progress monitoring and social sharing.",
        image: "/Work/Card/FitLife Tracker.png", //
        link: "https://www.fitlifetracker.com"
    },
    {
        id: 7,
        category: "Custom Software for Supply Chain Management",
        title: "Global Logistics Solutions",
        description: "Global Logistics Solutions required a custom software solution to streamline their supply chain operations. We developed a scalable system that optimized inventory management.",
        image: "/Work/Card/Global Logistics Solutions.png", //
        link: "https://www.globallogisticssolutions.com"
    },
    {
        id: 8,
        category: "Educational Platform for Online Learning",
        title: "EduConnect",
        description: "EduConnect sought an educational platform to facilitate online learning. We developed an interactive platform with virtual classrooms, multimedia content, and student progress tracking.",
        image: "/Work/Card/EduConnect.png", //
        link: "https://www.educonnect.com"
    },
    {
        id: 9,
        category: "Mobile App for Travel Planning",
        title: "WanderWise",
        description: "WanderWise wanted a mobile app that simplified travel planning and discovery. We developed an app with features like personalized itineraries and destination guides.",
        image: "/Work/Card/WanderWise.png", //
        link: "https://www.wanderwise.com"
    },
    {
        id: 10,
        category: "Web Application for Customer Relationship Management",
        title: "ConnectCRM",
        description: "ConnectCRM needed a web application to manage their customer relationships effectively. We developed a feature-rich CRM platform with lead management and data analytics.",
        image: "/Work/Card/ConnectCRM.png", //
        link: "https://www.connectcrm.com"
    }
];

const NotableWorks: React.FC = () => {
    return (
        <section className="bg-[#1A1A1A] py-20 px-4 md:px-10 border-t border-[#262626]">
            <div className="max-w-[1440px] mx-auto">
                {/* Header section */}
                <div className="mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">At SquareUp</h2>
                    <p className="text-gray-400 text-lg mb-8 max-w-3xl">
                        We have had the privilege of working with a diverse range of clients and delivering exceptional digital products that drive success.
                    </p>
                    <div className="inline-block bg-[#262626] border border-[#333333] px-6 py-3 rounded-xl text-gray-300 text-sm md:text-base">
                        Here are ten examples of our notable works:
                    </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-16">
                    {projects.map((project) => (
                        <div key={project.id} className="flex flex-col group">
                            <h3 className="text-gray-400 text-xl mb-8 opacity-70">
                                {project.category}
                            </h3>

                            <div className="relative aspect-[16/10] bg-[#1E1E1E] rounded-[24px] border border-[#262626] overflow-hidden mb-8 p-6 md:p-10 shadow-inner">
                                <div className="absolute inset-0 opacity-10 bg-[url('/Hero/grid.svg')] pointer-events-none" />

                                <div className="relative w-full h-full rounded-xl overflow-hidden shadow-2xl">
                                    <Image
                                        src={project.image}
                                        alt={project.title}
                                        fill
                                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                                    />
                                </div>
                            </div>

                            <div className="flex items-center justify-between mb-6">
                                <div>
                                    <h4 className="text-2xl font-bold text-white mb-2">{project.title}</h4>
                                    <div className="bg-[#262626] border border-[#333333] px-4 py-2 rounded-lg text-gray-500 text-sm inline-block">
                                        {project.link.replace('https://', '')}
                                    </div>
                                </div>

                                <Link
                                    href={project.link}
                                    target="_blank"
                                    className="w-14 h-14 bg-[#262626] border border-[#333333] rounded-xl flex items-center justify-center text-[#C5FF32] transition-all hover:bg-[#C5FF32] hover:text-black active:scale-90"
                                >
                                    <ArrowUpRight size={28} />
                                </Link>
                            </div>

                            <p className="text-gray-400 text-base leading-relaxed line-clamp-3">
                                {project.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default NotableWorks;