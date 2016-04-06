import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import {connect} from 'react-redux';
import * as actions from '../actions';

export const Todo = React.createClass({
    mixins: [PureRenderMixin],
    getList: function() {
        return this.props.list || [];
    },
    render: function() {
        return <div>
            <h1>Todo List</h1>
            <ol>
            {this.getList().map(entry =>
                <li key={entry}>
                    <span onClick={() => toggleEntry(entry)}>{entry}</span>
                    <input type="checkbox" onClick={() => toggleEntry(entry)} />
                    <button onClick={() => deleteEntry(entry)}>Delete</button>
                </li>
            )}
            </ol>
            <button>Add</button>
        </div>;
    }
});

function mapStateToProps(state) {
    return {
        list: state.get('list'),
        checked: state.get('checked')
    };
}

export const TodoContainer = connect(mapStateToProps, actions)(Todo);