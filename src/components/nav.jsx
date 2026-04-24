import "./nav.css";
import nxc from "../img/nxc.png";
import { useState, useEffect } from "react";

function Nav({ class1 }) {
  const [open, setOpen] = useState(false);

  function klik() {
    setOpen(!open);
    document.body.style.overflow = "hidden";
  }

  function overlay() {
    setOpen(false);
    document.body.style.overflow = "auto";
  }

  return (
    <div className="nav">
    

      <nav className={class1}>
          <button className="side-menu-btn" onClick={klik}>
        ☰
      </button>
        <div className="containerlink">
          <a
            className="link1 blog"
            href="https://ardevaalghifari.blogspot.com/"
          >
            <h4>Blog</h4>
          </a>
          <a className="link1" href="https://sociabuzz.com/ardevanxc/tribe">
            <h4>Dukungan</h4>
          </a>
          <a className="link1" href="#">
            <h4>Nexertc</h4>
          </a>
        </div>

        <img className="nxcnav" src={nxc} alt="nxc" />
      </nav>

      <aside className={`side-menu ${open ? "side-menu-open" : ""}`}>
        <nav className="side-menu-content">
          <a href="https://ardevaalghifari.blogspot.com/">Blog</a>
          <a href="https://sociabuzz.com/ardevanxc/tribe">Dukungan</a>
          <a href="#">Nexertc</a>
        </nav>
      </aside>

      {open && <div className="side-menu-overlay" onClick={overlay}></div>}
    </div>
  );
}

export default Nav;
