import React, { Component } from 'react';
import { connect } from 'react-redux';
import {addFollower, removeFollower, updateFollower, NewPost,updateCurrentPost,clearFollowedUserAndPosts} from '../../actions';
import {url} from '../storage/initFetch';
class Following extends Component{
    componentDidMount() {
        this.getAllFollowers();
    }

    constructor (props) {
        super(props);
        this.state = {addFollower: ""}
        this.state= {foundErr:""}

        this.handleUnfollow = this.handleUnfollow.bind(this);
        this.handleAddUserChange = this.handleAddUserChange.bind(this);
        this.handleUpdateUser = this.handleUpdateUser.bind(this);
    }
    getAllFollowers() {
        //const url = path => `http://localhost:3001${path}`
        fetch(url("/following"), {
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
                    this.props.clearFollowedUserandPosts()
                    let follow = res.follower;
                    for (let name of follow) {
                        fetch(url("/headline/" + name), {
                            credentials: 'include',
                            headers: { 'Content-Type': 'application/json' },
                        }).then(res => {
                            if (res.status === 200) return res.json();
                            else return res.text();
                        }).then(res => {
                            console.log(res)
                            if (res.result && res.result === 'success') {
                                this.props.addFollower({
                                    name: name,
                                    headline: res.headline,
                                    avatar: res.avatar,
                                })
                            }
                        })
                    }
                    fetch(url("/articles" ), {
                        credentials: 'include',
                        headers: { 'Content-Type': 'application/json' },
                    }).then(res => {
                        if (res.status === 200) return res.json();
                        else return res.text();
                    }).then(res => {
                        if (res.result && res.result === "success") {
                            this.props.updateCurrentPost(res.articles);
                        }
                    })
                }
            }).catch(err => {})

    }
    handleAddUserChange(evt) {
        this.setState({addFollower: evt.target.value});
    }
    handleUpdateUser() {
        //const url = path => `http://localhost:3001${path}`
        // add user
        if (this.state.addFollower !== "") {
            let user = this.props.followedUser.filter( ele => ele.name === this.state.addFollower)
            if (user.length > 0) {
                this.setState({foundErr: "You have already followed this user"});
            } else if (this.props.userInfo.username === this.state.addFollower) {
                this.setState({foundErr: "You can only follow other users that are existed!"});
            } else {
                fetch(url("/following/" + this.state.addFollower), {
                    credentials: 'include',
                    method: "PUT",
                    headers: {'Content-Type': 'application/json' },
                })
                    .then(res => {
                        if (res.status === 200) return res.json();
                        else {
                            this.setState({foundErr: "user not found!"});
                            return null;
                        }
                    })
                    .then(res => {
                        if (res) {
                            this.getAllFollowers();
                            this.setState({addFollower: ""})
                        }
                    })
            }
        }
    }

    handleUnfollow(evt) {
        //const url = path => `http://localhost:3001${path}`
        fetch(url("/following/" + evt.target.id), {
            credentials: 'include',
            method: "DELETE",
            headers: {'Content-Type': 'application/json' },
        })
            .then(res => {
                if (res.status === 200) {
                    this.props.removeFollower(evt.target.id);
                    setImmediate(this.getAllFollowers(), 1000);
                }
            })
    }
    render() {
        console.log(this.props.followedUser)
        return (
            <div>
                {this.props.followedUser.map((ele) => {
                    return (
                        <div className="box1">
                        <div>
                            <br/>
                            <img alt="" src="3.jpeg"></img>
                            <div id="Follower">
                                <h5>{ele.name}</h5>
                                <p>{ele.headline}</p>
                                <br/>
                                <button id="removeFollower" className="btn" onClick={this.handleUnfollow} id={ele.name}>Unfollow</button>
                            </div>
                        </div>
                        </div>
                    )
                })}
                <br/>
              <div className="box1">
                    <input id='addFollowing' type='text' className="input1" onChange={this.handleAddUserChange} placeholder="Add a follower"></input>
                    <br/>
                    <span>{this.state.foundErr}</span>
                    <br/>
                    <button id="updateFollower" className="btn" onClick={this.handleUpdateUser}>add</button>
                    <br/>
                </div>
            </div>
        )
    }
}

export default connect(
    (state) => {
        return {
            users: state.users,
            posts: state.posts,
            userInfo: state.userInfo,
            followedUser: state.followedUser,
        }
    },
    (dispatch) => {
        return {
            updateFollower: (users) => dispatch(updateFollower(users)),
            addFollower: (user) => dispatch(addFollower(user)),
            removeFollower: (name) => dispatch(removeFollower(name)),
            updateCurrentPost: (post) => dispatch(updateCurrentPost(post)),
            clearFollowedUserandPosts: () => dispatch(clearFollowedUserAndPosts()),
            NewPost: (post) => dispatch(NewPost(post))
        }
    }
)(Following)
