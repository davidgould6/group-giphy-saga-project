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
    let response = yield axios({
        method: 'POST',
        url: '/api/giphy',
        data: {string: action.payload}
    });
    yield put({
        type: 'API_RESULT',
        payload: response.data.data
    });

    console.log('response data', response)
  }

function* createFavoriteSaga(action){
    console.log('this is our Favorites payload', action.payload);
    yield axios({
        method: 'POST',
        url: '/api/favorite',
        data: {url: action.payload}
    });
}

function* setCategorySaga(action){
    console.log('setCategorySaga', action.payload);
    yield axios({
        method: 'PUT',
        url: `/api/favorites/${action.payload.id}`,
        data: { category: action.payload.categoryId }
    });

}

const giphyReducer = (state = [], action) => {
    if(action.type === 'API_RESULT'){
        return action.payload;
    }
    return state;
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
   yield takeEvery("CREATE_GIF", createGifSaga);
   yield takeEvery("CREATE_FAVORITE", createFavoriteSaga);
   yield takeEvery("SET_CATEGORY", setCategorySaga);
}


const sagaMiddleware = createSagaMiddleware();

const store = createStore(
    combineReducers({ 
        getGif,
        giphyReducer
     }),
    applyMiddleware(sagaMiddleware, logger),
  );

// Run sagaMiddleware
sagaMiddleware.run(sagaRoot);

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('react-root'));

