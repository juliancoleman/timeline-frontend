import React from "react";
import Quagga from "quagga";

import {
  IconButton,
} from "material-ui";

import { white } from "material-ui/styles/colors";

import NavigationBack from "material-ui/svg-icons/navigation/arrow-back";

export default class QuaggaView extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      code: "",
    };
  }

  componentDidMount() {
    const { history } = this.props;
    const config = {
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
    };

    Quagga.onDetected(({ codeResult }) => {
      const { code } = codeResult;

      return history.push(`/checkin/${code}`);
    });
  }

  render() {
    return (
      <div style={{ overflow: "hidden", height: "100vh", width: "100vw" }}>
        <IconButton
          style={{ zIndex: 9999, position: "fixed", top: 12, left: 12 }}
          onTouchTap={() => this.props.history.push("/")}
        >
          <NavigationBack color={white} />
        </IconButton>
      </div>
    );
  }
}
