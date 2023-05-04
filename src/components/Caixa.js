import { useState } from "react";
import Form from "react-bootstrap/Form";
import Alert from "react-bootstrap/Alert";

import { useAtom, atom } from "jotai";
import { texto } from "../App";

export const colorAtom = atom("#111111");

export default function Caixa() {
  const [email, setEmail] = useAtom(texto);
  const [cor, setCor] = useAtom(colorAtom);

  return (
    <div>
      <Alert variant="danger">
        <Form>
          <Form.Control
            value={email}
            type="text"
            placeholder="escreva aqui"
            onChange={(callback) => setEmail(callback.target.value)}
          />
          <hr />
          <Form.Control
            type="color"
            onChange={(callback) => setCor(callback.target.value)}
          />
        </Form>
        <p style={{ color: cor }}>{email}</p>
      </Alert>
    </div>
  );
}
