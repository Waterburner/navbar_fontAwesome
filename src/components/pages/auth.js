import React, { Component } from 'react';

export default class Auth extends Component {
    constructor(props){
        super(props);

        this.state = {
            loginStatus: "NOT_LOGGED_IN"
        };

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit() {
        if (this.state.loginStatus === "NOT_LOGGED_IN") {
            this.setState.loginStatus = "LOGGED_IN";
            }
        this.props.history.push("/");
    }

    render() {
        return (
            <div className="content">
                <div className="login-wrapper">
                    <div className="login-btn">
                        <button onSubmit={this.handleSubmit}>Login/Logout</button> 
                    </div>
                </div>

            </div>
        );
    }
}