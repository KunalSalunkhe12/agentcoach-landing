// import React from "react";
// import styles from "./scroll.module.css";
// import video from "@/Assets/videos/AIchatbot.mp4";

// const Scroll = () => {
//   return (
//     <div className={styles.main}>
//       <div className={styles.box}>
//         <h1>Start Transforming Your Real Estate Career Today - For Free!</h1>
//         <p>
//           Unlock expert AI-driven advice for real estate, sales, and
//           negotiation. Get started for free and elevate your career today!
//         </p>
//       </div>
//       <div className={styles.container}>
//         <div className={styles.left}>
//           <div className={styles.textcon}>
//             <span className={styles.text1}>
//               Get instant access to{" "}
//               <span className={styles.sp}>AgentCoach.ai</span> and start
//               experiencing expert advice tailored just for you in{" "}
//               <span className={styles.sp}>
//                 Real Estate, Sales, Negotiation, Marketing, and Motivation.
//               </span>
//             </span>
//             <span className={styles.text2}>
//               Best of all, you can get started right now, completely free! Take
//               advantage of this opportunity to boost your career and see the
//               difference AI-powered coaching can make.
//             </span>
//             <span className={styles.text3}>
//               Sign up for free & unlock your potential today!
//             </span>
//           </div>
//           {/* <p>Your scrolling text goes here...</p> */}
//         </div>
//         <div className={styles.right}>
//           <video
//             src={video}
//             controls={false}
//             autoPlay
//             loop
//             muted
//             className={styles.video}
//           />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Scroll;
import React, { useEffect } from "react";
import styles from "./scroll.module.css";
import video from "@/Assets/videos/AIchatbot.mp4";
import gsap from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Scroll = () => {
  useEffect(() => {
    // Apply GSAP animation for fading in and sliding up when text comes into view
    const targets = document.querySelectorAll(`.${styles.textcon} span`);

    targets.forEach((target) => {
      gsap.fromTo(
        target,
        { opacity: 0, y: 50 }, // Start from below with opacity 0
        {
          opacity: 1,
          y: 0, // Move to the initial position
          ease: "power2.out",
          duration: 1,
          scrollTrigger: {
            trigger: target,
            start: "top 80%", // When the target enters the viewport
            toggleActions: "play none none reverse", // Play when in view, reverse when out
          },
        }
      );
    });
  }, []);

  return (
    <div className={styles.main}>
      <div className={styles.box}>
        <h1>Start Transforming Your Real Estate Career Today - For Free!</h1>
        <p>
          Unlock expert AI-driven advice for real estate, sales, and
          negotiation. Get started for free and elevate your career today!
        </p>
      </div>
      <div className={styles.container}>
        <div className={styles.left}>
          <div className={styles.textcon}>
            <span className={styles.text1}>
              Get instant access to{" "}
              <span className={styles.sp}>AgentCoach.ai</span> and start
              experiencing expert advice tailored just for you in{" "}
              <span className={styles.sp}>
                Real Estate, Sales, Negotiation, Marketing, and Motivation.
              </span>
            </span>
            <span className={styles.text2}>
              Best of all, you can get started right now, completely free! Take
              advantage of this opportunity to boost your career and see the
              difference AI-powered coaching can make.
            </span>
            <span className={styles.text3}>
              Sign up for free & unlock your potential today!
            </span>
          </div>
        </div>
        <div className={styles.right}>
          <video
            src={video}
            controls={false}
            autoPlay
            loop
            muted
            className={styles.video}
          />
        </div>
      </div>
    </div>
  );
};

export default Scroll;
