import "./App.css";
import { useNavigate } from "react-router-dom";
import App2 from "./App2";
import Section1 from "./components/section/Section1";
import Footer from "./components/footer";
import Section2 from "./components/section/section2";
import Header from "./components/header";

export default function App() {
  const navigate = useNavigate();

  return (
    <div className="konten">
      <Header />
      <Section2 />
      <Section1 />
      <Footer />
    </div> // <---  classname konten
  );
}
