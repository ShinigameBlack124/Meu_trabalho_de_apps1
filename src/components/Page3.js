import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import Alert from "react-bootstrap/Alert";

import Offcanvas from "react-bootstrap/Offcanvas";

import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

import { useState } from "react";

export default function Page3() {
  const [cor, setCor] = useState("#ffffff");

  return (
    <div style={{ background: cor }}>
      <Form>
        <Row>
          <Col>
            <Form.Group className="mb-3">
              <Form.Label>Email:</Form.Label>
              <Form.Control type="email" placeholder="insira email aqui" />
              <Form.Text className="text-muted">Importante... {cor}</Form.Text>
            </Form.Group>
            <Form.Select size="lg">
              <option>123</option>
              <option>123</option>
              <option>123</option>
              <option>123</option>
              <option>123</option>
            </Form.Select>
          </Col>
          <Col>
            <br />
            <Form.Group className="mb-3">
              <Form.Label>Senha:</Form.Label>
              <Form.Control disabled placeholder="insira sua senha aqui" />
              <Form.Text className="text-muted">Importante...</Form.Text>
            </Form.Group>
            <Form.Check label="lembrar meu login" />
          </Col>
        </Row>
        <hr />
        <Row>
          <Col>
            <Form.Control type="file" multiple />
          </Col>
          <Col>
            <Form.Control
              defaultValue="#ab3d7c"
              type="color"
              title="Nome"
              onChange={(callback) => setCor(callback.target.value)}
            />
            <hr />
            <p>Cor: {cor}</p>
          </Col>
        </Row>
      </Form>
    </div>
  );
}
