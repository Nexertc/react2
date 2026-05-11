

function Button({ tujuan, teks, className, href }) {
  return (
    <a className={`btn1 ${className}`} onClick={tujuan} href={href}>
      {teks}
    </a>
  );
}

export default Button;