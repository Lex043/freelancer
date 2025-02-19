import ServiceCard from "@/components/service-card";
import speed from "@/public/images/speed.svg";
import document from "@/public/images/document.svg";
import message from "@/public/images/message.svg";
import people from "@/public/images/people.svg";
import sms from "@/public/images/sms.svg";

export default function Services() {
    return (
        <section
            className="bg-black pt-10 xl:pt-20 pb-12 xl:pb-28">
            <div className="container mx-auto px-4 lg:px-10">
                <h1 className="font-medium text-center md:text-left text-4xl xl:text-[80px] text-white xl:!leading-none max-w-[742px]">
                    Unlocking Potential, Together
                </h1>
                <section className="mt-10 xl:mt-[100px]">
                    <article className="flex justify-between gap-10 items-center flex-wrap xl:flex-nowrap">
                        <ServiceCard className="max-w-[378px]" icon={speed}
                                     title="High-Speed Internet"
                                     subtitle="Experience reliable, lightning-fast internet for seamless productivity" />
                        <ServiceCard className="max-w-[378px]" icon={document}
                                     title="Meeting Rooms"
                                     subtitle="Bookable meeting rooms equipped with AV facilities for presentations and conferences." />
                        <ServiceCard className="max-w-[378px]" icon={document}
                                     title="Meeting Rooms"
                                     subtitle="Bookable meeting rooms equipped with AV facilities for presentations and conferences." />
                    </article>
                    <article className="flex justify-between gap-10 flex-wrap items-center mt-10 xl:flex-nowrap">
                        <ServiceCard className="max-w-[378px]" icon={message}
                                     title="Tech Support"
                                     subtitle="Basic IT support for troubleshooting connectivity or equipment issues" />
                        <ServiceCard className="max-w-[378px]" icon={people}
                                     title="Networking Opportunities"
                                     subtitle="Introductions to potential collaborators, mentors, or investors within the coworking community." />
                        <ServiceCard className="max-w-[378px]" icon={sms}
                                     title="Mail Handling"
                                     subtitle="Reception services for mail and packages, with secure storage for members." />
                    </article>
                </section>
            </div>
        </section>
    );
}