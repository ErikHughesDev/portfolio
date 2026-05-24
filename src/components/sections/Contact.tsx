import styles from "./Contact.module.scss";

export default function Contact() {
    return (
        <section id="contact" className={styles.contact}>
            <div className="container">
                <div className={styles.inner}>
                    <div className={styles.text}>
                        <p className={styles.label}>Contact</p>
                        <h2 className={styles.heading}>
                            Let's build something{" "}
                            <span className={styles.accent}>
                                great together.
                            </span>
                        </h2>
                        <p className={styles.body}>
                            I'm open to new projects. Whether that's a marketing
                            site, an interactive platform, or a complex
                            full-stack build. If you have something in mind,
                            let's talk.
                        </p>
                        <p className={styles.body}>
                            Best way to reach me is by email. I typically
                            respond within a day.
                        </p>
                    </div>

                    <div className={styles.actions}>
                        <a
                            href="mailto:erik@erikhughesdev.com"
                            className={styles.emailBtn}
                        >
                            <svg
                                className={styles.emailIcon}
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            >
                                <rect
                                    x="2"
                                    y="4"
                                    width="20"
                                    height="16"
                                    rx="2"
                                />
                                <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                            </svg>
                            erik@erikhughesdev.com
                        </a>

                        <div className={styles.divider}>or find me on</div>

                        <div className={styles.socials}>
                            <a
                                href="https://www.linkedin.com/in/erik-hughes-a52a881b9/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className={styles.socialLink}
                            >
                                LinkedIn
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
