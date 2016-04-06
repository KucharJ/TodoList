import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import {connect} from 'react-redux';
import {addEntry} from '../actions';

var itemToAdd;
export const AddEntry = React.createClass({
    mixins: [PureRenderMixin],
    handleChangeEvent: function(e) {
        this.itemToAdd = e.target.value;
    },
    onSubmit: function(e) {
        this.handleSubmit(e);
    },
    handleSubmit: function(e) {
        e.preventDefault();
        addEntry(this.itemToAdd);
    },
    render: function() {
        return <div>
            <h1>Add Item</h1>
            <form onSubmit={this.onSubmit}>
                <input type="text" name="newItem" placeholder="New list item" onChange={this.handleChangeEvent}></input>
                <button>Add</button>
            </form>
        </div>;
    }
});

function mapStateToProps(state) {
    return state;
}

export const AddEntryContainer = connect(mapStateToProps)(AddEntry);