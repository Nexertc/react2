import "./button.css";

function Button({ tujuan, teks, className }) {
  return (
    <button className={`btn1 ${className}`} onClick={tujuan}>
      {teks}
    </button>
  );
}

export default Button;