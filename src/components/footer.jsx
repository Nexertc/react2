import React from "react";
import "./footer.css";
import footerimg from "../img/footerimg.jpeg"
import nxc from "../img/nxc2.png";

export default function Footer() {
  return(
     <footer className="imgfooter">

  <div className="footer-header">
    <img className="nxcfooter" src={nxc} alt="Logo Nexertc" />
    <hr className="hr1" />
  </div>

  <nav className="deslink1">

    <section className="deslink">
      <a href="#sec1">Page</a>
      <a href="https://ardevaalghifari.blogspot.com/">Blog</a>
      <a href="">HTML</a>
      <a href="">CSS</a>
      <a href="">JavaScript</a>
    </section>

    <section className="deslink">
      <a href="https://github.com/Nexertc">GitHub</a>
      <a href="https://www.youtube.com/@beabandipr_19jt?si=lC3ickwYRK6a4w3L">
        YouTube
      </a>
      <a href="https://www.instagram.com/avealgh?igsh=MTc5Z2dtMWtkMzFsbQ==">
        Instagram
      </a>
      <a href="https://www.tiktok.com/@nexertc?_r=1&_t=ZS-91lu3QryLqh">
        TikTok
      </a>
      <a href="">Blogger</a>
    </section>

    <section className="deslink end">
      <a href="">React</a>
      <a href="">Figma</a>
      <a href="">Website</a>
      <a href="">Project</a>
      <a href="">Riwayat Pendidikan</a>
    </section>

  </nav>

  <section className="footer-bottom">
    <p>© 2026 Nexertc. All rights reserved.</p>

    <nav className="footer-social">
      <a href="https://github.com/Nexertc">GitHub</a>
      <a href="https://www.instagram.com/avealgh?igsh=MTc5Z2dtMWtkMzFsbQ==">
        Instagram
      </a>
      <a href="https://www.tiktok.com/@nexertc?_r=1&_t=ZS-91lu3QryLqh">
        TikTok
      </a>
    </nav>
  </section>

</footer>
  );
}