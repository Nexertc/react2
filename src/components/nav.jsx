import "./nav.css";
import nxc from "../img/nxc.png";
import { useState, useEffect } from "react";
import { Menu } from "react-feather";
import { Moon, Sun } from "react-feather";

export default function Nav({ class1 }) {
  const [open, setOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(() => {
    if (typeof window === "undefined") return false;
    return window.localStorage.getItem("theme") === "dark";
  });

  useEffect(() => {
    const body = document.body;
    if (darkMode) {
      body.classList.add("dark-mode");
      window.localStorage.setItem("theme", "dark");
    } else {
      body.classList.remove("dark-mode");
      window.localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  function klik() {
    setOpen(!open);
    document.body.style.overflow = "hidden";

    document.body.style.overflowX = "hidden";
  }

  function toggleTheme() {
    setDarkMode((prev) => !prev);
  }

  function overlay() {
    setOpen(false);
    document.body.style.overflow = "auto";
    document.body.style.overflowX = "hidden";
  }

  return (
    <div className="nav">
      <nav className={class1}>
        <button className="side-menu-btn" aria-label="menu"
         onClick={klik}>
          <Menu className="icon1" />
        </button>

      <h1 className="judulnxc">Ardeva <span>Alghifari</span>.</h1>

        <div className="containerlink">
             <a
            className="link1 blog"
            href="#form"
          >
         Form
          </a>
          <a
            className="link1 blog"
            href="https://ardevaalghifari.blogspot.com/"
          >
          Blog
          </a>
          <a className="link1" href="https://sociabuzz.com/ardevanxc/tribe">
           Dukungan
          </a>
          <a className="link1" href="#sec1">
           Nexertc
          </a>
        </div>
        <button className="theme-btn" aria-label="ganti tema"
         onClick={toggleTheme}>
          {darkMode ? (
            <Sun className="sun" />
          ) : (
            <Moon className="moon" />
          )}
        </button>
      </nav>

      <aside className={`side-menu ${open ? "side-menu-open" : ""}`}>
        <nav className="side-menu-content">
          <a href="https://ardevaalghifari.blogspot.com/">Blog</a>
          <a href="https://sociabuzz.com/ardevanxc/tribe">Dukungan</a>
          <a href="#">Nexertc</a>
          <a href="#form">Form</a>
        </nav>
      </aside>

      {open && <div className="side-menu-overlay" onClick={overlay}></div>}
    </div>
  );
}
