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
          size: 800,
          singleChannel: false,
        },
        locator: {
          patchSize: "medium",
          halfSample: true,
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

  handleChange = ({ target }) => {
    if (target.files && target.files.length) {
      this.decode(URL.createObjectURL(target.files[0]));
    }
  }

  decode(src) {
    const { config } = this.state;
    const mergedConfig = R.merge(config, { src });

    Quagga.decodeSingle(mergedConfig, ({ codeResult }) => {
      const { code } = codeResult;

      this.props.history.push(`/checkin/${code}`)
    });
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
