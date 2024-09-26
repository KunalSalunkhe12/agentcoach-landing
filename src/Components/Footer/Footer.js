import React, { useState } from "react";
import Image from "next/image";
import toast, { Toaster } from "react-hot-toast";
import { z } from "zod";
import styles from "./footer.module.css";
import { contacts, footLinks, footlink, navLinks } from "@/utils/Constants";
import { FaLinkedin } from "react-icons/fa";
import { IoLogoInstagram } from "react-icons/io";
import { FaSquareBehance } from "react-icons/fa6";
import Link from "next/link";
import logo from "@/Assets/icons/logo.svg";
import { FaTwitter } from "react-icons/fa";
import { SiFacebook } from "react-icons/si";
const Footer = () => {
  const [email, setEmail] = useState("");

  const schema = z.object({
    email: z.string().email("Invalid email address"),
  });

  const handleSubscribe = (e) => {
    e.preventDefault();

    try {
      schema.parse({ email });
      console.log("Subscribed email:", email);
      toast.success("Subscribed successfully!");
      setEmail("");
    } catch (error) {
      if (error instanceof z.ZodError) {
        error.errors.forEach((err) => toast.error(err.message));
      }
    }
  };

  return (
    <>
      <div className={styles.main}>
        {/* <div className={styles.foot_img}>
          <Image src={footerimg} alt="img" className={styles.fimg} />
        </div> */}
        <div className={styles.footer}>
          <div className={styles.center}>
            {/* <div className={styles.upp}>
              <div className={styles.center}> */}
            <Image src={logo} className={styles.footlogo} alt=" " />
          </div>
          {/* <div className={styles.right}> */}
          <p style={{ textAlign: "center" }} className={styles.center}>
            Discover an Al platform tailored for getting expertise in your Real
            Estate Business.
          </p>
          {/* </div> */}
          <p className={styles.center}>
            &#169; 2024 Agentcoach.ai. All rights reserved.
          </p>
          {/* </div> */}
          {/* <form onSubmit={handleSubscribe}>
              <input
                type="text"
                className={styles.in}
                placeholder="E-mail"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <div className={styles.btn_cont}>
                <button type="submit" className={styles.btn}>
                  SUBSCRIBE
                </button>
              </div>
            </form> */}
          {/* </div> */}

          {/* <div className={styles.foot_below}>
            <div className={`${styles.navlink} ${styles.display}`}>
              {footLinks.map((e, index) => (
                <Link
                  className={styles.footlink}
                  key={index}
                  href={e.id}
                  style={index === 0 ? { fontWeight: 500 } : {}}
                >
                  {e.label}
                </Link>
              ))}
            </div>

            <div className={styles.navlink2}>
              {contacts.map((e, index) => (
                <span
                  className={styles.contacts}
                  key={index}
                  style={index === 0 ? { fontWeight: 500 } : {}}
                >
                  {e.contact}
                </span>
              ))}
            </div>

            <div className={styles.navlink2}>
              {footlink.map((e, index) => (
                <span
                  key={index}
                  className={styles.contacts}
                  style={index === 0 ? { fontWeight: 500 } : {}}
                >
                  {e.link}
                </span>
              ))}
            </div>
          </div> */}
          {/* <div className={styles.iconcon}>
            <div className={styles.icon_cont}>
              <FaTwitter size={22} className={styles.icon} />
              <FaLinkedin size={22} className={styles.icon} />
              <SiFacebook size={22} className={styles.icon} />
             
            </div>
          </div> */}
        </div>
      </div>
    </>
  );
};

export default Footer;
