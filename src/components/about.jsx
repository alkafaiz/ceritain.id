import React, { Component } from "react";

class About extends Component {
  componentDidMount() {
    document.title = "Tentang Ceritain - Ceritain.id";
  }
  render() {
    return (
      <div className="container">
        <div className="row mt-5">
          <div className="col text-center">
            <h1 className="big-text color-primary mb-5">Tentang Ceritain</h1>
            <h5 className="h5 color-white lead">
              Certain.id menyediakan ruang lingkup suportif untuk kesehatan
              mentalmu.<br></br>Tempat cerita tanpa di-judge, dan catat progress
              suasana hatimu, disini.
            </h5>
            <h5 className="h5 mt-5 color-white">
              karena kamu butuh cerita, yuk
              <span className="color-primary h5">#ceritainsini</span>
            </h5>
          </div>
        </div>
      </div>
    );
  }
}

export default About;
