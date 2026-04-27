import React from "react";
import Nav from "../components/nav";
import Footer from "../components/footer";
import MateriC from "./MateriC";
import btnjs from "../img/btnjs.jpg";
import "./Htmljs.css";
import "./MediaHP.css";
import { useNavigate } from "react-router-dom";

export default function Htmljs() {
  const navigate = useNavigate();

  return (
    <div className="konten KontenP1">
      <Nav class1="navigasi" />
      <button className="btnN" onClick={() => navigate("/")}>
        Back
      </button>
      <section>
        <h4 className="H4HtmlJS1">Mengkombinasikan Tag tombol HTML dengan JavaScript</h4>
        <p className="P1HtmlJs1">Tag button digunkan untuk membuat tombol dan 
          javascript digunakan untuk membuat tombol menjadi interaktif.
        </p>
        <div className="ImgdesH">
          <img
            className="ImgbtnJs"
            src={btnjs}
            alt="Tombol HTML & JavaScript"
          />
          <div className="ImgDesH2">
            <h3 className="H3pageJ">
              Membuat tombol menggunakan HTML dan JavaScript
            </h3>
            <p>
              Di halaman website saya ini saya akan membahas bagaimana cara
              membuat tombol menjadi interaktif dengan menggunkana JavaScript
              form Ardeva Alghifari
            </p>
          </div>
        </div>
      </section>

      <MateriC />

      <Footer />
    </div>
  );
}
