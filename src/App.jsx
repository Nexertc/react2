import "./App.css";
import Nav from "./components/nav";
import "./components/nav.css";
import { useNavigate } from "react-router-dom";
import App2 from "./App2";
import Button from "./components/button";
import ardeva from "./img/ardeva.png";
import clan from "./img/clan3.png";
import ig from "./img/ig.png";
import github from "./img/github.png";
import yt from "./img/yt.png";
import tiktok from "./img/tiktokrm.png";

function App(){

const navigate = useNavigate();

return(
<div className="konten">
  <Nav 
  class1= "navigasi"
  class2 ="text"
  />
 
<div className="cns"> 
  <div className="imgd1">
    <img className="img1" src={ardeva} alt="Ardeva" />
   <Button 
  teks="Tentang Saya v"
  className="btnabout"
/>
  </div>
 
<div className="des">
   <h3>Ardeva Alghifari</h3>
   <p>
    Asalammualaikum wr wb. perkenalkan      nama saya
adalah Ardeva Alghifari, saya adalah seorang pelajar 
di Smk Geo Informatika, saya membuat    website ini 
sebagai contoh dari hasil karya saya dalam membuat 
website. Website ini saya buat menggunakan
   </p>

<div className="imgd2">
<img className="img2" src={clan} alt="clan" />
<img className="img2" src={ig} alt="ig" />
<img className="img2" src={github} alt="github" />
<img className="img2" src={yt} alt="yt" />
<img className="img2" src={tiktok} alt="tiktok" />
</div>

</div> {/* classname des */ }

</div>   {/* classname cns */ }

</div>  // <---  classname konten
);
}

export default App;