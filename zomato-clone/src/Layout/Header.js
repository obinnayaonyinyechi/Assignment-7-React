import React, { Component } from 'react';
import '../Styles/Home.css';


class Header extends Component {
    render() {
        return (
        <div className={this.props.class}>
            <span className="login-sign">
                <a href="#" className="login">Login</a>
                <a href="#" className="createacc">Create an account</a>
            </span>
        </div>
        );
    }
}

export default Header;


{/* <div className='row text-end py-4 login-signup-row'>
                <div className='col-2 col-sm-2 col-md-7' />
                <div className='col-2 col-sm-2 col-md-2 text-end'>
                    <a className='login' href='#'>
                        Login
                    </a>
                </div>
                <div className='col-8 col-sm-8 col-md-3 text-start'>
                    <a className='createacc' href='#'>
                        Create an account
                    </a>
                </div>
            </div> */}