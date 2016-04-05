import React from 'react';
var itemToAdd;
export default React.createClass({
    handleChangeEvent: function(e) {
        this.itemToAdd = e.target.value;
    },
    handleSubmit: function(e) {
        e.preventDefault();
        this.props.addEntry(this.itemToAdd);
    },
    render: function() {
        return <div>
            <h2>Add item:</h2>
            <form onSubmit={this.handleSubmit}>
                <input type="text" name="newItem" placeholder="New list item" onChange={this.handleChangeEvent}></input>
                <button >Add</button>
            </form>
        </div>;
    }
});