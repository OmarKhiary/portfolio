// App.jsx

import React from "react";

import { BrowserRouter, Route } from "react-router-dom";
import Projects from "./projects.js";
import Playground from "./playground.js";
import About from "./about.js";

// import Philips from "./projects/philips.js";
// import Catawiki from "./projects/catawiki.js";

import "./app.css";
import { NavLink } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <div className="logo">
          <NavLink to="/">
            <img
              src="http://dannyruchtie.com/img/portfolio/danny-ruchtie-avatar.png?v0.1"
              alt="Danny Ruchtie"
            />
            <span> Danny Ruchtie</span>
          </NavLink>
        </div>

        <div className="nav">
          <div className="nav-sub">
            <NavLink
              exact={true}
              to="/"
              className="item"
              activeClassName="selected"
            >
              Projects
            </NavLink>
            <NavLink
              to="/playground"
              className="item"
              activeClassName="selected"
            >
              Playground
            </NavLink>
            <NavLink to="/about" className="item" activeClassName="selected">
              About
            </NavLink>
          </div>
        </div>

        <Route exact={true} path="/" component={Projects} />
        <Route exact={true} path="/projects" component={Projects} />
        <Route path="/playground" component={Playground} />
        <Route path="/about" activeClassName="is-active" component={About} />

        {/* 
        Making a porfolio is easy writing content is harder :-) 
        <Route exact={true} path="/projects/Philips" component={Philips} />
        <Route exact={true} path="/projects/catawiki" component={Catawiki} /> 
        */}

        <footer>
          <a href="https://twitter.com/druchtie" target="blank">
            Twitter
          </a>
          <a href="https://www.instagram.com/druchtie/" target="blank">
            Instagram
          </a>
          <a href="https://vimeo.com/druchtie" target="blank">
            Vimeo
          </a>
          <a href="https://www.linkedin.com/in/dannyruchtie/" target="blank">
            LinkedIn
          </a>
          <a href="mailto:hello@dannyruchtie.com" target="blank">
            Email
          </a>
        </footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
