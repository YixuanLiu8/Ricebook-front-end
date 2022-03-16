import React from 'react';
import { Provider } from "react-redux";
import { createStore } from 'redux'
import { Reducer } from '../../reducers'
import ArticlesView from './articlesView'
import {addFollower, getPosts, getUsers, updateUsers} from '../../actions'
import Adapter from '@wojtekmaj/enzyme-adapter-react-17'
import Enzyme, { mount } from 'enzyme';
import Following from "../main/following";
Enzyme.configure({adapter: new Adapter()});


test('test if render correct posts', () => {
    const store = createStore(Reducer);
    let posts=[
        "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto",
        "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla",
        "et iusto sed quo iure\nvoluptatem occaecati omnis eligendi aut ad\nvoluptatem doloribus vel accusantium quis pariatur\nmolestiae porro eius odio et labore et velit aut",
        "ullam et saepe reiciendis voluptatem adipisci\nsit amet autem assumenda provident rerum culpa\nquis hic commodi nesciunt rem tenetur doloremque ipsam iure\nquis sunt voluptatem rerum illo velit",
        "repudiandae veniam quaerat sunt sed\nalias aut fugiat sit autem sed est\nvoluptatem omnis possimus esse voluptatibus quis\nest aut tenetur dolor neque",
        "ut aspernatur corporis harum nihil quis provident sequi\nmollitia nobis aliquid molestiae\nperspiciatis et ea nemo ab reprehenderit accusantium quas\nvoluptate dolores velit et doloremque molestiae",
        "dolore placeat quibusdam ea quo vitae\nmagni quis enim qui quis quo nemo aut saepe\nquidem repellat excepturi ut quia\nsunt ut sequi eos ea sed quas",
    ];
    for (let i=0; i<100; i++) {
        posts.push('content-1')
    }
    //here
    store.dispatch(addFollower({
        name:"Bret",
        password:"Kulas Light",
        email:"Sincere@april.biz",
        phone:"1-770-736-8031 x56442",
        dob:"1990-01-01",
        headline:"hi i am Leanne Graham",
        zipcode:"92998-3874",followed:[]}));

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
    store.dispatch(updateUsers({
        name: "Bret",
        email: "Rey.Padberg@karina.biz",
        phone: "",
        dob: "",
        zipcode: "31428-2261",
        password: "Kattie Turnpike",
        headline: "Hi i am Moriah.Stanton",
        followed: []}))
    store.dispatch(getPosts(posts));

    const wrapper = mount(
        <Provider store={store}>
            <ArticlesView/>
            <Following/>
        </Provider>
    );
    expect(wrapper.find("#cUserPosts")).toHaveLength(20);//test if fetch articles for current user
    wrapper.find("#updateFollower").simulate("click");
    //test if add posts while add follower
    expect(wrapper.find("#cUserPosts")).toHaveLength(20);
    //test if remove posts while remove follower
    wrapper.find("#removeFollower").simulate("click");
    expect(wrapper.find("#cUserPosts")).toHaveLength(20);
    //test if posts filtered
    wrapper.find("#search").simulate("change", {target: {value: "#4$%^55*&(&(*"}});
    expect(wrapper.find("#searchPost")).toEqual({});
})
