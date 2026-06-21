import Nav from "../components/nav";
import Footer from "../components/footer";
import "./Htmljs.css";
import ScrollToTop from "../components/ScrolToTop";
import { useNavigate } from "react-router-dom";
import "./stylep1.css";
import nxc from "../img/nxc2.png";

export default function PenjelasanHtml({
  judul1,
  tanggal,
  paragraft,
  content2
}) {
  const navigate = useNavigate();

  return (
    <div className="konten KontenP1">
      <Nav class1="navigasi" />
      <ScrollToTop />
      <article className="articleH">
        <article className="sec1h1">
          <header className="headerp">
            <h1>{judul1}</h1>
            <p>{tanggal}</p>
            <img src={nxc} alt="nxc" />
          </header>
          <section className="cosh1">
          <div>{paragraft}</div>
            <hr className="garis1" />
            <figure>
              <img src={nxc} alt="nxc" />
            </figure>
          </section>

          {/* <img className="imgsh1" src={html5} alt="html5" /> */}
        </article>

        <article className="sec1h2">
        {content2}
        </article>
      </article>

      <button onClick={() => navigate("/")} className="btnmateri">
        Kembali
      </button>

      <Footer />
    </div>
  );
}
