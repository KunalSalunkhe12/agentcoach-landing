import React, { useRef, useState } from "react";
import styles from "./faq.module.css";
import { faqData } from "@/utils/Constants";
import downicon from "@/Assets/icons/faqdownicon.svg";
import Image from "next/image";
const Faq = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const answerRef = useRef([]); // Ref to manage the height of each answer

  const toggleAnswer = (index) => {
    setActiveIndex(activeIndex === index ? null : index); // Toggle open/close
  };

  return (
    <div className={styles.main}>
      {" "}
      <div className={styles.box}>
        <h1>Frequently Asked Questions About Agent Coach.ai</h1>
        <p>
          Find answers to your queries about the capabilities and usage of Agent
          Coach.ai.
        </p>
      </div>
      <div className={styles.faqContainer}>
        {faqData.map((item, index) => (
          <div key={index} className={styles.faqItem}>
            <div
              className={`${styles.questionBox} ${
                activeIndex === index ? styles.active : ""
              }`}
              onClick={() => toggleAnswer(index)}
            >
              {item.question}
              <div className={styles.icon}>
                <Image src={downicon} className={styles.arr} alt=" " />
              </div>
            </div>

            <div
              ref={(el) => (answerRef.current[index] = el)} // Assign ref to each answer box
              className={`${styles.answerBox} ${
                activeIndex === index ? styles.visible : ""
              }`}
              style={{
                height:
                  activeIndex === index
                    ? (answerRef.current[index]?.scrollHeight || 0) + 40
                    : 0,
                opacity: activeIndex === index ? 1 : 0,
              }}
            >
              {item.answer}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Faq;
