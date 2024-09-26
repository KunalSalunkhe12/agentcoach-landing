import React from "react";
// import styles from "./faqs.module.css";
import Footer from "@/components/Footer/Footer";
import Layout from "@/components/Layout/Layout";
import Faq from "@/components/FAQ/Faq";

const Index = () => {
  return (
    <Layout title={"faqs"}>
      <Faq />
      <Footer />
    </Layout>
  );
};

export default Index;
