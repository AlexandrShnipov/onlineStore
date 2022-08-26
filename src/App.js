import s from './App.scss';
import Header from "./components/Header/Header";
import CategoryWomen from "./components/Category/CategoryWomen";
import ProductCard from "./components/ProductCard/ProductCard";
import Cart from "./components/Cart/Cart";

function App() {
  return (
    <div className='App'>
      <Header/>
      <CategoryWomen/>
      <ProductCard/>
      <Cart/>
    </div>
  );
}

export default App;
