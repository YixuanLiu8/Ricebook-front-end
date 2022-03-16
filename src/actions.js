export const GET_USERS="GET_USERS"
export const UPDATE_USERS="UPDATE_USERS"
export const NEW_USER="NEW_USER"
export const CHANGE_USER_STATUS=" CHANGE_USER_STATUS"
export const GET_POSTS = "GET_POSTS";
export const UPDATE_HEADLINE = "UPDATE_HEADLINE";
export const UPDATE_FOLLOWER="UPDATE_FOLLOWER";
export const ADD_FOLLOWER="ADD_FOLLOWER";
export const REMOVE_FOLLOWER="REMOVE_FOLLOWER";
export const NEW_POST = "NEW_POST";
export const UPDATE_POST="UPDATE_POST";
export const CLEAR_ALL_POSTS = "CLEAR_ALL_POSTS";
export const CLEAR_FOLLOWED_USER = "CLEAR_FOLLOWED";
export function getPosts(posts) {
    return {type: GET_POSTS, posts}
}
export function updateHeadline(headline) {
    return {type: UPDATE_HEADLINE, headline}
}
export function changeStatus() {
    return {type: CHANGE_USER_STATUS}
}
export function getUsers(users){
    return{type:GET_USERS,users}
}
export function updateUsers(user){
    return{type:UPDATE_USERS,user}
}
export function newUser(user){
    return{type:NEW_USER,user}
}
export function updateFollower(users) {
    return {type: UPDATE_FOLLOWER, users}
}

export function addFollower(user) {
    return {type: ADD_FOLLOWER, user}
}

export function removeFollower(name) {
    return {type: REMOVE_FOLLOWER, name}
}
export function NewPost(post) {
    return {type: NEW_POST, post}
}
export function updatePost(post) {
    return {type: UPDATE_POST, post}
}
export function clearAllPosts() {
    return {type: CLEAR_ALL_POSTS}
}
export function updateCurrentPost(post) {
    return {type: UPDATE_POST, post}
}
export function clearFollowedUserAndPosts(){
    return {type: CLEAR_FOLLOWED_USER}
}
