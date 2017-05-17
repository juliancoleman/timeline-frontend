import React from "react";
import { Link } from "react-router-dom";

import {
  List,
  ListItem,
  Subheader,
} from "material-ui";

export default class Group extends React.Component {
  constructor(props, context) {
    super(props);

    console.log(props);
  }

  render() {
    return (
      <div>
        <p style={{ paddingLeft: 16 }}>Group {this.props.match.params.groupId}</p>

        <Subheader>Group Leader</Subheader>
        <List style={{ background: "#fff" }}>
          <ListItem primaryText="John Doe" />
        </List>

        <Subheader>Students</Subheader>
        <List style={{ background: "#fff" }}>
          <ListItem primaryText="Jane Doe" />
        </List>
      </div>
    );
  }
}
