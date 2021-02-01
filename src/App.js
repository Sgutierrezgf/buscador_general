import './App.css';
import { Title, TitleDescription, TitleDescription2 } from './components/header/Title'
import {Container} from './components/container/Container'
import List from './components/list/List'

function App() {
  return (
    <Container className="App">
      <Title>Artemisa</Title>
      <TitleDescription>Tu buscador de informacion empresarial</TitleDescription>
      <TitleDescription2>Bienvenidos a artemisa, en el siguiente campo podras buscar lo que necesites respecto a informacion de tu empresa en general</TitleDescription2>
      <List />
    </Container>
  );
}

export default App;
