import React from 'react'
import { Link } from 'react-router-dom'

const ArticlesList = () => {
    const articles =[
        {id: 1, title: 'List 1'},
        {id: 2, title:'List 2'},
        {id: 3, title: 'List 3'}
    ]
  return (
    <div>
        <h1>Articles List</h1>
        <ul>{articles.map(article =>(
            <li key={article.id}>
                <Link to={`/articles/${article.id}`}>
                {article.title}</Link>
            </li>
        ))}
        </ul>
        </div>
  )
}

export default ArticlesList