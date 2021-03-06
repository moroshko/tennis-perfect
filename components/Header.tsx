import Head from "next/head";
import Link from "next/link";
import Splitbee from "./Splitbee";
import styles from "./Header.module.css";

type Props = {
  pageTitle: string;
  pageDescription: string;
};

export default function Header({ pageTitle, pageDescription }: Props) {
  const title = pageTitle ? `${pageTitle} - Tennis Perfect` : "Tennis Perfect";

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={pageDescription} />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600&display=swap"
        />
      </Head>
      <Splitbee />
      <header className={styles.header}>
        <div className={styles.content}>
          <Link href="/" passHref>
            <a href="/" className={styles.homeLink}>
              Tennis Perfect
            </a>
          </Link>
        </div>
      </header>
    </>
  );
}
