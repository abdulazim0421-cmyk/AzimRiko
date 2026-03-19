import Image from 'next/image';
import FadeInUp from '../../animations/FadeInUp';

export default function AboutHero() {
    return (
        <section className="relative w-full py-24 md:py-32 lg:py-40 flex items-center justify-center overflow-hidden border-b border-zinc-800">

            {/* Background image */}
            <div className="absolute inset-0 z-0">
                <Image
                    src="/Hero/services-br.png"
                    alt="About background"
                    fill
                    className="object-cover object-center opacity-40"
                    priority
                />
                <div className="absolute inset-0 bg-black/50" />
            </div>

            {/* Content */}
            <div className="relative z-10 container mx-auto px-4 md:px-8 text-center flex flex-col items-center">
                <FadeInUp delay={0.1}>
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-white mb-4 md:mb-6 leading-tight">
                        About Us
                    </h1>
                </FadeInUp>
                <FadeInUp delay={0.3}>
                    <p className="text-zinc-400 text-sm md:text-base lg:text-lg max-w-2xl mx-auto">
                        Welcome to SquareUp, where collaboration, expertise, and client-centricity intersect to shape the future of digital innovation.
                    </p>
                </FadeInUp>
            </div>

        </section>
    );
}
