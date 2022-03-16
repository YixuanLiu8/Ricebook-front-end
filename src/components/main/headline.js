import React, {Component} from 'react'
import { connect } from 'react-redux'
import { updateHeadline } from '../../actions'
import {url} from '../storage/initFetch';

export class Headline extends Component {
    state={headline:""}
    updateNewHeadline=()=>{
        //const url = path => `http://localhost:3001${path}`
        const{newHeadline}=this
        this.setState({headline:newHeadline.value})
        fetch(url('/headline'), {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json'},
            credentials: 'include',
            body: JSON.stringify({'headline': newHeadline.value})
        })
            .then(res => {
                // if (res.status === 200) {
                //     return res.json();
                // }
                this.props.updateHeadline(newHeadline.value);
            });
        this.props.updateHeadline(newHeadline.value);
    }
    render(){
        return(
            <div>
                <img src="3.jpeg"/>
                <div>{this.props.userInfo.username}</div>
                <div>{this.props.userInfo.headline}</div>
                <br/>
                <input className="input1" type="text"  ref={(c)=>this.newHeadline= c}/>
                <br/><br/>
                <input id="changeHl" className="btn" type="submit"
                       value="Change Headline" onClick={this.updateNewHeadline}/>
                <br/>
            </div>
        )
    }
}
export default connect(
    (state) => {
        return {
            userInfo: state.userInfo
        }
    },
    (dispatch) => {
        return {
            updateHeadline:(headline)=>dispatch(updateHeadline(headline))
        }
    }
)(Headline)
