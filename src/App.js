import Header from "./components/Header/Header";
import {BrowserRouter, Navigate, Route, Routes} from "react-router-dom";
import {Component} from "react";
import {gql, request} from 'graphql-request'
import CategoryPage from "./components/Category/CategoryPage";
import ProductPage from "./components/ProductPage";

class App extends Component {

  state = {
    categories: []
  }

  componentDidMount() {
    const getCategories = gql`
    {
      categories{
        name
      }
    }`

    request('http://localhost:4000/', getCategories)
      .then((data) => {
        // console.log('categories', data);
        this.setState({categories: data.categories})
      })
      .catch(err => console.log(err))
  }

  render() {
    const {categories} = this.state;
    const initialRoute = categories[0]?.name ?? '';

    return (
      <BrowserRouter>
        <div className='App'>
          {categories.length ? <Header categories={categories} /> : null}
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
