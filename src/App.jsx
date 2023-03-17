import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter, Route, Routes} from "react-router-dom"
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer';
import ItemCategoryContainer from './components/ItemCategoryContainer';
import ShopingCartContext from './context/ShopingCartContext';
import Endshop from './components/Checkout';

function App() {
  return (
    <div className="App">
    <ShopingCartContext>
      <BrowserRouter>
        <NavBar/>
          <Routes>

          <Route exact path='/' element = {<ItemListContainer/>}/>
          <Route exact path='/item/:id' element = {<ItemDetailContainer/>}/>
          <Route exact path='/category/:id' element = {<ItemCategoryContainer/>}/>
          <Route exact path='/checkout' element = {<Endshop/>}/>
          
          </Routes>
      </BrowserRouter>
    </ShopingCartContext>
    </div>
  )
}

export default App
 