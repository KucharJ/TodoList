import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, hashHistory} from 'react-router';
import App from './components/App';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import reducer from './reducer';
import {setState} from './actions';
import {TodoContainer} from './components/Todo';
import {AddEntryContainer} from './components/AddEntry';

const store = createStore(reducer);
store.dispatch(setState());

const routes = <Route component={App}>
    <Route path="/addItem" component={AddEntryContainer} />
    <Route path="/" component={TodoContainer} />
</Route>;

ReactDOM.render(
    <Provider store={store}>
        <Router history={hashHistory}>{routes}</Router>
    </Provider>,
    document.getElementById('app')
);