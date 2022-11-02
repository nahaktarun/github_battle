import React from "react";
import PropTypes from "prop-types";
import { battle } from "../utils/api";
export default class Results extends React.Component {
  componentDidMount() {
    const { playerOne, playerTwo } = this.props;
    battle([playerOne, playerTwo]).then((player) => {
      console.log("data", player);
    });
  }

  render() {
    return (
      <div>
        Results
        <pre>{JSON.stringify(this.props, null, 2)}</pre>
      </div>
    );
  }
}
