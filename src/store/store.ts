import { string } from 'fp-ts';
import { createStore } from 'redux';

const store = createStore(reducer);
const ACTION_1 = 'ACTION_1';
const ACTION_2 = 'ACTION_2';

interface Action {
    [index: string]: any;

    type: string;
}

function reducer(state: any, action: Action) {
    switch(action.type) {
        case ACTION_1: return { value: action.value_1 };
        case ACTION_2: return { value: action.value_2 };
        
        default: return state;
    }
}

function setAction_1(value: any) {
    const action_1 = { 
        type: ACTION_1,
        value_1: value,
    };

    store.dispatch(action_1);
}

export default store;