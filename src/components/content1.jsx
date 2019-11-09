import React, { Component } from "react";
import picDevice from "../img/Asset 18.png";
import picCerita from "../img/Asset 19.png";
import picMoodTrack from "../img/Asset 20.png";
import picKonseling from "../img/Asset 21.png";
import AOS from "aos";
import "aos/dist/aos.css";

class Content1 extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="container">
          <div className="row mt-sm-5 mt-3">
            <div className="col-md-4 ">
              <div
                data-aos="zoom-in-up"
                data-aos-duration="1000"
                className="card text-center color-white"
              >
                <div className="card-body">
                  <img
                    src={picCerita}
                    alt=""
                    className="responsive icon mb-2"
                  />

                  <h5 className="card-title lead bold">Berbagi Cerita</h5>
                  <p className="card-text">
                    Dukungan akan selalu datang,<br></br>kamu hanya perlu cerita
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div
                data-aos="zoom-in-up"
                data-aos-duration="1000"
                data-aos-delay="250"
                className="card text-center color-white"
              >
                <div className="card-body">
                  <img
                    src={picMoodTrack}
                    alt=""
                    className="responsive icon mb-2"
                  />
                  <h5 className="card-title lead bold">Mood Track</h5>
                  <p className="card-text">
                    Catat suasana hati mu secara berkala, karena hatimu perlu
                    dipahami
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div
                data-aos="zoom-in-up"
                data-aos-duration="1000"
                data-aos-delay="250"
                className="card text-center color-white"
              >
                <div className="card-body">
                  <img
                    src={picKonseling}
                    alt=""
                    className="responsive icon mb-2"
                  />{" "}
                  <h5 className="card-title lead bold">Konseling</h5>
                  <p className="card-text">
                    Lelah ceritain masalah di medsos tapi di-judge netizen? kini
                    tak lagi!
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="row v-align-children mt-sm-5 mt-4 pt-4">
            <div
              data-aos="fade-up-right"
              data-aos-duration="1000"
              className="col-md-7"
            >
              <img src={picDevice} alt="" className="responsive" />
            </div>
            <div
              data-aos="fade-up-left"
              data-aos-duration="1000"
              className="col-sm-5 v-align-ch"
            >
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
            <div
              data-aos="fade-up"
              data-aos-duration="1000"
              className="col-sm-12 text-center mb40 mb-xs-24"
            >
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
