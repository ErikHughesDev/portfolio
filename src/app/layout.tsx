import type { Metadata } from "next";
import "./globals.scss";

export const metadata: Metadata = {
    title: "Erik Hughes — Full-Stack Developer & Designer",
    description:
        "Full-stack developer and designer with 7+ years building custom, performance-optimized marketing websites and interactive digital platforms. Based in Los Angeles.",
    openGraph: {
        title: "Erik Hughes — Full-Stack Developer & Designer",
        description:
            "Full-stack developer and designer with 7+ years building custom, performance-optimized marketing websites and interactive digital platforms.",
        type: "website",
    },
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <head>
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link
                    rel="preconnect"
                    href="https://fonts.gstatic.com"
                    crossOrigin="anonymous"
                />
            </head>
            <body>{children}</body>
        </html>
    );
}
