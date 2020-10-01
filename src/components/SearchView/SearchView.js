import React, { Component } from 'react';
import { connect } from 'react-redux';

class SearchView extends Component {


    render(){
        return( // Can also just use <> </> instead of divs
            <div>
                THIS IS THE SEARCHVIEW COMPONENT
            </div>
        );
    }
}
const mapStateToProps = (reduxState) => ({
    reduxState,
});
export default connect(mapStateToProps)(SearchView);

// Don't forget to import Component into parent Component