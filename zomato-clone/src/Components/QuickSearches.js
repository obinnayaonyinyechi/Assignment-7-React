import React, { Component } from 'react';

class QuickSearches extends Component {
    render() {
        return (
        <div>
            <div className="quicksearch">
                <p className="quicksearchHeading">
                    Quick Searches
                </p>
                <p className="quicksearchSubHeading">
                    Discover restaurants by type of meal
                </p>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-sm-12 col-md-6 col-lg-4">
                        <div className="tileContainer">
                        <div className="tileComponent1">
                            <img src= {require('../Assets/breakfast.jpg')} alt='breakfast' height={150} width={140} />
                        </div>
                        <div className="tileComponent2">
                        <div className="componentHeading">
                            Breakfast
                        </div>
                        <div className="componentSubHeading">
                            Start your day with exclusive breakfast.
                        </div>
                    </div>
                    </div>
                    </div>
                    <div className="col-sm-12 col-md-12 col-lg-4">
                        <div className="tileContainer">
                        <div className="tileComponent1">
                        <img src= {require('../Assets/lunch.jpg')} alt='breakfast' height={150} width={140} />
                        </div>
                        <div className="tileComponent2">
                        <div className="componentHeading">
                            Lunch
                        </div>
                        <div className="componentSubHeading">
                            Start your day with exclusive lunch.
                        </div>
                        </div>
                        </div>
                    </div>
                    <div className="col-sm-12 col-md-12 col-lg-4">
                        <div className="tileContainer">
                        <div className="tileComponent1">
                        <img src= {require('../Assets/snacks.png')} alt='breakfast' height={150} width={140} />
                        </div>
                        <div className="tileComponent2">
                        <div className="componentHeading">
                            Snacks
                        </div>
                        <div className="componentSubHeading">
                            Start your day with exclusive snacks.
                        </div>
                        </div>
                        </div>
                        </div>
                    </div>
                <div className="row">
                    <div className="col-sm-12 col-md-12 col-lg-4">
                        <div className="tileContainer">
                        <div className="tileComponent1">
                        <img src= {require('../Assets/dinner.png')} alt='breakfast' height={150} width={140} />
                        </div>
                        <div className="tileComponent2">
                        <div className="componentHeading">
                            Dinner
                        </div>
                        <div className="componentSubHeading">
                            Start your day with exclusive dinner.
                        </div>
                        </div>
                        </div>
                    </div>
                <div className="col-sm-12 col-md-12 col-lg-4">
                    <div className="tileContainer">
                        <div className="tileComponent1">
                        <img src= {require('../Assets/drinks.png')} alt='breakfast' height={150} width={140} />
                        </div>
                        <div className="tileComponent2">
                        <div className="componentHeading">
                            Drinks
                        </div>
                        <div className="componentSubHeading">
                            Start your day with exclusive drinks.
                        </div>
                        </div>
                        </div>
                    </div>
                <div className="col-sm-12 col-md-12 col-lg-4">
                    <div className="tileContainer">
                        <div className="tileComponent1">
                        <img src= {require('../Assets/nightlife.png')} alt='breakfast' height={150} width={140} />
                        </div>
                        <div className="tileComponent2">
                        <div className="componentHeading">
                            NightLife
                        </div>
                        <div className="componentSubHeading">
                            Start your day with exclusive nightlife.
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
            </div>
        </div>
        );
    }
}

export default QuickSearches;
