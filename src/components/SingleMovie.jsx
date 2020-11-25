import React from "react";
import { Button, Col } from "react-bootstrap";

class SingleMovie extends React.Component {
  state = {
    clicked: false,
  };

  render() {
    return (
      <>
      <Col className="mb-2">
        <span className="overlay-icons"><img src={this.props.Movie.Poster} alt="" className="img-fluid thumbnails" />
        <h4 className="text-light movieCard" style={{ display: "none" }}>
          {this.props.Movie.Title}
        </h4>
        <Button
          variant="danger"
          style={{ display: "none" }}
          onClick={this.props.onClicked}
        >
          View Details
        </Button>
        </span>
        </Col>

      </>
    );
  }
}

export default SingleMovie;
