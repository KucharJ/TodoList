import {List, Map} from 'immutable';

const initialState = {
    list: List.of('Take out trash','Mow the lawn'),
    checked: []
}

function setState(state=initialState, newState) {
    return state.merge(newState);
}

const toggleEntry = function (state, entry) {
    console.log('toggleEntry called');
};

const deleteEntry = function(state, entry) {
    console.log('deleteEntry called');
    /*let loc = list.indexOf(entry);
    if(loc >= 0) {
        list.splice(loc, 1);
    }*/
};

const addEntry = function(state, itemToAdd) {
    console.log('addEntry called');
    /*let loc = list.indexOf(itemToAdd);
    if(loc === -1) {
        list.push(itemToAdd);
        console.log('Adding item: ' + itemToAdd);
    } else {
        console.log('Item already exists: ' + itemToAdd);
    }*/
};

export default function(state = Map(), action) {
    switch(action.type) {
        case 'SET_STATE':
            return setState(state, action.state);
        case 'DELETE_ENTRY':
            return deleteEntry(state, entry);
        case 'ADD_ENTRY':
            return addEntry(state, entry);
        case 'TOGGLE_ENTRY':
            return toggleEntry(state, entry);
    }
    return state;
}