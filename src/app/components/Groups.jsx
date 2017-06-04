import React from "react";
import R from "ramda";

import {
  Card,
  CardActions,
  CardText,
  CardTitle,
  FlatButton,
  List,
  ListItem,
} from "material-ui";

import Api from "../../helpers/Api";
import AuthService from "../../helpers/AuthService";

const groupByRole = R.compose(R.groupBy(R.prop("name")), R.prop("roles"));

export default class Bus extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      camps: [],
    };
  }

  componentDidMount() {
    const user = AuthService.getUser();
    Api.getUserCamps(user.id)
      .then((response) => {
        if (response.ok) {
          return response.json();
        }

        throw new Error("Unable to retrieve camps");
      })
      .then(camps => this.setState({ camps }));
  }

  render() {
    const { camps } = this.state;
    const roleGroups = {
      "Campus Leader": [],
      "Small Group Leader": [],
      "Student": [],
    };

    return (
      <div className="flex-grid">
        {camps.map((camp) => {
          const mergedRoleGroups = R.merge(roleGroups, groupByRole(camp));
          const { user } = mergedRoleGroups["Small Group Leader"][0];
          const studentsLength = mergedRoleGroups.Student.length;
          const leaderName = R.join(" ", [user.firstName, user.lastName]);

          return (
            <Card key={camp.id}>
              <CardTitle title={leaderName} subtitle={`${studentsLength} students`} />
              <CardText>
                <List>
                  {!camp.itineraries.length && <ListItem primaryText="No itineraries" />}
                  {camp.itineraries.map(itinerary => (
                    <ListItem key={itinerary.id} primaryText={itinerary.location} />
                  ))}
                </List>
              </CardText>
              <CardActions>
                <FlatButton label="view" onTouchTap={() => this.props.history.push(`/group/${camp.id}`)} />
              </CardActions>
            </Card>
          );
        })}
      </div>
    );
  }
}
