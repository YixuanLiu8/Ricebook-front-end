import React, {Component} from 'react'
import { connect } from 'react-redux'
import { changeStatus, updateUsers, newUser } from '../../actions';
import{checkExist} from "../storage/initFetch";
import {url} from '../storage/initFetch';
//basic structure for register module
export class Register extends Component{
    state={errMsg:"",username:"",email:"",phone:"",zipcode:"",password:"",pw2:"",dob:""}
    constructor (props) {
        super(props);
        this.inputName = this.inputName.bind(this);
        this.inputPw1 = this.inputPw1.bind(this);
        this.inputEmail = this.inputEmail.bind(this);
        this.inputPhone = this.inputPhone.bind(this);
        this.inputZipcode = this.inputZipcode.bind(this);
        this.inputPw2 = this.inputPw2.bind(this);
        this.inputDob = this.inputDob.bind(this);
        this.ValidateInfo = this.ValidateInfo.bind(this);
    }
    inputName(evt){
        this.setState({username:evt.target.value})
    }

    inputPw1(evt){
        this.setState({password:evt.target.value})

    }
    inputEmail(evt){
        this.setState({email:evt.target.value})
    }

    inputPhone(evt){
        this.setState({phone:evt.target.value})

    }
    inputZipcode(evt){
        this.setState({zipcode:evt.target.value})
    }

    inputPw2(evt){
        this.setState({pw2:evt.target.value})

    }
    inputDob(evt){
        this.setState({dob:evt.target.value})

    }
    ValidateInfo=()=> {
        //const url = path => `http://localhost:3001${path}`
        if (this.state.username === null || this.state.username === ""
            || this.state.email === null || this.state.email === ""
            || this.state.phone === null || this.state.phone === ""
            ||this.state.zipcode === null || this.state.zipcode === ""
            || this.state.password=== null || this.state.password === ""
            || this.state.pw2 === null || this.state.pw2 === ""
            || this.state.dob === null || this.state.dob === "") {
            this.setState({errMsg: "None of the items above could be empty!"});
            return false;
        }
        if (this.state.password !== this.state.pw2)
        {
            this.setState({errMsg: "Two passwords are not match!"});
            return false;}

        let obj = {
            username:this.state.username,
            zipcode:this.state.zipcode,
            email:this.state.email,
            phone: this.state.phone,
            password: this.state.password,
            headline: "Me know nothing! Me just a puppy!",
            dob: this.state.dob,
            avatar:'3.jpeg',
            follower:[]
        }
        if (!checkExist(this, obj))
        { fetch(url("/register"), {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(obj)
            }).then (res => {
                if (res.status === 200)
                    return res.json();
               else
                   return res.text();
            }).then (res => {
                if (res.result && res.result === "success") {
                    fetch(url("/login"), {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json"
                        },
                        credentials: 'include',
                        body: JSON.stringify({
                            'username': obj.username,
                            'password': obj.password
                        })
                    }).then (res => {
                        if (res.status === 200)
                            return res.json();
                        else
                            return res.text();
                    }).then (res => {
                        if (res.result && res.result === "success") {
                            this.props.newUser(obj);
                            this.props.updateUsers(obj);
                            this.props.changeStatus();
                        }
                    })
                } else {
                    this.setState({errMsg: "User already exists! Please change your account name"});
                }
            })
            return false;
        }
    }
    render()
{return (
        <div>
            <h2>Register</h2>
            <div className="box1">
                <form  onSubmit={(evt) => {evt.preventDefault()}}>
                    Name:
                    <input className="input1" type="text" placeholder="Enter user name here"
                          value={this.state.username} id="Name"onChange={this.inputName}  required/><br/><br/><br/>
                    Email:
                    <input className="input1" type="text" placeholder="xxx@xxx.xxx"
                           value={this.state.email} id="Email" onChange={this.inputEmail} required/><br/><br/><br/>
                    Date of Birth:
                    <input className="input1" type="date" placeholder="YY/MM/DD"
                           value={this.state.dob} id="Birthday" onChange={this.inputDob} required/><br/><br/><br/>
                    Phone:
                    <input className="input1" type="text" placeholder="xxx-xxx-xxxx"
                           value={this.state.phone} id="Phone" onChange={this.inputPhone} required/><br/><br/><br/>
                    Zipcode:
                    <input className="input1" type="text" placeholder="xxxxx"
                           value={this.state.zipcode} id="Zipcode" onChange={this.inputZipcode} required/><br/><br/><br/>
                    Password:
                    <input className="input1" type="password" placeholder="*******"
                           value={this.state.password} id="YourPassword" onChange={this.inputPw1}
                           required/><br/><br/><br/>
                    PW Confirm:
                    <input className="input1" type="password" placeholder="*******"
                           value={this.state.pw2} id="PasswordConfirmation" onChange={this.inputPw2}
                           required/><br/><br/><br/>
                    <input id="login" className="btn" type="submit" value="Register"
                           onClick={this.ValidateInfo}
                    />
                    <input className="btn" type="reset" value="Clear"/>
                    <div id="errMsg"className="hint">{this.state.errMsg}</div>
                </form>
            </div>
        </div>
    )
      }
        }
export default connect(
    (state) => {
        return {
            users: state.users,
            isLogin: state.isLogin,
        }
    },
    (dispatch) => {
        return {changeStatus: () => dispatch(changeStatus()),
            updateUsers: (user) => dispatch(updateUsers(user)),
            newUser: (user) => dispatch(newUser(user)),}
    }
)(Register)
