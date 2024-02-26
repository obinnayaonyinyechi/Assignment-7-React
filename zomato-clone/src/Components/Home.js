import React, { Component } from 'react';
import Wallpaper from './Wallpaper';
import QuickSearches from './QuickSearches';





class Home extends Component {
    render() {
        return (
        <div>
            <Wallpaper />
            <QuickSearches />
        </div>
        );
    }
}

export default Home;


