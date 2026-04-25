import React from "react";
import Nav from "../components/nav";
import Footer from "../components/footer";
import btnjs from "../img/btnjs.jpg";
import "./Htmljs.css";
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
    
    <div className="ImgdesH">
          <img className="ImgbtnJs" src={btnjs} alt="Tombol HTML & JavaScript" />
          <div className="ImgDesH2">
            <h3 className="H3pageJ">Membuat tombol menggunakan HTML dan JavaScript</h3>
          <p>Di halaman website saya ini saya akan membahas bagaimana cara membuat tombol 
            menjadi interaktif dengan menggunkana JavaScript
            form Ardeva Alghifari</p>
          </div>
    </div>
</section>
<article className="materi-container">

  <section className="materi-card">
    <header>
      <h2>1. Dasar Tombol HTML</h2>
    </header>
    <article>
      <pre>
        <code>{`<button>Klik Saya</button>`}</code>
      </pre>
    </article>
  </section>

  <section className="materi-card">
    <header>
      <h2>2. Event onclick</h2>
    </header>
    <article>
    <pre>
        <code>{`<button onclick="halo()">Klik</button>

<script>
function halo() {
  alert("Halo Dunia!");
}
</script>`}</code>
      </pre>
    </article>
  </section>

  <section className="materi-card">
    <header>
      <h2>3. Event Listener (Lebih Baik)</h2>
    </header>
    <article>
      <pre>
        <code>{`<button id="btn">Klik</button>

<script>
const tombol = document.getElementById("btn");

tombol.addEventListener("click",
 function() {
  alert("Halo!");
});
</script>`}</code>
      </pre>
    </article>
  </section>

  <section className="materi-card">
    <header>
      <h2>4. Popup</h2>
    </header>
    <article>
      <pre>
        <code>{`function popup() {
  alert("Ini popup!");
}`}</code>
      </pre>
    </article>
  </section>

  <section className="materi-card">
    <header>
      <h2>5. Dark Mode Sederhana</h2>
    </header>
    <article>
      <pre>
        <code>{`function darkMode() {
  document.body.style.background = "black";
  document.body.style.color = "white";
}`}</code>
      </pre>
    </article>
  </section>

  <section className="materi-card">
    <header>
      <h2>6. Toggle Dark Mode</h2>
    </header>
    <article>
      <pre>
        <code>{`let dark = false;

function toggleMode() {
  if (dark) {
    document.body.style.background = "white";
    document.body.style.color = "black";
    dark = false;
  } else {
    document.body.style.background = "black";
    document.body.style.color = "white";
    dark = true;
  }
}`}</code>
      </pre>
    </article>
  </section>

</article>


      <Footer />

    </div>
  );
}