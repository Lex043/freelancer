import speed from "@/public/images/speed.svg";
import document from "@/public/images/document.svg";
import message from "@/public/images/message.svg";
import scan from "@/public/images/scan.svg";
import people from "@/public/images/people.svg";
import sms from "@/public/images/sms.svg";

interface serviceProps {
    id: number;
    title: string;
    icon: string;
    subtitle: string;
}

interface menu {
    id: number;
    name: string;
}

export const menu: menu[] = [
    {id: 1, name: "Home"},
    {id: 2, name: "About"},
    {id: 3, name: "Membership"}
];

export const serviceA: serviceProps[] = [
    {
        id: 1,
        icon: speed,
        title: "High-Speed Internet",
        subtitle: "Experience reliable, lightning-fast internet for seamless productivity."
    },
    {
        id: 2,
        icon: document,
        title: "Meeting Rooms",
        subtitle: "Bookable meeting rooms equipped with AV facilities for presentations and conferences."
    },
    {
        id: 3,
        icon: scan,
        title: "Printing and Scanning",
        subtitle: "On-site printing, scanning, and copying services for documents."
    }
]

export const serviceB: serviceProps[] = [
    {
        id: 1,
        icon: message,
        title: "Tech Support",
        subtitle: "Basic IT support for troubleshooting connectivity or equipment issues."
    },
    {
        id: 2,
        icon: people,
        title: "Networking Opportunities",
        subtitle: "Introductions to potential collaborators, mentors, or investors within the coworking community."
    },
    {
        id: 3,
        icon: sms,
        title: "Mail Handling",
        subtitle: "Reception services for mail and packages, with secure storage for members."
    }
]