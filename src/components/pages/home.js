import React, { Component } from 'react';
import homeBackground from "../../../static/assets/Screen.png"
export default function() {
    return (

        <div className="content">
            <div className="home-page-wrapper">
                <img src={homeBackground} alt="" />
            </div>
        </div>
    );
}