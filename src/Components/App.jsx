import React from "react";

// importing react rputer dom
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

// importing App.css
import "./Styles/App.css";

// importing components
import Navigation from "./Navigation";
import MobileSearch from "./MobileSearch";
import Footer from "./Footer";

// importing pages
import Home from "../Pages/Home";
import SingleVideo from "../Pages/SingleVideo";
import Search from "../Pages/Search";
import Tags from "../Pages/Tags";
import NotFound from "../Pages/NotFound.jsx";

const App = () => {
  return (
    <div>
      <Router>
        <Navigation />
        <div id="wrapper">
          <div id="content-wrapper">
            <div className="container-fluid pb-0">
              <MobileSearch />
              <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/videos/:id" children={<SingleVideo />} />
                <Route exact path="/search/:query" children={<Search />} />
                <Route exact path="/tags/:tag" children={<Tags />} />

                <Route component={NotFound} />
              </Switch>
            </div>
            <Footer />
          </div>
        </div>
      </Router>
    </div>
  );
};

export default App;
