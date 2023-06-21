import { Container, Card, Row, Col, InputGroup, Form } from "react-bootstrap";
import { AiOutlineSearch } from "react-icons/ai";
import { getTrendList, searchTrend } from "../API/api";
import { useEffect, useState } from "react";
const Trending = () => {
  const [TrendMovie, setTrendMovies] = useState([]);

  useEffect(() => {
    getTrendList().then((rslt) => {
      setTrendMovies(rslt);
    });
  }, []);
  const BaseIMGURL = process.env.REACT_APP_BASEIMGURL;

  const TrendMovieList = () => {
    return TrendMovie.map((trending, i) => {
      return (
        <Col md={4} className="movieWrapper" key={i}>
          <Card className="bg-dark text-white movieImage">
            <Card.Img src={`${BaseIMGURL}/${trending.poster_path}`} alt="card-image" className="Images"></Card.Img>
            <div className="p-2 m-1">
              <Card.Title className="text-center tittle ">{trending.title}</Card.Title>
              <Card.Text className="overview">{trending.overview}</Card.Text>
              <Card.Text className="text-end mb-2 text-warning">{trending.vote_average}</Card.Text>
            </div>
          </Card>
        </Col>
      );
    });
  };

  const searchtrend = async (q) => {
    if (q.length > 3) {
      const query = await searchTrend(q);
      setTrendMovies(query.results);
    }
  };
  return (
    <div>
      <div>
        <Container className="text-white" id="trending">
          <br />
          <Row>
            <Col md={4}>
              <h1 className="d-absoloute">Trending</h1>
            </Col>
            <Col md={9}>
              <InputGroup>
                <InputGroup.Text id="basic-addon1">
                  <AiOutlineSearch />
                </InputGroup.Text>
                <Form.Control placeholder="Cari Film Kesayangan Anda ..." onChange={({ target }) => searchtrend(target.value)} />
              </InputGroup>
            </Col>
          </Row>
          <Row className="Container-Film">
            <TrendMovieList />
          </Row>
        </Container>
      </div>
    </div>
  );
};
export default Trending;
