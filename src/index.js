import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App/App';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';

// Import axios
import axios from 'axios';
// Import Logger
import logger from 'redux-logger';
//Import saga middleware
import createSagaMiddleware from 'redux-saga';
import {takeEvery, put} from 'redux-saga/effects';

function* createGifSaga(action){ 
    console.log('made it into fetchGifSaga');
    console.log('this is action.payload in index.js', action.payload)
    let stringToSend = action.payload
    let response = yield axios({
        method: 'POST',
        url: '/api/giphy',
        data: {string:stringToSend}
    });

    console.log('response data', response)
  }
  
function* fetchGifSaga(){
    
}

// Our only Reducer
const getGif = (state = [], action) => {
    if(action.type === 'GET_GIF'){
        return 1
    }
    return 0
}

function* sagaRoot() {
   yield takeEvery("FETCH_GIF", fetchGifSaga);
   yield takeEvery("CREATE_GIF", createGifSaga)
}


const sagaMiddleware = createSagaMiddleware();

const store = createStore(
    combineReducers({ getGif }),
    applyMiddleware(sagaMiddleware, logger),
  );

// Run sagaMiddleware
sagaMiddleware.run(sagaRoot);

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('react-root'));

