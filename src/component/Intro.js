import { Container, Button, Row, Col } from "react-bootstrap";
const Intro = () => {
  return (
    <div>
      <div className="Intro">
        <Container className="text-white d-flex text justify-content-center align-item-center ">
          <Row>
            <Col>
              <div className="tittle">Nonton Sepuasnya </div>
              <div className="tittle">Hingga Kouta Tak Tersisa</div>
              <Button className="mt-4 d-flex m-auto" variant="dark">
                Lihat Film
              </Button>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};
export default Intro;
