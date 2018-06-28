import {createStore, combineReducers} from 'redux'
import { Dishes } from './dishes';
import { Promotions } from './promotions';
import { Comments } from './comments';
import { Leaders } from './leaders';

export const ConfigureStore = () =>{
    const store = createStore(
        combineReducers({
            dishes:Dishes,
            promotions:Promotions,
            comments:Comments,
            leaders:Leaders
        })
    );
    return store
}
