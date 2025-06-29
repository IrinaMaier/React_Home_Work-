import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './components/Home';
import ArticlesList from './components/ArticlesList';
import styles from'./components/App.css';
import MainArticle from './components/MainArticle';


function App() {
  return (
     <Router>
      <div className="App">
        <nav>
          <ul>
            <li><Link to="/">Главная</Link></li>
            <li><Link to="/articles">Статьи</Link></li>
          </ul>
        </nav>
         <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/articles" element={<ArticlesList />} />
          <Route path="/articles/:id" element={<MainArticle />} />
        </Routes>
      </div>
    </Router>

  );
}

export default App;