import React, { Component, useRef } from 'react';
import { NewPost, getPosts,updateCurrentPost,clearAllPosts } from '../../actions';
import { connect } from 'react-redux';
import {url} from '../storage/initFetch';
class AddArticle extends Component{
    constructor (props) {
        super(props);
        this.state = {
            title: "",
            content: "",
            errMsg: "",
            tmpImage: "5.jpg",
        }
        this.updateTitle = this.updateTitle.bind(this)
        this.submitPost = this.submitPost.bind(this)
        this.clearPost = this.clearPost.bind(this)
        this.updateMyPost = this.updateMyPost.bind(this)
        this.submitPost = this.submitPost.bind(this)
        this.updateImage = this.updateImage.bind(this)
    }
    updatePosts() {
        //const url = path => `http://localhost:3001${path}`
        this.props.clearAllPosts();
        // get own posts
        fetch(url("/articles"), {
            headers: {'Content-Type': 'application/json'},
            credentials: 'include',
        }).then(res => {
            if (res.status === 200) return res.json();
            else return res.text();
        }).then(res => {
            if (res.articles) {
                this.props.updateCurrentPost(res.articles);
            }
            console.log(res);
        })
    }
    updateImage(img) {
        this.setState({tmpImage: img});
    }
    updateMyPost(evt) {
        this.setState({content: evt.target.value})
    }
    updateTitle(evt) {
        this.setState({title: evt.target.value})
    }
    submitPost() {
        //const url = path => `http://localhost:3001${path}`
        if (this.state.content !== "" && this.state.title !== "") {
            // Do image first
            let curImg = this.state.tmpImage === "/5.jpg" ? "" : this.state.tmpImage;
            fetch(url("/article"), {
                method: "POST",
                headers: { 'Content-Type': 'application/json' },
                credentials: 'include',
                body: JSON.stringify({
                    title: this.state.title,
                    content: this.state.content,
                    image: curImg
                })
            }).then(res => {
                if (res.status === 200) {
                    this.updatePosts();
                    this.clearPost();
                } else {
                    this.setState({errMsg: "bad request"})
                }
            })
        } else {
            this.setState({errMsg: "cannot post with empty title or content"})
        }
}
    clearPost() {
        this.setState({content: ""})
    }

    render() {
        return (
            <div className="box1">
                <div>
                    <img className="img" alt="" src="3.jpeg"/>
                </div>
                <div className="box1">
                    Share something new!
                    <br/>
                    <input className="input1" placeholder="Title" onChange={this.updateTitle}></input>
                    <textarea cols="80" rows="15" value={this.state.content}
                              onChange={this.updateMyPost}>
                </textarea> <br/>
                    <div>
                        <input type="file" className="input" accept="image/*"></input>
                    </div>
                    <br/>
                    <button type="button" className="btn1" onClick={this.submitPost}>Post</button>
                    <br/>
                    <button type="button" className="btn1"  onClick={this.clearPost}>Clear</button>
                </div>
            </div>
        )
    }

}

export default connect(
    (state) => {
        return {
            user : state.user,
            userInfo:state.userInfo
        }
    },
    (dispatch) => {
        return {
            updateCurrentPost: (post) => dispatch(updateCurrentPost(post)),
            NewPost: (post) => dispatch(NewPost(post)),
            getPosts: (posts) => dispatch(getPosts(posts)),
            clearAllPosts: () => dispatch(clearAllPosts()),
        }
    }
)(AddArticle)
