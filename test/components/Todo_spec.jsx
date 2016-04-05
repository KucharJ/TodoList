import React from 'react';
import ReactDOM from 'react-dom';
import {
    renderIntoDocument,
    scryRenderedDOMComponentsWithTag,
    Simulate
} from 'react-addons-test-utils';
import Todo from '../../src/components/Todo';
import {expect} from 'chai';

describe('Todo', () => {

    it('renders a list', () => {
        const component = renderIntoDocument(
            <Todo list={['Take out trash','Mow the lawn']}/>
        );
        const list = scryRenderedDOMComponentsWithTag(component, 'li');

        expect(list.length).to.equal(2);
        expect(list[0].textContent).to.equal('Take out trash');
        expect(list[1].textContent).to.equal('Mow the lawn');
    });

    it('invokes callback when the list item is clicked', () => {
        let toggled;
        const mainList = ['Take out trash', 'Mow the lawn'];
        const toggleEntry = (entry) => {toggled = entry;}
        const component = renderIntoDocument(
            <Todo list={mainList} toggleEntry={toggleEntry} />
        );
        const list = scryRenderedDOMComponentsWithTag(component, 'li');
        Simulate.click(list[0]);

        expect(toggled).to.equal(list[0].textContent);
    });

});