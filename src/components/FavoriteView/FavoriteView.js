import React, { Component } from 'react';
import {connect} from 'react-redux';
import axios from 'axios';

class FavoriteView extends Component {

    componentDidMount() {
        console.log('compDM');

        this.props.dispatch({
            type: 'FETCH_GIF',
        }); // end axios
    }

    render(){
        console.log('reduxState.getGif from FavoriteView:', this.props.reduxState.getGif);
        return( // Can also just use <> </> instead of divs
            <div>
                FavoriteView Component
                <img src={""} alt=""/>
                {JSON.stringify(this.props.reduxState)}
            </div>
        );
    }
}

const mapStateToProps = (reduxState) => ({
    reduxState,
});

export default connect(mapStateToProps)(FavoriteView);

// Don't forget to import Component into parent Component