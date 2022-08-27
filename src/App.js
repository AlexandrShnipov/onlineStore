import s from './App.scss';
import Header from "./components/Header/Header";
import CategoryWomen from "./components/Category/CategoryWomen/CategoryWomen";
import ProductCard from "./components/ProductCard/ProductCard";
import Cart from "./components/Cart/Cart";
import CartSmall from "./components/CartSmall/CartSmall";
import {BrowserRouter, Navigate, Route, Routes} from "react-router-dom";
import CategoryMan from "./components/Category/CategoryMan/CategoryMan";
import CategoryKids from "./components/Category/CategoryKids/CategoryKids";
import {Component} from "react";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className='App'>
          <Header/>
          <main>
            <Routes>
              <Route exact path={'/'} element={<Navigate to={'/women'} />} />
                <Route path='/women/*' element={<CategoryWomen/>}/>
                <Route path='/man/*' element={<CategoryMan/>}/>
                <Route path='/kids/*' element={<CategoryKids/>}/>
                <Route path='/productCard/*' element={<ProductCard/>}/>
                <Route path='/cart/*' element={<Cart/>}/>
                {/*<CategoryWomen/>*/}
                {/*<CategoryWomen/>*/}
                {/*<CategoryWomen/>*/}
                {/*<ProductCard/>*/}
                {/*<Cart/>*/}
            </Routes>


          </main>

          <CartSmall/>
        </div>
      </BrowserRouter>

    );
  }
}

export default App;
