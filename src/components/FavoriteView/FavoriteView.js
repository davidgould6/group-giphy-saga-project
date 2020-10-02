import React, { Component } from 'react';
import {connect} from 'react-redux';
import axios from 'axios';
import FavoriteItem from '../FavoriteItem/FavoriteItem';

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
                <br></br>
                {this.props.reduxState.getGif.map(gif => 
                    <FavoriteItem key={gif.id} gif={gif} />
                )}
            </div>
        );
    }
}

const mapStateToProps = (reduxState) => ({
    reduxState,
});

export default connect(mapStateToProps)(FavoriteView);