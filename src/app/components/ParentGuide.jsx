import React from "react";

import {
  Card,
  CardTitle,
  CardText,
  Subheader,
} from "material-ui";

const ParentGuide = () => (
  <Card className="responsive-card-lg">
    <CardTitle title="Parent Guide" />

    <CardText>
      <Subheader className="Subheader__flush-left">What is a camp?</Subheader>
      <span>
        There are two camps: K-2nd and 3-6th grade.
        Busses will pick up students from their specified
        pick-up locations and will be brought to the Fig
        Garden campus.
      </span>

      <Subheader className="Subheader__flush-left">Where do I drop off / pick up my child?</Subheader>
      <span>
        Campus options for drop off / pick up are: Fig
        Garden, North, and Southeast. You pick your drop-off
        / pick-up location, we bus them to where they
        need to go. Your child must be checked in at the
        campus you specify when signing up. Please walk
        your child to the Summerpalooza check-in station
        and sign them in. Your child will then be bussed
        to the location(s) of the day. Your child must be
        picked up from the same campus location where you
        dropped them off.
      </span>

      <Subheader className="Subheader__flush-left">What days are Summerpalooza?</Subheader>
      <span>
        Tuesdays: June 13, 20, 27, July 11 and 18, from
        8am-4:30pm. No Summerpalooza July 4th, of course.
      </span>

      <Subheader className="Subheader__flush-left">Should I pack my child a lunch?</Subheader>
      <span>
        Please send your child with a packed lunch every
        day. <b>Please avoid including any peanut-related
        items, as many children have allergies simply
        through contact.</b>
      </span>
    </CardText>
  </Card>
);

export default ParentGuide;
