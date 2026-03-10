import "./App.css";
import "./nav.css";
import Nav from "./nav";
import { useNavigate } from "react-router-dom";
import App2 from "./App2";

function App(){

const navigate = useNavigate();

return(
<div className="konten">
  <Nav 
  class1= "navigasi"
  class2 ="text"
  />
 
<button onClick ={()=> navigate("/app2")} >klik disini</button>

</div>
);
}

export default App;