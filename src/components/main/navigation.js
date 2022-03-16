import React, {Component} from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom';
import {changeStatus} from "../../actions";
import {url} from '../storage/initFetch';
//basic structure of the nav bar
export class Navigation extends Component {
    Logout=()=> {
        //const url = path => `http://localhost:3001${path}`
        //localStorage.removeItem('currentUser');
       // localStorage.setItem('login', false);
        fetch(url('/logout'), {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json'},
            credentials: 'include',
        }).then(res => res.json())
            .then(res => {
                //if (res.result && res.result === "success"){
                    this.props.changeStatus();
           // }
    });
        this.props.changeStatus();
    }
    render() {
        return (
            <div className="navbar">
                <tr>
                    <td>
                        <div className="btn1">
                            <Link to={'/profile'} style={{color: 'black'}}>Edit Profile</Link>
                        </div>
                    </td>
                    <h1>Hi</h1>
                    <td>
                        <div id="logout" className="btn1" onClick={this.Logout}>
                            <Link to={'/landing'} style={{color: 'black'}}>log out</Link>
                        </div>
                    </td>
                </tr>
            </div>
        )
    }
}
export default connect(
    (state) => {
        return {
            user: state.user,
            isLogin:state.isLogin,
        }
    },
    (dispatch) => {
        return {
            changeStatus: () => dispatch(changeStatus()),
        }
    }
)(Navigation)
