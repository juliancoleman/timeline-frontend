import React from "react";

import {
  Card,
  CardTitle,
  CardText,
  Subheader,
} from "material-ui";

import Menu from "material-ui/svg-icons/navigation/menu";
import CheckCircle from "material-ui/svg-icons/action/check-circle";
import RemoveCircle from "material-ui/svg-icons/content/remove-circle";

const Help = () => (
  <Card className="responsive-card-lg">
    <CardTitle title="Help" />

    <CardText>
      <Subheader className="Subheader__flush-left">What am I actually looking at?</Subheader>
      <span>
        Timeline is a bit intimidating at first, I'm sure.
        Timeline for Summerpalooza allows you to view
        certain information as a Campus Leader, such as all
        the small groups you oversee, their leaders, and
        their students; as well as your itineraries.
      </span>

      <Subheader className="Subheader__flush-left">Can I view small groups of other busses?</Subheader>
      <span>
        No. You will only be able to see small groups that
        you are directly over.
      </span>

      <Subheader className="Subheader__flush-left">What are itineraries?</Subheader>
      <span>
        Throughout the day, you and the groups you oversee
        will be bussed around town. Your job as a Campus
        Leader will be to check students in as you arrive
        and as you leave each location. Timeline allows you
        to check your students in to each itinerary
        specifically. An itinerary is just a roster of each
        student in regards to a specific location,
        depending on whether you arrive or leave that
        location.
      </span>

      <Subheader className="Subheader__flush-left">How do I check students in?</Subheader>
      <span>
        To check students in, tap the <Menu /> at the top
        left corner, and click "Home", and then click the
        floating action button at the bottom right. From
        there, a camera view will open. Place the camera
        over the bar code on the wristband and when
        Timeline detects a barcode, it will find the
        student in the Timeline database, close the camera
        view, and will redirect you to view detailed
        information about the student that you may visually
        verify that is the student you wish to check in.
        Once you identify that student is the one you want
        to check in, tap the "check-in" button beneath the
        student's information. From there, Timeline will
        figure out the exact itinerary to check each
        student into depending on the day and the time of
        day, so you won't need to worry about that.
      </span>

      <Subheader className="Subheader__flush-left">How can I check if a student hasn't checked in?</Subheader>
      <span>
        I'd be insulted if you couldn't! To view your
        itineraries and which students have checked in,
        tap the <Menu /> at the top left corner, and
        then tap on "Itineraries" (you will only be able to
        view itineraries for that day). From there, tap on
        an itinerary you'd like to view. Students that have
        checked in will have a <CheckCircle /> next to their
        name. Students that have not checked in will have
        a <RemoveCircle /> next to their name. Students who
        are absent will not show up on the itineraries.
      </span>

      <Subheader className="Subheader__flush-left">What happens with absent students?</Subheader>
      <span>
        Students who are absent will not show up on the itineraries.
      </span>

      <Subheader className="Subheader__flush-left"></Subheader>
    </CardText>
  </Card>
);

export default Help;
