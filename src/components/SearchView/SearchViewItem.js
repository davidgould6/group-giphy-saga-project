import React, { Component } from 'react';
import { connect } from 'react-redux';

class SearchViewItem extends Component {

addFavorite = (imageUrl) => {
    console.log('added a favorite!!!', imageUrl);
} 
    render(){
        console.log('this is our props in ITEM', this.props)
        return( 
               <div key={this.props.item.id}>
                   <img src={this.props.item.images.fixed_width_small.url}/>
                    <button onClick={() => this.addFavorite(this.props.item.images.fixed_width_small.url)}>Favorite</button>
                </div> 
        );
    }
}

export default SearchViewItem;