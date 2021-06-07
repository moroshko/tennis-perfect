import { trackEvent } from "./Splitbee";
import FacebookIcon from "./icons/Facebook";
import InstagramIcon from "./icons/Instagram";
import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.content}>
        <span>{`Tennis Perfect © ${new Date().getFullYear()}`}</span>
        <div className={styles.socialLinks}>
          <a
            className={styles.socialLink}
            href="https://www.facebook.com/TennisCoachOlga"
            target="_blank"
            rel="noreferrer"
            title="Olga’s Facebook page"
            onClick={() => {
              trackEvent("Footer Facebook link clicked");
            }}
          >
            <FacebookIcon />
            <span className={styles.socialLinkContent}>Facebook</span>
          </a>
          <a
            className={styles.socialLink}
            href="https://www.instagram.com/olga_tennis"
            target="_blank"
            rel="noreferrer"
            title="Olga’s Instagram page"
            onClick={() => {
              trackEvent("Facebook Instagram link clicked");
            }}
          >
            <InstagramIcon />
            <span className={styles.socialLinkContent}>Instagram</span>
          </a>
        </div>
      </div>
    </footer>
  );
}
