import React from "react";
import "./footer.css";
import footerimg from "../img/footerimg.jpeg"
import nxc from "../img/nxc2.png";

export default function Footer() {
  return(
     <div className="imgfooter">
   <img className="nxcfooter" src={nxc} alt="nxc" />
   <hr className="hr1" />
 
 <div className="deslink1">
   <div className="deslink">
     <a href="https://ardevaalghifari.blogspot.com/">Blog</a>
        <a href="">About</a>
        <a href="">HTML</a>
        <a href="">CSS</a>
        <a href="">JavaScript</a>
   </div>

 <div className="deslink">
     <a href="https://github.com/Nexertc">GitHub</a>
        <a href="https://www.youtube.com/@beabandipr_19jt?si=lC3ickwYRK6a4w3L">YouTTube</a>
        <a href="https://www.instagram.com/avealgh?igsh=MTc5Z2dtMWtkMzFsbQ==">Instagram</a>
        <a href="https://www.tiktok.com/@nexertc?_r=1&_t=ZS-91lu3QryLqh">TikTok</a>
        <a href="">Bloger</a>
   </div>

   
 <div className="deslink end">
     <a href="">React</a>
        <a href="">Figma</a>
        <a href="">Website</a>
        <a href="">Project</a>
        <a href="">Riwayat Pendidikan</a>
   </div>

   </div>


  </div> // <---  classname imgfooter
  );
}