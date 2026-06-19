import { Project } from "@/types/project";

export const projects: Project[] = [
    {
        id: "musician-template",
        title: "Musician Website Template System",
        description:
            "A modular, media-forward website template combining custom audio/video integration with full e-commerce functionality.",
        longDescription:
            "Built a fully custom audio player, Strapi-driven store with category filtering, and Stripe-powered checkout with secure digital delivery. Architected reusable components to support scalable customization while maintaining cohesive branding.",
        tags: ["Next.js", "React", "SCSS", "Strapi", "Stripe API"],
        url: "https://musician-template.erikhughesdev.com",
        imageColor: "linear-gradient(135deg, #1C1A17 0%, #6B6355 100%)",
        image:'/images/musician.webp',
        featured: true,
        year: 2025,
    },
    {
        id: "impact-promotions",
        title: "Impact Promotions",
        description:
            "A promotional products marketing website built around a standout animated intro, custom video player, and interactive guessing game.",
        longDescription:
            "Designed and developed a custom Next.js front end paired with headless WordPress for content management. Built a custom video player and a fully interactive guessing game to drive on-site engagement, anchored by a standout animated intro sequence on the homepage with custom animations throughout. Hosted entirely on AWS infrastructure.",
        tags: ["Next.js", "React", "SCSS", "Headless WordPress", "ACF", "AWS"],
        url: "https://ipidirect.com",
        imageColor: "linear-gradient(135deg, #1a1a2e 0%, #16213e 100%)",
        image: "/images/ipidirect.webp",
        featured: true,
        year: 2026,
    },
    {
        id: "coravie-medical",
        title: "CoraVie Medical",
        description:
            "A custom medical technology marketing site with scroll-based hero animations and a secure, gated content portal.",
        longDescription:
            "Built responsive, performance-optimized layouts to clearly communicate complex clinical value. Integrated a password-protected portal using NextAuth with Strapi-backed user account management for approved user access.",
        tags: [
            "Next.js",
            "React",
            "SCSS",
            "Strapi",
            "Framer Motion",
            "NextAuth",
        ],
        url: "https://coraviemedical.com",
        imageColor: "linear-gradient(135deg, #2B6CB0 0%, #4A90D9 100%)",
        image:'/images/coravie.webp',
        featured: true,
        year: 2025,
    },
    {
        id: "manzy",
        title: "Manzanita Charter Middle School",
        description:
            "A bilingual (English/Spanish) school website built around a chalkboard-themed visual concept with SVG stroke-based animations.",
        longDescription:
            "Implemented SVG stroke animations to simulate hand-drawn icon effects in the hero. Built modular content sections, announcement systems, and document libraries with dynamic language switching across all content.",
        tags: ["Next.js", "React", "SCSS", "Strapi", "Framer Motion"],
        url: "https://manzy.org",
        imageColor: "linear-gradient(135deg, #3B5E3A 0%, #7A9E79 100%)",
        image:'/images/manzy.webp',
        featured: true,
        year: 2024,
    },
    {
        id: "ark-wealth",
        title: "Ark Wealth Advisors",
        description:
            "A custom financial services website with a scroll-animated hero where layered visual elements transition as users move through the page.",
        longDescription:
            "Built a cohesive, brand-forward visual system emphasizing trust and clarity. Implemented responsive layouts, testimonial modules, and interactive FAQ components to drive engagement and lead conversion.",
        tags: ["Next.js", "React", "SCSS", "Strapi", "Framer Motion"],
        url: "https://arkwealthadvisors.com",
        imageColor: "linear-gradient(135deg, #C4622D 0%, #D4A853 100%)",
        image:'/images/ark.webp',
        featured: true,
        year: 2024,
    },
    {
        id: "thehang",
        title: "theHang",
        description:
            "A fully functional real-time social platform with chat rooms, moderation dashboards, and sub-second message delivery — built and run from 2018–2023.",
        longDescription:
            "Designed and developed end-to-end: room creation flows, real-time notifications, user-generated content, and onboarding. No longer live, but the architecture and build process are documented in a YouTube tutorial series.",
        tags: [
            "Django",
            "WebSockets",
            "Django Channels",
            "JavaScript",
            "jQuery",
            "AWS",
        ],
        url: "https://www.youtube.com/watch?v=19onK9H3mbg&list=PLecYTX9wCPB25uReiO-kF1LtCP8s6NISu", // update with actual playlist URL
        urlLabel: "Watch on YouTube",
        imageColor: "linear-gradient(135deg, #4A3B6B 0%, #8B7EC4 100%)",
        featured: false,
        year: 2023,
    },
];
