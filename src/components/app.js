import React, { Component } from 'react';

import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';

import Navbar from './navbar/navigation';
import Home from './pages/home';
import Option2 from './pages/option2';
import Option3 from './pages/option3';
import Auth from './pages/auth';
import NoMatch from './pages/noMatch';

export default class App extends Component {
  constructor(props) {
    super(props);
  
    this.state = {
      loggedInStatus: "NOT_LOGGED_IN"
    };
 
    this.statusToggle = this.statusToggle.bind(this);

  }

  statusToggle() {
    if (this.state.loggedInStatus !== "NOT_LOGGED_IN") {
      this.setState ({
        loggedInStatus : "NOT_LOGGED_IN"
      });
    } else {
      this.setState ({
        loggedInStatus : "LOGGED_IN"
      });
    }
  }

  render() {
    return (
      <div className='app'>


        <Router>
          <div> 
            <Navbar 
              loginStatus={this.state.loggedInStatus}
            />

              {/* <h2>{this.state.loggedInStatus}</h2> */}

            <Switch> 
              <Route exact path="/" component ={Home} />
              
              <Route path="/option2" component ={Option2} />
              <Route path="/option3" component ={Option3} />
              <Route path="/auth" render={props => (
                <Auth
                  {...props}
                  statusToggle={this.statusToggle}
                  lStatus={this.state.loggedInStatus}
                  />
                  )}
              />

              <Route component ={NoMatch} />

            </Switch>

          </div>
        </Router>

      </div>
    );
  }
}
