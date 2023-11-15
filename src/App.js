import './App.css';
import { NavBar } from './components/navBar/NavBar';
import { ItemListContainer } from './components/ItemListContainer/ItemListContainer.jsx';
import { ItemDetailContainer } from './components/itemDetailContainer/ItemDetailContainer';
import { Route, Routes } from 'react-router-dom';
import { CdCategory } from './components/cdCategory/CdCategory';
import { Error } from './Error/Error';
import { CartPage } from './components/CartPage/CartPage';
import { Footer } from './components/footer/Footer';
import { CartProvider } from './Context/cartContext';
import { useProductContext } from './hooks/useProductContext';
import { Form } from './components/formulario/Form.jsx';



function App() {
  const { showDetail } = useProductContext();
  return (
    <div className="App">
      <CartProvider>
        <NavBar />
        <Routes>
          <Route path='/' element={<ItemListContainer/>}/>
          <Route exact path='/artist/:artistname' element={<ItemListContainer />} />
          <Route exact path='/category/:categoryType' element={<CdCategory />} />
          <Route exact path={`/detail/${showDetail?.id}`} element={<ItemDetailContainer />} />
          <Route exact path='/section/cart' element={<CartPage />} />
          <Route exact path='/cart/checkout' element={<Form/>} />
          <Route path='*' element={<Error />} />
        </Routes>
      </CartProvider>
      <Footer />
    </div>
  );
}

export default App;
