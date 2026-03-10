import "./App.css";
import "./nav.css";
import Nav from "./nav";
import { useNavigate } from "react-router-dom";
import App from "./App";

function App2(){
const navigate = useNavigate();
return(
<div className="konten">
  
  <h4>helo</h4>
 
<button onClick ={()=> navigate("/")} >klik disini</button>

</div>
);
}

export default App2;