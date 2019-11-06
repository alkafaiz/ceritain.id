import React, { Component } from "react";
import bannerHeader from "../img/Asset 4.png";

class Header extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <section className="container p-3">
          <div className="row v-align-children ">
            <div className="col-md-6">
              <img
                className="responsive"
                src={bannerHeader}
                alt="background-banner"
              ></img>
            </div>
            <div className="col-md-6 v-align-ch">
              <h1 className="mt-sm-5 big-text h2 color-primary">
                Bayangin deh,<br></br>beratnya beban yang harus kamu pendam
                sendiri
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
