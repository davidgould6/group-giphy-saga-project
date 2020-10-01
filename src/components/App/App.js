import React, { Component } from 'react';
import FavoriteView from '../FavoriteView/FavoriteView';
import SearchView from '../SearchView/SearchView';
import { Route, HashRouter as Router, Link } from 'react-router-dom';

class App extends Component {

  render() {
    console.log('IM READY TO ROCK');
    return (
      <Router>
        <div>
          <header>
            <nav>
              <main>
                <ul>
                  <li><Link to="/searchview">Search View</Link></li>
                  <li><Link to="/favoriteview">Favorite View</Link></li>
                </ul>
              </main>
            </nav>
          </header>
          <h1>Giphy Search!</h1>

          <Route path='/searchview' exact>
            <SearchView />
          </Route>
          
          <Route path='/favoriteview' exact>
            <FavoriteView />
          </Route>
        </div>
      </Router>
    );
  }
  
}

export default App;
