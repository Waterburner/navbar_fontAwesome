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
        this.props.statusToggle();
        if (this.props.isLoginStatus() === "LOGGED_IN") {
            window.alert("Logged out");
        }

        this.props.history.push("/");
    }

    
    
    render() {
        
        return (
            <div className="content">
                <div className="login-wrapper">
                        <div className="login-btn">
                            <form onSubmit={this.toggleLogin}>
                                <button type="submit">
                                    {this.props.isLoginStatus() === 'LOGGED_IN' ? 
                                    'Sign out here'
                                    : 'LOGIN AS GUEST'
                                    }
                                </button>
                            </form>
                    </div>
                </div>

            </div>
        );
    }
}




















// import React, { Component } from 'react';



// export default class Auth extends Component {
//     constructor(props){
//         super(props);

//         this.state = {
//             loginStatus: "NOT_LOGGED_IN"
//         };
//         this.loggedInStatus=this.loggedInStatus.bind(this);
//         this.toggleLogin = this.toggleLogin.bind(this);
//     }

//     toggleLogin(event) {
//         event.preventDefault();
        
//         if (this.state.loginStatus !== "NOT_LOGGED_IN") {
//             this.setState ({
//                 loginStatus : "NOT_LOGGED_IN"
//             });
//             window.alert("Logged out");
//             this.props.statusToggle();
//             this.props.history.push("/");

//         } else {
//             this.setState ({
//                 loginStatus : "LOGGED_IN"
//             });
            
//             // this.props.history.push("/");
//             }
//             this.props.statusToggle();
//     }

//     render() {
//         console.log(this.loggedInStatus);
//         return (
//             <div className="content">
//                 <div className="login-wrapper">
//                     <div className="login-btn">
//                         <h2>{this.state.loginStatus}</h2>
//                         {/* <form onSubmit={this.toggleLogin}>
//                             <button type="submit">
//                             {this.state.loginStatus === 'LOGGED_IN' ? 'Logout'
//                  : 'Login'} */}
//                         <form onSubmit={this.toggleLogin}>
//                             <button type="submit">
//                             {props.loggedInStatus === 'LOGGED_IN' ? 'Logout'
//                  : 'Login'}

//                                     </button>
//                         </form>
//                     </div>
//                 </div>

//             </div>
//         );
//     }
// }