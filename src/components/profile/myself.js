import React from 'react'
import { connect } from 'react-redux'
//basic sturcture for avator
export const Myself = () => (
    <div>
        <img src='3.jpeg'/>
        <br/>
        <input className="input1" type="file"/>
        <br/><br/>
    </div>
)

export default connect(
)(Myself)
