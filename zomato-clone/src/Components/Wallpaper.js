import React, { Component } from 'react';
import '../Styles/Home.css';

class Wallpaper extends Component {
    render() {
        return (
        <div>
            <div class="container-fluid back-img">
                <div className="logo">
                    <p>e!</p>
                </div>
                <div className="headings">
                    Find the best restaurants, cafes, bars
                </div>
                <div className="locationSelector">
                    <select className="locationDropdown">
                        <option value={0} selected disabled>Select</option>
                        <option value={1}>Mumbai</option>
                        <option value={1}>Pune</option>
                        <option value={1}>Banglore</option>
                        <option value={1}>Kolkata</option>
                        <option value={1}>Chennai</option>
                    </select>
                    <div>
                        <input className="restaurantsinput" type="text" placeholder="Please Enter Restaurant Name" />
                        <span className="glyphicon glyphicon-search search">
                            <div className="search-icon">
                                <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="currentColor" className="bi bi-search" viewBox="0 0 16 16">
                                    <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0" />
                                </svg>
                            </div>
                        </span>
                    </div>
                </div>
            </div>
        </div>
        );
    }
}

export default Wallpaper;


{/* <div class="row pt-5 mx-auto text-center logo-row">
                <div class="col-12">
                    <p class="px-4 py-3 px-md-4 py-md-2 logo">e!</p>
                </div>
            </div>
            <div class="row pt-5 mx-auto text-center restaurant-title">
                <div class="col-12">
                    <p class="restaurant-title">Find the best restaurants, cafes and bars</p>
                </div>
            </div>
            <div class="row pt-5 mx-auto text-center search-bar-row">
                <div class="col-2 col-sm-7 col-md-1 col-lg-2 col-xl-2"></div>
                <div class="col-2 col-sm-7 col-md-4 col-lg-3 col-xl-3 mb-4">
                    <div class="locationselector">
                        <select class="locationDropdown px-2 py-3">
                            <option value="0" selected disabled>Please type a location</option>
                            <option value="1">Mumbai</option>
                            <option value="1">Pune</option>
                            <option value="1">Banglore</option>
                            <option value="1">Kolkata</option>
                            <option value="1">Chennai</option>
                        </select>
                    </div>
                </div>
                <div class="col-2 col-sm-7 col-md-6 col-lg-5 col-xl-5">
                    <div class="restaurantselector">
                        <input class="restaurants-input ps-5 py-3" type="text" placeholder="Search for restaurants"/>
                        <div class="search-icon">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"      fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
                            <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0"/>
                            </svg>
                        </div>
                    </div>
                    </div>
                    <div class="col-2 col-sm-7 col-md-1 col-lg-2 col-xl-2"></div>
                </div>
            </div> */}
