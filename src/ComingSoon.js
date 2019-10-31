import React from "react";
import logo from "./img/Asset 2.png";
import "./ComingSoon.css";

class ComingSoon extends React.Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <div id="bg" className="container pt-5 fade-in-bottom">
          <div className="row pt-5 mt-5">
            <div className="col mx-auto text-center ">
              <img src={logo} className="responsive" alt="Logo" />

              <h1 id="title" className="color-primary">
                Coming soon!
              </h1>
              <h2 id="lead" className="color-primary">
                We're in the mid of developing,
                <br />
                &nbsp;come back later!
              </h2>
              <p id="contact" className="h5 mb-5 gray">
                More info contact:{" "}
                <span>
                  <a className="gray" href="mailto:ceritain.dev@gmail.com">
                    ceritain.dev@gmail.com
                  </a>
                </span>
              </p>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default ComingSoon;
