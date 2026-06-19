"use client";

import Image from "next/image";
import styles from "./Hero.module.scss";
import { useState } from "react";

export default function Hero() {
    function Headshot() {
        const [clicked, setClicked] = useState(false);

        function handleClick() {
            setClicked(true);
            setTimeout(() => setClicked(false), 700);
        }

        return (
            <div
                className={styles.headshotWrap}
                onMouseEnter={(e) =>
                    e.currentTarget.setAttribute("data-hovered", "true")
                }
                onMouseLeave={(e) =>
                    e.currentTarget.removeAttribute("data-hovered")
                }
                onClick={handleClick}
                data-clicked={clicked || undefined}
            >
                <div className={styles.headshotRing} aria-hidden="true" />
                <div className={styles.headshotInner}>
                    <Image
                        src="/images/headshot.webp"
                        alt="Erik Hughes"
                        fill
                        className={styles.headshotImg}
                        priority
                        sizes="(max-width: 1024px) 260px, 360px"
                    />
                </div>
            </div>
        );
    }

    return (
        <section className={styles.hero} aria-label="Introduction">
            <div className={`container ${styles.inner}`}>
                <div className={styles.blob} aria-hidden="true" />

                <div className={styles.content}>
                    <h1 className={styles.headline}>
                        <span className={styles.lineOne}>Hi, I'm</span>
                        <span className={styles.name}>Erik Hughes.</span>
                    </h1>

                    <p className={styles.tagline}>
                        Full-stack developer &amp; designer building{" "}
                        <span className={styles.accentBlue}>
                            custom web experiences
                        </span>{" "}
                        from concept through launch.
                    </p>

                    <div className={styles.cta}>
                        <a href="#projects" className={styles.btnPrimary}>
                            See my work
                        </a>
                        <a href="#contact" className={styles.btnSecondary}>
                            Get in touch
                        </a>
                    </div>

                    <div className={styles.pills} aria-hidden="true">
                        {[
                            "Next.js",
                            "React",
                            "SCSS",
                            "Framer Motion",
                            "Strapi",
                            "Stripe",
                            "Django",
                            "AWS",
                            "TypeScript",
                            "Node.js",
                            "PostgreSQL",
                            "REST APIs",
                        ].map((tech, i) => (
                            <span
                                key={tech}
                                className={styles.pill}
                                style={{ "--i": i } as React.CSSProperties}
                            >
                                {tech}
                            </span>
                        ))}
                    </div>
                </div>

                {/* Headshot */}
                <Headshot />
            </div>

            <div className={styles.scrollHint} aria-hidden="true">
                <span className={styles.scrollLine} />
                <span className={styles.scrollLabel}>scroll</span>
            </div>
        </section>
    );
}
