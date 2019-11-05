import React, { Component } from "react";
import Header from "./header";
import Subscribe from "./subscribe";
import Content from "./content1";
import bgbannerHeader from "../img/Asset 3.png";
import { Grow } from "@material-ui/core";

class LandingPage extends Component {
  componentDidMount() {
    document.title = "Hallo! - Ceritain.id";
  }
  render() {
    const entrance = true;
    return (
      <React.Fragment>
        <img
          src={bgbannerHeader}
          className="responsive banner-bg col-11"
          alt=""
        />
        <main className="container fade-in-bottom">
          <Header />

          <Subscribe />

          <Content />
        </main>
      </React.Fragment>
    );
  }
}

export default LandingPage;
