import './App.css';
import {NavBar} from './components/navBar/NavBar';
import { ItemListContainer } from './components/ItemListContainer/ItemListContainer.jsx';
import { ItemDetailContainer } from './components/itemDetailContainer/ItemDetailContainer';
import { useProduct } from './Context/productContext';
import { Route, Router, Routes } from 'react-router-dom';
import { CdCategory } from './cdCategory/CdCategory';
import { Error } from './Error/Error';

function App() {
  const {showDetail}= useProduct()
  return (
    <div className="App">
      <NavBar/>

      <Routes>
        <Route path='/'  element={<ItemListContainer/>}/>
        <Route exact path='/artist/:artistname' element={<ItemListContainer/>}/>
        <Route exact path='/category/:categoryType' element={<CdCategory/>}/>
        <Route exact path={`/detail/${showDetail?.id + showDetail?.name}`}  element={<ItemDetailContainer/>}/>
        <Route path='*' element={<Error/>}/>
      </Routes>
    </div>
  );
}

export default App;
