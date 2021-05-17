import React, { Component } from 'react';

export default class Auth extends Component {
    constructor(props){
        super(props);

        this.state = {
            loginStatus: "NOT_LOGGED_IN"
        };

        this.toggleLogin = this.toggleLogin.bind(this);
    }

    toggleLogin(event) {
        event.preventDefault();
        
        if (this.state.loginStatus !== "NOT_LOGGED_IN") {
            this.setState ({
                loginStatus : "NOT_LOGGED_IN"
            });
            window.alert("Logged out");
            this.props.statusToggle();
            this.props.history.push("/");

        } else {
            this.setState ({
                loginStatus : "LOGGED_IN"
            });
            
            // this.props.history.push("/");
            }
            this.props.statusToggle();
    }

    render() {
        return (
            <div className="content">
                <div className="login-wrapper">
                    <div className="login-btn">
                        <h2>{this.state.loginStatus}</h2>
                        <form onSubmit={this.toggleLogin}>
                            <button type="submit">
                            {this.state.loginStatus === 'LOGGED_IN' ? 'Logout'
                 : 'Login'}

                                    </button>
                        </form>
                    </div>
                </div>

            </div>
        );
    }
}