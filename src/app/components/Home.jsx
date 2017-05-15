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
      Tap the floating action button at the bottom right with
      the fingerprint icon to begin checking students in.
    </CardText>
  </Card>
);

export default Home;
