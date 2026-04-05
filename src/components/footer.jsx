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
     <a href="">Blog</a>
        <a href="">About</a>
        <a href="">HTML</a>
        <a href="">CSS</a>
        <a href="">JavaScript</a>
   </div>

 <div className="deslink">
     <a href="">GitHub</a>
        <a href="">YouTUbe</a>
        <a href="">Instragram</a>
        <a href="">TikTok</a>
        <a href="">Bloger</a>
   </div>

   
 <div className="deslink end">
     <a href="">Blog</a>
        <a href="">About</a>
        <a href="">HTML</a>
        <a href="">CSS</a>
        <a href="">JavaScript</a>
   </div>

   </div>


  </div> // <---  classname imgfooter
  );
}