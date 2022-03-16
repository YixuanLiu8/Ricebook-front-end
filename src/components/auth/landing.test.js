import React from 'react';
import Landing from './landing'
import { Provider } from "react-redux";
import { createStore } from 'redux'
import {Reducer} from '../../reducers'
import Login from './login';
import Register from './register';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17'
import Enzyme, { mount } from 'enzyme';
Enzyme.configure({adapter: new Adapter()});

test('test Landing Page render', () => {
    const store = createStore(Reducer);
    const wrapper = mount(
        <Provider store={store}>
            <Landing/>
        </Provider>
    );
    /** Show register section first */
    expect(wrapper.find(Login)).toHaveLength(1);
    expect(wrapper.find(Register)).toHaveLength(1);

});
