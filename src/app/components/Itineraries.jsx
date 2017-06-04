import React from "react";
import R from "ramda";

import Api from "../../helpers/Api";

export default class Itineraries extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      itineraries: [],
    };
  }

  componentDidMount() {
    Api.getitineraries()
      .then((response) => {
        if (response.ok) {
          return response.json();
        }

        throw new Error("Unable to retrieve itineraries");
      })
      .then(itineraries => this.setState({ itineraries }, () => console.info(itineraries)));
  }

  render() {
    const { itineraries } = this.state;

    return (
      <div>
        {JSON.stringify(itineraries)}
      </div>
    );
  }
}
