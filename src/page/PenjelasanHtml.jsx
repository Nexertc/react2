import React, { useEffect } from "react";
import Nav from "../components/nav";
import Footer from "../components/footer";
import "./Htmljs.css";
import ScrollToTop from "../components/ScrolToTop";
import { useNavigate } from "react-router-dom";
import "./stylep1.css";

export default function PenjelasanHtml() {
  const navigate = useNavigate();

  return (
    <div className="konten KontenP1">
      <Nav class1="navigasi" />
      <ScrollToTop />
      <main className="main1">
        <section className="sec1h1">
        <h2>Apa itu HTML</h2>

        <p>  HTML adalah kepanjangan dari HyperText Markup
Language. Jika diibaratkan, HTML itu seperti kerangka
atau pondasi sebuah bangunan. Tanpa HTML, 
sebuah website tidak akan memiliki struktur yang jelas.
HTML  digunakan untuk menyusun bagian halaman
seperti judul, paragraf, daftar, gambar, tombol, dan
elemen lainnya agar  konten tampil teratur dan mudah 
dibaca.</p>

 <h3>30 Mei 2026</h3>
        </section>
       


        <section className="sec1h2">
      hello
        </section>
      </main>

      <Footer />
    </div>
  );
}