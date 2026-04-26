import React from "react";
import Nav from "../components/nav";
import Footer from "../components/footer";
import btnjs from "../img/btnjs.jpg";
import "./Htmljs.css";
import { useNavigate } from "react-router-dom";
import { useState, useRef } from "react";

export default function Htmljs() {
  const navigate = useNavigate();
  const codeRef = useRef();
  const [copied, setCopied] = useState(false);

  const salinCode = () => {
    const text = codeRef.current.innerText;
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="konten KontenP1">
      <Nav class1="navigasi" />
      <button className="btnN" onClick={() => navigate("/")}>
        Back
      </button>
      <section>
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
      <article className="materi-container">
        <section className="materi-card">
          <header>
            <h2>2. Event onclick</h2>
          </header>
          <article>
            <pre>
              <code ref={codeRef}>{`
<button onclick="halo()">Klik</button>
<script>
function halo() {
  alert("Halo Dunia!");
}
</script>

`}</code>
            </pre>
            <button
              className={`SaCode ${copied ? "copied" : ""}`}
              onClick={salinCode}
            >
              {copied ? "Tersalin" : "Salin Code"}
            </button>

            <h4>Contoh tombol</h4>
            <button onClick={() => alert("helo")}>Click Here</button>
          </article>
        </section>

                    <section className="materi-card">
          <header>
            <h2>2. Event onclick</h2>
          </header>
          <article>
            <pre>
              <code ref={codeRef}>{`
<button onclick="halo()">Klik</button>
<script>
function halo() {
  alert("Halo Dunia!");
}
</script>

`}</code>
            </pre>
            <button
              className={`SaCode ${copied ? "copied" : ""}`}
              onClick={salinCode}
            >
              {copied ? "Tersalin" : "Salin Code"}
            </button>

            <h4>Contoh tombol</h4>
            <button onClick={() => alert("helo")}>Click Here</button>
          </article>
        </section>

      </article>

      <Footer />
    </div>
  );
}
