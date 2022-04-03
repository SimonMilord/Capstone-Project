import React, { Component } from "react";
import "./timeSelector.scss";

export default class TimeSelector extends Component {
  state = {
    isActive: "1",
  };

  handleClick = (e) => {
    const id = e.target.getAttribute("btn-id");
    const value = e.target.value;
    let period = null;

    // checks selection of time period and convert it to timestamp format
    if (value === "1") {
      period = (
        new Date().setFullYear(new Date().getFullYear() - 1) / 1000
      ).toFixed();
    } else if (value === "3") {
      period = (
        new Date().setFullYear(new Date().getFullYear() - 3) / 1000
      ).toFixed();
    } else {
      period = (
        new Date().setFullYear(new Date().getFullYear() - 5) / 1000
      ).toFixed();
    }
    this.props.getTime(period);
    this.setState({
      isActive: id,
    });
  };
  render() {
    const { isActive } = this.state;
    return (
      <div className="time">
        <div className="time__container">
          <button
            btn-id="1"
            className={isActive === "1" ? "time__btn--active" : "time__btn"}
            value="1"
            onClick={this.handleClick}
          >
            1Y
          </button>
          <button
            btn-id="3"
            className={isActive === "3" ? "time__btn--active" : "time__btn"}
            value="3"
            onClick={this.handleClick}
          >
            3Y
          </button>
          <button
            btn-id="5"
            className={isActive === "5" ? "time__btn--active" : "time__btn"}
            value="5"
            onClick={this.handleClick}
          >
            5Y
          </button>
        </div>
      </div>
    );
  }
}
