import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";

export class MovieDetails extends Component {
  state = {
    currentMovie: {},
    loading: true,
  };

  componentDidMount = async () => {
    try {
      await this.getMoviesDetails(this.props.match.params.id);
    } catch (e) {
      console.log(e);
    }
  };

  getMoviesDetails = async () => {
    let idFromSearchBar = this.props.match.params.id;

		try {
			let response = await fetch(
				"http://www.omdbapi.com/?apikey=1bee4676&i=" + idFromSearchBar
			);

      if (response.ok) {
        console.log(response)
        let movie = await response.json();
        console.log(movie)
        setTimeout(() => {
          this.setState({ currentMovie: movie, loading: false }); //after the fetch is completed, and we have the info the info we are asking for, we are reverting the loading state
        }, 1000);
      } else {
        console.log("An error has happened with the fetch!");
        this.setState({ loading: false });
      }
    } catch (error) {
      console.log("There has been an error with the server", error);
      this.setState({ loading: false });
    }
  };

  render() {
    let { currentMovie } = this.state;
    return (
      <Container className="my-3">
        <Row>
          <h1>{this.props.title}</h1>
          <Row>
            <Col md={3} className="d-flex align-items-center">
              <img src={currentMovie.Poster} className="img-fluid" alt="" />
            </Col>
            <Col md={9}>
              <Row className="divider py-4">
                <Col sm={8} className="d-flex flex-column align-items-start ">
                  <h3>{currentMovie.Title}</h3>
                  <h6 className="mb-2">
                    {currentMovie.Year} - {currentMovie.Genre} -{" "}
                    {currentMovie.Runtime}{" "}
                  </h6>
                  <span className="d-flex mb-4">
                    <h5>{currentMovie.imdbRating}</h5>
                  </span>
                  <p> {currentMovie.Plot}</p>
                </Col>

                <Col>
                  {" "}
                  <h6 className="mb-2">
                    <span className="">Director:</span> {currentMovie.Director}
                  </h6>
                  <h6 className="mb-2">
                    <span className="">Writer:</span> {currentMovie.Writer}
                  </h6>
                  <h6 className="mb-2">
                    <span className="">Actors:</span> {currentMovie.Actors}
                  </h6>
                  <h6 className="mb-2">
                    <span className="">Rated:</span> {currentMovie.Rated}
                  </h6>
                  <h6 className="mb-2">
                    <span className="">Released:</span> {currentMovie.Released}
                  </h6>
                  <h6 className="mb-2">
                    <span className="">Country:</span> {currentMovie.Country}
                  </h6>
                  <h6 className="mb-2">
                    <span className="">Languages</span> {currentMovie.Language}
                  </h6>
                </Col>
              </Row>
            </Col>
          </Row>
        </Row>
      </Container>
    );
  }
}
export default MovieDetails;
