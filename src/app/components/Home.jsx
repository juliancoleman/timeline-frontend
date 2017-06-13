import React from "react";
import Quagga from "quagga";
import R from "ramda";

import {
  Card,
  CardTitle,
  CardText,
  FloatingActionButton,
} from "material-ui";

import Fingerprint from "material-ui/svg-icons/action/fingerprint";

export default class Home extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      config: {
        inputStream: {
          size: 1080,
          singleChannel: false,
        },
        locator: {
          patchSize: "medium",
          halfSample: false,
        },
        decoder: {
          readers: ["code_39_reader"],
        },
        src: null,
      },
    };

    this.decode = this.decode.bind(this);
  }

  componentDidMount() {
    const { history } = this.props;

    Quagga.onDetected(({ codeResult }) => {
      const { code } = codeResult;

      return history.push(`/checkin/${code}`);
    });
  }

  handleChange = (event) => {
    console.log(event.target);
    if (event.target.files && event.target.files.length) {
      this.decode(URL.createObjectURL(event.target.files[0]));
    }
  }

  decode(src) {
    const { config } = this.state;
    const mergedConfig = R.merge(config, { src });

    Quagga.decodeSingle(mergedConfig);
  }

  render() {
    return (
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

        <input type="file" accept="image/*" capture="camera" onChange={this.handleChange} />

        <FloatingActionButton style={{ position: "fixed", bottom: 24, right: 24 }}>
          <Fingerprint />
        </FloatingActionButton>
      </div>
    );
  }
}
