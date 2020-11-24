import "bootstrap/dist/css/bootstrap.min.css";
// import "font-awesome/css/font-awesome.css";
import React from "react";
import "./App.css";
import JumboCarousel from "./components/JumboCarousel";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import Footer from "./components/Footer";
import MovieDetails from "./components/MovieDetails";
import { BrowserRouter as Router, Route } from "react-router-dom";

class App extends React.Component {
  render() {
    return (
      <>
        <Router>
          <NavBar title="Strive Netflix" />
          <JumboCarousel />
          <Route path="/" exact component={Home} />
          <Route path="/details/:id" component={MovieDetails} />
          <Footer />
        </Router>
      </>
    );
  }
}

export default App;
