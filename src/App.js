import { BrowserRouter as Router, Route, Switch, Redirect} from 'react-router-dom';

import { connect } from 'react-redux'

import React, { Component } from 'react'

import Landing from "./components/auth/landing";
import Main from './components/main/main'
import  Profile from './components/profile/profile'
export  class App extends Component {
    render() {
        return (
            <Router style={{display: 'flex', flexDirection: 'row', height: '100vh'}}>

                <Switch style={{height: '80vh'}}>
                    <Route exact path={"/"} render={()=> {
                        return this.props.isLogin ? <Redirect to="/main"/> : <Landing />
                    }}/>
                    <Route exact path={"/landing"} render={()=> {
                        return this.props.isLogin ? <Landing />:<Redirect to="/main"/>
                    }}/>
                    <Route exact path={"/main"} render={()=> {
                        return this.props.isLogin? <Main/> : <Redirect to="/"/>
                    }}/>

                    <Route exact path={"/profile"} render={()=> {
                        return this.props.isLogin ? <Profile/> : <Redirect to="/"/>
                    }}/>
                </Switch>
            </Router>

        )
    }
}


export default connect(

    state =>{
        return {
            isLogin:state.isLogin,
        }}
)(App)
