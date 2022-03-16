import React from 'react'
export function initFetch(user){
    let scope=user;
    const saved=localStorage.getItem("users");
    const posts=localStorage.getItem("posts");
    if(!saved) {
        fetch("https://jsonplaceholder.typicode.com/users").
        then(res => res.json()).
        then(res => {
            let users = []
            for (let i = 0; i < res.length; i++) {
                let obj = {
                    name: res[i].username,
                    zipcode: res[i].address.zipcode,
                    email: res[i].email,
                    phone:res[i].phone,
                    password: res[i].address.street,
                    headline:"Me know nothing! Me just a Puppy!",
                    dob:"1999-08-18",
                    followed: [
                        res[(i+1) % res.length].username,
                        res[(i+2) % res.length].username,
                        res[(i+3) % res.length].username]
                }
                users.push(obj);
            }
                localStorage.setItem("users",JSON.stringify(users));
                scope.props.getUsers(users);
        }
        )
        }
        else {
            scope.props.getUsers(JSON.parse(saved));

        }
if (!posts) {
    //if (!scope.props.posts || scope.props.posts.length === 0) {
    fetch("https://jsonplaceholder.typicode.com/posts")
        .then(res => res.json())
        .then(res => {
            scope.props.getPosts(res.map(ele => ele.body));
            localStorage.setItem('posts', JSON.stringify(res.map(ele => ele.body)))
        });
    //}
} else {
    scope.props.getPosts(JSON.parse(posts))
}
}
export function checkExist(user, userInfo) {
    let scope = user;
    let found = scope.props.users.filter(ele => ele.name === userInfo.name);
    return found.length > 0;
}
export function url(path){ return `https://yl244-final.herokuapp.com${path}`};
