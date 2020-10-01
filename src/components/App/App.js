import React, { Component } from 'react';
import {connect} from 'react-redux';

class App extends Component {

  componentDidMount() {
    this.getGif();
  }

  getGif = () => {
    this.props.dispatch({
      type: 'FETCH_GIF'
    });
  }

  render() {
    console.log('IM READY TO ROCK');
    return (
      <div>
        <h1>Giphy Search!</h1>
      </div>
    );
  }
  
}

export default connect()(App);
