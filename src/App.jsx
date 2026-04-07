import { useState } from "react";
import "./App.css";
import Nav from "./components/nav";
import "./components/nav.css";
import { useNavigate } from "react-router-dom";
import App2 from "./App2";
import Button from "./components/button";
import ardeva from "./img/coc3.webp";
import clan from "./img/clan3.png";
import ig from "./img/ig.png";
import github from "./img/github.png";
import yt from "./img/yt.png";
import tiktok from "./img/tiktokrm.png";
import nxc from "./img/nxc2.png";
import Section1 from "./components/section/Section1";
import Footer from "./components/footer";
import Section2 from "./components/section/section2";


export default function App() {
  const navigate = useNavigate();

  const [showPopup, setShowPopup] = useState(false);

  function klikmedia() {
    setShowPopup(!showPopup);
  }

  return (
    <div className="konten">
      <header>
        <Nav class1="navigasi" />
        <div className="cns">
          <div className="imgd1">
            <div className="imglz">
              <div className="img1">
                <h2 className="h2img1">Nexertc</h2>
              </div>
              <img className="nxc" src={nxc} alt="nxc" />
              <div className="overlay"></div>
            </div>

            <div className="containerbtn">
              <Button teks="Tentang Saya" className="btnabout" />

              <Button
                teks="Kunjungi media"
                className="btnabout btnmedia"
                tujuan={klikmedia}
              />
            </div>
          </div>
          <div className="des">
            <h3>Ardeva Alghifari</h3>
            <p>
             Website Ardeva Alghifari seorang pelajar dari sekolah SMK Geo Informatika, dan 
             lulusan dari SMP Negeri 01 Dramaga
              lahir pada 28 mei 2009 di Sragen Jawa Tengah. 
              Jika ada keperluan dengan saya bisa kunjungi media sosial saya di bawah ini.
            </p>

            <div className="imgd2">
              <img className="img2" src={clan} alt="clan" />
              <img className="img2" src={ig} alt="ig" />
              <img className="img2" src={github} alt="github" />
              <img className="img2" src={yt} alt="yt" />
              <img className="img2" src={tiktok} alt="tiktok" />
            </div>
           

          </div> {/* classname des */}
        </div> {/* classname cns */}
      </header>

      {showPopup && <div className="popup"> </div>}
      {showPopup && <div onClick={klikmedia} className="overlaypopup"></div>}

     <Section2 />
      <Section1 />
    
      <Footer />
    </div> // <---  classname konten
  );
}
