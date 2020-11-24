import React from "react";
import { Row, Container } from "react-bootstrap";
import AddComment from "./AddComment";
import CommentList from "./CommentList";

class MovieDetails extends React.Component {
  state = {
    comments: [],
    show: false,
  };

  updateStateWithNewComment = newComment => {
    console.log("newComment PRE", newComment);
    this.setState({ comments: [...this.state.comments, newComment] }, () =>
      console.log(this.state.comments)
    );
  };

  commentFetch = async () => {
    try {
      let response = await fetch(
        "https://striveschool-api.herokuapp.com/api/comments/",

        {
          headers: new Headers({
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZmI2NWY4OTk4MzViMDAwMTc1ODRlZTIiLCJpYXQiOjE2MDU4NjU2MjQsImV4cCI6MTYwNzA3NTIyNH0.IdqIspL4rMxO-KBqvMMNspg3ITHwYcIBjTPhoBq4wEA",
          }),
        }
      );
      let comments = await response.json();
      console.log("comments", comments);
      this.setState({ comments }); //these results will now fill the empty state array
    } catch (e) {
      console.log("error: ", e);
    }
  };

  componentDidMount() {
    this.commentFetch();
  }

  render() {
    console.log(this.state);
    return (
      <Container className="text-dark">
        <Row><h1>{this.props.movie.Title}</h1></Row>
        <Row>
          <img
            src={this.props.movie.Poster}
            alt="movie"
            style={{ objectFit: "cover", height: "200px" }}
          />
        </Row>
        <Row>
          <CommentList
            movieId={this.props.movie.imdbID}
            comments={this.state.comments}
          />

          <AddComment
            movieId={this.props.movie.imdbID}
            addNewComment={this.updateStateWithNewComment}
          />
        </Row>
      </Container>
    );
  }
}

export default MovieDetails;
