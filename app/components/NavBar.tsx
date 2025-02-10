"use client";

import { useState } from "react";
import styles from "../styles/nav.module.css";
import About from "./About";
import Home from "./Home";
import Skills from "./Skills";
import Projects from "./Projects";
import Contact from "./Contact";

export default function NavBar() {
  const [menu, setMenu] = useState("home");

  return (
    <>
      <nav className={styles.nav}>
        <p>Hildean</p>
        <ul>
          <button
            style={{ color: menu === "home" ? "#0761db" : "white" }}
            onClick={() => setMenu("home")}
          >
            Home
          </button>
          <button
            style={{ color: menu === "about" ? "#0761db" : "white" }}
            onClick={() => setMenu("about")}
          >
            About
          </button>
          <button onClick={() => setMenu("skills")}>Skills</button>
          <button onClick={() => setMenu("projects")}>Projects</button>
          <button onClick={() => setMenu("contact")}>contact</button>
        </ul>
      </nav>
      {
        {
          home: <Home />,
          about: <About />,
          skills: <Skills />,
          projects: <Projects />,
          contact: <Contact />,
        }[menu]
      }
    </>
  );
}
