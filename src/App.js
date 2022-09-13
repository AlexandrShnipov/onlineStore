import Header from "./components/Header/Header";
import {BrowserRouter, Navigate, Route, Routes} from "react-router-dom";
import {Component} from "react";
import {gql, request} from 'graphql-request'
import ProductPage from "./components/ProductPage/ProductPage";
import CategoryPage from "./components/Category/CategoryPage/CategoryPage";
import CartMini from "./components/CartMini/CartMini";
import './App.scss';
import Cart from "./components/Cart/Cart";


class App extends Component {

  state = {
    categories: [],
    currencies: [],
    currency: ''
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
        const {currencies} = this.state
        console.log('currencies', data);
        this.setState({
            currencies: data.currencies,
            currency: data.currencies[0].label
          }
        )
      })
      .catch(err => console.log(err))
  }

  onCurrencyChange = (value) => {
    this.setState({currency: value});
  }

  render() {
    const {categories, currencies, currency} = this.state;
    const initialRoute = categories[0]?.name ?? '';

    return (
      <BrowserRouter>
        <div className='App'>
          {categories.length && currencies.length ? <Header
              categories={categories}
              currencies={currencies}
              currency={currency}
              onCurrencyChange={this.onCurrencyChange}
            />
            : null}
          {/*<CartMini/>*/}
          <main>
            <Routes>
              {/*<Route exact path='/cartMini/*' element={<CartMini/>}/>*/}
              <Route exact path={'/'}
                     element={<Navigate to={`/${initialRoute}`}/>}
              />
              <Route exact path='/:category'
                     element={<CategoryPage currency={currency}/>}
              />
              <Route exact path='/:category/:productId'
                     element={<ProductPage currency={currency}/>}
              />
              <Route exact path='/cart/*' element={<Cart currency={currency}/>}/>
            </Routes>
          </main>
        </div>
      </BrowserRouter>

    )
  }
}

export default App;
