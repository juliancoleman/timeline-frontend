import React from "react";

import {
  Card,
  CardTitle,
  CardText,
  CardActions,
  FlatButton,
  Subheader,
} from "material-ui";

const About = () => (
  <Card className="responsive-card-lg">
    <CardTitle title="About" subtitle="Timeline Frontend & API" />
    <CardText>
      <Subheader className="Subheader__flush-left">Technologies</Subheader>

      <span>
        Timeline is an amalgamation of an API and a frontend, also known as a
        "full-stack" application.
      </span>

      <Subheader>Frontend</Subheader>
      <ul>
        <li>Material UI</li>
        <li>Ramda</li>
        <li>React</li>
        <li>React Router (react-router-dom v4)</li>
        <li>Timeline API</li>
        <li>Webpack</li>
      </ul>

      <Subheader>Backend</Subheader>
      <ul>
        <li>Bcrypt</li>
        <li>Bluebird</li>
        <li>Bookshelf</li>
        <li>Hapi</li>
        <li>Joi</li>
        <li>JSON Web Tokens</li>
        <li>KNEX</li>
        <li>Moment</li>
        <li>Mr. Horse</li>
        <li>Ramda</li>
      </ul>

      <Subheader>Database</Subheader>
      <ul>
        <li>PostgreSQL</li>
      </ul>

      <Subheader className="Subheader__flush-left">License</Subheader>
      <span>Timeline is an original design and idea by Julian Coleman and is
      currently released as open source under the MIT license due to the
      nature of the app as having minimal to no proprietary functionality or
      data.</span>
    </CardText>
    <CardActions>
      <FlatButton
        primary
        label="view on Github"
        href="https://github.com/juliancoleman/timeline-frontend"
        target="_blank"
      />
    </CardActions>
  </Card>
);

export default About;
