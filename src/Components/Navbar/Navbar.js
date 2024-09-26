import React, { useState, useEffect } from "react";
import Link from "next/link";
import { BiMenu } from "react-icons/bi";
import { RxCross1 } from "react-icons/rx";
import Image from "next/image";
import styles from "./navbar.module.css";
import newlogo from "@/Assets/icons/logo.svg";
import { navLinks } from "@/utils/Constants";
import { useRouter } from "next/router";

const Navbar = ({ mobNav, setmobNav }) => {
  const router = useRouter();
  const [activeLink, setActiveLink] = useState("home");

  useEffect(() => {
    const path = router.pathname;
    if (path === "/faqs") {
      setActiveLink("projects");
    } else if (path === "/") {
      setActiveLink("home");
    }
  }, [router.pathname]);

  //   const handleLinkClick = (id, e) => {
  //     e.preventDefault();
  //     const element = document.getElementById(id);
  //     if (element) {
  //       element.scrollIntoView({ behavior: "smooth" });
  //       setActiveLink(id);
  //     }
  //   };

  //   // Update the handleLinkClick function
  // const handleLinkClick = (id, href, e) => {
  //   e.preventDefault(); // Prevent default link behavior

  //   if (id === "contact") {
  //     // Open the blog link in the same tab
  //     window.location.href = href;
  //   } else {
  //     // Use Next.js router for internal navigation
  //     router.push(href);
  //   }
  // };

  const handleLinkClick = (id, href, e) => {
    e.preventDefault(); // Prevent default link behavior

    // Check if the href is an external link
    if (href.startsWith("http")) {
      // Open the external link in the same tab
      window.location.href = href;
    } else {
      // For internal navigation
      setActiveLink(id);
      router.push(href);
    }
  };

  return (
    <nav className={styles.nav}>
      <div className={styles.logo}>
        <Link href="/" passHref>
          <Image src={newlogo} className={styles.bottle} alt="" />
        </Link>
        {/* <span className={styles.logo_name}>ONE SQUARE</span> */}
      </div>
      <div>
        <ul className={styles.links}>
          {navLinks.map(({ id, label, href }) => (
            <li
              key={id}
              className={activeLink === id ? styles.active : ""}
              style={{ cursor: "pointer" }}
              onClick={(e) => handleLinkClick(id, href, e)}
            >
              <span
                className={`${styles.link_a} ${
                  activeLink === id ? styles.active : ""
                }`}
              >
                {label}
              </span>
            </li>
          ))}
          <li>
            <div className={styles.btncon}>
              <button
                className={styles.login}
                onClick={() =>
                  router.push("https://blessed-perch-83.accounts.dev/sign-in")
                }
              >
                Log In
              </button>
              <button
                className={styles.signup}
                onClick={() =>
                  router.push("https://blessed-perch-83.accounts.dev/sign-in")
                }
              >
                Sign Up
              </button>
            </div>
          </li>
        </ul>
      </div>
      <div className={styles.burg_cont}>
        {mobNav ? (
          <RxCross1
            size={30}
            className={styles.burgerMenu}
            onClick={() => setmobNav(false)}
          />
        ) : (
          <BiMenu
            size={30}
            className={styles.burgerMenu}
            onClick={() => setmobNav(true)}
          />
        )}
      </div>
    </nav>
  );
};

export default Navbar;
