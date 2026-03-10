import '../App.css';
import ardeva from '../img/ardeva.png';

function Header(){
    return(
        <div className= "header">
            
   <img 
   className="img1" 
   src={ardeva} 
   alt="foto" 
   />

        </div>
    )
}

export default Header;