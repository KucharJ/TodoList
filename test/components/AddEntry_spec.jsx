import React from 'react';
import ReactDOM from 'react-dom';
import {
    renderIntoDocument,
    scryRenderedDOMComponentsWithTag,
    Simulate
} from 'react-addons-test-utils';
import AddEntry from '../../src/components/AddEntry';
import {expect} from 'chai';

xdescribe('AddEntry', () => {
    it('should add an item to the list', () => {
        let expectedLength = 3;
        let list = ['Take out trash','Mow the lawn'];
        const addEntry = (newEntry) => {list.push(newEntry);}
        const component = renderIntoDocument(
            <AddEntry addEntry={addEntry} />
        );
        const input = scryRenderedDOMComponentsWithTag(component, 'input');
        const button = scryRenderedDOMComponentsWithTag(component, 'button');
        input[0].value='Vacuum';
        Simulate.change(input[0]);
        Simulate.click(button[0]);

        expect(list.length).to.equal(expectedLength);

    });
});