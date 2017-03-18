import React from "react";
import {render} from "react-dom";
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import "../styles/style.scss";
import RaisedButton from 'material-ui/RaisedButton';
import AppBar from 'material-ui/AppBar';

const NavBar = () => (
    <AppBar title="Outland" />
);

export const App = React.createClass({

  render: function () {
    return (
        <MuiThemeProvider>
          <NavBar/>
        </MuiThemeProvider>
    );
  },
});

render(

      <App/>
    , document.getElementById("app")
);