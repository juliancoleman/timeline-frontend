import React from "react";
import { Link } from "react-router-dom";

import {
  Card,
  CardTitle,
  CardText,
  CardActions,
  FlatButton,
} from "material-ui";

import Api from "../../helpers/Api";

export default class Bus extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    // consider using a list here instead of cards. Don't need to scroll so much!
    return (
      <div className="flex-grid">
        <Card>
          <CardTitle title="Small Group 1" subtitle="John Doe" />
          <CardText>
            number of students
          </CardText>
          <CardActions>
            <Link to="/group/1"><FlatButton primary label="view" /></Link>
          </CardActions>
        </Card>
        <Card>
          <CardTitle title="Small Group 2" subtitle="John Doe" />
          <CardText>
            number of students
          </CardText>
          <CardActions>
            <Link to="/group/2"><FlatButton primary label="view" /></Link>
          </CardActions>
        </Card>
        <Card>
          <CardTitle title="Small Group 3" subtitle="John Doe" />
          <CardText>
            number of students
          </CardText>
          <CardActions>
            <Link to="/group/3"><FlatButton primary label="view" /></Link>
          </CardActions>
        </Card>
        <Card>
          <CardTitle title="Small Group 4" subtitle="John Doe" />
          <CardText>
            number of students
          </CardText>
          <CardActions>
            <Link to="/group/4"><FlatButton primary label="view" /></Link>
          </CardActions>
        </Card>
        <Card>
          <CardTitle title="Small Group 5" subtitle="John Doe" />
          <CardText>
            number of students
          </CardText>
          <CardActions>
            <Link to="/group/5"><FlatButton primary label="view" /></Link>
          </CardActions>
        </Card>
      </div>
    );
  }
}
