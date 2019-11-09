import React, { Component } from "react";

class NotFound extends Component {
  state = {};
  componentDidMount() {
    document.title = "Page Not Found :( ";
  }
  render() {
    return <NotFoundComp />;
  }
}

export default NotFound;
const NotFoundComp = () => {
  return (
    <div className="row mt-4 screen-center">
      <div className="col-sm-7 mx-auto text-center">
        <h1 className="h1 color-primary ">Page Not Found :(</h1>
      </div>
    </div>
  );
};
