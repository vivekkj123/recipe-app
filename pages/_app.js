import Head from "next/head";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Recipe APP</title>
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
