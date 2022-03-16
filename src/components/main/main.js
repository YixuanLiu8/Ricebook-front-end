import React from 'react'
import { connect } from 'react-redux'
import HeadLine from './headline'
import Navigation from './navigation'
import Following from './following'
import Article from '../article/article'
//basic structure for main page
export const Main = ({}) => (
    <div>
        <header>
            <Navigation />
        </header>
        <table className="main" >
            <th>
                <div className="box1">
                <HeadLine/>
            </div>
                <div>
                    <Following/>
                </div>
            </th>
            <th>
                <div>
                    <Article/>
                </div>
            </th>
        </table>
    </div>
)

export default connect(
)(Main)
