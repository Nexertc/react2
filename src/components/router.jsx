import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "../App";
import App2 from "../App2";
import Htmljs from "../page/Htmljs";


function Router() {
return (
<div> 
     <Routes>
          <Route path="/" element={<App />} />
          <Route path="/app2" element={<App2 />} />
           <Route path="/Htmljs" element={<Htmljs />} />
        </Routes>
</div>
);
}

export default Router;