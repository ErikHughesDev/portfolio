"use client";
import { useState, useEffect } from "react";
import styles from "./Navbar.module.scss";

const links = [
    { label: "About", href: "#about" },
    { label: "Projects", href: "#projects" },
    { label: "Contact", href: "#contact" },
];

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
        const handler = () => setScrolled(window.scrollY > 40);
        window.addEventListener("scroll", handler, { passive: true });
        return () => window.removeEventListener("scroll", handler);
    }, []);

    // Close menu on resize to desktop
    useEffect(() => {
        const handler = () => {
            if (window.innerWidth >= 768) setMenuOpen(false);
        };
        window.addEventListener("resize", handler);
        return () => window.removeEventListener("resize", handler);
    }, []);

    // Prevent body scroll when menu open
    useEffect(() => {
        document.body.style.overflow = menuOpen ? "hidden" : "";
        return () => {
            document.body.style.overflow = "";
        };
    }, [menuOpen]);

    function closeMenu() {
        setMenuOpen(false);
    }

    return (
        <header
            className={`${styles.navbar} ${scrolled ? styles.scrolled : ""} ${menuOpen ? styles.menuOpen : ""}`}
        >
            <div className={`container ${styles.inner}`}>
                <a
                    href="#"
                    className={styles.logo}
                    aria-label="Home"
                    onClick={closeMenu}
                >
                    <span className={styles.logoMark}>EH</span>
                    <span className={styles.logoName}>Erik Hughes</span>
                </a>

                {/* Desktop nav */}
                <nav
                    aria-label="Primary navigation"
                    className={styles.desktopNav}
                >
                    <ul className={styles.links}>
                        {links.map(({ label, href }) => (
                            <li key={href}>
                                <a href={href} className={styles.link}>
                                    {label}
                                </a>
                            </li>
                        ))}
                        <li>
                            <a
                                href="/resume.pdf"
                                target="_blank"
                                rel="noopener noreferrer"
                                className={styles.resumeBtn}
                            >
                                Resume ↗
                            </a>
                        </li>
                    </ul>
                </nav>

                {/* Hamburger */}
                <button
                    className={styles.hamburger}
                    onClick={() => setMenuOpen((o) => !o)}
                    aria-label={menuOpen ? "Close menu" : "Open menu"}
                    aria-expanded={menuOpen}
                >
                    <span className={styles.bar} />
                    <span className={styles.bar} />
                    <span className={styles.bar} />
                </button>
            </div>

            {/* Mobile drawer */}
            <div
                className={`${styles.drawer} ${menuOpen ? styles.drawerOpen : ""}`}
                aria-hidden={!menuOpen}
            >
                <nav aria-label="Mobile navigation">
                    <ul className={styles.drawerLinks}>
                        {links.map(({ label, href }) => (
                            <li key={href}>
                                <a
                                    href={href}
                                    className={styles.drawerLink}
                                    onClick={closeMenu}
                                >
                                    {label}
                                </a>
                            </li>
                        ))}
                        <li>
                            <a
                                href="/resume.pdf"
                                target="_blank"
                                rel="noopener noreferrer"
                                className={styles.drawerResume}
                                onClick={closeMenu}
                            >
                                Resume ↗
                            </a>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
}
