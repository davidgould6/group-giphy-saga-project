import React, { Component } from 'react';
import { connect } from 'react-redux';
import './SearchViewItem.css';
import {Button, Card} from '@material-ui/core';

class SearchViewItem extends Component {

addFavorite = (imageUrl) => {
    console.log('added a favorite!!!', imageUrl);
    this.props.dispatch({
        type: 'CREATE_FAVORITE',
        payload: imageUrl
    })
} 
    render(){
        console.log('this is our props in ITEM', this.props)
        return( 
            
               <div className="gifItem"
                    key={this.props.item.id}>
                    <Card>
                        <img src={this.props.item.images.fixed_width_small.url}/>
                        <Button 
                            variant="contained" 
                            color="primary"
                            onClick={() => this.addFavorite(this.props.item.images.fixed_width_small.url)}
                            >Favorite</Button>
                    </Card>
                </div> 
           
        );
    }
}

export default connect()(SearchViewItem);