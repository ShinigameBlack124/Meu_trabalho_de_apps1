import "./style.css";
import Alert from "react-bootstrap/Alert";
import Button from "react-bootstrap/Button";
import Stack from "react-bootstrap/Stack";

import { useNavigate, Link } from "react-router-dom";

export default function Screen3() {
  const navigation = useNavigate();
  return (
    <Stack style={styles.fundo} direction="vertical" gap={3}>
      <Alert variant="success">
        <Stack gap={2}>
          <Stack direction="horizontal" gap={2}>
            <br />
            <br />
            <Button variant="danger" onClick={() => navigation("/")}>
              {"<Voltar"}
            </Button>

            <Alert.Heading style={{ marginLeft: "33%" }}>
              Contatos
            </Alert.Heading>
          </Stack>
        </Stack>
      </Alert>
      <img className="Contato" src={require("./contatos.png")}></img>
      <Stack direction="vertical" gap={2}>
        <Alert className="Caixa">
          <br />
          Emails: pedroviniciusnogueirasantanna@gmail.com
          <br />
          pientrique@gmail.com
          <br />
          pvns124@gmail.com
          <br />
          <br />
          Celular: (21)99681-6502
          <br />
          Instagram: @pvini124
        </Alert>
      </Stack>
    </Stack>
  );
}

const styles = {
  meio: {
    top: "40%",
    margin: 10,
    alighItems: "center"
  },
  fundo: {
    background: "red",
    height: "100vh"
  }
};
