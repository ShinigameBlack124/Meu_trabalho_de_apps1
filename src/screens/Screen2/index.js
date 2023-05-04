import "./styles.css";

import Alert from "react-bootstrap/Alert";
import Button from "react-bootstrap/Button";
import Stack from "react-bootstrap/Stack";

import { useNavigate } from "react-router-dom";
import { useState } from "react";

export default function Screen2() {
  const navigation = useNavigate();

  return (
    <Stack style={styles.fundo} direction="vertical" gap={3}>
      <Alert variant="success">
        <Stack gap={2} className="text-center">
          <Stack direction="horizontal" gap={2}>
            <br />
            <br />
            <Button variant="danger" onClick={() => navigation("/")}>
              {"<Voltar"}
            </Button>

            <Alert.Heading style={{ marginLeft: "33%" }}>Sobre</Alert.Heading>
          </Stack>
        </Stack>
      </Alert>
      <img className="JSP" src={require("./JavaScript.jpg")}></img>
      <Stack direction="vertical" gap={2}>
        <Alert className="Caixa">
          <br />
          Descrição Proficional: tenho um certa experiencia três linguagens de
          programação como: PHP, JavaScript e C#
          <br />
          <br />
          Situação acadêmica: estou no ultimo ano do ensino médio técnico, sendo
          o meu TCC(Trabalho Final) sendo criar um jogo 2D utilizando Unity
        </Alert>
      </Stack>
    </Stack>
  );
}
const styles = {
  meio: {
    top: "10%",
    margin: 10
  },
  fundo: {
    background: "green",
    height: "100vh"
  }
};
