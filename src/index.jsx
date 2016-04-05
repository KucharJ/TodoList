import React from 'react';
import ReactDOM from 'react-dom';
import Todo from './components/Todo';

let list = ['Wash dishes', 'Take out trash'];

const toggleEntry = function (entry) {
    console.log('toggle this entry: ' + entry);
};

const deleteEntry = function(entry) {
    let loc = list.indexOf(entry);
    if(loc >= 0) {
        list.splice(loc, 1);
    }

    ReactDOM.render(
        <Todo list={list} toggleEntry={toggleEntry} deleteEntry={deleteEntry} addEntry={addEntry} />,
        document.getElementById('app')
    );
};

const addEntry = function(itemToAdd) {
    let loc = list.indexOf(itemToAdd);
    if(loc === -1) {
        list.push(itemToAdd);
        console.log('Adding item: ' + itemToAdd);
    } else {
        console.log('Item already exists: ' + itemToAdd);
    }

    ReactDOM.render(
        <Todo list={list} toggleEntry={toggleEntry} deleteEntry={deleteEntry} addEntry={addEntry} />,
        document.getElementById('app')
    );
};

ReactDOM.render(
    <Todo list={list} toggleEntry={toggleEntry} deleteEntry={deleteEntry} addEntry={addEntry} />,
    document.getElementById('app')
);