import React, { useEffect, useState } from "react";
import styles from "./hm.module.css";
import Image from "next/image";
import home from "@/Assets/icons/House.png";
import overlay from "@/Assets/videos/overlay.mp4";
import TextTransition, { presets } from "react-text-transition";
import { motion } from "framer-motion";
import overlayvideo from "@/Assets/videos/overlay.mp4";
import { useRouter } from "next/router";

const TEXTS = [
  "Sales Advisor",
  "Negotiation Expert",
  "Marketing Guru",
  "Motivation Guide",
  "General Advisor",
];
export const Hero = ({ video }) => {
  const router = useRouter();
  const [index, setIndex] = React.useState(0);

  React.useEffect(() => {
    const intervalId = setInterval(
      () => setIndex((index) => index + 1),
      3000 // every 3 seconds
    );
    return () => clearTimeout(intervalId);
  }, []);

  // const Content = () => {
  //   return (

  //   );
  // };

  return (
    <div className={styles.main}>
      {/* <video className={styles.ol2} autoPlay loop muted playsInline>
        <source src={overlay} type="video/mp4" />
        Your browser does not support the video tag.
      </video> */}
      {/* <div className={styles.videoBackground}>
        <video className={styles.overlayvideo} autoplay muted loop>
          <source src="path-to-your-video.mp4" type="video/mp4" />
        </video>
        <div className={styles.rec1} />
        <div className={styles.rec1} />
        <div className={styles.rec1} />
        <div className={styles.rec1} />
        <div className={styles.rec1} />
        <div className={styles.rec1} />
        <div className={styles.rec1} />
        <div className={styles.rec1} />
        <div className={styles.rec1} />
        <div className={styles.rec1} />
      </div> */}

      <div className={styles.videoBackground}>
        <video className={styles.overlayvideo} autoPlay muted loop>
          <source src={overlayvideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      <div className={styles.rectangles}>
        <div className={styles.rec1} />
        <div className={styles.rec1} />
        <div className={styles.rec1} />
        <div className={styles.rec1} />
        <div className={styles.rec1} />
        <div className={styles.rec1} />
        <div className={styles.rec1} />
        <div className={styles.rec1} />
        <div className={styles.rec1} />
        <div className={styles.rec1} />
      </div>
      <div className={styles.content}>
        <motion.div
          className={styles.img}
          animate={{
            y: [0, -5, 0],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            repeatType: "mirror",
          }}
        >
          <Image src={home} alt="Floating Image" />
        </motion.div>
        <p>Introducing AI-Powered Coaching for Real Estate Agents </p>
        <div className={styles.overlay} alt=" " />
        <h1>
          Accelerate Your Real Estate Career With Cutting-Edge Generative
          <br />{" "}
          <div className={styles.below}>
            <TextTransition
              springConfig={presets.gentle}
              style={{ margin: "0 0px" }}
              inline
              className={styles.text}
            >
              {TEXTS[index % TEXTS.length]}
            </TextTransition>
            AI Coaching
          </div>
        </h1>
        {/* <p>
          Streamline Your Real Estate Operations With Tailored Advice From
          Specialized <span className={styles.bold}>AI Chatbots</span> Designed
          For{" "}
          <span className={styles.bold}>
            Sales, Negotiation, Marketing, And More.
          </span>
        </p> */}
        <button className={styles.gt}>
          <span
            className={styles.btntext}
            onClick={() =>
              router.push("https://blessed-perch-83.accounts.dev/sign-in")
            }
          >
            GET STARTED FREE!
          </span>
        </button>
      </div>
    </div>
  );
};

export default Hero;
