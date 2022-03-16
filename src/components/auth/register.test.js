import React from 'react'
import {Provider} from 'react-redux'
import {createStore} from 'redux'
import Reducer from '../../reducers'
import {Register} from './register'
import { getUsers } from '../../actions'
import Adapter from '@wojtekmaj/enzyme-adapter-react-17'
import Enzyme, {mount} from 'enzyme';
Enzyme.configure({adapter:new Adapter()});


test("check login status",()=>{
    const store = createStore(Reducer)
    const wrapper = mount(

        <Provider store={store}>
            <Register/>
        </Provider>
    )
    store.dispatch(getUsers([
        {name:"Samantha",password:"Douglas Extension",email:"Nathan@yesenia.net",phone:"1-463-123-4447",dob:"1990-01-01",headline:"hi i am Clementine Bauch",zipcode:"59590-4157",followed:["Karianne","Kamren","Leopoldo_Corkery"]},
        {name:"Karianne",password:"Hoeger Mall",email:"Julianne.OConner@kory.org",phone:"493-170-9623 x156",dob:"1990-01-01",headline:"hi i am Patricia Lebsack",zipcode:"53919-4257",followed:["Kamren","Leopoldo_Corkery","Elwyn.Skiles"]},
        {name:"Kamren",password:"Skiles Walks",email:"Lucio_Hettinger@annie.ca",phone:"(254)954-1289",dob:"1990-01-01",headline:"hi i am Chelsey Dietrich",zipcode:"33263",followed:["Leopoldo_Corkery","Elwyn.Skiles","Maxime_Nienow"]},
        {name:"Leopoldo_Corkery",password:"Norberto Crossing",email:"Karley_Dach@jasper.info",phone:"1-477-935-8478 x6430",dob:"1990-01-01",headline:"hi i am Mrs. Dennis Schulist",zipcode:"23505-1337",followed:["Elwyn.Skiles","Maxime_Nienow","Delphine"]},
    ]))


    wrapper.find("#Name").simulate("change",{target:{value:"Samantha"}})
    //console.log(wrapper.find("#Name").props())
    wrapper.find("#YourPassword").simulate("change",{target:{value:"Douglas Extension"}})
    //console.log(wrapper.find("#YourPassword").props())
    wrapper.find("#Email").simulate("change",{target:{value:"123@123.123"}})
    //console.log(wrapper.find("#Email").props())
    wrapper.find("#Birthday").simulate("change",{target:{value:"1999-08-18"}})
    //console.log(wrapper.find("#Birthday").props())
    wrapper.find("#Phone").simulate("change",{target:{value:"1234567890"}})
    //console.log(wrapper.find("#Phone").props())
    wrapper.find("#PasswordConfirmation").simulate("change",{target:{value:"Douglas Extension"}})
    //console.log(wrapper.find("#PasswordConfirmation").props())
    wrapper.find("form").simulate("submit", {preventDefault: () => {}})
    wrapper.find("#login").simulate("click")
    expect(store.getState().isLogin).toEqual(false)
})

test("test register component with empty", () => {
    const store = createStore(Reducer);
    const wrapper = mount(
        <Provider store={store}>
            <Register/>
        </Provider>
    );

    wrapper.find("#Name").simulate("change",{target:{value:""}})
    //console.log(wrapper.find("#Name").props())
    wrapper.find("#YourPassword").simulate("change",{target:{value:""}})
    //console.log(wrapper.find("#YourPassword").props())
    wrapper.find("#Email").simulate("change",{target:{value:""}})
    //console.log(wrapper.find("#Email").props())
    wrapper.find("#Birthday").simulate("change",{target:{value:""}})
    //console.log(wrapper.find("#Birthday").props())
    wrapper.find("#Phone").simulate("change",{target:{value:""}})
    wrapper.find("#Zipcode").simulate("change",{target:{value:""}})
    //console.log(wrapper.find("#Phone").props())
    wrapper.find("#PasswordConfirmation").simulate("change",{target:{value:""}})
    //console.log(wrapper.find("#PasswordConfirmation").props())
    wrapper.find("#login").simulate("click")
    wrapper.find("form").simulate("submit", {preventDefault: () => {}})
    expect(wrapper.find("#errMsg").props().children).toEqual("None of the items above could be empty!");
})

test("test password not match", () => {
    const store = createStore(Reducer);

    const wrapper = mount(
        <Provider store={store}>
            <Register/>
        </Provider>
    );
    wrapper.find("#Name").simulate("change",{target:{value:"Samantha"}})
    //console.log(wrapper.find("#Name").props())
    wrapper.find("#YourPassword").simulate("change",{target:{value:"1"}})
    //console.log(wrapper.find("#YourPassword").props())
    wrapper.find("#Email").simulate("change",{target:{value:"123@123.123"}})
    //console.log(wrapper.find("#Email").props())
    wrapper.find("#Birthday").simulate("change",{target:{value:"1999-08-18"}})
    wrapper.find("#Zipcode").simulate("change",{target:{value:"77005"}})
    //console.log(wrapper.find("#Birthday").props())
    wrapper.find("#Phone").simulate("change",{target:{value:"1234567890"}})
    //console.log(wrapper.find("#Phone").props())
    wrapper.find("#PasswordConfirmation").simulate("change",{target:{value:"Douglas Extension"}})
    //console.log(wrapper.find("#PasswordConfirmation").props())
    //wrapper.find("form").simulate("submit", {preventDefault: () => {}})
    //console.log(wrapper.find("#login").props())
   // console.log(wrapper.find("#Name").props())
    wrapper.find("#login").simulate("click")
    //console.log(store.getState().userInfo)
    //wrapper.find("form").simulate("submit", {preventDefault: () => {}});
    expect(wrapper.find("#errMsg").props().children).toEqual("Two passwords are not match!");
})
