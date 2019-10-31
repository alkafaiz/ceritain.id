import React, { Component } from "react";

class Accordion extends Component {
  state = { on: false };
  toggle = () => {
    this.setState({ on: !this.state.on });
  };

  getClass = () => {
    let clas = "title";
    clas += this.state.on === true ? " active" : "";
    return clas;
  };
  render() {
    const { title, content } = this.props;
    return (
      <div className="accordion-a">
        <div className={this.getClass()} onClick={this.toggle}>
          <span>{title}</span>
        </div>
        {this.state.on && <div className="content">{content()}</div>}
      </div>
    );
  }
}

export default Accordion;
