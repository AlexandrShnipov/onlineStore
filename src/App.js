import Header from "./components/Header/Header";
import {BrowserRouter, Navigate, Route, Routes} from "react-router-dom";
import {Component} from "react";
import {gql, request} from 'graphql-request'
import ProductPage from "./components/ProductPage/ProductPage";
import CategoryPage from "./components/Category/CategoryPage/CategoryPage";


class App extends Component {

  state = {
    categories: [],
    currencies: []
  }

  componentDidMount() {
    const getCategories = gql`
    {
      categories{
        name
      }
    }`

    const getCurrencies = gql`
    {
      currencies{
        label
        symbol
     }
    }`

    request('http://localhost:4000/', getCategories)
      .then((data) => {
        //console.log('categories', data);
        this.setState({categories: data.categories})
      })
      .catch(err => console.log(err))

    request('http://localhost:4000/', getCurrencies)
      .then((data) => {
        console.log('currencies', data);
        this.setState({currencies: data.currencies})
      })
      .catch(err => console.log(err))
  }

  render() {
    const {categories, currencies} = this.state;
    const initialRoute = categories[0]?.name ?? '';

    return (
      <BrowserRouter>
        <div className='App'>
          {categories.length && currencies.length ? <Header
              categories={categories}
              currencies={currencies}/>
            : null}
          <main>
            <Routes>
              <Route exact path={'/'} element={<Navigate to={`/${initialRoute}`}/>}/>
              <Route exact path='/:category' element={<CategoryPage/>}/>
              <Route exact path='/:category/:productId' element={<ProductPage/>}/>
              {/*<Route exact path='/cart/*' element={<Cart/>}/>*/}
            </Routes>
          </main>
        </div>
      </BrowserRouter>

    )
  }
}

export default App;
