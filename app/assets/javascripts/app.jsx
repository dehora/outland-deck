import React from "react";
import {render} from "react-dom";
import "../styles/style.scss";

export const App = React.createClass({

  render: function () {
    return (
        <h2>Hello From React!</h2>
    );
  },
});

render((
    <div className="container">
      <App/>
    </div>
), document.getElementById("app"));