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
  

    this.handleSuccessfulLogin = this.handleSuccessfulLogin.bind(this);
    this.handleSuccessfulLogout = this.handleSuccessfulLogout.bind(this);
    this.toggleStatus = this.toggleStatus.bind(this);
  }

  handleSuccessfulLogin() {
    this.setState({
      loggedInStatus: "LOGGED_IN"
    });
  }
    
  handleSuccessfulLogout() {
    this.setState({
      loggedInStatus: "NOT_LOGGED_IN"
    });
  }

  toggleStatus() {
    if (this.state === "NOT_LOGGED_IN") {
      handleSuccessfulLogin(); 
    }
    if (this.state === "LOGGED_IN") {
      handleSuccessfulLogout();
    }
  }

  render() {
    return (
      <div className='app'>


        <Router>
          <div> 
            <Navbar />

            <Switch> 
              <Route exact path="/" component ={Home} />
              
              <Route path="/option2" component ={Option2} />
              <Route path="/option3" component ={Option3} />
              <Route path="/auth" component ={Auth} />

              {/* {this.state.loggedInStatus === "LOGGED_IN" ? null : <Route path="/auth" component ={Auth} />} */}
              <Route component ={NoMatch} />

            </Switch>

          </div>
        </Router>

      </div>
    );
  }
}
