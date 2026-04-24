import "./section2.css";
import babakan from "../../img/babakan.jpg";
import sadar from "../../img/sadar.jpg";
import geoinformatika from "../../img/geoinformatika.webp";
import nxc from "../../img/nxc.png";

export default function Section2() {
  const tags1 = ["Ardeva Alghifari", "Basic", "Website", "Design"];
  const tags2 = [
    "SMK Geo Informatika",
    "ReactJS",
    "Figma",
    "Nexertc",
    "2009",
    "Jawa Tengah",
    "Game",
  ];

  const toGoogle = (text) =>
    `https://www.google.com/search?q=${encodeURIComponent(text)}`;

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
          {tags1.map((tag) => (
            <li key={tag}>
              <a
                href={toGoogle(tag)}
                target="_blank"
                rel="noopener noreferrer"
                className="pglink"
              >
                #{tag}
              </a>
            </li>
          ))}
        </ul>

        <ul className="box2s2">
          {tags2.map((tag) => (
            <li key={tag}>
              <a
                href={toGoogle(tag)}
                target="_blank"
                rel="noopener noreferrer"
                className="pglink"
              >
                #{tag}
              </a>
            </li>
          ))}
        </ul>

        <img className="imgf" src="https://skillicons.dev/icons?i=html,css,js,php,figma,git,github,vscode,react,nodejs,windows,canva&perline=7" />
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
