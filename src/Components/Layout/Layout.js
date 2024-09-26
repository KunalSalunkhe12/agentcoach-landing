import React from "react";
import styles from "./layout.module.css";
import Head from "next/head";
import { Toaster } from "react-hot-toast";
const Layout = ({ title, children }) => {
  return (
    <div className={styles.container}>
      <Head>
        <title>{title ? `Aicoach | ${title}` : "Aicoach "}</title>
        <link rel="canonical" href="" />
        <meta
          name="robots"
          content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"
        ></meta>
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        {/* <link rel="manifest" href="/site.webmanifest" /> */}
      </Head>
      <main className={styles.main}>
        <Toaster />
        {children}
      </main>
    </div>
  );
};

export default Layout;
