import { trackEvent } from "../components/Splitbee";
import PhoneIcon from "../components/icons/Phone";
import EmailIcon from "../components/icons/Email";
import styles from "../styles/Contact.module.css";

function ContactUsPage() {
  return (
    <main>
      <h1>Contact Us</h1>
      <p>We’d love to tell you more about our programs!</p>
      <div className={styles.contactMethods}>
        <a
          className={styles.contactLink}
          href="tel:+61423714373"
          onClick={() => {
            trackEvent("Contact Us phone number clicked");
          }}
        >
          <PhoneIcon />
          <span className={styles.contactLinkContent}>0423 714 373</span>
        </a>
        <a
          className={styles.contactLink}
          href="mailto:info@tennisperfect.com.au"
          target="_blank"
          rel="noreferrer"
          onClick={() => {
            trackEvent("Contact Us email clicked");
          }}
        >
          <EmailIcon />
          <span className={styles.contactLinkContent}>
            info@tennisperfect.com.au
          </span>
        </a>
      </div>
    </main>
  );
}

ContactUsPage.pageTitle = "Contact Us";
ContactUsPage.pageDescription =
  "Contact Tennis Perfect to book a lesson or to learn more about its programs.";

export default ContactUsPage;
