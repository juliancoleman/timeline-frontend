import React from "react";

import {
  Card,
  CardTitle,
  CardText,
} from "material-ui";

const Home = () => (
  <Card style={{ maxWidth: 350, margin: "5vh auto" }}>
    <CardTitle title="Welcome" />
    <CardText>
      To begin checking students in, tap the floating action button at the bottom right with
      the fingerprint icon.
    </CardText>
  </Card>
);

export default Home;
