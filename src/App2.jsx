import "./App.css";
import "./components/nav.css";
import Nav from "./components/nav";
import { useNavigate } from "react-router-dom";
import App from "./App";

function App2(){
const navigate = useNavigate();
return(
<div className="konten">
  <Nav 
  class1= "navigasi"
  class2 ="text"
  />
  <h4>helo</h4>
 
<button onClick ={()=> navigate("/")} >klik disini</button>

</div>
);
}

export default App2;