import React, { Component } from "react";
import bannerHeader from "../img/Asset 4.png";
import AOS from "aos";
import "aos/dist/aos.css";

AOS.init({ once: true });

class Header extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <section className="container pt-0 pl-4 pr-4">
          <div className="row v-align-children ">
            <div className="col-md-6">
              <img
                data-aos="fade-up-right"
                data-aos-duration="1200"
                className="responsive"
                src={bannerHeader}
                alt="background-banner"
              ></img>
            </div>
            <div
              data-aos="fade-up-left"
              data-aos-duration="1000"
              className="col-md-6 v-align-ch"
            >
              <h1 className="mt-sm-5 big-text h2 color-primary">
                Bayangin deh,&nbsp;<br></br>beratnya beban yang harus kamu
                pendam sendiri
              </h1>
              <p className="lead mb40 gray">
                Kenapa harus dipendam kalau bisa diceritain? Ringankan beban
                kesehatan mentalmu, yuk.{" "}
                <span className="gray bold">#ceritainsini</span>
              </p>
            </div>
          </div>
        </section>
      </React.Fragment>
    );
  }
}

export default Header;
