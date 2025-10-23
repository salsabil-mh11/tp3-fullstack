import './App.css';
import Bienvenue from './Bienvenue';
import Compteur from './Compteur';
import Formulaire from './Formulaire';
import ListeCourses from './ListeCourses';
import TodoApp from './TodoApp';

function App() {
  return (
    <div className="App">
      <Bienvenue nom="Alice" />
      <Compteur />
      <Formulaire />
      <ListeCourses />
      <TodoApp />
    </div>
  );
}

export default App;
