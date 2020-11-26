import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import React from "react";
import "./App.css";
import JumboCarousel from "./components/JumboCarousel";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import Footer from "./components/Footer";
import MovieDetails from "./components/MovieDetails";
import Registration from "./components/Registration";

function App() {
  return (
    <Router className="App">
      <Route
        path={["/", "/details", "/details/:id", "/tvseries"]}
        exact render={props => (
          <NavBar {...props} title="Stephanie's Strive Netflix" />
        )}
      />
      <Route path="/" exact component={JumboCarousel} />
      <Route path="/" exact component={Home} />
      <Route
        path="/details/:id"
        render={props => <MovieDetails {...props} />}
      />
      <Route
        path="/tvseries"
        render={props => <Home type="series" {...props} />}
      />

      <Route
        path="/registration"
        exact render={props => <Registration {...props} />}
      />

      <Route
        path={["/", "/details", "/details/:id", "/tvseries"]}
        exact render={props => <Footer {...props} />}
      />
    </Router>
  );
}

export default App;
