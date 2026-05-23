import "./App.css";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

import App2 from "./App2";
import Section1 from "./components/section/Section1";
import Footer from "./components/footer";
import Section2 from "./components/section/section2";
import Header from "./components/header";
import nxc from "./img/nxc2.png";

export default function App() {
  const navigate = useNavigate();
  // fade up
  useEffect(() => {
    const timer = setTimeout(() => {
      const items = document.querySelectorAll(".fade-up");

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add("show");
            }
          });
        },
        {
          threshold: 0.1,
        }
      );

      items.forEach((item) => observer.observe(item));
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  // halaman utama
  return (
    <div className="konten">
      <Header />

      <main>
        <Section2 />
        <Section1 />
      </main>

      <Footer />
    </div>
  );
}