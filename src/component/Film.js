import { Container, Card, Row, Col, InputGroup, Form } from "react-bootstrap";
import { moreinfo } from "../script/sweetalert";
import { AiOutlineSearch } from "react-icons/ai";
import { getMovieList, searchMovie } from "../API/api";
import { useEffect, useState } from "react";

const Film = () => {
  const [popularMovies, setPopularMovies] = useState([]);

  useEffect(() => {
    getMovieList().then((rslt) => {
      setPopularMovies(rslt);
    });
  }, []);
  const BaseIMGURL = process.env.REACT_APP_BASEIMGURL;

  const PopularMoviesList = () => {
    return popularMovies.map((movie, i) => {
      return (
        <Col md={4} className="movieWrapper" key={i}>
          <Card className="bg-dark text-white movieImage">
            <div className="container-image">
              <Card.Img src={`/assets/img/main.jpg`} alt="card-image" className="Images"></Card.Img>
              <button className="btn" onClick={moreinfo}>
                Detail
              </button>
            </div>
            <div className="p-2 m-1">
              <Card.Title className="text-center tittle ">{movie.title}</Card.Title>
              <Card.Text className="overview">{movie.overview}</Card.Text>
              <Card.Text className="text-end mb-2 text-warning">{movie.vote_average}</Card.Text>
            </div>
          </Card>
        </Col>
      );
    });
  };

  //console.log({ popularMovies: popularMovies });
  const search = async (q) => {
    if (q.length > 3) {
      const query = await searchMovie(q);
      setPopularMovies(query.results);
    }
  };
  return (
    <div>
      <div>
        <Container className="text-white" id="daftarfilm">
          <br />
          <Row>
            <Col md={4}>
              <h1 className="d-absoloute">Daftar Film</h1>
            </Col>
            <Col md={9}>
              <InputGroup>
                <InputGroup.Text id="basic-addon1">
                  <AiOutlineSearch />
                </InputGroup.Text>
                <Form.Control placeholder="Cari Film Kesayangan Anda ..." onChange={({ target }) => search(target.value)} />
              </InputGroup>
            </Col>
          </Row>
          <Row className="Container-Film">
            <PopularMoviesList />
          </Row>
        </Container>
      </div>
    </div>
  );
};
export default Film;
