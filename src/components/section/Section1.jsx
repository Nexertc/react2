import React from "react";
import "./section1.css";
import html5 from "../../img/html5.jpg";
import css from "../../img/css.png";
import js from "../../img/javascript.png";
import twebsite from "../../img/twebsite.jpg";
import reactimg from "../../img/react.png";
import figma from "../../img/figma.png";

export default function Section1() {
  return (
    <div className="konten">
      <article>
        <h2 className="heading2" >Hal hal yang saya pelajari</h2>
        <section className="imgdes1">
          <div className="imgdes2">
            <img className="imgs1" src={html5} alt="html5" />
            <h3 className="heading3">HTML</h3>
            <p className="paragraft1">Hypertext Markup Language</p>
          </div>

          <div className="imgdes2">
            <img className="imgs1" src={css} alt="css" />
            <h3 className="heading3">CSS</h3>
            <p className="paragraft1">Cascading Style Sheets</p>
          </div>

          <div className="imgdes2">
            <img className="imgs1" src={js} alt="js" />
            <h3 className="heading3">JS</h3>
            <p className="paragraft1">Java Script</p>
          </div>
        </section>

        <section className="imgdes1">
          <div className="imgdes2">
            <img className="imgs1" src={twebsite} alt="website" />
            <h3 className="heading3">Website</h3>
            <p className="paragraft1">Pembuatan Website</p>
          </div>

          <div className="imgdes2">
            <img className="imgs1" src={reactimg} alt="react" />
            <h3 className="heading3">React</h3>
            <p className="paragraft1">React JS</p>
          </div>

          <div className="imgdes2">
            <img className="imgs1" src={figma} alt="figma" />
            <h3 className="heading3">Figma</h3>
            <p className="paragraft1">Figma design</p>
          </div>
        </section>
      </article>
    </div>
  );
}
