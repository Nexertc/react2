import Button from "../components/button";
import ardeva from "../img/coc3.webp";
import clan from "../img/clan3.png";
import ig from "../img/ig.png";
import github from "../img/github.png";
import yt from "../img/yt.png";
import tiktok from "../img/tiktokrm.png";
import nxc from "../img/nxc2.png";
import html5 from "../img/html5.jpg";
import { useState, useEffect } from "react";
import Nav from "../components/nav";
import "../components/nav.css";
import { Youtube, GitHub, Instagram } from "react-feather";
import { useNavigate } from "react-router-dom";
import Popup from "./Popup";

export default function Header() {
const Navigate = useNavigate();

  function bukaLink(url) {
    window.open(url, "_blank");
  }
  const [showPopup, setShowPopup] = useState(false);

  function klikmedia() {
    setShowPopup(!showPopup);
    document.body.style.overflowY = showPopup ? "auto" : "hidden";
  }

  return (
    <div>
      <header>
        <Nav class1="navigasi" nexertc="#sec1" form="#form" />
        <article className="cns">
          <section className="imgd1 fade-up">
            <div className="imglz">
              <figure className="img1">
                <h2 className="h2img1">
                  Ardeva <span>Alghifari</span>.
                </h2>
              </figure>
              <img className="nxc" src={nxc} alt="nxc" />
              <div className="overlay"></div>
            </div>

            <section className="containerbtn">
              <Button teks="Open Page" className="btnabout" href="#sec1" />

              <Button
                teks="Portal Halaman"
                className="btnabout btnmedia"
                tujuan={klikmedia}
                href="#"
              />
            </section>
          </section>
          <section className="des fade-up">
            <h2>
              Ardeva <span>Alghifari</span>.
            </h2>
            <p>
              Website ini dibuat menggunakan library bernama <b>React JS</b> dan
              tols bernama
              <b> vite</b>, dibuat oleh Ardeva Alghifari seorang pelajar dari
              sekolah SMK Geo Informatika, dan lulusan dari SMP Negeri 01
              Dramaga lahir pada 28 mei 2009 di Sragen Jawa Tengah. Jika ada
              keperluan dengan saya bisa kunjungi media sosial saya di bawah
              ini.
            </p>
            <figure className="imgd2">
              <img className="img2" src={clan} alt="clan" />

              <a
                href="https://www.instagram.com/avealgh?igsh=MTc5Z2dtMWtkMzFsbQ=="
                className="img2"
                aria-label="instagram"
              >
                <Instagram className="icon2 " />
              </a>

              <a href="" className="img2" aria-label="youtube">
                <Youtube className="icon2 " />
              </a>

              <a
                href="https://github.com/Nexertc"
                className="img2"
                aria-label="github"
              >
                <GitHub className="icon2 " />
              </a>

              <img
                className="img2"
                src={tiktok}
                alt="tiktok"
                aria-label="tiktok"
                onClick={() =>
                  bukaLink(
                    "https://www.tiktok.com/@nexertc?_r=1&_t=ZS-91lu3QryLqh",
                  )
                }
              />
            </figure>{" "}
            {/* classname imgd2 */}
            <img className="nxcX" src={nxc} alt="nxc" />
          </section>{" "}
          {/* classname des */}
        </article>{" "}
        {/* classname cns */}
      </header>

      {showPopup && (
        <Popup />
      )}

      {showPopup && <div onClick={klikmedia} className="overlaypopup"></div>}
    </div>
  );
}
