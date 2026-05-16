import Button from "../components/button";
import ardeva from "../img/coc3.webp";
import clan from "../img/clan3.png";
import ig from "../img/ig.png";
import github from "../img/github.png";
import yt from "../img/yt.png";
import tiktok from "../img/tiktokrm.png";
import nxc from "../img/nxc2.png";
import { useState, useEffect } from "react";
import Nav from "../components/nav";
import "../components/nav.css";

export default function Header() {
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
        <Nav class1="navigasi" />
        <article className="cns">
          <section className="imgd1 fade-up">
            <div className="imglz">
              <div className="img1">
                <h2 className="h2img1">Nexertc</h2>
              </div>
              <img className="nxc" src={nxc} alt="nxc" />
              <div className="overlay"></div>
            </div>

            <section className="containerbtn">
              <Button teks="Open Page" className="btnabout" href="#sec1" />

              <Button
                teks="Kunjungi media"
                className="btnabout btnmedia"
                tujuan={klikmedia}
                href="#"
              />
            </section>
          </section>
          <div className="des fade-up">
            <h3>Ardeva Alghifari</h3>
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

              <img
                className="img2"
                src={ig}
                alt="ig"
                onClick={() =>
                  bukaLink(
                    "https://www.instagram.com/avealgh?igsh=MTc5Z2dtMWtkMzFsbQ==",
                  )
                }
              />

              <img
                className="img2"
                src={github}
                alt="github"
                onClick={() => bukaLink("https://github.com/Nexertc")}
              />

              <img
                className="img2"
                src={yt}
                alt="yt"
                onClick={() =>
                  bukaLink(
                    "https://youtube.com/@beabandipr_19jt?si=lC3ickwYRK6a4w3L",
                  )
                }
              />

              <img
                className="img2"
                src={tiktok}
                alt="tiktok"
                onClick={() =>
                  bukaLink(
                    "https://www.tiktok.com/@nexertc?_r=1&_t=ZS-91lu3QryLqh",
                  )
                }
              />
            </figure>{" "}
            {/* classname imgd2 */}
             <img className="nxcX" src={nxc} alt="nxc" />
          </div>{" "}
          {/* classname des */}
        </article>{" "}
        {/* classname cns */}
      </header>
      {showPopup && <div className="popup"> </div>}
      {showPopup && <div onClick={klikmedia} className="overlaypopup"></div>}
    </div>
  );
}
