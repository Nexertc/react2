import { useState } from "react";
import "./kirim.css";
import Nav from "../components/nav"
import Footer from "../components/footer";
import { useNavigate } from "react-router-dom";
import Form from "../components/Form";
import Ardevabg from "../components/Ardevabg";

export default function Kirim() {
const Navigate = useNavigate();

  const [nama, setNama] = useState("");
  const [file, setFile] = useState(null);
  const [status, setStatus] = useState("");

  const WEB_APP_URL =
    "https://script.google.com/macros/s/AKfycbz1B8EiUfIFXJg4SBAjEaBiYZd_f-70u5fdgztFnumlB6FoY3N9D0QAg_Qe0_fTC3o4Gw/exec";

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!file) {
      alert("Pilih file terlebih dahulu");
      return;
    }

    const reader = new FileReader();

    reader.onload = async () => {
      const base64 = reader.result.split(",")[1];

      const data = {
        nama,
        fileName: file.name,
        mimeType: file.type,
        fileData: base64,
      };

      try {
        setStatus("Sedang upload...");

        const response = await fetch(WEB_APP_URL, {
          method: "POST",
          body: JSON.stringify(data),
        });

        const result = await response.json();

        if (result.success) {
          setStatus("Upload berhasil!");
          setNama("");
          setFile(null);
        } else {
          setStatus(result.error);
        }
      } catch (err) {
        setStatus(err.message);
      }
    };

    reader.readAsDataURL(file);
  };

 return (
  <div className="container">
    <Nav class1="navigasi"
    nexertc="/"
    form="#form2"
    />
    <div className="upload-box" id="form2">

      <form className="form" onSubmit={handleSubmit}>
          <h2 className="title">Upload Foto ke Google Drive</h2>
        <input
          className="input-text"
          type="text"
          placeholder="Nama"
          value={nama}
          onChange={(e) => setNama(e.target.value)}
          required
        />

        <input
          className="input-file"
          type="file"
          accept="image/*"
          onChange={(e) => setFile(e.target.files[0])}
          required
        />

      <div className="btnk">
          <button className="button" type="submit">
          Upload
        </button>
          <button className="button button2" 
        onClick={()=> Navigate("/")}>
          kembali
        </button>
      </div>
      
      <p className="status">{status}</p>
      </form>
<Ardevabg />
    </div>

    <Footer />
  </div>
);
}