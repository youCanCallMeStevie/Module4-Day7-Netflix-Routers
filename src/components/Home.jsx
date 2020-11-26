import React from "react";
import MovieList from "./MovieList";
import { FormControl, Button, Form } from "react-bootstrap";

class Home extends React.Component {
  state = {
    keyWord: "",
    isTyped: false,
  };

  HandleSearchQuery = query => {
    if (query.length > 2) {
      this.setState({ keyWord: query, isTyped: true });
    } else {
      this.setState({ keyWord: "", isTyped: false });
    }
  };

  render() {
    return (
      <>
        <Form inline style={{ paddingTop: "15px" }}>
          <FormControl
            type="text"
            placeholder="Search Movies"
            className="mr-sm-2"
            onChange={e => {
              this.HandleSearchQuery(e.target.value);
            }}
            style={{ position: "relative", marginLeft: "40vw" }}
          />
          <Button variant="outline-primary">Search</Button>
        </Form>
        {this.state.isTyped ? (
          <MovieList query={this.state.keyWord} />
        ) : (
          <>
            <MovieList query={this.props.type ? "friends" : 'batman'} type={this.props.type}/>
                <MovieList query={this.props.type ? "hundred" : 'superman'} type={this.props.type}/>
                <MovieList query={this.props.type ? "simpsons" : 'spiderman'} type={this.props.type} />
              </>
            )
        }
      </>
    );
  }
}

export default Home;
