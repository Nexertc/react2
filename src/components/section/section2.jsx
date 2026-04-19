import "./section2.css";
import babakan from "../../img/babakan.jpg";
import sadar from "../../img/sadar.jpg";
import geoinformatika from "../../img/geoinformatika.webp";
import nxc from "../../img/nxc.png";

export default function Section2() {
  return (
    <div className="konten2">
      <section className="section2v">
        <img className="nxcsection2" src={nxc} alt="nxc" />
        <div className="des2v">
          <p>
            Website Ardeva Alghifari temukan inspirasi atau kebutuhan anda
            sekarang
          </p>
          <button>Click Here</button>
        </div>
      </section>

     <section className="box1s2">
  <h3 className="boxh3">Hyperlink tag:</h3>

  <ul className="box2s2">
    <li><a href="#" className="pglink">#Ardeva Alghifari</a></li>
    <li><a href="#" className="pglink">#Basic</a></li>
    <li><a href="#" className="pglink">#Website</a></li>
    <li><a href="#" className="pglink">#Design</a></li>
  </ul>

  <ul className="box2s2">
    <li><a href="#" className="pglink">#Sekolah</a></li>
    <li><a href="#" className="pglink">#ReactJS</a></li>
    <li><a href="#" className="pglink">#Figma</a></li>
    <li><a href="#" className="pglink">#WhiteHookX</a></li>
    <li><a href="#" className="pglink">#2009</a></li>
    <li><a href="#" className="pglink">#Jawa Tengah</a></li>
    <li><a href="#" className="pglink">#Game</a></li>
  </ul>
</section>

      
 {/* <h4 className="h4section2">Riwayat Pendidikan</h4>
      <section className="desection2">
        <figure className="figureimg1">
          <img src={babakan} alt="Babakan" />
          <p>SDN Babakan Dramaga 01</p>
        </figure>
        <figure className="figureimg1">
          <img src={sadar} alt="Sadar" />
          <p>SMPN Negeri 01 Dramaga</p>
        </figure>
        <figure className="figureimg1">
          <img src={geoinformatika} alt="Geoinformatika" />
          <p>SMK GeoInformatika</p>
        </figure>
      </section> */}
    </div>
  );
}
