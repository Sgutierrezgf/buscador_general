import './App.css';
import List from './components/inputsearch/ListsInfo'
import { Title, TitleDescription, TitleDescription2 } from './components/header/Title'

function App() {
  return (
    <div className="App">
      <Title>Artemisa</Title>
      <TitleDescription>Tu buscador de informacion empresarial</TitleDescription>
      <TitleDescription2>Bienvenidos a artemisa, en el siguiente campo podras buscar lo que necesites respecto a informacion de tu empresa en general</TitleDescription2>
      <List />
    </div>
  );
}

export default App;
