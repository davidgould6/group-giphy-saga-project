import React, { Component } from 'react';
import { connect } from 'react-redux';

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
    }

    render(){
        console.log('this is our state.searchParams', this.state.searchParams);
        return( 
            <div>
                THIS IS THE SEARCHVIEW COMPONENT
                <input type="text" placeholder="Search for gif" onChange={this.onSearchGifChange}/>
                <button onClick={this.submitSearch}>Search</button>
                <div className="displayGifs">

                </div>
            </div>
        );
    }
}
const mapStateToProps = (reduxState) => ({
    reduxState,
});
export default connect(mapStateToProps)(SearchView);