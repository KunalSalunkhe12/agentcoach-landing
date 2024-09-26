import React from "react";
// import styles from "./faqs.module.css";
import Footer from "@/Components/Footer/Footer";
import Layout from "@/Components/Layout/Layout";
import Faq from "@/Components/FAQ/Faq";

const Index = () => {
  return (
    <Layout title={"faqs"}>
      <Faq />
      <Footer />
    </Layout>
  );
};

export default Index;
