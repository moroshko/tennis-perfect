import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.content}>
        {`Tennis Perfect © ${new Date().getFullYear()}`}{" "}
      </div>
    </footer>
  );
}
