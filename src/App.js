import s from './App.scss';
import Header from "./components/Header/Header";
import ProductPage from "./components/ProductPage/ProductPage";
import Cart from "./components/Cart/Cart";
import {BrowserRouter, Navigate, Route, Routes} from "react-router-dom";
import CategoryTech from "./components/Category/CategoryTech/CategoryTech";
import {Component} from "react";
import CategoryAll from "./components/Category/CategoryAll/CategoryAll";
import CategoryClothes from "./components/Category/CategoryClothes/CategoryClothes";


class App extends Component {
  render() {
    return (
        <BrowserRouter>
          <div className='App'>
            <Header/>
            <main>
              <Routes>
                <Route exact path={'/'} element={<Navigate to={'/all'}/>}/>
                <Route exact path='/all' element={<CategoryAll/>}/>
                <Route exact path='/tech' element={<CategoryTech/>}/>
                <Route exact path='/clothes' element={<CategoryClothes/>}/>
                <Route exact path='/all/*' element={<ProductPage/>}/>
                <Route exact path='/tech/*' element={<ProductPage/>}/>
                <Route exact path='/clothes/*' element={<ProductPage/>}/>
                <Route exact path='/cart/*' element={<Cart/>}/>
                {/*<Route path='/cartSmall/*' element={<CartSmall/>}/>*/}
              </Routes>
            </main>
          </div>
        </BrowserRouter>

    )
  }
}

export default App;
