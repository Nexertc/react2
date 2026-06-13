import React from "react";
import { useNavigate } from "react-router-dom";
import "./section2.css";
import html5 from "../../img/html5.jpg";
import css from "../../img/css.png";
import js from "../../img/javascript.png";
import twebsite from "../../img/twebsite.jpg";
import reactimg from "../../img/react.png";
import figma from "../../img/figma.png";
import nxc from "../../img/nxc2.png";
import btnjs from "../../img/btnjs.jpg";


export default function Section1() {
  const navigate = useNavigate();
  return (
    <div className="kontenS1" id="sec1">
      <article>
        <header>
          <h2 className="heading2">Hal hal yang sudah saya pelajari</h2>
          <p className="section-intro">
            Belajar otodidak dari kelas 10 smk, mulai dari html, css, js dasar
            sampai menengah ke react dan php, dan teknologi yang lainnya seperti
            git dan github. Saya lebih menyukai ke arah Frontend developer. Di bawah ini adalah 
            hal-hal yang sudah saya pelajari seperti library, tools, design, dll. Terimakasih 
            sudah menggunjungi website saya.
          </p>
        </header>
        <hr className="hrs1" />
        <section>
          <section className="imgdes1">
            <article className="imgdes2 fade-up" onClick={() => navigate("/penjelasan-html")}>
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

            <article className="imgdes2 fade-up">
              <figure>
                <img className="imgs1" src={css} alt="css" />
              </figure>
              <h3 className="heading3">CSS</h3>
              <p className="paragraft1">
                Cascading Style Sheets, digunakan untuk mengatur tampilan
                dari warna, layout dll pada sebuah halaman website.
              </p>
              <footer>
                <img src={nxc} alt="nexertc" className="nxcs1" />
              </footer>
            </article>

            <article className="imgdes2 fade-up">
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

            <article
              className="imgdes2 fade-up"
              onClick={() => navigate("/Htmljs")}
            >
              <figure>
                <img className="imgs1" src={btnjs} alt="btnjs" />
              </figure>
              <h3 className="heading3">Button JS</h3>
              <p className="paragraft1">
                Mengkombinasikan tag Button dengan JavaScript.
              </p>
              <footer>
                <img src={nxc} alt="nexertc" className="nxcs1" />
              </footer>
              <h3 className="h3ex">Exlusif ICTGIS</h3>
            </article>

            <article className="imgdes2 fade-up"  onClick={() => 
              navigate("/Kirim")}>             
              <figure>
                <img className="imgs1" src={twebsite} alt="website" />
              </figure>
              <h3 className="heading3">Kirim Gambar</h3>
              <p className="paragraft1">
               Kirimgambar anda untuk Developer website ini 
               jika diperlukan
              </p>
              <footer>
                <img src={nxc} alt="nexertc" className="nxcs1" />
              </footer>
            </article>

            <article className="imgdes2 fade-up">
              <figure>
                <img
                  className="imgs1"
                  src="https://media2.dev.to/dynamic/image/width=1280,height=720,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2Fjplnld3gptkremcqom5q.png"
                  alt="react"
                />
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

            <article className="imgdes2 fade-up">
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
            <hr className="hrs1" />
        </section>
      </article>
    </div>
  );
}