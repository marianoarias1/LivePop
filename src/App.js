import './App.css';
import {NavBar} from './components/navBar/NavBar';
import { ItemListContainer } from './components/ItemListContainer/ItemListContainer.jsx';

function App() {
  const props={
    message:'OOPS LLEGASTE TEMPRANO, AÚN ESTAMOS TRABAJANDO.',
    greeting:'Pero no es problema. Bienvenido/a LIVE POP 🎉',
    gif:'https://giphy.com/embed/xT5LMM4XqfaSMQcKAM'
  }
  
  return (
    <div className="App">
      <NavBar/>
      <ItemListContainer {...props}/>
    </div>
  );
}

export default App;
