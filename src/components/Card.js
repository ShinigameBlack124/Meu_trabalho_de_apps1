export default function Card(props) {
  let localInterno;
  if (props.local == null) {
    localInterno = "Sem local definido";
  } else {
    localInterno = props.local;
  }

  return (
    <div className="Card">
      <h1 style={{ background: props.cor }} className="Titulo">
        Convite✨
      </h1>
      <h2 className="Subtitulo">Para: {props.convidado} ☕🤞</h2>
      <p className="Texto">🌍: {localInterno}</p>

      <div className="Texto">Mínimo R$100 em pix🤳</div>

      <div className={props.tipo}>{props.children}</div>
    </div>
  );
}
