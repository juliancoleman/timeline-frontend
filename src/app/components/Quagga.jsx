import React from "react";
import R from "ramda";
import Quagga from "quagga";

export default class QuaggaView extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      code: "",
    };
  }

  componentDidMount() {
    Quagga.init({
      inputStream: {
        name: "Live",
        type: "LiveStream",
        target: document.querySelector("#quagga"),
      },
      constraints: {
        width: 480,
        height: 640,
      },
      decoder: {
        readers: ["code_39_reader"],
      },
    }, (err) => {
      if (err) {
        throw new Error(err);
      }

      console.info("Quagga initialized. Ready to start!");
      Quagga.start();
    });

    Quagga.onDetected(data => this.setState({ code: data.codeResult.code }));
  }

  render() {
    return (
      <div>
        <div id="quagga" />
        <p>{this.state.code}</p>
      </div>
    );
  }
}
