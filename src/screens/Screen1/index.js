import Stack from "react-bootstrap/Stack";
import Form from "react-bootstrap/Form";
import Alert from "react-bootstrap/Alert";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import "./styles.css";

import { useNavigate } from "react-router-dom";
import { useState } from "react";

export default function Screen1() {
  const navigation = useNavigate();
  const [comentarios, setComentarios] = useState([]);
  const [textoInserido, setTextoInserido] = useState("");

  const adicionar = () => {
    setComentarios([
      ...comentarios,
      <ComentariosIndividual
        key={textoInserido}
        mensagem={textoInserido}
        functionDeletar={deletar}
      />
    ]);
    console.log(comentarios);
    setTextoInserido("");
  };
  const deletar = (value) => {
    setComentarios((comentarios) => {
      return comentarios.filter((comentarios) => comentarios.key !== value);
    });
  };
  return (
    <div>
      <Stack style={styles.fundo}>
        <Stack direction="vertical" gap={3}>
          <Alert>
            <Alert.Heading className="text-center">Home</Alert.Heading>
          </Alert>
          <div>
            <img className="Logo" src={require("./MinhaFoto2.jpeg")}></img>
          </div>
          <Alert className="apresentacao">
            Nome: Pedro Vinícius Nogueira Sant'Anna
            <br />
            Idade: 18 anos
            <hr />
            Eu sou Pedro Vinícius, um aluno do IFRJ Campus Niterói e aqui vou me
            apresentar de forma profissional. Segue os links abaixo
          </Alert>

          <Alert className="text-center" style={styles.meio}>
            <Button variant="success" onClick={() => navigation("/sobre")}>
              Sobre
            </Button>
            <hr />
            <Button variant="danger" onClick={() => navigation("/contato")}>
              Contato
            </Button>
            <hr />
            <Button onClick={() => navigation("/apps")}>Apps</Button>
          </Alert>
          <Alert className="comentario">
            Área de comentarios abaixo <hr />
          </Alert>

          <Alert>
            <Form.Control
              value={textoInserido}
              onChange={(callback) => setTextoInserido(callback.target.value)}
              type="text"
            />
            <Button variant="success" onClick={() => adicionar()}>
              Publicar
            </Button>
            <hr />
            {comentarios}
          </Alert>
        </Stack>
      </Stack>
    </div>
  );
}
const ComentariosIndividual = ({ mensagem, functionDeletar }) => {
  return (
    <Alert variant="secondary">
      <Stack direction="horizontal" gap={2}>
        <Col>{mensagem}</Col>
        <Button variant="danger" onClick={() => functionDeletar(mensagem)}>
          Apagar
        </Button>
      </Stack>
    </Alert>
  );
};
const styles = {
  meio: {
    top: "1%",
    margin: 10
  },
  fundo: {
    background: "yellow",
    height: "150vh"
  }
};
