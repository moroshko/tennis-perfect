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
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=1"
        />
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
