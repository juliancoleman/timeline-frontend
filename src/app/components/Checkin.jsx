import React from "react";
import R from "ramda";
import moment from "moment";

import {
  DropDownMenu,
  MenuItem,
  RaisedButton,
  TextField,
} from "material-ui";

import Api from "../../helpers/Api";

const filterAccessibleItineraries = ({ eventDate, checkins }) => moment().isSame(eventDate, "day") && R.isEmpty(checkins);

const getStudentItineraries = R.compose(
  R.filter(filterAccessibleItineraries),
  R.chain(R.prop("itineraries")),
  R.propOr([], "camps"),
  R.find(R.propEq("name", "Student")), // eslint-disable-line
);


const getBarcodeNumber = R.path(["match", "params", "barcodeNumber"]);

export default class Checkin extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      student: {
        roles: [],
      },
      itineraryId: "default",
    };
  }

  componentDidMount() {
    const barcodeNumber = getBarcodeNumber(this.props);

    Api.getUserByBarcode(barcodeNumber)
      .then((response) => {
        if (response.ok) {
          return response.json();
        }

        throw new Error("Unable to retrieve user");
      })
      .then(student => this.setState({ student }));
  }

  checkInStudent = () => {
    const { itineraryId } = this.state;
    const barcodeNumber = getBarcodeNumber(this.props);

    Api.checkInStudent(itineraryId, barcodeNumber)
      .then((response) => {
        if (response.ok) {
          return this.props.history.push("/quagga");
        }

        throw new Error("Unable to check student in");
      });
  }

  handleChange = (event, index, itineraryId) => this.setState({ itineraryId });

  render() {
    const { student, itineraryId } = this.state;
    const { firstName, lastName, barcodeNumber, roles } = student;
    const itineraries = getStudentItineraries(roles);

    return (
      <div style={{ margin: 12 }}>
        <TextField name="firstName" value={firstName} disabled fullWidth />
        <TextField name="lastName" value={lastName} disabled fullWidth />
        <TextField name="barcodeNumber" value={barcodeNumber} type="number" disabled fullWidth />
        <DropDownMenu value={itineraryId} onChange={this.handleChange}>
          <MenuItem value="default" primaryText="Select itinerary" disabled />
          {itineraries.map(itinerary => (
            <MenuItem
              key={itinerary.id}
              value={itinerary.id}
              primaryText={itinerary.location}
            />
          ))}
        </DropDownMenu>
        <div>
          <RaisedButton
            primary
            label="check in"
            onTouchTap={() => this.checkInStudent()}
          />
        </div>
      </div>
    );
  }
}
