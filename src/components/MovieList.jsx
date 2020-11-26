import React from "react";
import { Col, Container, Row, Spinner } from "react-bootstrap";
import SingleMovie from "./SingleMovie";
import ModalForm from "./ModalForm";

class MovieList extends React.Component {
  state = {
    Movies: [],
    selectedMovie: null,
    displayModal: false,
    loading: true,
  };

  sortAsc = array => {
    array.sort(function (a, b) {
      var movieA = a.Year; // ignore upper and lowercase
      var movieB = b.Year; // ignore upper and lowercase
      if (movieA > movieB) {
        return -1;
      }
      if (movieA < movieB) {
        return 1;
      }

      // names must be equal
      return 0;
    });
  };

  getMovies = async () => {
    const url = this.props.type
      ? "http://www.omdbapi.com/?apikey=1bee4676&s=" + this.props.query + "&type=" + this.props.type
      : "http://www.omdbapi.com/?apikey=1bee4676&s=" + this.props.query; 
      console.log('url', url) 
    try {
      let response = await fetch(url);
      if (response.ok) {
        // console.log(response)
        let movies = await response.json();
        console.log(movies)
        setTimeout(() => {
          this.setState({ Movies: movies.Search, loading: false }); //after the fetch is completed, and we have the info the info we are asking for, we are reverting the loading state
        }, 1000);
        let newMovies = movies.Search;
        this.sortAsc(newMovies);
        this.setState({ Movies: newMovies });
      } else {
        console.log("An error has happened!");
        this.setState({ loading: false });
      }
    } catch (error) {
      console.log("There has been an error", error);
      this.setState({ loading: false });
    }
  };

  componentDidMount = () => {
    console.log("Movie has finished mounting");
    this.getMovies();
  };

  componentDidUpdate = previousProps => {
    if (previousProps.query !== this.props.query) {
      //it means we selected a new movie from the dropdown,also changing the props & not in the state
      console.log("Previous Movie is different than Current Movie");
      console.log("Performing the fetch");
      this.getMovies();
    }
  };

  render() {
    return (
      <>
        <Container>
          {this.state.selectedMovie && (
            <ModalForm
              show={this.state.displayModal}
              movie={this.state.selectedMovie}
              onHide={() => this.setState({ displayModal: false })}
            />
          )}

          <h1 className="mt-4 mb-3">{this.props.query.toUpperCase()}</h1>
          <Row>
            {!this.state.loading ? (
              this.state.Movies.map(movie => (
                <Col
                  xs={6}
                  md={3}
                  lg={2}
                  key={`MovieID${movie.imdbID}`}
                  className="mb-3"
                >
                  <SingleMovie
                    Movie={movie}
                    onClicked={() =>
                      this.setState({
                        displayModal: true,
                        selectedMovie: movie,
                      })
                    }
                  />
                </Col>
              ))
            ) : (
              <div className="d-block w-100 mb-5 mt-5">
              <h5 className="d-inline-block mb-0 mr-2" style={{ color: "white" }}>
                Loading...
              </h5>
              <Spinner animation="border" variant="danger" disabled />
            </div>
            )}
          </Row>
        </Container>
      </>
    );
  }
}

export default MovieList;
