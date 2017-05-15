import React from "react";

import {
  Card,
  CardTitle,
  CardText,
} from "material-ui";

const NotFound = () => (
  <Card style={{ maxWidth: 450, margin: "10vh auto" }}>
    <CardTitle title="Dang it &#9785;" />
    <CardText>
      That page could not be found.
    </CardText>
  </Card>
);

export default NotFound;
