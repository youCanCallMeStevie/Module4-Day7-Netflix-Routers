import React from "react";
import { ListGroup, Badge } from "react-bootstrap";
class CommentList extends React.Component {
  state = {
    loading: true,
  };


  render() {
    return (
      <div className="mb-5">
        {this.props.comments
          .filter(res => res.elementId === this.props.movieId)
          .map((comment, index) => {
            let variant = "";

            switch (comment.rate) {
              case 1:
                variant = "danger";
                break;
              case 2:
                variant = "warning";
                break;
              case 3:
                variant = "secondary";
                break;
              default:
                variant = "success";
                break;
            }
            return (
              <ListGroup key={index}>
                <ListGroup.Item className="text-dark">
                  Comment: {comment.comment}
                </ListGroup.Item>
                <ListGroup.Item className="text-dark">
                  <span>Rate </span>
                  <Badge pill variant={variant}>
                    {comment.rate}
                  </Badge>
                </ListGroup.Item>
                <ListGroup.Item></ListGroup.Item>
              </ListGroup>
            );
          })}
      </div>
    );
  }
}

export default CommentList;
