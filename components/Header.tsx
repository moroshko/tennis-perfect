import Head from "next/head";
import Splitbee from "./Splitbee";

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
      </Head>
      <Splitbee />
      <header>
        <h1>Tennis Perfect</h1>
      </header>
    </>
  );
}
