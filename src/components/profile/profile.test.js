import React from 'react';
import { Provider } from "react-redux";
import { createStore } from 'redux'
import { Reducer } from '../../reducers'
import Profile from './profile'
import Adapter from '@wojtekmaj/enzyme-adapter-react-17'
import Enzyme, { mount } from 'enzyme';
import {changeStatus} from "../../actions";
import {MemoryRouter} from "react-router";
Enzyme.configure({adapter: new Adapter()});

test("test profile state", () => {
    const store = createStore(Reducer)
    store.dispatch(changeStatus())
    const wrapper = mount(
        <Provider store={store}>
            <MemoryRouter initialEntries={['./main']}>
                <Profile/>
            </MemoryRouter>
        </Provider>
    )
    expect(wrapper.find(Profile)).toHaveLength(1);
    expect(store.getState().isLogin).toEqual(true)
})

