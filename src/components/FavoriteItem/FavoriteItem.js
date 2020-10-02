import React, { Component } from 'react';
import {connect} from 'react-redux';


class FavoriteItem extends Component {
    state = {
        categoryId: 1
    }

    handleChange = (event) => {
        console.log('handleChange triggered, value:', event.target.value);
        this.setState({
            categoryId: event.target.value
        });
    }

    sendToSaga = () => {
        console.log('sendToSaga handshake');
        this.props.dispatch({
            type: "SET_CATEGORY",
            payload: {
                categoryId: this.state.categoryId,
                id: this.props.gif.id
            }
        });
    }
    
    unFavorite = () => {
        console.log('in unfavorite');
        this.props.dispatch({
            type: "REMOVE_FAVORITE",
            payload: this.props.gif.id
        });
    }

    render(){
        console.log('FavoriteItem this.state:', this.props);
        return( // Can also just use <> </> instead of divs
            <li>
                <img src={this.props.gif.name} />
                <select id="lang" value={this.state.categoryID} onChange={this.handleChange}>
                    <option value="1" >Funny</option>
                    <option value="2" >Cohort</option>
                    <option value="3" >Cartoon</option>
                    <option value="4" >nsfw</option>
                    <option value="5" >Meme</option>
                </select>
                <button onClick={this.sendToSaga}>Submit</button>
                <button onClick={this.unFavorite}>Unfavorite</button>
            </li>
        );
    }
}

export default connect()(FavoriteItem);

// Don't forget to import Component into parent Component