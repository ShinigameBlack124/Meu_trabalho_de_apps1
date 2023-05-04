import { useState } from "react";

export default function Quad(props) {
  const [espacamento, setEspacamento] = useState(15);

  const [number, setNumber] = useState(1);

  const [color, setColor] = useState(props.cor);

  function aviso() {
    setNumber(number + 1);
    setColor("black");
  }

  function updateSize() {
    setEspacamento(espacamento + 10);
  }

  return (
    <div
      className="Card"
      style={{ padding: espacamento, background: color }}
      onClick={() => updateSize()}
    >
      <div className="Texto">
        {props.children} {number}
      </div>
    </div>
  );
}
