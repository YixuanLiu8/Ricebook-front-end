import React, {Component} from 'react'
import { connect } from 'react-redux'
import Myself from './myself'
import {url} from '../storage/initFetch';
import {updateUsers,getUsers,getPosts,changeStatus} from "../../actions";
export class ProfileForm extends Component{
    componentDidMount() {

    }
    constructor(props) {
        super(props);
        this.state = {
            errMsg:"" ,
            newName:this.props.userInfo.username,
            newEmail:this.props.userInfo.email,
            newPhone:this.props.userInfo.phone,
            newZipcode:this.props.userInfo.zipcode,
            newPassword1:this.props.userInfo.newPassword1,
            newPassword2:this.props.userInfo.newPassword2,
        }
        this.handleClear = this.handleClear.bind(this)
        this.handleUpdate = this.handleUpdate.bind(this);
        this.handleChangeUserName = this.handleChangeUserName.bind(this);
        this.handleChangeEmail = this.handleChangeEmail.bind(this);
        this.handleChangePhone = this.handleChangePhone.bind(this);
        this.handleChangeZipcode = this.handleChangeZipcode.bind(this);
        this.handleChangePassword = this.handleChangePassword.bind(this);
        this.handleChangeConfirmPassword = this.handleChangeConfirmPassword.bind(this);
    }
    handleChangeUserName(evt) {
        this.setState({ newName: evt.target.value});
    }

    handleChangeEmail(evt) {
        this.setState({newEmail: evt.target.value});
    }

    handleChangePhone(evt) {
        this.setState({newPhone: evt.target.value});
    }

    handleChangeZipcode(evt) {
        this.setState({newZipcode: evt.target.value});
    }

    handleChangePassword(evt) {
        this.setState({newPassword1: evt.target.value});
    }

    handleChangeConfirmPassword(evt) {
        this.setState({newPassword2: evt.target.value});
    }

    handleClear () {
        this.setState({
            errMsg:"" ,
            newEmail: "",
            newPhone:"",
            newZipcode:"",
            newPassword1:"",
            newPassword2:"",
        })
    }
    handleUpdate(evt) {
        evt.preventDefault();
        let flag = true;
        this.setState({
            errMSg: ""
        })
        if (this.state.newPassword1 !== this.state.newPassword2)
        {this.setState({errMsg: "Two passwords are not match!"});
            flag=false;
            return flag;
        }
        if(flag){
            let obj = {}
            if(this.state.newPhone!==""){
                fetch(url("/phone"), {
                    method: "PUT",
                    credentials: 'include',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({phone: this.state.newPhone})
                })
                obj['phone'] = this.state.newPhone;
            }
            if(this.state.newEmail!==""){
                fetch(url("/email"), {
                    method: "PUT",
                    credentials: 'include',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({email: this.state.newEmail})
                })
                obj['email'] = this.state.newEmail;
            }
            if(this.state.newZipcode!==""){
                fetch(url("/zipcode"), {
                    method: "PUT",
                    credentials: 'include',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({zipcode: this.state.newZipcode})
                })
                obj['zipcode'] = this.state.newZipcode;
            }
            if(this.state.newPassword1!==""){
                fetch(url("/password"), {
                    method: "PUT",
                    credentials: 'include',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({password: this.state.newPassword1})
                })
                obj['password'] = this.state.newPassword1;
            }
            this.handleClear();
            this.props.updateUsers(obj);
        }
        return false;
    }
render(){
    return(
        <div className="main">
            <h1>Profile Page</h1><div className="box1"><form onSubmit={(evt) => {evt.preventDefault()}}>
                    <Myself/>
                    <div className="profile">
                    <tr>
                        <td>
                            <div className="btn">
                            Update information
                            </div>
                            <br/>
                    Email:
                    <input className="input1" type="text" placeholder="xxx@xxx.xxx"
                           value={this.state.newEmail}  onChange={this.handleChangeEmail}id="Email" />
                    <br/>
                    <br/>
                    <br/>
                    Phone:
                    <input className="input1" type="text" placeholder="xxx-xxx-xxxx"
                           value={this.state.newPhone}  onChange={this.handleChangePhone} id="Phone"/>
                    <br/>
                    <br/>
                    <br/>
                    Zipcode:
                    <input className="input1" type="text" placeholder="xxxxx"
                           value={this.state.newZipcode}  onChange={this.handleChangeZipcode} id="Zipcode"/>
                    <br/>
                    <br/>
                    <br/>
                    Password:
                    <input className="input1" type="password"  value={this.state.newPassword1}  onChange={this. handleChangePassword}
                           id="YourPassword"/><br/>
                    <br/>
                    <br/>
                    PW Confirm:
                    <input className="input1" type="password"  value={this.state.newPassword2}
                           onChange={this.handleChangeConfirmPassword}
                           id="PasswordConfirmation"/><br/>
                        </td>
                        <td>
                            <div className="btn">
                                Your information
                            </div>
                            <br/>
                            Name:
                            <div id="name1">
                                {this.props.userInfo.username}
                            </div>
                            <br/>
                            <br/>
                            <br/>
                            Email:
                            <div id="email1">
                                {this.props.userInfo.email}
                            </div>
                            <br/>
                            <br/>
                            <br/>
                            Phone:
                            <div id="phone1">
                                {this.props.userInfo.phone}
                            </div>
                            <br/>
                            <br/>
                            <br/>
                            Zipcode:
                            <div id="zipcode1">
                                {this.props.userInfo.zipcode}
                            </div>
                            <br/>
                            <br/>
                            <br/>
                        </td>
                    </tr>
                        </div>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <input id="update" className="btn" type="submit" value="Update"
                           onClick={this.handleUpdate}/>
                    <input className="btn" type="reset" value="Clear"  onClick={this.handleClear}/>
                    <div className="hint">{this.state.errMsg}</div>
                </form>
            </div>
        </div>
    )
}}

// add the changed info in to the state
export default connect(
    (state) => {
        return {
            userInfo:state.userInfo
        }
    },
    (dispatch) => {
        return {
            changeStatus: () => dispatch(changeStatus()),
            updateUsers: (user) => dispatch(updateUsers(user)),
            getPosts: (posts) => dispatch(getPosts(posts)),
            getUsers: (users) => dispatch(getUsers(users)),
        }
    }
)(ProfileForm)
