import React, {Component} from 'react'
import { connect } from 'react-redux'
import Register from './register'
import Login from './login'
import {initFetch} from "../storage/initFetch";
import {url} from '../storage/initFetch';
import{updateUsers,changeStatus,getUsers,getPosts} from "../../actions";

export class Landing extends Component {
    componentDidMount() {
        //const url = path => `http://localhost:3001${path}`
        fetch(url("/profile"), {
            method: 'GET',
            credentials: 'include',
            headers: { 'Content-Type': 'application/json' },
        })
            .then(res => {
                if (res.status === 200)
                    return res.json();
                else
                    return res.text();
            })
            .then(res => {
                if (res.result && res.result === "success") {
                    this.props.updateUsers({
                        username: res.username,
                        email: res.email,
                        phone: res.phone,
                        dob: res.dob,
                        zipcode: res.zipcode,
                        password: res.password,
                        headline: res.headline,
                        avatar: res.avatar,
                        follower: res.follower
                    })
                    this.props.changeStatus();
                }
            }).catch(err => {})
    }
        render()
        {
            return (
                <div>
                    <h1>Start your journey now!</h1>
                    <table className="main">
                        <tbody>
                        <tr>
                            <td>
                                <Login/>
                            </td>
                            <td>
                                <Register/>
                            </td>
                        </tr>
                        </tbody>
                    </table>
                </div>
            )
        }
    }
export default connect(
    state=>{
        return{
            isLogin: state.isLogin,
            posts:state.posts
        }
    },
    dispatch =>{
        return{
            updateUsers:(user)=>dispatch(updateUsers(user)) ,
            changeStatus: () => dispatch(changeStatus()),
            getPosts: (posts) => dispatch(getPosts(posts)),
            getUsers: (users) => dispatch(getUsers(users)),
        }

    }

)(Landing)
