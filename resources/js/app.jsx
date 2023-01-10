import "./bootstrap";
import React from "react";
import ReactDOM from "react-dom";
import Component from "./components/Component";

if (document.getElementById("root")) {
    ReactDOM.render(<Component />, document.getElementById("root"));
}
