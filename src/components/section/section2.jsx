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

      <div className="box1s2">
        <h3 className="boxh3">Hyperlink tag: </h3>
        <div className="box2s2">
          <p className="pglink">#Ardeva Alghifari</p>
          <p className="pglink">#Basic</p>
          <p className="pglink">#Website</p>
          <p className="pglink">#Design</p>
        </div>

        <div className="box2s2">
          <p className="pglink">#Sekolah</p>
          <p className="pglink">#ReactJS</p>
          <p className="pglink">#Figma</p>
          <p className="pglink">#WhiteHookX</p>
          <p className="pglink">#2009</p>
          <p className="pglink">#Jawa Tengah</p>
          <p className="pglink">#Game</p>
        </div>
      </div>

      <h4 className="h4section2">Riwayat Pendidikan</h4>
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
      </section>
    </div>
  );
}
