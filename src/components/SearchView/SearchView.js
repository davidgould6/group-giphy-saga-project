import React, { Component } from 'react';
import { connect } from 'react-redux';
import SearchViewItem from './SearchViewItem';

class SearchView extends Component {
    state = {
        searchParams: ''
    }

    onSearchGifChange = (event) => {
        this.setState({
            searchParams: event.target.value
        });
    }

    submitSearch = () => {
        this.props.dispatch({
           type:'CREATE_GIF',
           payload: this.state.searchParams
        });
        this.setState({
            searchParams: ''
        })
    }

    render(){
        console.log('this is our state.searchParams', this.state.searchParams);
        console.log('this.props is ', this.props);
        return( 
            <div>
                THIS IS THE SEARCHVIEW COMPONENT
                <input type="text" value={this.state.searchParams} placeholder="Search for gif" onChange={this.onSearchGifChange}/>
                <button onClick={this.submitSearch}>Search</button>
                <div className="displayGifs">
                    {this.props.reduxState.giphyReducer.map((item, i) => 
                        <SearchViewItem 
                        key={i}
                        item={item}
                        id={i}/>
                        )}
                </div>
            </div>
        );
    }
}
const mapStateToProps = (reduxState) => ({
    reduxState,
});
export default connect(mapStateToProps)(SearchView);