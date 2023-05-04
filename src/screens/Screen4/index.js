import "./style.css";
import Alert from "react-bootstrap/Alert";
import Button from "react-bootstrap/Button";
import Stack from "react-bootstrap/Stack";

import { useNavigate } from "react-router-dom";

export default function Screen4() {
  const navigation = useNavigate();

  return (
    <div>
      <Stack style={styles.fundo} direction="vertical" gap={3}>
        <Alert variant="success">
          <Stack gap={2} className="text-center">
            <Stack direction="horizontal" gap={2}>
              <br />
              <br />
              <Button variant="danger" onClick={() => navigation("/")}>
                {"<Voltar"}
              </Button>
              <Alert.Heading style={{ marginLeft: "32%" }}>
                Integrante
              </Alert.Heading>
            </Stack>
          </Stack>
        </Alert>
        <div>
          <img className="Logo2" src={require("./MinhaFoto.jpeg")}></img>
        </div>
        <Alert className="apresentacao2">Integrante: Pedro Vinícius</Alert>
      </Stack>
    </div>
  );
}

const styles = {
  meio: {
    top: "1%",
    margin: 10,
    alighItems: "center"
  },
  fundo: {
    background: "blue",
    height: "100vh"
  }
};
