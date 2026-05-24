import styles from "./Footer.module.scss";

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={`container ${styles.inner}`}>
                <p className={styles.copy}>
                    © {new Date().getFullYear()} Erik Hughes. Built with
                    Next.js.
                </p>
                <div className={styles.socials}>
                    <a
                        href="https://www.linkedin.com/in/erik-hughes-a52a881b9/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        LinkedIn
                    </a>
                    <a href="mailto:erik@erikhughesdev.com">
                        erik@erikhughesdev.com
                    </a>
                </div>
            </div>
        </footer>
    );
}
