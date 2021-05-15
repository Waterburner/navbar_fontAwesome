import React, { Component } from 'react';

export default class LoginLogout extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div> 
                    <button onSubmit={toggleStatus()}>Login/Logout</button> 
            </div>
        );
    }
}

// this.setState({
    // loggedInStatus: "LOGGED_IN"