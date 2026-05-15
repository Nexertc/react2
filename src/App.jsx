import "./App.css";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import App2 from "./App2";
import Section1 from "./components/section/Section1";
import Footer from "./components/footer";
import Section2 from "./components/section/section2";
import Header from "./components/header";

export default function App() {
  const navigate = useNavigate();

  useEffect(() => {
  const items = document.querySelectorAll(".fade-up");

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
      }
    });
  });

  items.forEach((item) => observer.observe(item));

  return () => {
    items.forEach((item) => observer.unobserve(item));
    observer.disconnect();
  };
}, []);


// anomasi fade-up
  useEffect(() => {
  const items = document.querySelectorAll(".fade-up");

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
      }
    });
  });

  items.forEach((item) => observer.observe(item));
}, []);

  return (
    <div className="konten">
      <Header />
      <main>
      <Section2 />
      <Section1 />
      </main>
      <Footer />
    </div> // <---  classname konten
  );
}
