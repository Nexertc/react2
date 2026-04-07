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
          <p>Website Ardeva Alghifari temukan inspirasi
             atau kebutuhan anda sekarang</p>
          <button>Click Here</button>
         </div>

      </section>

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
