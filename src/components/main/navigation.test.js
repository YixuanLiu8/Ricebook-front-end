import React from 'react';
import { Provider } from 'react-redux';
import {createStore} from 'redux'
import Reducer from '../../reducers'
import {changeStatus} from '../../actions'
import Adapter from '@wojtekmaj/enzyme-adapter-react-17'
import Enzyme, { mount } from 'enzyme';
import {MemoryRouter} from 'react-router'
import  Navigation from './Navigation'
Enzyme.configure({adapter: new Adapter()});

test('test render navigation',()=>{
    const store=createStore(Reducer)
    store.dispatch(changeStatus())
    const wrapper= mount(
        <Provider store={store}>
            <MemoryRouter initialEntries={['./main']}>
                <Navigation/>
            </MemoryRouter>
        </Provider>
    )

    expect(wrapper.find(Navigation)).toHaveLength(1)
})
test("if log out a user",()=>{
    const store = createStore(Reducer)
    store.dispatch(changeStatus())
    const wrapper = mount(
        <Provider store={store}>
            <MemoryRouter initialEntries={['./main']}>
                <Navigation/>
            </MemoryRouter>
        </Provider>
    )
    wrapper.find('#logout').simulate('click')
    expect(store.getState().isLogin).toEqual(false)
})
