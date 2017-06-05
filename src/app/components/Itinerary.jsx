import React from "react";
import R from "ramda";

import {
  List,
  ListItem,
  Subheader,
} from "material-ui";

import Api from "../../helpers/Api";

export default class Itinerary extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      itinerary: {
        students: {
          checkedIn: [],
          notCheckedIn: [],
        },
      },
    };
  }

  componentDidMount() {
    Api.getItinerary(this.props.match.params.itineraryId)
      .then((response) => {
        if (response.ok) {
          return response.json();
        }

        throw new Error("Unable to retrieve itinerary");
      })
      .then(itinerary => this.setState({ itinerary }));
  }

  render() {
    const { itinerary } = this.state;
    const { students } = itinerary;
    const { checkedIn, notCheckedIn } = students;

    return (
      <div>
        <Subheader>Checked in</Subheader>
        <List>
          {checkedIn.map(student => (
            <ListItem key={student.id} primaryText={`${student.firstName} ${student.lastName}`} />
          ))}
        </List>
        <Subheader>Not checked in</Subheader>
        <List>
          {notCheckedIn.map(student => (
            <ListItem key={student.id} primaryText={`${student.firstName} ${student.lastName}`} />
          ))}
        </List>
      </div>
    );
  }
}
