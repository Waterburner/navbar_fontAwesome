import React, { Component } from 'react';

export default class Auth extends Component {
    constructor(props){
        super(props);

        this.state = {
            loginStatus: "NOT_LOGGED_IN"
        };

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(event) {
        event.preventDefault();
        
        if (this.state.loginStatus !== "NOT_LOGGED_IN") {
            this.setState ({
                loginStatus : "NOT_LOGGED_IN"
            });
            } else {
                this.setState ({
                    loginStatus : "LOGGED_IN"
                });
                this.props.history.push("/");
            }
    }

    render() {
        return (
            <div className="content">
                <div className="login-wrapper">
                    <div className="login-btn">
                        <h2>{this.state.loginStatus}</h2>
                        <form onSubmit={this.handleSubmit}>
                            <button type="submit">Login/Logout</button> 
                        </form>
                    </div>
                </div>

            </div>
        );
    }
}