import React, { useEffect } from "react";
import Nav from "../components/nav";
import Footer from "../components/footer";
import "./Htmljs.css";
import ScrollToTop from "../components/ScrolToTop";
import { useNavigate } from "react-router-dom";
import "./stylep1.css";
import html5 from "../img/html5.jpg";
import code1 from "../img/html1.png";
import nxc from "../img/nxc2.png";

export default function PenjelasanHtml() {
  const navigate = useNavigate();

  return (
    <div className="konten KontenP1">
      <Nav class1="navigasi" />
      <ScrollToTop />
      <main className="main1">
        <article className="sec1h1">
          <header className="headerp">
  
             <h1>Apa itu HTML</h1>
             <p>30 Mei 2026</p> 
     <img src={nxc} alt="nxc" />

          </header>
          <section className="cosh1">
            <p>
              HTML adalah kepanjangan dari HyperText Markup Language. Jika
              diibaratkan, HTML itu seperti kerangka atau pondasi sebuah
              bangunan. Tanpa HTML, sebuah website tidak akan memiliki struktur
              yang jelas. HTML digunakan untuk menyusun bagian halaman seperti
              judul, paragraf, daftar, gambar, tombol, dan elemen lainnya agar
              konten tampil teratur dan mudah dibaca.
            </p>

            <hr className="garis1" />
        <img src={nxc} alt="nxc" />
           
          </section>

            <img className="imgsh1" src={html5} alt="html5" />
         
        </article>

        <article className="sec1h2">
           <section className="scn1">
            <img className="imgsec1h2" src={code1} alt="html" />
          <p>
            Itu adalah sturktur dasar HTML dan tag h1 digunakan 
            untuk membuat judul pada halaman sebuah website.
          </p>
         
           </section>

          <section className="scn1">
            <img className="imgsec1h2" src={code1} alt="html" />
          <p>
            Itu adalah sturktur dasar HTML dan tag h1 digunakan 
            untuk membuat judul pada halaman sebuah website.
          </p>
         
           </section>

           <section className="scn1">
            <img className="imgsec1h2" src={code1} alt="html" />
          <p>
            Itu adalah sturktur dasar HTML dan tag h1 digunakan 
            untuk membuat judul pada halaman sebuah website.
          </p>
         
           </section>

        </article>
      </main>

      <Footer />
    </div>
  );
}
