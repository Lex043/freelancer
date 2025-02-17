import Hero from "@/components/hero";
import About from "@/components/about";
import Audience from "@/components/audience";
import Services from "@/components/services";
import Testimonials from "@/components/testimonials";
import Team from "@/components/team";

export default function Home() {
    return (
        <main className="min-h-screen bg-[#F5F5F5]">
            <Hero />
            <About />
            <Audience />
            <Services />
            <Testimonials />
            <Team />
        </main>
    );
}
