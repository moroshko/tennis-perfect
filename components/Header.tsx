import Head from "next/head";
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
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=1"
        />
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
          <h1 className={styles.h1}>Tennis Perfect</h1>
        </div>
      </header>
    </>
  );
}
