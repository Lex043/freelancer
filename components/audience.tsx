import AudienceCard from "./audience-card";
import profile from "@/public/images/profile.svg";
import book from "@/public/images/book.svg";
import monitor from "@/public/images/monitor.svg";
import twoProfile from "@/public/images/twoProfile.svg";

export default function Audience() {
    return (
        <section className="bg-orange-red px-4 py-40 md:py-56">
            <div className="container mx-auto">
                <div
                    className="max-w-[818px] mx-auto !leading-[120px] relative">
                    <AudienceCard className="w-fit absolute -top-10 md:-top-2"
                                  text="Freelancers"
                                  icon={profile} />
                    <AudienceCard className="w-fit absolute right-0 -top-10 md:-top-1"
                                  text="Students"
                                  icon={book} />
                    <h1
                        className="text-5xl md:text-8xl xl:text-[120px] font-medium text-center text-white">Open
                        doors,
                        diverse minds: welcomes all
                    </h1>
                    <AudienceCard className="w-fit absolute -bottom-28 md:-bottom-6 xl:-bottom-4 md:-left-2 xl:-left-20"
                                  text="Remote workers"
                                  icon={monitor} />
                    <AudienceCard
                        className="w-fit absolute md:-bottom-6  -right-2 xl:-right-32"
                        text="Corporate employes"
                        icon={twoProfile} />
                </div>
            </div>
        </section>
    );
}