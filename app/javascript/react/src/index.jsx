import App from "./components/App";
import ReactDom from "react-dom";
import React from "react";
import './styles/index.css'

document.addEventListener('DOMContentLoaded', () => {
    ReactDom.render(<App />, document.getElementById('root'))
})
