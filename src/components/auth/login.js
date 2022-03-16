import React, {Component} from 'react'
import { connect } from 'react-redux'
import { updateUsers,changeStatus} from '../../actions'
import {url} from '../storage/initFetch';

export class Login extends Component {
    state={errMsg:"",username:"",password:""}
    constructor (props) {
        super(props);
        this.inputName = this.inputName.bind(this);
        this.inputPassword = this.inputPassword.bind(this);
    }
    Validate = () => {
        //const url = path => `http://localhost:3001${path}`
        const requestOptions = {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            credentials: 'include',
            body: JSON.stringify({
                'username': this.state.username,
                'password': this.state.password
            })// Also tried selectedFile
        };
        fetch(url("/login"), requestOptions)
            .then (res => {
                if (res.status === 200)
                    return res.json();
                else
                    return res.text();
            })
            .then (res => {
            if (res.result && res.result === "success") {
                fetch(url("/profile"), {
                    method: 'GET',
                    credentials: 'include',
                    headers: { 'Content-Type': 'application/json' },
                }).then(res => {
                        if (res.status === 200) {
                            return res.json();
                        }
                        else {
                            // logout
                            this.props.changeStatus();
                            return null;
                        }
                    })
                    .then(res => {
                        if (res) {
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
                    })
            }
            else {
                this.setState({errMsg: "User not found, you may enter the wrong information."});
            }
        })
    }
    inputName(evt){
        this.setState({username:evt.target.value})
    }

    inputPassword(evt){
        this.setState({password:evt.target.value})

    }
    render() {
        return (
            <div>
                <h2>Log In</h2>
                <br/>
                <div className="box1">
                    <form onSubmit={(evt) => {evt.preventDefault()}}>
                        User Name:
                        <input className="hint" type="text" placeholder="Enter user name here"
                               value={this.state.username} onChange={this.inputName} id="Name"/>
                        <br/><br/>
                        Password:
                        <input className="hint" type="password"
                               value={this.state.password}  onChange={this.inputPassword} id="YourPassword"/>
                        <br/>
                        <span className="hint1" id='Pswalert'></span>
                        <br/>
                        <br/>
                        <input id="login" className="btn" type="submit" value="Login"
                               onClick={this.Validate}/>
                        <input className="btn" type="reset" value="Clear"/>
                        <div id="errMsg" className="hint">{this.state.errMsg}</div>
                    </form>
                </div>
            </div>
        )

    }
}
export default connect(
    (state)=> {
        return {
            isLogin:state.isLogin,
            users: state.users,
            posts: state.posts,
        }
    },
    (dispatch) => {
        return {
            updateUsers:(user)=>dispatch(updateUsers(user)),
            changeStatus:()=>dispatch(changeStatus())
        }
    }
)(Login)
