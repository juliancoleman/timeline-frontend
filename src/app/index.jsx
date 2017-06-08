import React from "react";
import { render } from "react-dom";
import injectTapEventPlugin from "react-tap-event-plugin";
import "webrtc-adapter";

import App from "./App";

injectTapEventPlugin();

render(<App />, document.getElementById("app"));
