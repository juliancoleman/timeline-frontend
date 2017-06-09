import React from "react";
import R from "ramda";

import {
  List,
  ListItem,
  Subheader,
} from "material-ui";

import Api from "../../helpers/Api";

const groupByRole = R.compose(R.groupBy(R.prop("name")), R.prop("roles"));

export default class Group extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      camp: {},
      roleGroups: {
        "Small Group Leader": [],
        "Campus Leader": [],
        "Student": [],
      },
    };
  }

  componentDidMount() {
    Api.getCamp(this.props.match.params.groupId)
      .then((response) => {
        if (response.ok) {
          return response.json();
        }

        throw new Error("Unable to retrieve camp");
      })
      .then(camp => this.setState({ camp, roleGroups: R.merge(this.state.roleGroups, groupByRole(camp)) }));
  }

  render() {
    const { roleGroups } = this.state;
    const smallGroupLeaders = R.prop("Small Group Leader", roleGroups);
    const students = R.prop("Student", roleGroups);

    return (
      <div>
        <p style={{ paddingLeft: 16 }}>Group {this.props.match.params.groupId}</p>

        <Subheader>Group Leader</Subheader>
        <List style={{ background: "#fff" }}>
          {smallGroupLeaders.map(({ user }) => (
            <ListItem
              key={user.id}
              primaryText={`${user.firstName} ${user.lastName}`}
            />
          ))}
        </List>

        <Subheader>Students</Subheader>
        <List style={{ background: "#fff" }}>
          {students.map(({ user }) => (
            <ListItem
              key={user.id}
              primaryText={`${user.firstName} ${user.lastName}`}
              onTouchTap={() => this.props.history.push(`/person/${user.id}`)}
            />
          ))}
        </List>
      </div>
    );
  }
}
