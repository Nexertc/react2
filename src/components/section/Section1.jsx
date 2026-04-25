import React from "react";
import { useNavigate } from "react-router-dom";
import "./section1.css";
import html5 from "../../img/html5.jpg";
import css from "../../img/css.png";
import js from "../../img/javascript.png";
import twebsite from "../../img/twebsite.jpg";
import reactimg from "../../img/react.png";
import figma from "../../img/figma.png";
import nxc from "../../img/nxc2.png";

export default function Section1() {
  const navigate = useNavigate();
  return (
    <div className="konten">
      <article>
        <header>
          <h2 className="heading2">Hal hal yang sudah saya pelajari</h2>
        </header>

        <section>

          <section className="imgdes1">
            <article className="imgdes2">
              <figure>
                <img className="imgs1" src={html5} alt="html5" />
              </figure>
              <h3 className="heading3">HTML</h3>
              <p className="paragraft1">
                HyperText Markup Language, digunakan untuk membuat struktur
                dasar halaman website.
              </p>
              <footer>
                <img src={nxc} alt="nexertc" className="nxcs1" />
              </footer>
            </article>

            <article className="imgdes2">
              <figure>
                <img className="imgs1" src={css} alt="css" />
              </figure>
              <h3 className="heading3">CSS</h3>
              <p className="paragraft1">
                Cascading Style Sheets, digunakan untuk mengatur tampilan
                website.
              </p>
              <footer>
                <img src={nxc} alt="nexertc" className="nxcs1" />
              </footer>
            </article>

            <article className="imgdes2">
              <figure>
                <img className="imgs1" src={js} alt="js" />
              </figure>
              <h3 className="heading3">JavaScript</h3>
              <p className="paragraft1">
                Bahasa pemrograman yang digunakan untuk membuat website menjadi
                interaktif.
              </p>
              <footer>
                <img src={nxc} alt="nexertc" className="nxcs1" />
              </footer>
            </article>
          </section>

          <section className="imgdes1">
            <article className="imgdes2">
              <figure>
                <img className="imgs1" src={twebsite} alt="website" />
              </figure>
              <h3 className="heading3">Website</h3>
              <p className="paragraft1">
                Mampu membuat dan mengembangkan website sederhana hingga
                dinamis.
              </p>
              <footer>
                <img src={nxc} alt="nexertc" className="nxcs1" />
              </footer>
            </article>

            <article className="imgdes2">
              <figure>
                <img className="imgs1" src={reactimg} alt="react" />
              </figure>
              <h3 className="heading3">React</h3>
              <p className="paragraft1">
                Library JavaScript untuk membangun user interface berbasis
                komponen.
              </p>
              <footer>
                <img src={nxc} alt="nexertc" className="nxcs1" />
              </footer>
            </article>

            <article className="imgdes2">
              <figure>
                <img className="imgs1" src={figma} alt="figma" />
              </figure>
              <h3 className="heading3">Figma</h3>
              <p className="paragraft1">
                Tools desain UI/UX untuk membuat wireframe, prototype, dan
                desain tampilan.
              </p>
              <footer>
                <img src={nxc} alt="nexertc" className="nxcs1" />
              </footer>
            </article>
          </section>
        </section>

        <footer>
          <button onClick={() => navigate("/Htmljs")}>click here</button>
        </footer>
      </article>
    </div>
  );
}
