import React, { Component } from "react";
import Header from "./header";
import SubscribeSec from "./subscribe";
import Content from "./content1";

class LandingPage extends Component {
  componentDidMount() {
    document.title = "Hallo! - Ceritain.id";
  }
  render() {
    return (
      <React.Fragment>
        <header id="bg-hdr" className="fade-in-up">
          <Header />
        </header>

        <main className="container ">
          <SubscribeSec addClass="halves" />

          <Content />
        </main>
      </React.Fragment>
    );
  }
}

export default LandingPage;
