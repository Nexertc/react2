import { useState } from "react";

export default function MateriC() {
  const [copiedIndex, setCopiedIndex] = useState(null);

  const salinCode = (text, index) => {
    navigator.clipboard.writeText(text);
    setCopiedIndex(index);

    setTimeout(() => {
      setCopiedIndex(null);
    }, 2000);
  };

  const code1 = `
<button onclick="halo()">Klik</button>

<script>
function halo() {
  alert("Halo Dunia!");
}
</script>
`;

  const code2 = `
<p id="teks">Halo Dunia!</p>

<button onclick="ubahText()">
  Ubah Text
</button>

<script>
function ubahText() {
  document.getElementById("teks").innerHTML =
    "Text berhasil diubah!";
}
</script>
`;

  const code3 = `
<button onclick="darkMode()">
  Dark Mode
</button>

<script>
function darkMode() {
  document.body.style.backgroundColor = "black";
  document.body.style.color = "white";
}
</script>
`;

  return (
    <article className="materi-container">
      {/* Section 1 */}
      <section className="materi-card">
        <header>
          <h2>2. Event onclick</h2>
        </header>

        <article>
          <pre>
            <code>{code1}</code>
          </pre>

          <button
            className={`SaCode ${copiedIndex === 1 ? "copied" : ""}`}
            onClick={() => salinCode(code1, 1)}
          >
            {copiedIndex === 1 ? "Tersalin" : "Salin Code"}
          </button>

          <h4>Contoh tombol</h4>
          <button onClick={() => alert("helo")}>Click Here</button>
        </article>
      </section>

      {/* Section 2 */}
      <section className="materi-card">
        <header>
          <h2>3. Mengubah Text</h2>
        </header>

        <article>
          <pre>
            <code>{code2}</code>
          </pre>

          <button
            className={`SaCode ${copiedIndex === 2 ? "copied" : ""}`}
            onClick={() => salinCode(code2, 2)}
          >
            {copiedIndex === 2 ? "Tersalin" : "Salin Code"}
          </button>

          <h4>Contoh tombol</h4>
          <p id="demoText">Halo Dunia!</p>

          <button
            onClick={() => {
              document.getElementById("demoText").innerHTML =
                "Text berhasil diubah!";
            }}
          >
            Ubah Text
          </button>
        </article>
      </section>

      {/* Section 3 */}
      <section className="materi-card">
        <header>
          <h2>4. Dark Mode</h2>
        </header>

        <article>
          <pre>
            <code>{code3}</code>
          </pre>

          <button
            className={`SaCode ${copiedIndex === 3 ? "copied" : ""}`}
            onClick={() => salinCode(code3, 3)}
          >
            {copiedIndex === 3 ? "Tersalin" : "Salin Code"}
          </button>

          <h4>Contoh tombol</h4>

          <button
            onClick={() => {
              document.body.style.backgroundColor = "black";
              document.body.style.color = "white";

              setTimeout(() => {
                document.body.style.backgroundColor = "white";
                document.body.style.color = "black";
              }, 2000);
            }}
          >
            Dark Mode
          </button>
        </article>
      </section>
    </article>
  );
}