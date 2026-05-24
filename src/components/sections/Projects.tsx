import Image from "next/image";
import { projects } from "@/data/projects";
import styles from "./Projects.module.scss";

export default function Projects() {
    const featured = projects.filter((p) => p.featured);
    const rest = projects.filter((p) => !p.featured);

    return (
        <section id="projects" className={styles.projects}>
            <div className="container">
                <p className={styles.label}>Work</p>
                <h2 className={styles.heading}>Selected projects</h2>
                <p className={styles.subheading}>
                    A selection of client work and personal builds. Each one
                    owned end-to-end.
                </p>

                <div className={styles.featuredGrid}>
                    {featured.map((project) => (
                        <article
                            key={project.id}
                            className={styles.featuredCard}
                        >
                            <div
                                className={styles.cardVisual}
                                style={
                                    !project.image
                                        ? {
                                              background:
                                                  project.imageColor ||
                                                  "var(--bg-alt)",
                                          }
                                        : undefined
                                }
                            >
                                {project.image && (
                                    <Image
                                        src={project.image}
                                        alt={project.title}
                                        fill
                                        className={styles.cardImg}
                                        sizes="(max-width: 768px) 100vw, 50vw"
                                    />
                                )}
                                <span className={styles.cardYear}>
                                    {project.year}
                                </span>
                            </div>

                            <div className={styles.cardBody}>
                                <div className={styles.cardHeader}>
                                    <h3 className={styles.cardTitle}>
                                        {project.title}
                                    </h3>
                                    <div className={styles.cardLinks}>
                                        {project.repoUrl && (
                                            <a
                                                href={project.repoUrl}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                aria-label="GitHub repository"
                                            >
                                                <svg
                                                    width="16"
                                                    height="16"
                                                    viewBox="0 0 24 24"
                                                    fill="currentColor"
                                                >
                                                    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
                                                </svg>
                                            </a>
                                        )}
                                        {project.url && (
                                            <a
                                                href={project.url}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                aria-label="Live project"
                                            >
                                                <svg
                                                    width="16"
                                                    height="16"
                                                    viewBox="0 0 24 24"
                                                    fill="none"
                                                    stroke="currentColor"
                                                    strokeWidth="2"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                >
                                                    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                                                    <polyline points="15 3 21 3 21 9" />
                                                    <line
                                                        x1="10"
                                                        y1="14"
                                                        x2="21"
                                                        y2="3"
                                                    />
                                                </svg>
                                            </a>
                                        )}
                                    </div>
                                </div>

                                <p className={styles.cardDesc}>
                                    {project.description}
                                </p>
                                {project.longDescription && (
                                    <p className={styles.cardLong}>
                                        {project.longDescription}
                                    </p>
                                )}

                                <ul className={styles.cardTags}>
                                    {project.tags.map((tag) => (
                                        <li key={tag} className={styles.tag}>
                                            {tag}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </article>
                    ))}
                </div>

                {rest.length > 0 && (
                    <>
                        <p className={styles.otherLabel}>Other projects</p>
                        <div className={styles.otherGrid}>
                            {rest.map((project) => (
                                <article
                                    key={project.id}
                                    className={styles.otherCard}
                                >
                                    <div className={styles.otherTop}>
                                        <h3 className={styles.otherTitle}>
                                            {project.title}
                                        </h3>
                                        <div className={styles.cardLinks}>
                                            {project.repoUrl && (
                                                <a
                                                    href={project.repoUrl}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    aria-label="GitHub"
                                                >
                                                    <svg
                                                        width="16"
                                                        height="16"
                                                        viewBox="0 0 24 24"
                                                        fill="currentColor"
                                                    >
                                                        <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
                                                    </svg>
                                                </a>
                                            )}
                                            {project.url && (
                                                <a
                                                    href={project.url}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    aria-label={
                                                        project.urlLabel ||
                                                        "View project"
                                                    }
                                                >
                                                    <svg
                                                        width="16"
                                                        height="16"
                                                        viewBox="0 0 24 24"
                                                        fill="none"
                                                        stroke="currentColor"
                                                        strokeWidth="2"
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                    >
                                                        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                                                        <polyline points="15 3 21 3 21 9" />
                                                        <line
                                                            x1="10"
                                                            y1="14"
                                                            x2="21"
                                                            y2="3"
                                                        />
                                                    </svg>
                                                </a>
                                            )}
                                        </div>
                                    </div>

                                    <p className={styles.otherDesc}>
                                        {project.description}
                                    </p>

                                    {project.url && project.urlLabel && (
                                        <a
                                            href={project.url}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className={styles.urlLabelLink}
                                        >
                                            {project.urlLabel} ↗
                                        </a>
                                    )}

                                    <ul className={styles.cardTags}>
                                        {project.tags.map((tag) => (
                                            <li
                                                key={tag}
                                                className={styles.tag}
                                            >
                                                {tag}
                                            </li>
                                        ))}
                                    </ul>
                                </article>
                            ))}
                        </div>
                    </>
                )}
            </div>
        </section>
    );
}
