import "./nav.css";
import nxc from "../img/nxc.png";

function Nav({class1} ) {
return (
 <div className="nav">
  <nav className={class1}>  
<div className="containerlink">
     <a className="link1 blog" href="https://ardevaalghifari.blogspot.com/"><h4>Blog</h4></a>
      <a className="link1" href="https://sociabuzz.com/ardevanxc/tribe"><h4>Dukungan</h4></a>
       <a className="link1" href="#"><h4>Nexertc</h4></a>
       </div>

   <img className="nxcnav" src={nxc} alt="nxc" />
   </nav>
 </div>
);
}

export default Nav;