//Exercice 4:
import { useState } from 'react';
function ListeCourses() {
  const [articles, setArticles] = useState([]);
  const [article, setArticle] = useState('');
  const addArticle = () => {
    if(article.trim() !== ''){
      setArticles([...articles, article]);
      setArticle('');
    }
  };
  return (
    <div>
      <input value={article} onChange={(e) => setArticle(e.target.value)} placeholder="Ajouter un article" />
      <button onClick={addArticle}>Ajouter</button>
      <ul>
        {articles.map((a, i) => <li key={i}>{a}</li>)}
      </ul>
    </div>
  );
}
export default ListeCourses;
