import { useState } from "react";

export default function Form() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [success, setSuccess] = useState(false);

  

  const WEB_APP_URL =
    "https://script.google.com/macros/s/AKfycbwKD0erLKHE92DNA1An32kvNapZrGLAdJzBYOU1jGRa3uoeLmQJpV_Dk0tt9tbfyYHwwg/exec";

  const handleSubmit = async (e) => {
  e.preventDefault();

  try {
    const response = await fetch(WEB_APP_URL, {
      method: "POST",
      body: JSON.stringify({
        username,
        password,
      }),
    });

    const result = await response.text();

    console.log(result);

    setSuccess(true);

    setUsername("");
    setPassword("");

    setTimeout(() => {
      setSuccess(false);
    }, 3000); // tunggu 3 detik
  } catch (err) {
    console.error(err);
    alert("Gagal mengirim data: " + err.message);
  }
};
  return (
   <div className="form-container" id="form">
 
 <article>
  <div className="imgform"></div>
  <h6>Ardeva <span>Alghifari</span>.</h6>
  <div className="overlayform"></div>
 </article>

  <form onSubmit={handleSubmit}>
    <h6>Masukan Saran anda:</h6>
    <input
      type="text"
      id="username"
      name="username"
      placeholder="masukan nama anda"
      autoComplete="username"
      value={username}
      onChange={(e) => setUsername(e.target.value)}
    />

    <input
      type="text"
      id="password"
      name="password"
      placeholder="masukan saran anda"
      autoComplete="current-password"
      value={password}
      onChange={(e) => setPassword(e.target.value)}
    />

    <button
  type="submit"
  className={success ? "btn-success" : "btn-submit"}
  disabled={success}
>
  {success ? "Berhasil Dikirim ✓" : "Kirim"}
</button>
  </form>
</div>
  );
}
