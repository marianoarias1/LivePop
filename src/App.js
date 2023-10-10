import './App.css';
import {NavBar} from './components/navBar/NavBar';
import { ListItem } from './components/listItem/ListItem.jsx';
function App() {
  const props={
    message:'OOPS LLEGASTE TEMPRANO, AÚN ESTAMOS TRABAJANDO.',
    greeting:'Pero no es problema. Bienvenido/a LIVE POP 🎉',
    gif:'https://giphy.com/embed/xT5LMM4XqfaSMQcKAM'
  }
  
  return (
    <div className="App">
      <NavBar/>
      <ListItem {...props}/>
    </div>
  );
}

export default App;
