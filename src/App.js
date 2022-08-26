import s from './App.scss';
import Header from "./components/Header/Header";
import CategoryWomen from "./components/Category/CategoryWomen";
import ProductCard from "./components/ProductCard/ProductCard";

function App() {
  return (
    <div className='App'>
      <Header/>
      <CategoryWomen/>
      <ProductCard/>
    </div>
  );
}

export default App;
