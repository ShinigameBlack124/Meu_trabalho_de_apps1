import { useState } from "react";
import Alert from "react-bootstrap/Alert";
import Button from "react-bootstrap/Button";

import { useAtom } from "jotai";
import { texto } from "../App";
import { colorAtom } from "./Caixa";

export default function Espaco() {
  const [text, setText] = useAtom(texto);
  const [cor, setCor] = useAtom(colorAtom);
  return (
    <Alert style={{ background: cor }}>
      <Alert>{text}</Alert>
      <Button
        variant="warning"
        onClick={() => (setText(""), setCor("#111111"))}
      >
        Apagar
      </Button>
    </Alert>
  );
}
