import "./komentar.css";
import { useEffect, useState } from "react";
import {MessageCircle} from "react-feather"
// import Nav from "../components/nav";
// import Footer from "../components/footer";

export default function Komentar() {
  const [nama, setNama] = useState("");
  const [pesan, setPesan] = useState("");
  const [komentar, setKomentar] = useState([]);

  const API_URL =
    "https://script.google.com/macros/s/AKfycbxZigQgWpRr_el-xw1nbjeIsUrzTu3JuRfBx4STc-6sx2zkxxVV1zjuIiusE73lDMNb/exec";

  async function ambilKomentar() {
    try {
      const res = await fetch(API_URL);
      const data = await res.json();
      setKomentar(data.reverse());
    } catch (err) {
      console.error(err);
    }
  }

  async function kirimKomentar(e) {
    e.preventDefault();

    await fetch(API_URL, {
      method: "POST",
      body: JSON.stringify({
        nama,
        pesan,
      }),
    });

    setNama("");
    setPesan("");

    ambilKomentar();
  }

  useEffect(() => {
    ambilKomentar();
  }, []);

  return (
    <section className="komentar">
      <div className="row1">
        <form onSubmit={kirimKomentar}>
          <h6>  <MessageCircle />Tambahkan Komentar</h6>
          <input
            type="text"
            placeholder="Nama"
            value={nama}
            onChange={(e) => setNama(e.target.value)}
            required
          />

          <textarea
            placeholder="Tulis komentar..."
            value={pesan}
            onChange={(e) => setPesan(e.target.value)}
            required
          />

          <button type="submit">Kirim</button>
          
          
        </form>

       <div className="list-komentar">
        <h6>Daftar Komentar <MessageCircle /></h6>
          {komentar.map((item, index) => (
            <article key={index} className="card-komentar">
              <h4>{item.nama}</h4>
              <p>{item.pesan}</p>
              <span>
                <p>{item.tanggal}</p>
              </span>
            </article> 
          ))}
        </div> 
      </div>
    </section>
  );
}
