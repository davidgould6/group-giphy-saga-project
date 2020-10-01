import React, { Component } from 'react';
import {connect} from 'react-redux';


class FavoriteItem extends Component {


    render(){
        return( // Can also just use <> </> instead of divs
            <li>
                {this.props.gif.name}
                <select>
                    <option>Funny</option>
                    <option>Cohort</option>
                    <option>Cartoon</option>
                    <option>nsfw</option>
                    <option>Meme</option>
                </select>
                <button>Submit</button>
            </li>
        );
    }
}

export default connect()(FavoriteItem);

// Don't forget to import Component into parent Component