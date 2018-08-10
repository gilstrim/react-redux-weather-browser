import { FETCH_WEATHER } from '../actions/index';

export default function(state = [], action) {    

    switch (action.type) {
        case FETCH_WEATHER:
            return [ action.payload.data, ...state ]; // ... adds entries to new array. Equivalent to return state.concat([action.payload.data]); // need to create a new instance of state
    }

    return state;
}