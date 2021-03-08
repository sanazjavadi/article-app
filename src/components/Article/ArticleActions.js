import React from 'react';
import { Link } from 'react-router-dom'
import agent from '../../agent'
import { connect } from 'react-redux'
import { DELETE_ARTICLE } from '../../constants/actionTypes';

const mapDispatchToProps = dispatch => (
    {
        onClickDelete:payload => 
        dispatch({type:DELETE_ARTICLE, payload})
    }
)

const ArticleActions = props => {
const article = props.article;
const del =() => {
    props.onClickDelete(agent.Articles.del(article.slug))
}
if(props.canModify){
    return (
        <span>

<Link
          to={`/editor/${article.slug}`}
          className="btn btn-outline-secondary btn-sm">
          <i className="ion-edit"></i> Edit Article
        </Link>
            <button className="btn btn-outline-danger btn-sm" onClick={del}>

            </button>
        </span>
    )
}
    return(
        <span>

        </span>
    )
}

export default connect(()=> ({}), mapDispatchToProps)(ArticleActions)