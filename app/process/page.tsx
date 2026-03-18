import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export default function ProcessPage() {
    return (
        <div>
            <Navbar />
            <main className="pt-32 min-h-screen bg-[#1A1A1A] text-white text-center">
                <h1 className="text-4xl font-semibold">Process Page</h1>
            </main>
            <Footer />
        </div>
    );
}
