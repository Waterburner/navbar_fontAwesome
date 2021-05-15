import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

export default class Navigation extends Component {
    render() {

        return (
            <div className="navbar">
                <div className="left-side">
                    <div className="nav-link-wrapper">
                        <a href="http://localhost:3000"><div className="nav-btn">
                            <i className="fas fa-clipboard-check"></i> logo
                            </div></a>
                    </div>
                    
                    <div className="nav-link-wrapper">
                        <NavLink exact to = "/" activeClassName="nav-link-active ">
                            <div className="nav-btn">Home</div>
                        </NavLink>
                    </div>

                    <div className="nav-link-wrapper">
                        <NavLink to = "/option2" activeClassName="nav-link-active">
                            <div className="nav-btn">Option2</div>
                        </NavLink>
                    </div>
                    
                    <div className="nav-link-wrapper">
                        <NavLink to = "/option3" activeClassName="nav-link-active">
                            <div className="nav-btn">Option3</div>
                        </NavLink>
                    </div>
                </div>

                <div className="right-side">
                    <div className="btn nav-link-wrapper">
                        <NavLink to = "/auth" activeClassName="nav-link-active">
                            <div className="nav-btn"> Login/Logout<i className="fas fa-poop"></i></div>
                        </NavLink>
                    </div>
                </div>
            </div> 
        );
    }
}
