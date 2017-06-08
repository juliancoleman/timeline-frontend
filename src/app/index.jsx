import React from "react";
import { render } from "react-dom";
import injectTapEventPlugin from "react-tap-event-plugin";
import App from "./App";

require("webrtc-adapter");

injectTapEventPlugin();

render(<App />, document.getElementById("app"));
