import React from 'react';
import { Provider } from "react-redux";
import { createStore } from 'redux'
import { Reducer } from '../../reducers'
import AddArticle from './addArticle';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17'
import Enzyme, { mount } from 'enzyme';
Enzyme.configure({adapter: new Adapter()});

test('test if add correct articles', () => {
    const store = createStore(Reducer);
    const wrapper = mount(
        <Provider store={store}>
            <AddArticle/>
        </Provider>
    );

    wrapper.find("textarea").simulate("change", {target: {value: "123"}});
    wrapper.find("button").at(0).simulate("click");
    wrapper.find("button").at(1).simulate("click");
    expect(wrapper.find("img")).toHaveLength(1);
})
