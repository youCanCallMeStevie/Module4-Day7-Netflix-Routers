import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import React from "react";
import "./App.css";
import JumboCarousel from "./components/JumboCarousel";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import Footer from "./components/Footer";
import MovieDetails from "./components/MovieDetails"

function App() {
  return (
    <Router className="App">
      <NavBar title="Stephanie's Strive Netflix" />
      <Route path="/" exact component={JumboCarousel} />
      <Route path="/" exact component={Home} />
      <Route
        path="/details/:id"
        render={(props) => <MovieDetails {...props} />}
      />
      <Route
        path="/tvseries"
        
        render={(props) => <Home type='series' {...props} />}
      />
      <Footer />
    </Router>
  );
}

export default App;
