import React from 'react';
import { Provider } from "react-redux";
import { createStore } from 'redux'
import { Reducer } from '../../reducers'
import {updateUsers} from '../../actions'
import ProfileForm from './profileForm'
import Adapter from '@wojtekmaj/enzyme-adapter-react-17'
import Enzyme, { mount } from 'enzyme';
Enzyme.configure({adapter: new Adapter()});

test("test profile fetch userInfo", () => {
    const store = createStore(Reducer);
    store.dispatch(updateUsers(
        {   name:"Bret",
            password:"Kulas Light",
            email:"Sincere@april.biz",
            phone:"1-770-736-8031 x56442",
            dob:"1990-01-01",
            headline:"hi i am Leanne Graham",
            zipcode:"92998-3874",
            followed:["Antonette","Samantha","Karianne"]
        }))

    const wrapper = mount(
        <Provider store={store}>
            <ProfileForm/>
        </Provider>
    );
//test if get currentUser's Info
    expect(wrapper.find("#name1").props().children).toEqual("Bret");
    expect(wrapper.find("#email1").props().children).toEqual("Sincere@april.biz");
    expect(wrapper.find("#dob1").props().children).toEqual("1990-01-01");
    expect(wrapper.find("#phone1").props().children).toEqual("1-770-736-8031 x56442");
    expect(wrapper.find("#zipcode1").props().children).toEqual("92998-3874");
})




