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

function* fetchGifSaga(action){ 
    console.log('made it into fetchGifSaga');
    //TO DO make this real
    let response = yield axios({
            method: 'GET',
            url: '/api/favorite'
        })
        console.log('response', response.data)
        yield put({
            type: 'GET_GIF',
            payload: response.data
        });
        console.log('this is our gif', response.data);
}
  
function* createGifSaga(action){
        console.log('this is action.payload in index.js', action.payload)
    let stringToSend = action.payload
    let response = yield axios({
        method: 'POST',
        url: '/api/giphy',
        data: {string:stringToSend}
    });

    console.log('response data', response)
  }
}

// Our only Reducer
const getGif = (state = [], action) => {
    if(action.type === 'GET_GIF'){
        console.log('getGif changing state');
        return action.payload;
    }
    return state;
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

