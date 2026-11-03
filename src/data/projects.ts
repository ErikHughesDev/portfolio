import { Project } from "@/types/project";

export const projects: Project[] = [
    {
        id: "impact-promotions",
        title: "Impact Promotions",
        description:
            "A direct mail marketing website for auto dealerships, built around a standout animated intro, custom video player, and interactive guessing game.",
        longDescription:
            "Designed and developed a custom Next.js site with Payload CMS for content management. Built a custom video player and a fully interactive \"Where's Wyatt?\" map guessing game to drive on-site engagement, anchored by a standout animated intro sequence on the homepage with custom animations throughout. Media delivered through AWS CloudFront.",
        tags: ["Next.js", "React", "SCSS", "Payload CMS", "AWS"],
        url: "https://wespeakcar.com",
        imageColor: "linear-gradient(135deg, #1a1a2e 0%, #16213e 100%)",
        image: "/images/ipidirect.webp",
        featured: true,
        year: 2026,
    },
    {
        id: "musician-template",
        title: "Musician Website Template System",
        description:
            "A modular, media-forward website template combining custom audio/video integration with full e-commerce functionality.",
        longDescription:
            "Built a fully custom audio player, Mux-powered video, a Payload CMS-driven store with category filtering, and Stripe-powered checkout with secure digital delivery. Architected reusable components to support scalable customization while maintaining cohesive branding.",
        tags: [
            "Next.js",
            "React",
            "SCSS",
            "Payload CMS",
            "PostgreSQL",
            "Mux",
            "Stripe API",
        ],
        url: "https://musician-template.erikhughesdev.com",
        imageColor: "linear-gradient(135deg, #1C1A17 0%, #6B6355 100%)",
        image:'/images/musician.webp',
        featured: true,
        year: 2025,
    },
    {
        id: "newkey",
        title: "NewKey",
        description:
            "A SaaS that transposes sheet music charts into a new key while preserving the original page layout.",
        longDescription:
            "Upload a PDF chart and get it back in any key, with the original layout intact. A Python transposition engine on AWS Lambda powers a Next.js and Payload CMS app with accounts and Stripe billing.",
        tags: [
            "Next.js",
            "React",
            "Payload CMS",
            "PostgreSQL",
            "Python",
            "AWS Lambda",
            "Stripe API",
        ],
        url: "https://newkey.app",
        imageColor: "linear-gradient(135deg, #1A1815 0%, #C49A6C 100%)",
        image: "/images/newkey.webp",
        featured: true,
        year: 2026,
    },
    {
        id: "getmeonit",
        title: "GetMeOnIt",
        description:
            "AI-assisted scheduling and roster management for band leaders: send the call, musicians respond from a link, and the app works out the lineup.",
        longDescription:
            "Band leaders create ensembles and events; musicians reply through tokenized email links or a shared URL with no account required. Claude recommends the best date and lineup from each roster's hierarchy, pulling the leader in only when a judgment call is needed. Includes subscription billing, email delivery tracking, and a Payload-managed marketing site.",
        tags: [
            "Next.js",
            "React",
            "Payload CMS",
            "PostgreSQL",
            "Claude API",
            "Stripe API",
            "SendGrid",
        ],
        url: "https://getmeonit.com",
        imageColor: "linear-gradient(135deg, #2E6B4F 0%, #F5F3EE 100%)",
        image: "/images/getmeonit.webp",
        featured: true,
        year: 2026,
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
        id: "cryosa",
        title: "Cryosa",
        description:
            "A marketing site for a clinical-stage medical device company developing an implant-free treatment for obstructive sleep apnea.",
        longDescription:
            "Built CMS-driven news, clinical studies, and careers sections, pairing patient-friendly messaging with cited clinical statistics and required investigational device disclosures. Added a sign-in-gated instructions-for-use portal with NextAuth. Structured content in Strapi so the team publishes news and study updates without developer support.",
        tags: [
            "Next.js",
            "React",
            "SCSS",
            "Strapi",
            "Cloudinary",
            "NextAuth",
        ],
        url: "https://cryosa.com",
        imageColor: "linear-gradient(135deg, #1E2A9C 0%, #F2B632 100%)",
        image: "/images/cryosa.webp",
        featured: true,
        year: 2023,
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
