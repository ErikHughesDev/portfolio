import styles from "./About.module.scss";

const skills = {
    Frontend: [
        "React",
        "Next.js",
        "TypeScript",
        "SCSS",
        "Framer Motion",
        "Responsive Design",
    ],
    "Backend & CMS": [
        "Node.js",
        "Django",
        "REST APIs",
        "Strapi (Headless CMS)",
        "WebSockets",
    ],
    "Integrations & Infra": [
        "Stripe API",
        "NextAuth",
        "AWS",
        "DigitalOcean",
        "Netlify",
        "SEO",
    ],
};

export default function About() {
    return (
        <section id="about" className={styles.about}>
            <div className="container">
                <div className={styles.grid}>
                    {/* Text column */}
                    <div className={styles.text}>
                        <p className={styles.label}>About me</p>

                        <h2 className={styles.heading}>
                            I build websites that{" "}
                            <span className={styles.accent}>
                                look as good as they perform.
                            </span>
                        </h2>

                        <div className={styles.bio}>
                            <p>
                                Based in Los Angeles, I'm a full-stack developer
                                and designer with 7+ years building custom
                                marketing websites and interactive platforms. I
                                own the full lifecycle from creative direction
                                and architecture through deployment, handling
                                both the design and the code.
                            </p>
                            <p>
                                Outside of work, I'm a professional trombonist
                                with recording credits including Ariana Grande,
                                Michael Bublé, and Dancing with the Stars, and a
                                contributor to 5 Grammy-nominated works.
                            </p>
                        </div>
                    </div>

                    {/* Skills column */}
                    <div className={styles.skills}>
                        {Object.entries(skills).map(([category, items]) => (
                            <div key={category} className={styles.skillGroup}>
                                <p className={styles.skillCategory}>
                                    {category}
                                </p>
                                <ul className={styles.skillList}>
                                    {items.map((skill) => (
                                        <li
                                            key={skill}
                                            className={styles.skillItem}
                                        >
                                            {skill}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
