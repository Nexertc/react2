import "./slider.css";
import { useEffect, useState } from "react";
import imgreact from "../img/react.png";
import js from "../img/javascript.png";
import ardeva from "../img/ardeva.png";

export default function Slider() {
  const images = [
     imgreact,
    js,
   ardeva,
  ];

  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(1);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => {
        // kalau sudah foto terakhir → balik ke kiri
        if (prev === images.length - 1) {
          setDirection(-1);
          return prev - 1;
        }

        // kalau sudah foto pertama → balik ke kanan
        if (prev === 0 && direction === -1) {
          setDirection(1);
          return prev + 1;
        }

        return prev + direction;
      });
    }, 3000);

    return () => clearInterval(interval);
  }, [direction, images.length]);

   const tags1 = ["Ardeva Alghifari", "Basic", "Website", "Design"];
  const tags2 = [
    "SMK Geo Informatika",
    "ReactJS",
    "Figma",
    "Nexertc",
    "2009",
    "Jawa Tengah",
    "Game",
  ];

  const toGoogle = (text) =>
    `https://www.google.com/search?q=${encodeURIComponent(text)}`;


  return (
  
    <div className="kontenS">
          <div className="slider">
        <div
          className="slides"
          style={{
            transform: `translateX(-${index * 100}%)`,
          }}
        >
          {images.map((img, i) => (
            <img key={i} src={img} alt="" />
          ))}
        </div>
      </div>

          <article className="containerS">
            <h3 className="headingS">Hyperlink Tag</h3>
            <hr className="hrS" />

            
        <ul className="box2s2">
          {tags1.map((tag) => (
            <li key={tag}>
              <a
                href={toGoogle(tag)}
                target="_blank"
                rel="noopener noreferrer"
                className="pglink"
              >
                #{tag}
              </a>
            </li>
          ))}
        </ul>

        <ul className="box2s2">
          {tags2.map((tag) => (
            <li key={tag}>
              <a
                href={toGoogle(tag)}
                target="_blank"
                rel="noopener noreferrer"
                className="pglink"
              >
                #{tag}
              </a>
            </li>
          ))}
        </ul>

             <img className="imgf" src="https://skillicons.dev/icons?i=html,css,js,php,figma,git,github,vscode,react,nodejs,windows,canva&perline=7" />
  
          </article>

    </div>
  
  );
}