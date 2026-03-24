import Image from 'next/image';
import FadeInUp from '../../animations/FadeInUp';

export default function AboutIntro() {
    return (
        <section className="bg-[#1A1A1A] border-b border-zinc-800 py-20 md:py-28">
            <div className="container mx-auto px-4 md:px-8 max-w-7xl">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center">

                    {/* Left column — text */}
                    <FadeInUp delay={0.1}>
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-white mb-6 leading-tight">
                            About SquareUp
                        </h2>
                        <p className="text-zinc-400 text-sm md:text-base leading-relaxed">
                            SquareUp is a digital product agency that is passionate about crafting exceptional digital experiences. We specialize in design, engineering, and project management, helping businesses thrive in the digital landscape. At SquareUp, we follow a structured and collaborative process to ensure the successful delivery of exceptional digital products. Our process combines industry best practices, creative thinking, and a client-centric approach.
                        </p>
                    </FadeInUp>

                    {/* Right column — image */}
                    <FadeInUp delay={0.2}>
                        <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden border border-zinc-800">
                            <Image
                                src="/photo/image.png"
                                alt="About SquareUp"
                                fill
                                className="object-cover object-center"
                            />
                        </div>
                    </FadeInUp>

                </div>
            </div>
        </section>
    );
}
