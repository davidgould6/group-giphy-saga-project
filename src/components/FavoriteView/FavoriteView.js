import React, { Component } from 'react';
import {connect} from 'react-redux';

class FavoriteView extends Component {


    render(){
        return( // Can also just use <> </> instead of divs
            <div>
                FavoriteView Component
            </div>
        );
    }
}

const mapStateToProps = (reduxState) => ({
    reduxState,
});

export default connect(mapStateToProps)(FavoriteView);

// Don't forget to import Component into parent Component