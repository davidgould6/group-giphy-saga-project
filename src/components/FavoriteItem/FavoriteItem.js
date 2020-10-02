import React, { Component } from 'react';
import {connect} from 'react-redux';
import {Button, Card, CardContent} from '@material-ui/core';
import './FavoriteItem.css';
import DeleteIcon from '@material-ui/core';
import IconButton from '@material-ui/core/IconButton';


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
            <div className="favItem">
                <Card className="favorite">
                    <img src={this.props.gif.name} />
                    <select className="selectClass" id="lang" value={this.state.categoryID} onChange={this.handleChange}>
                        <option value="1" >Funny</option>
                        <option value="2" >Cohort</option>
                        <option value="3" >Cartoon</option>
                        <option value="4" >nsfw</option>
                        <option value="5" >Meme</option>
                    </select>
                    {/* <button onClick={this.sendToSaga}>Submit</button> */}
                    <Button 
                        className="favorite"
                        variant="contained" 
                        color="primary"
                        onClick={this.sendToSaga}>Submit</Button>
                    <Button 
                        className="favorite"
                        variant="contained" 
                        color="primary"
                        onClick={this.unFavorite}>Unfavorite</Button>
                    {/* <IconButton aria-label="delete" onClick={this.unFavorite}>
                        <DeleteIcon />
                    </IconButton> */}
                </Card>
            </div>
        );
    }
}

export default connect()(FavoriteItem);

// Don't forget to import Component into parent Component