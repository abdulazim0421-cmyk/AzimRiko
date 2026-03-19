import { Facebook, Twitter, Linkedin } from 'lucide-react';

const ContactInfoBar = () => {
    return (
        /* Убрал внешние flex-контейнеры с боковыми линиями */
        <div className="w-full border-t border-[#262626] bg-[#1A1A1A]">
            <div className="max-w-[1280px] mx-auto grid grid-cols-1 md:grid-cols-2">

                {/* Левая часть: Operating Days */}
                <div className="flex items-center justify-center py-8 md:py-10 border-b md:border-b-0 md:border-r border-[#262626] gap-4">
                    <span className="text-white text-base font-normal">Operating Days</span>
                    <div className="bg-[#262626] border border-[#2F2F2F] px-5 py-2.5 rounded-lg text-gray-300 text-sm font-medium">
                        Monday to Friday
                    </div>
                </div>

                {/* Правая часть: Stay Connected */}
                <div className="flex items-center justify-center py-8 md:py-10">
                    <div className="flex items-center gap-6 border border-[#262626] bg-[#1E1E1E]/40 rounded-2xl px-6 py-4">
                        <span className="text-white text-base font-normal">Stay Connected</span>
                        <div className="flex gap-3">
                            {[
                                { Icon: Facebook, href: "#" },
                                { Icon: Twitter, href: "#" },
                                { Icon: Linkedin, href: "#" }
                            ].map((social, index) => (
                                <a
                                    key={index}
                                    href={social.href}
                                    className="w-11 h-11 bg-gradient-to-b from-[#262626] to-[#1F1F1F] border border-[#2F2F2F] rounded-xl flex items-center justify-center text-[#C5FF32] transition-all hover:brightness-125 active:scale-95 shadow-lg"
                                >
                                    <social.Icon size={18} fill="currentColor" strokeWidth={0} />
                                </a>
                            ))}
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default ContactInfoBar;