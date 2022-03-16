import React, { Component } from 'react';
import {connect} from 'react-redux'
import { getPosts, updatePost } from '../../actions'
import {url} from '../storage/initFetch';
class Comment extends Component {
    constructor(props) {
        super(props);
        this.state = {
            input: this.props.data.text,
            btnVal: "edit"
        }
        this.editComment = this.editComment.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    editComment() {
        if (this.state.btnVal === "edit") {
            this.setState({btnVal: "done"});
        }
        else {
            //const url = path => `http://localhost:3001${path}`
            fetch(url("/articles/" + this.props.pid), {
                method: "PUT",
                headers: { 'Content-Type': 'application/json' },
                credentials: 'include',
                body: JSON.stringify({
                    old: {
                        name: this.props.data.name,
                        text: this.props.data.text,
                        time: this.props.data.time,
                    },
                    text: this.state.input,
                    updateComment: true
                })
            })
            this.setState({btnVal: "edit"})
        }
    }

    handleChange(evt) {
        this.setState({input: evt.target.value});
    }

    render() {
        //console.log(this.props.data);
        let btn = <></>
        if (this.props.user === this.props.data.name)
            btn = <button type='button' className="btn" onClick={this.editComment}>{this.state.btnVal}</button>
        let span = (<p>
            <span>{this.props.data.name} : </span>{this.state.input}</p>)
        if (this.state.btnVal !== "edit") {
            span = (<p>Edit:<input type="text" onChange={this.handleChange} value={this.state.input}></input></p>);
        }
        return (<div>{span}{btn}</div>)
    }
}
class ArticlesView extends Component {
    handleKeyword(evt) {
        this.setState({keyword: evt.target.value});
    }
    handleCommentSubmit(id) {
        //const url = path => `http://localhost:3001${path}`
        let comment = this.state[id + "-comment"];
        if (comment !== undefined) {
            fetch(url("/articles/" + id), {
                method: "PUT",
                headers: { 'Content-Type': 'application/json' },
                credentials: 'include',
                body: JSON.stringify({
                    commentId: Date.now(),
                    text: comment,
                    from: this.props.userInfo.username
                })
            }).then(res => {
                if (res.status === 200) return res.json();
                else return res.text();
            }).then(res => {
                if (res.result && res.result === "success") {
                    this.props.updatePost(res.articles);
                    let obj = {};
                    obj[id + "-comment"] = "";
                    this.setState(obj);
                }
            })
        }
    }
    handleComment(evt, id) {
        let obj = {}
        obj[id + "-comment"] = evt.target.value;
        this.setState(obj);
    }
    handleEditChange(evt, id) {
        let obj = {}
        obj[id + "-edit"] = evt.target.value;
        this.setState(obj);
    }
    handleEditSubmit(id) {
        if (this.state[id + "-edit"] !== undefined) {
            //const url = path => `http://localhost:3001${path}`
            fetch(url("/articles/" + id), {
                method: "PUT",
                headers: { 'Content-Type': 'application/json' },
                credentials: 'include',
                body: JSON.stringify({text: this.state[id + "-edit"]})
            }).then(res => {
                if (res.status === 200) return res.json();
                else return res.text();
            }).then(res => {
                if (res.result && res.result === "success") {
                    this.props.updatePost(res.articles);
                    let obj = {}; obj[id + "-edit"] = undefined;
                    this.setState(obj);
                }
            })
        }
    }

    constructor(props) {
        super(props)
        this.state = {
            keyword: "",
        }
        this.handleKeyword = this.handleKeyword.bind(this);
        this.handleComment = this.handleComment.bind(this);
        this.handleCommentSubmit = this.handleCommentSubmit.bind(this);
        this.handleEditChange = this.handleEditChange.bind(this);
        this.handleEditSubmit = this.handleEditSubmit.bind(this);
    }

    render() {
        return (
            <div>
                <input className="input1" onChange={this.handleKeyword} placeholder="search with keyword"/>
                {this.props.currentPost.map(ele => {
                    let comments = []
                    for (let comment of ele.comment) {
                        comments.push(<Comment pid={ele._id} key={comment.name + "-" + comment.text + "-" + comment.time} user={this.props.userInfo.username} data={comment}/>)
                    }
                    if (!checkContainsKeyword(this.state.keyword, ele.name, ele.content))
                        return null
                    if (this.props.userInfo.username === ele.name) {
                        return (<div className="box1">
                            <img alt="" src="5.jpg"/>
                            <div>
                                <p>{ele.title}<b>({ele.name})</b> {ele.time}</p>
                                <p>{ele.content}</p>
                                <div>
                                    {comments}
                                    <input value={this.state[ele._id+"-comment"]} onChange={(evt) => this.handleComment(evt, ele._id)} className={'PostComment'} placeholder="leave your comment here"></input>
                                    <button type='button' onClick={() => this.handleCommentSubmit(ele._id)} className="btn">Comment</button>{" "}
                                    {this.state[ele._id+"-edit"] === undefined ? null : <div>
                                        <input value={this.state[ele._id+"-edit"]}
                                               onChange={(evt) => this.handleEditChange(evt, ele._id)}></input>
                                        <button type='button' className="btn" onClick={()=>this.handleEditSubmit(ele._id)}>Done</button>
                                        <button type='button' className="btn" onClick={()=>{
                                            let obj = {}; obj[ele._id+"-edit"] = undefined;
                                            this.setState(obj)}}>Cancel</button></div>}

                                    <button type='button'  className="btn" onClick={()=>{
                                        let obj = {};
                                        obj[ele._id+"-edit"] = ele.content;
                                        this.setState(obj);
                                    }}>Edit Article</button>
                                </div>
                            </div>
                        </div>)
                    } else {
                        return (<div className="box1">
                            <img alt="" src="1.jpeg"/>
                            <div>
                                <p>{ele.title}<b>({ele.name})</b> {ele.time}</p>
                                <p>{ele.content}</p>
                                <div>
                                    {comments}
                                    <input value={this.state[ele._id+"-comment"]} onChange={(evt) => this.handleComment(evt, ele._id)}  placeholder="leave your comment here"></input>
                                    <button type='button' className="btn" onClick={() => this.handleCommentSubmit(ele._id)} >Comment</button>{" "}
                                </div>
                            </div>
                        </div>)
                    }
                })}
            </div>
        )
    }
}
function checkContainsKeyword(key, name, content) {
    if (name.includes(key)) return true;
    if (content.includes(key)) return true;
    return false
}
export default connect(
    (state) => {
        return {
            userInfo: state.userInfo,
            users: state.users,
            posts: state.posts,
            followedUser: state.followedUser,
            currentPost: state.currentPost,
        }
    },
    (dispatch) => {
        return {
            getPosts: (posts) => dispatch(getPosts(posts)),
            updatePost: (post) => dispatch(updatePost(post)),
        }
    }
)(ArticlesView)
