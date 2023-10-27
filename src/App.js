import './App.css';
import {NavBar} from './components/navBar/NavBar';
import { ItemListContainer } from './components/ItemListContainer/ItemListContainer.jsx';
import { ItemDetailContainer } from './components/itemDetailContainer/ItemDetailContainer';
import { useProduct } from './Context/productContext';
import { Route, Routes } from 'react-router-dom';
import { CdCategory } from './cdCategory/CdCategory';
import { Error } from './Error/Error';
import { CartPage } from './components/CartPage/CartPage';

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
        <Route exact path='/section/cart' element={<CartPage/>}/>
        <Route path='*' element={<Error/>}/>
      </Routes>
    </div>
  );
}

export default App;
