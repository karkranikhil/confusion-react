
import {createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { createForms, initialFieldState } from 'react-redux-form';
import logger from 'redux-logger';
import { Dishes } from './dishes';
import { Promotions } from './promotions';
import { Comments } from './comments';
import { Leaders } from './leaders';
import { InitialFeedback } from './forms';

export const ConfigureStore = () =>{
    const store = createStore(
        combineReducers({
            dishes:Dishes,
            promotions:Promotions,
            comments:Comments,
            leaders:Leaders,
            ...createForms({
                feedback: InitialFeedback
            })
        }),
        applyMiddleware(thunk, logger)
    );
    return store
}
