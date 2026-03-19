import React from 'react';
import Image from 'next/image';

const FinalCTA = () => {
    return (
        <section className="relative w-full border-y border-zinc-800 overflow-hidden bg-[#0f0f0f]">

            <div className="absolute inset-0 z-0 pointer-events-none">
                <Image
                    src="/Container.png"
                    alt=""
                    fill
                    className="object-cover opacity-50"
                    priority
                />
            </div>

            <div className="relative z-10 py-24 px-6 flex flex-col items-center text-center max-w-7xl mx-auto">

                <div className="mb-10 w-[80px] h-[80px] bg-[#c6ff00] rounded-[15px] flex items-center justify-center shadow-[0_0_50px_rgba(198,255,0,0.2)]">
                    <Image
                        src="/Logo/logo.svg"
                        alt="SquareUp Icon"
                        width={44}
                        height={44}
                    />
                </div>

                <h2 className="text-3xl md:text-[48px] font-bold text-white mb-6 leading-[1.1] tracking-tight max-w-4xl">
                    Let us Bring your Ideas to Life <br className="hidden md:block" /> in the Digital World.
                </h2>

                <p className="text-zinc-400 text-sm md:text-lg mb-12 max-w-3xl leading-relaxed">
                    No matter which services you choose, we are committed to delivering exceptional results that exceed your expectations. Our multidisciplinary team works closely together to ensure seamless collaboration and a unified vision for your digital product.
                </p>

                <button className="bg-[#c6ff00] text-black font-bold py-4 px-12 rounded-xl text-sm md:text-base hover:bg-[#d4ff33] transition-all active:scale-95 shadow-lg">
                    Start Project
                </button>

            </div>
        </section>
    );
};

export default FinalCTA;