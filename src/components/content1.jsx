import React, { Component } from "react";
import picDevice from "../img/Asset 18.png";

class Content1 extends Component {
  state = {
    message: "",
    class: "ti ti-angle-down bounce-top",
    card1: "card text-center color-white",
    card2: "card text-center color-white",
    card3: "card text-center color-white"
  };

  getActive = (event, card) => {
    event.preventDefault();
  };

  getClassIcon = () => {
    const animate = this.state.class + " bounce-top";

    this.setState({ class: animate });
  };
  changeMessage = (event, option) => {
    if (option === "A") {
      this.setState({
        message: "this is A",
        card1: "card text-center color-white active",
        card2: "card text-center color-white ",
        card3: "card text-center color-white "
      });
    } else if (option === "B") {
      this.setState({
        message: "this is B",
        card2: "card text-center color-white active",
        card1: "card text-center color-white ",
        card3: "card text-center color-white "
      });
    } else {
      this.setState({
        message: "this is C",
        card2: "card text-center color-white ",
        card3: "card text-center color-white active",
        card1: "card text-center color-white "
      });
    }
    console.log("testing", this.state.message);
    console.log("testing", option);
    console.log("now", this.state.class);

    event.preventDefault();
  };

  testing = (event, Ab) => {
    event.preventDefault();
    console.log("testing", Ab);
  };

  render() {
    return (
      <React.Fragment>
        <div className="container">
          <div className="row mt-sm-5 mt-3">
            <div className="col-md-4 ">
              <div
                onClick={event => this.changeMessage(event, "A")}
                className={this.state.card1}
              >
                <div className="card-body">
                  <i className="mt-3 ti ti-face-smile icon"></i>
                  <h5 className="card-title lead bold">Berbagi Cerita</h5>
                  <p className="card-text">
                    Dukungan akan selalu datang, kamu hanya perlu cerita
                  </p>
                </div>
                <i className={this.state.class}></i>
              </div>
            </div>
            <div className="col-md-4">
              <div
                onClick={event => this.changeMessage(event, "B")}
                className={this.state.card2}
              >
                <div className="card-body">
                  <i className="mt-3 ti ti-face-smile icon"></i>
                  <h5 className="card-title lead bold">Mood Track</h5>
                  <p className="card-text">
                    Catat suasana hati mu secara berkala, karena hatimu perlu
                    dipahami
                  </p>
                </div>
                <i className="ti ti-angle-down bounce-top"></i>
              </div>
            </div>
            <div className="col-md-4">
              <div
                onClick={event => this.changeMessage(event, "C")}
                className={this.state.card3}
              >
                <div className="card-body">
                  <i className="mt-3 ti ti-face-smile icon"></i>
                  <h5 className="card-title lead bold">Konseling</h5>
                  <p className="card-text">
                    Lelah ceritain masalah di medsos tapi di-judge netizen? kini
                    tak lagi!
                  </p>
                </div>
                <i className="ti ti-angle-down bounce-top"></i>
              </div>
            </div>
          </div>
          {this.setState.message !== "" ? (
            <div className="row mt-sm-5 mt-5">
              <div className="col-sm-10 mx-auto text-center">
                <p className="h5 color-white">{this.state.message}</p>
              </div>
            </div>
          ) : (
            ""
          )}

          <div className="row v-align-children mt-sm-5 mt-4 pt-4">
            <div className="col-md-7">
              <img src={picDevice} alt="" className="responsive" />
            </div>
            <div className="col-sm-5 v-align-ch">
              <h2 className="big-text color-white">
                Ceritain,<br></br> lebih dekat <br></br>lebih mudah.
              </h2>
              <p className="lead-sm color-white">
                Bisa lewat dekstop,<br></br> bisa lewat smartphone. <br></br>
                Inilah saatnya untuk <span className="bold">#ceritainsini</span>
              </p>
            </div>
          </div>
          <div className="row mt-sm-5 mt-4 pt-4">
            <div className="col-sm-12 text-center mb40 mb-xs-24">
              <h2 className="h2 white">
                Bersama ceritain, kamu bisa! Yuk #ceritainsini
              </h2>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Content1;
