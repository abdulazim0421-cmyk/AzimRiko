import FadeInUp from './FadeInUp';

export default function ServicesHero() {
    return (
        <section
            className="relative w-full py-24 md:py-32 lg:py-40 flex items-center justify-center bg-zinc-900 overflow-hidden border-b border-zinc-800 bg-cover bg-center bg-no-repeat"
            // Путь указывается от папки public. public в пути писать НЕ НУЖНО.
            style={{ backgroundImage: "url('/Text Container.png')" }}
        >
            {/* Оверлей для затемнения, чтобы текст лучше читался */}
            <div className="absolute inset-0 bg-black/60"></div>

            <div className="relative z-10 container mx-auto px-4 md:px-8 text-center flex flex-col items-center">
                <FadeInUp delay={0.1}>
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-white mb-4 md:mb-6" style={{ fontFamily: 'Barlow, sans-serif' }}>
                        Our Services
                    </h1>
                </FadeInUp>

                <FadeInUp delay={0.3}>
                    <p className="text-zinc-300 text-sm md:text-base lg:text-lg max-w-2xl mx-auto font-medium" style={{ fontFamily: 'Barlow, sans-serif' }}>
                        Transform your brand with our innovative digital solutions that captivate and engage your audience.
                    </p>
                </FadeInUp>
            </div>
        </section>
    );
}