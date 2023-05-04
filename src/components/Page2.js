import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

export default function Page2() {
  return (
    <div>
      <Row>
        <Col>
          <Card className="text-center">
            <Card.Header>Barrinha de título</Card.Header>

            <Card.Body>
              <Card.Title>Título 1</Card.Title>
              <Card.Subtitle>Subtitulo muito importante 123</Card.Subtitle>
              <Card.Text>Alow muita coisa um dois três</Card.Text>
              <Card.Img
                style={{ width: 150 }}
                src="https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png"
              />
              <Button variant="success">Entre</Button>{" "}
              <Button variant="danger">Cancelar</Button>
            </Card.Body>
            <Card.Footer>rodapé</Card.Footer>
          </Card>
          <br />
          <br />
          <Card className="text-center" border="danger" bg="dark" text="light">
            <Card.Img src={require("../assets/fundo.jpg")} />
            <Card.ImgOverlay>
              <Card.Header>Barrinha de título</Card.Header>

              <Card.Body>
                <Card.Title>Título 1</Card.Title>
                <Card.Subtitle>Subtitulo muito importante 123</Card.Subtitle>
                <Card.Text>Alow muita coisa um dois três</Card.Text>
                <Button variant="success">Entre</Button>{" "}
                <Button variant="danger">Cancelar</Button>
              </Card.Body>

              <Card.Footer>rodapé</Card.Footer>
            </Card.ImgOverlay>
          </Card>
        </Col>
        <Col>
          <Card className="text-center">
            <Card.Header>Barrinha de título</Card.Header>

            <Card.Body>
              <Card.Title>Título 1</Card.Title>
              <Card.Subtitle>Subtitulo muito importante 123</Card.Subtitle>
              <Card.Text>Alow muita coisa um dois três</Card.Text>
              <Card.Img
                style={{ width: 150 }}
                src="https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png"
              />
              <Button variant="success">Entre</Button>{" "}
              <Button variant="danger">Cancelar</Button>
            </Card.Body>
            <Card.Footer>rodapé</Card.Footer>
          </Card>
          <br />
          <br />
          <Card className="text-center" border="danger" bg="dark" text="light">
            <Card.Img src={require("../assets/fundo.jpg")} />
            <Card.ImgOverlay>
              <Card.Header>Barrinha de título</Card.Header>

              <Card.Body>
                <Card.Title>Título 1</Card.Title>
                <Card.Subtitle>Subtitulo muito importante 123</Card.Subtitle>
                <Card.Text>Alow muita coisa um dois três</Card.Text>
                <Button variant="success">Entre</Button>{" "}
                <Button variant="danger">Cancelar</Button>
              </Card.Body>

              <Card.Footer>rodapé</Card.Footer>
            </Card.ImgOverlay>
          </Card>
        </Col>
      </Row>
    </div>
  );
}
