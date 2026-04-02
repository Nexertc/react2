import html5 from "../../img/html5.jpg";
import css from "../../img/css.png";
import "./section1.css";

export default function Section1() {
return(
<div className="konten">
<article>
     <h2 align="center">Hal hal yang saya pelajari</h2>
 <section className="imgdes1">
     <div className="imgdes2">
         <img className="imgs1" src={html5} alt="html5" />
         <h3 className="heading3">HTML</h3>
         <p className="paragraft1">Hypertext Markup Language</p>
     </div>

    <div className="imgdes2">
         <img className="imgs1" src={css} alt="css" />
         <h3 className="heading3">CSS</h3>
         <p className="paragraft1" >Cascading Style Sheets</p>
    </div>

 </section>
 </article>
</div>
);

}