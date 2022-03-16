import React from 'react';
import { Provider } from "react-redux";
import { createStore } from 'redux'
import { Reducer } from '../../reducers'
import Adapter from '@wojtekmaj/enzyme-adapter-react-17'
import Enzyme, { mount } from 'enzyme';
import {getUsers, addFollower} from '../../actions'
import Following from './following';
Enzyme.configure({adapter: new Adapter()});
test("test followed user component successful update", () => {
    const store = createStore(Reducer);
    store.dispatch(getUsers([{name:"Bret", password:"Kulas Light", email:"Sincere@april.biz",phone:"1-770-736-8031 x56442",dob:"1990-01-01",headline:"hi i am Leanne Graham",zipcode:"92998-3874",followed:["Antonette","Samantha","Karianne"]},
        {name:"Antonette",password:"Victor Plains",email:"Shanna@melissa.tv",phone:"010-692-6593 x09125",dob:"1990-01-01",headline:"hi i am Ervin Howell",zipcode:"90566-7771",followed:["Samantha","Karianne","Kamren"]},
        {name:"Samantha",password:"Douglas Extension",email:"Nathan@yesenia.net",phone:"1-463-123-4447",dob:"1990-01-01",headline:"hi i am Clementine Bauch",zipcode:"59590-4157",followed:["Karianne","Kamren","Leopoldo_Corkery"]},
        {name:"Karianne",password:"Hoeger Mall",email:"Julianne.OConner@kory.org",phone:"493-170-9623 x156",dob:"1990-01-01",headline:"hi i am Patricia Lebsack",zipcode:"53919-4257",followed:["Kamren","Leopoldo_Corkery","Elwyn.Skiles"]},
        {name:"Kamren",password:"Skiles Walks",email:"Lucio_Hettinger@annie.ca",phone:"(254)954-1289",dob:"1990-01-01",headline:"hi i am Chelsey Dietrich",zipcode:"33263",followed:["Leopoldo_Corkery","Elwyn.Skiles","Maxime_Nienow"]},
        {name:"Leopoldo_Corkery",password:"Norberto Crossing",email:"Karley_Dach@jasper.info",phone:"1-477-935-8478 x6430",dob:"1990-01-01",headline:"hi i am Mrs. Dennis Schulist",zipcode:"23505-1337",followed:["Elwyn.Skiles","Maxime_Nienow","Delphine"]},
        {name:"Elwyn.Skiles",password:"Rex Trail",email:"Telly.Hoeger@billy.biz",phone:"210.067.6132",dob:"1990-01-01",headline:"hi i am Kurtis Weissnat",zipcode:"58804-1099",followed:["Maxime_Nienow","Delphine","Moriah.Stanton"]},
        {name:"Maxime_Nienow",password:"Ellsworth Summit",email:"Sherwood@rosamond.me",phone:"586.493.6943 x140",dob:"1990-01-01",headline:"hi i am Nicholas Runolfsdottir V",zipcode:"45169",followed:["Delphine","Moriah.Stanton","Bret"]},
        {name:"Delphine",password:"Dayna Park",email:"Chaim_McDermott@dana.io",phone:"(775)976-6794 x41206",dob:"1990-01-01",headline:"hi i am Glenna Reichert",zipcode:"76495-3109",followed:["Moriah.Stanton","Bret","Antonette"]},
        {name:"Moriah.Stanton",password:"Kattie Turnpike",email:"Rey.Padberg@karina.biz",phone:"024-648-3804",dob:"1990-01-01",headline:"hi i am Clementina DuBuque",zipcode:"31428-2261",followed:["Bret","Antonette","Samantha"]}]))
//problem
    store.dispatch(addFollower({
        name:"Bret",
        password:"Kulas Light",
        email:"Sincere@april.biz",
        phone:"1-770-736-8031 x56442",
        dob:"1990-01-01",
        headline:"hi i am Leanne Graham",
        zipcode:"92998-3874",followed:[]}))

    const wrapper = mount(
        <Provider store={store}>
            <Following open={true}/>
        </Provider>
    );
    wrapper.find("input").simulate('change', {target: {value: "Antonette"}});
    //wrapper.find("updateFollower").simulate('click');
    //expect(wrapper.find("Follower")).toHaveLength(1);
    //wrapper.find("removeFollower").simulate('click');
    //expect(wrapper.find("Follower")).toHaveLength(0);
    wrapper.find("button").at(0).simulate('click');
    wrapper.find("button").at(1).simulate('click');
    //test if added and remove followers
    expect(store.getState().followedUser).toEqual([{
        "name": "Antonette",},
        {
          "name": "Antonette",
        },
])
})
