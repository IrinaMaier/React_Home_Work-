import React from 'react'
import { useParams, useNavigate } from 'react-router-dom'

const MainArticle = () => {
    const {id}= useParams()
    const navigate = useNavigate()

    const articles ={
    1: { title: 'List 1', content: 'Содержание статьи 1...' },
    2: { title: 'List 2', content: 'Содержание статьи 2...' },
    3: { title: 'List 3', content: 'Содержание статьи 3...' }
    }

    const article =articles[id]
        

    if (!article){
        return <div>Статья не найдена</div>
            }
    return (
      <div>
            <h1>{article.title}</h1>
            <p>{article.content}</p>
            <p>Текущий путь: /articles/{id}</p>
            <button onClick={() => navigate(-1)}>Назад</button>
        </div>
         )
    
}

export default MainArticle