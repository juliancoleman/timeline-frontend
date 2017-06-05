import React from "react";
import { Link } from "react-router-dom";

import {
  Card,
  CardTitle,
  CardText,
  FloatingActionButton,
} from "material-ui";

import Fingerprint from "material-ui/svg-icons/action/fingerprint";

const Home = () => (
  <div>
    <Card className="responsive-card-md">
      <CardTitle title="Welcome" />
      <CardText>
        Tap the floating action button at the bottom right with
        the fingerprint icon to begin checking students in, or
        tap the menu icon at the top left to view Life Groups
        and itineraries.
      </CardText>
    </Card>

    <Link to="/quagga">
      <FloatingActionButton style={{ position: "fixed", bottom: 24, right: 24 }}>
        <Fingerprint />
      </FloatingActionButton>
    </Link>
  </div>
);

export default Home;
