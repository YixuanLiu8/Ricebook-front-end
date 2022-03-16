import React from 'react';
import Landing from './components/auth/landing';
import Main from './components/main/main';
import Profile from './components/profile/profile';
import { Provider } from "react-redux";
import { createStore } from 'redux';
import { Reducer } from './reducers';
import { MemoryRouter } from 'react-router';
import { CHANGE_USER_STATUS } from './actions';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17'
import Enzyme, { mount } from 'enzyme';
import App from './App';
Enzyme.configure({adapter: new Adapter()});

test("test 1 not login it should be at '/'", () => {
    const store = createStore(Reducer);
    const wrapper = mount(
        <MemoryRouter initialEntries={[ '/' ]}>
            <Provider store={store}>
                <App/>
            </Provider>
        </MemoryRouter>
    );
    expect(wrapper.find(Landing)).toHaveLength(1);
    expect(wrapper.find(Main)).toHaveLength(0);
    expect(wrapper.find(Profile)).toHaveLength(0);
});
test("test 2 not login it should be at '/'", () => {
    const store = createStore(Reducer);
    const wrapper = mount(
        <MemoryRouter initialEntries={[ '/main' ]}>
            <Provider store={store}>
                <App/>
            </Provider>
        </MemoryRouter>
    );
    expect(wrapper.find(Landing)).toHaveLength(1);
    expect(wrapper.find(Main)).toHaveLength(0);
    expect(wrapper.find(Profile)).toHaveLength(0);
});
test("test 3 if not login it should be at '/'", () => {
    const store = createStore(Reducer);
    const wrapper = mount(
        <MemoryRouter initialEntries={[ '/profile' ]}>
            <Provider store={store}>
                <App/>
            </Provider>
        </MemoryRouter>
    );
    expect(wrapper.find(Landing)).toHaveLength(1);
    expect(wrapper.find(Main)).toHaveLength(0);
    expect(wrapper.find(Profile)).toHaveLength(0);
});
test("test if login it should be at '/main'", () => {
    const store = createStore(Reducer);
    store.dispatch({type: CHANGE_USER_STATUS}); // isLogin = true
    const wrapper = mount(
        <MemoryRouter initialEntries={[ '/main' ]}>
            <Provider store={store}>
                <App/>
            </Provider>
        </MemoryRouter>
    );
    expect(wrapper.find(Landing)).toHaveLength(0);
    expect(wrapper.find(Main)).toHaveLength(1);
    expect(wrapper.find(Profile)).toHaveLength(0);
});
test("test if login it should be at '/profile'", () => {
    const store = createStore(Reducer);
    store.dispatch({type: CHANGE_USER_STATUS});
    const wrapper = mount(
        <MemoryRouter initialEntries={[ '/profile' ]}>
            <Provider store={store}>
                <App/>
            </Provider>
        </MemoryRouter>
    );
    expect(wrapper.find(Landing)).toHaveLength(0);
    expect(wrapper.find(Main)).toHaveLength(1);
    expect(wrapper.find(Profile)).toHaveLength(0);
});
