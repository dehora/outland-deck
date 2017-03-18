import React from "react";
import {render} from "react-dom";
import "../styles/style.scss";
import {Link, Router, Route, hashHistory} from "react-router";

export const App = React.createClass({
  render: function () {
    return (
        <div>
          <h3>Outland</h3>
          <ul role="nav">
            <li><Link to="/apps" activeStyle={{color: 'blue'}}>Apps</Link></li>
            <li><Link to="/features" activeStyle={{color: 'blue'}}>Features</Link></li>
          </ul>

          {this.props.children}

        </div>
    );
  },
});

export const Apps = React.createClass({
  render() {
    return <div>Apps</div>
  }
});

export const Features = React.createClass({
  render() {
    return <div>Features</div>
  }
});

render((
    <div>
      <Router history={hashHistory}>
        <Route path="/" component={App}>
          <Route path="/apps" component={Apps}/>
          <Route path="/features" component={Features}/>
        </Route>
      </Router>
    </div>
), document.getElementById('app'));
