import "./nav.css";

function Nav({class1, class2} ) {
return (
 <div className="nav">
  <nav className={class1}>
   <h3 className={class2} >Ardeva.NXC</h3>
   </nav>
 </div>
);
}

export default Nav;