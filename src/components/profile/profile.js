import React, {Component} from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import ProfileForm from './profileForm'
//basic structure for profile
import{changeStatus} from "../../actions";
export class Profile extends Component {
    render() {
        return (
            <div>
                <div className="navbar">
                    <div className="btn2">
                        <Link to={'/main'} style={{color: 'black'}}>Back to Main Page</Link>
                    </div>
                </div>
                <ProfileForm/>
            </div>
        )
    }
}
export default connect(
    (state) => {
        return {
            isLogin: state.isLogin,
        }
    },
    (dispatch) => {
        return {
            changeStatus: () => dispatch(changeStatus()),
        }
    }
)(Profile)
