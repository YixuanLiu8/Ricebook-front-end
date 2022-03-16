import React from 'react'
import AddArticle from './addArticle'
import ArticlesView from './articlesView'

//Basic structure of article module
const Article = (props) => {
    return(
        <div>
            <AddArticle/>
            <br/><br/>
           <ArticlesView/>
        </div>
    )
}

export default Article
