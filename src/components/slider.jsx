import "./slider.css";
import { useEffect, useState } from "react";
import imgreact from "../img/react.png";
import js from "../img/javascript.png";
import ardeva from "../img/ardeva.png";
import space from "../img/space.webp";
import nxcX from "../img/nxc2.png";

export default function Slider() {
  const images = [
    "https://media2.dev.to/dynamic/image/width=1280,height=720,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2Fjplnld3gptkremcqom5q.png",
    ardeva,
    "https://media.licdn.com/dms/image/v2/D4E12AQEP1Ce5MUm5pw/article-cover_image-shrink_600_2000/article-cover_image-shrink_600_2000/0/1687871753149?e=2147483647&v=beta&t=cgEyXmxhvO5EAqwnTBx8sLxQNZfbFO9IdH9UVM4JLiE",
    js,
    space
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

  const tags1 = [
  ["React", "https://react.dev"],
  ["UI Design", "https://figma.com"],
  ["My Github", "https://github.com/Nexertc"],
  ["Portfolio", "https://nexertc.vercel.app"],
];

const tags2 = [
  ["ReactJS", "https://react.dev"],
  ["Figma App", "https://figma.com"],
  ["GitHub Profile", "https://github.com/Nexertc"],
  ["Tailwind CSS", "https://tailwindcss.com"],
  ["Vite Build Tool", "https://vitejs.dev"],
    ["JavaScript", "https://developer.mozilla.org/en-US/docs/Web/JavaScript"],
];



  return (
    <div className="kontenS">
      <div className="slider fade-up">
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

  {/* DOTS */}
  <div className="dots">
    {images.map((_, i) => (
      <button
        key={i}
        className={`dot ${index === i ? "active" : ""}`}
        onClick={() => setIndex(i)}
      ></button>
    ))}
  </div>
      </div>

      <article className="containerS fade-up">
        <h3 className="headingS">Hyperlink Tag:</h3>
        <hr className="hrS" />

<ul className="box2s2">
  {tags1.map(([text, url]) => (
    <li key={text}>
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className="pglink"
      >
        #{text}
      </a>
    </li>
  ))}
</ul>

      <ul className="box2s2">
  {tags2.map(([text, url]) => (
    <li key={text}>
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className="pglink"
      >
        #{text}
      </a>
    </li>
  ))}
</ul>
        <img
          className="imgf"
          src="https://skillicons.dev/icons?i=html,css,js,php,figma,git,github,vscode,react,nodejs,windows,canva&perline=6"
        />
           <img className="nxcX" src={nxcX} alt="nxc" />
      </article>
    </div>
  );
}
