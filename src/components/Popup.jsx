import nxc from "../img/nxc2.png";
import html5 from "../img/html5.jpg";
import "./popup.css";
import css from "../img/css.png";
import js from "../img/javascript.png";
import twebsite from "../img/twebsite.jpg";
import reactimg from "../img/react.png";
import btnjs from "../img/btnjs.jpg";
import { XCircle } from "react-feather";

export default function Popup() {
  return (
    <div className="popup">

    <button className="btnclose"><XCircle  className="popupx"/></button>
    <section className="gridpopup">
        
      <div className="itempopup">
        <img className="imgp1" src={html5} alt="foto" />
        <h3>HTML</h3>
        <p>
          HyperText Markup Language, digunakan untuk membuat struktur dasar
          halaman website.
        </p>
        <img className="imgp2" src={nxc} alt="nexertc" />
      </div>
      <div className="itempopup">
        <img className="imgp1" src={css} alt="foto" />
        <h3>HTML</h3>
        <p>
          HyperText Markup Language, digunakan untuk membuat struktur dasar
          halaman website.
        </p>
        <img className="imgp2" src={nxc} alt="nexertc" />
      </div>
      <div className="itempopup">
        <img className="imgp1" src={js} alt="foto" />
        <h3>HTML</h3>
        <p>
          HyperText Markup Language, digunakan untuk membuat struktur dasar
          halaman website.
        </p>
        <img className="imgp2" src={nxc} alt="nexertc" />
      </div>
      <div className="itempopup">
        <img className="imgp1" src={twebsite} alt="foto" />
        <h3>HTML</h3>
        <p>
          HyperText Markup Language, digunakan untuk membuat struktur dasar
          halaman website.
        </p>
        <img className="imgp2" src={nxc} alt="nexertc" />
      </div>

      <div className="itempopup">
        <img className="imgp1" src={twebsite} alt="foto" />
        <h3>HTML</h3>
        <p>
          HyperText Markup Language, digunakan untuk membuat struktur dasar
          halaman website.
        </p>
        <img className="imgp2" src={nxc} alt="nexertc" />
      </div>
      
    </section>
    </div>
  );
}
