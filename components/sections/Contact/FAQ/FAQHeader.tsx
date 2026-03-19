const FAQHeader = () => {
    return (
        <section className="relative w-full bg-[#1A1A1A] py-24 overflow-hidden border-t border-[#262626]">
            <div
                className="absolute inset-0 opacity-60 bg-center bg-no-repeat bg-cover mix-blend-screen"
                style={{ backgroundImage: "url('/path-to-your/green-waves-pattern.jpg')" }}
            />

            <div className="relative z-10 max-w-[1280px] mx-auto px-4 text-center">
                <h2 className="text-white text-4xl md:text-5xl font-semibold mb-6">
                    Frequently Asked Questions
                </h2>

                <p className="text-gray-400 text-base md:text-lg max-w-2xl mx-auto">
                    Still you have any questions? Contact our Team via{' '}
                    <a
                        href="mailto:hello@squareup.com"
                        className="text-white border-b border-white hover:text-[#C5FF32] hover:border-[#C5FF32] transition-colors"
                    >
                        hello@squareup.com
                    </a>
                </p>
            </div>
        </section>
    );
};