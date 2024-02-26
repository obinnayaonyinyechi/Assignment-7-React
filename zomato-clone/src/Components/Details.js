import React, { Component } from 'react';
import '../Styles/Filter.css';

class Details extends Component {
    render() {
        return (
        <div>
            <header>
                        <span className="icon-span">
                        <a href="./home.html" className="icon">e!</a>
                        </span>
                        <span className="login-sign">
                        <a href="#" className="login">Login</a>
                        <a href="#" className="createacc">Create an account</a>
                        </span>
                    </header>
            <article className="result1-article">
                <span className="card-image">
                <img src= {require('../Assets/breakfast.jpg')} alt='breakfast' className='image1' />
                <div>
                    <p className="card-title">The Big Chill Cakery</p>
                    <p className="fort">FORT</p>
                    <p className="shop">Shop 1, Plot D, Samruddhi Complex, Chincholi</p>
                </div>
                </span>
                <br />
                <hr />
                <span className="cusins">
                <p className="cusins1">CUSINS:</p>
                <p className="cusins2">Bakery</p>
                </span>
                <span className="cost">
                <p className="cost1">COST FOR TWO:</p>
                <p className="cost2">₹ 700</p>
                </span>
            </article>
        </div>
        );
    }
}

export default Details;
