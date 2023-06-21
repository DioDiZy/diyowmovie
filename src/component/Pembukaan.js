import { Container, Button, Row, Col } from "react-bootstrap";
const Pembukaan = () => {
  return (
    <div>
      <div className="Intro">
        <Container className="text-white d-flex text justify-content-center align-item-center ">
          <Row>
            <Col>
              <div className="tittle">Bioskop Praktis </div>
              <div className="tittle">Nonton Gratis</div>
              <a className="text-decoration-none" href="#daftarfilm">
                <Button className="mt-4 d-flex m-auto" variant="dark">
                  Lihat Film
                </Button>
              </a>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};
export default Pembukaan;
