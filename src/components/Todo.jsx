import React from 'react';
import AddEntry from './AddEntry';

let displayed = false;

export default React.createClass({
    getList: function() {
        return this.props.list || [];
    },
    render: function() {
        return <div>
            <h1>Todo List</h1>
            <ol>
            {this.getList().map(entry =>
                <li key={entry}>
                    <span onClick={() => this.props.toggleEntry(entry)}>{entry}</span>
                    <input type="checkbox" onClick={() => this.props.toggleEntry(entry)} />
                    <button onClick={() => this.props.deleteEntry(entry)}>Delete</button>
                </li>
            )}
            </ol>
            {/*<button hidden={this.displayed} onClick={() => this.props.addEntry("Adding")}>Add</button>*/}
            <div>
                <AddEntry addEntry={this.props.addEntry}/>
            </div>
        </div>;
    }
});