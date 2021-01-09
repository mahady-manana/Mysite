import React from "react";
import {render} from "react-dom";
import Application from "./Application.js";
import 'bootstrap/dist/css/bootstrap.min.css';
import './stylesheets/main.style.css';
import "./content/script/index.js"
const Root = document.getElementById("root")

render(
    <Application/>, Root
)
if (module) {
    module.hot.accept()
}