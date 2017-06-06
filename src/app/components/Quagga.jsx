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

    const resultCollector = Quagga.ResultCollector.create({
      capture: true,
      capacity: 1,
      filter({ code }) {
        Quagga.stop();
        return history.push(`/checkin/${code}`);
      },
    });

    Quagga.init({
      inputStream: {
        name: "Live",
        type: "LiveStream",
        target: document.querySelector("#quagga"),
        constraints: {
          width: window.innerWidth,
          height: window.innerHeight,
        },
        area: { // defines rectangle of the detection/localization area
          top: "0%",    // top offset
          right: "0%",  // right offset
          left: "0%",   // left offset
          bottom: "0%", // bottom offset
        },
      },
      decoder: {
        readers: ["code_39_reader"],
      },
      debug: {
        showBoundingBox: true,
        drawScanLine: true,
        showPattern: true,
      },
    }, (err) => {
      if (err) {
        throw new Error(err);
      }

      console.info("Quagga initialized. Ready to start!");
      Quagga.start();
    });

    Quagga.registerResultCollector(resultCollector);

    Quagga.onDetected((result) => {
      console.info(result);
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
        <div id="quagga" />
      </div>
    );
  }
}
