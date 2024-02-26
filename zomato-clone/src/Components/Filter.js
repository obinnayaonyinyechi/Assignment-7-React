import React, { Component } from 'react';
import '../Styles/Filter.css';

class Filter extends Component {
    render() {
        return (
            <React.Fragment>
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
                    <div className="title-text">Breakfast places in Mumbai</div>
                    <article className="filters-article">
                        <div className="filters">Filters</div>
                        <div className="select-location1">Select Location</div>
                        <select name="select-location" className="dropdown">
                            <option value="mumbai">Mumbai</option>
                            <option value="pune">Pune</option>
                            <option value="bangalore">Bangalore</option>
                            <option value="chennai">Chennai</option>
                            <option value="delhi">Delhi</option>
                        </select>
                        <div className="cuisines">
                        <div id="div-cuisines">Cuisines</div>
                        </div>
                        <div className="input-label">
                            <input type="checkbox" className="input-cuisines" name="north" defaultValue="north indian" />
                            <label>North Indian</label><br />
                            <input type="checkbox" className="input-cuisines" name="south" defaultValue="south indian" />
                            <label>South Indian</label><br />
                            <input type="checkbox" className="input-cuisines" name="chinese" defaultValue="chinese" />
                            <label>Chinese</label><br />
                            <input type="checkbox" className="input-cuisines" name="fast" defaultValue="fast food" />
                            <label>Fast Food</label><br />
                            <input type="checkbox" className="input-cuisines" name="street" defaultValue="street food" />
                            <label>Street Food</label>
                        </div>
                        <div id="cost">Cost For Two</div>
                        <div className="radio">
                            <input type="radio" name="input-radio" />
                            <label>Less than 500</label><br />
                            <input type="radio" name="input-radio" />
                            <label>500 to 1000</label><br />
                            <input type="radio" name="input-radio" />
                            <label>1000 to 1500</label><br />
                            <input type="radio" name="input-radio" />
                            <label>1500 to 2000</label><br />
                            <input type="radio" name="input-radio" />
                            <label>2000+</label>
                        </div>
                        <div id="sort">Sort</div>
                        <div className="sort-radio">
                            <input type="radio" name="input-sort" />
                            <label>Price Low to High</label><br />
                            <input type="radio" name="input-sort" />
                            <label>Price High to Low</label>
                        </div>
                    </article>
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
                        <article className="result2-article">
                        <span className="card-image">
                        <img src= {require('../Assets/lunch.jpg')} alt='breakfast' className='image1' />
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
                    <div className="pagination">
                        <a href="#">«</a>
                        <a href="#">1</a>
                        <a href="#">2</a>
                        <a href="#">3</a>
                        <a href="#">4</a>
                        <a href="#">5</a>
                        <a href="#">6</a>
                        <a href="#">»</a>
                    </div>
                </div>        
            </React.Fragment>
        );
    }
}

export default Filter;
