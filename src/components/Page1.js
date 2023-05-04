import Alert from "react-bootstrap/Alert";
import Accordion from "react-bootstrap/Accordion";
import Badge from "react-bootstrap/Badge";

import Breadcrumb from "react-bootstrap/Breadcrumb";

import Button from "react-bootstrap/Button";
import ToggleButton from "react-bootstrap/ToggleButton";
import ToggleButtonGroup from "react-bootstrap/ToggleButtonGroup";
import { ButtonGroup } from "react-bootstrap";

export default function Page1() {
  return (
    <div>
      <Breadcrumb>
        <Breadcrumb.Item href="https://www.google.com">
          {" "}
          navegue para o inicio
        </Breadcrumb.Item>
        <Breadcrumb.Item href="https://www.google.com"> link2 </Breadcrumb.Item>
      </Breadcrumb>
      <Breadcrumb>
        <Breadcrumb.Item href="https://www.google.com">
          {" "}
          navegue para o inicio
        </Breadcrumb.Item>
        <Breadcrumb.Item href="https://www.google.com"> link2 </Breadcrumb.Item>
      </Breadcrumb>
      <Alert variant="success">
        <Alert.Heading>Título teste</Alert.Heading>
        <p>Teste 123</p>
        <hr />
        <p>1235234 </p>
        <p>
          Para outras cousas{" "}
          <Alert.Link href="https://www.google.com">click aquiiii</Alert.Link>
        </p>
      </Alert>
      <Accordion>
        <Accordion.Item eventKey="0">
          <Accordion.Header>
            Clique aqui para expandir <Badge>1</Badge>
          </Accordion.Header>
          <Accordion.Body>
            <hr />
            <Badge>#1</Badge>
            <hr /> <Badge bg="danger">#2</Badge>
            <hr />
            <Badge pill={true} bg="warning">
              #4
            </Badge>
            <hr /> <Badge bg="success">#1</Badge>
            <hr />
            <Badge bg="danger">#1</Badge>
            <hr />
            <hr />
            <Badge pill text="primary" bg="warning">
              #1
            </Badge>
            <hr />{" "}
            <Badge pill bg="danger" text="info">
              #2
            </Badge>
            <hr />
            <Badge pill bg="warning" text="success">
              #1
            </Badge>
            <hr /> <Badge bg="success">#1</Badge>
            <hr />
            <Badge bg="danger">#1</Badge>
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="1">
          <Accordion.Header>Clique aqui para expandir v2</Accordion.Header>
          <Accordion.Body>Texto novo muito importante</Accordion.Body>
        </Accordion.Item>
      </Accordion>
      <br />
      <Alert variant="warning">
        <Accordion>
          <Accordion.Item eventKey="0">
            <Accordion.Header>#1</Accordion.Header>
            <Accordion.Body>
              <Alert variant="danger">Olar</Alert>
            </Accordion.Body>
          </Accordion.Item>

          <Accordion.Item eventKey="1">
            <Accordion.Header>#2</Accordion.Header>
            <Accordion.Body>
              <Alert variant="secondary">Olar2</Alert>
              <hr />
              <Alert variant="info">Olar3</Alert>
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </Alert>
      <Button>Nome aqui</Button>
      <hr />
      <div className="d-grid gap-2">
        <Button variant="danger" size="lg" disabled={false}>
          Cuidado
        </Button>
      </div>
      <p></p>
      <Button variant="warning" size="sm" disabled>
        Aviso
      </Button>
      <br />
      <br />
      <Button variant="outline-success" size="lg">
        SUCESSO!
      </Button>
      <br />
      <br />
      <ButtonGroup>
        <ToggleButton name="radio" id="tbg-btn-1" value={1}>
          Option 1
        </ToggleButton>
        <ToggleButton name="radio" id="tbg-btn-2" value={2}>
          Option 2
        </ToggleButton>
        <ToggleButton name="radio" id="tbg-btn-3" value={3}>
          Option 3
        </ToggleButton>
      </ButtonGroup>
      <ButtonGroup></ButtonGroup>
    </div>
  );
}
