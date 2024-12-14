import Head from "next/head";
import Layout from "@/components/Layout";
import Image from "next/image";
import youtubeImg from "../public/youtube.png"
import "@/styles/globals.scss";

const App = ({ Component, pageProps }) => (
  <Layout>
    <Head>
      <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300&display=swap" rel="stylesheet" />
    </Head>
    <main>
      <Component {...pageProps} />
    </main>
  </Layout>
);

export default App;
