import type { NextPage } from "next";
import Head from "next/head";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Invo</title>
        <meta name="description" content="Generated invoices easily." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1>Welcome to Invo</h1>

        <p>This is just a test</p>
      </main>
    </div>
  );
};

export default Home;
