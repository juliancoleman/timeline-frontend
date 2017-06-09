import React from "react";

import { TextField } from "material-ui";

import Api from "../../helpers/Api";

const visibleProps = {
  "firstName": "First name",
  "lastName": "Last name",
  "barcodeNumber": "Barcode number",
  "campus": "Campus",
  "emergencyContactName": "Emergency contact name",
  "emergencyContacNumber": "Emergency contact number",
  "emergencyContactRelationship": "Emergency contact relationship",
  "allergies": "Allergies",
};

export default class Person extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      person: {},
    };
  }

  componentDidMount() {
    Api.getUser(this.props.match.params.userId)
      .then((response) => {
        if (response.ok) {
          return response.json();
        }

        throw new Error("Unable to get user");
      })
      .then(person => this.setState({ person }));
  }

  render() {
    const { person } = this.state;

    return (
      <div style={{ padding: 12 }}>
        {Object.keys(visibleProps).map((prop, idx) => (
          <TextField
            key={idx + 1}
            floatingLabelText={visibleProps[prop]}
            value={person[prop] || ""}
            disabled
            fullWidth
          />
        ))}
      </div>
    );
  }
}
