import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import registerServiceWorker from './registerServiceWorker';
import {createStore , combineReducers, applyMiddleware} from 'redux';
import {Provider} from 'react-redux'; 
import logger from 'redux-logger';

const getFeedback = (state = {
    feeling: 0,
    content:0,
    support:0,
    comments: ''
} , action) =>{
    switch(action.type){
        case "ADD_FEELING" :
            return {...state, feeling: action.payload}
            case "ADD_CONTENT" :
            return {...state, content: action.payload}
            case "ADD_SUPPORT" :
            return {...state, support: action.payload}
            case "ADD_COMMENT" :
            return {...state, comments: action.payload}
        default:
        return state
    }
}




const store = createStore(
    combineReducers({
        getFeedback
    }),
    applyMiddleware(logger)
)


ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();
