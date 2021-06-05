import Head from "next/head";

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
      <header>
        <h1>Tennis Perfect</h1>
      </header>
    </>
  );
}
