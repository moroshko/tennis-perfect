import Link from "next/link";
import { trackEvent } from "./Splitbee";
import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.content}>
        <span>{`Tennis Perfect © ${new Date().getFullYear()}`}</span>
        <span className={styles.separator} aria-hidden="true">
          •
        </span>
        <Link href="https://www.facebook.com/TennisCoachOlga" passHref>
          <a
            href="/"
            target="_blank"
            title="Olga’s Facebook page"
            onClick={() => {
              trackEvent("Footer Facebook link clicked");
            }}
          >
            Facebook
          </a>
        </Link>
        <span className={styles.separator} aria-hidden="true">
          •
        </span>
        <Link href="https://www.instagram.com/olga_tennis" passHref>
          <a
            href="/"
            target="_blank"
            title="Olga’s Instagram page"
            onClick={() => {
              trackEvent("Facebook Instagram link clicked");
            }}
          >
            Instagram
          </a>
        </Link>
      </div>
    </footer>
  );
}
