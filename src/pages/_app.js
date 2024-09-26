import { useState, useEffect } from "react";
import Mobilenavbar from "@/Components/Navbar/MobileNavbar";
import Navbar from "@/Components/Navbar/Navbar";
import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
  const [mobNav, setmobNav] = useState(false);
  const [theme, setTheme] = useState("light"); // Add theme state

  useEffect(() => {
    // Check if there's a saved theme in localStorage
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
      setTheme(savedTheme);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <div className={theme}>
      <Navbar mobNav={mobNav} setmobNav={setmobNav} />
      <Mobilenavbar setmobNav={setmobNav} mobNav={mobNav} />
      <Component
        {...pageProps}
        mobNav={mobNav}
        setTheme={setTheme}
        theme={theme}
      />{" "}
      {/* Pass setTheme and theme */}
    </div>
  );
}
