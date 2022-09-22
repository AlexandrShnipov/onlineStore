import {Component} from 'react';
import MainContainer from '../../common/MainContainer/MainContainer';
import s from './ProductPage.module.scss';
import {withRouter} from "../../hocs/withRouter";
import {request, gql} from 'graphql-request'
import {connect} from "react-redux";
import {addProductAC} from "../../redux/cartReducer";
import AttributeRender from "../AttributeRender/AttributeRender";
import {selectCartProductsId, selectCurrencyLabel} from "../../redux/catrSelectors";
import Images from "./Images/Images";

class ProductPage extends Component {

  constructor(props) {
    super(props);
    this.state = {
      product: {}
    };
  }

  componentDidMount() {
    const {location} = this.props;
    const pathnameItems = location.pathname.split('/');
    const id = pathnameItems[pathnameItems.length - 1]
    console.log(location)

    const getProduct = gql`
  query GetProduct($id: String!) {
     product(id: $id) {
    category
    id
    brand
    name
    description
    gallery
    inStock
    attributes{
      id
      name
      type
      items{
        id
        displayValue
        value
      }
    }
    prices {
      currency {
        label
        symbol
      }
      amount
    }
  }
  }
  `;
    request('http://localhost:4000/', getProduct, {id})
      .then((data) => {
        console.log('duct', data);
        const product = {
          ...data.product,
          attributes: data.product.attributes?.map(attribute => (
            {
              ...attribute,
              items: attribute.items?.map((item, i) => ({...item, isChecked: i === 0}))
            }
          ))
        }
        this.setState({product})
      })
      .catch(err => console.log(err))
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    const {location} = this.props;
    const pathnameItems = location.pathname.split('/');
    const id = pathnameItems[pathnameItems.length - 1]

    if (prevProps.location !== location) {
      const getProduct = gql`
  query GetProduct($id: String!) {
     product(id: $id) {
    category
    id
    brand
    name
    description
    gallery
    inStock
    attributes{
      id
      name
      type
      items{
        id
        displayValue
        value
      }
    }
    prices {
      currency {
        label
        symbol
      }
      amount
    }
  }
  }
  `;
      request('http://localhost:4000/', getProduct, {id})
        .then((data) => {
          console.log('duct', data);
          const product = {
            ...data.product,
            attributes: data.product.attributes?.map(attribute => (
              {
                ...attribute,
                items: attribute.items?.map((item, i) => ({...item, isChecked: i === 0}))
              }
            ))
          }
          this.setState({product})
        })
        .catch(err => console.log(err))
    }
  }

  toggleCheckedAttribute = (id, param) => {
    const {product} = this.state;
    const newAttributes = product.attributes.map(attribute => {
      if (attribute.id.toLowerCase() === param) {
        return {
          ...attribute,
          items: attribute.items.map(item => ({...item, isChecked: item.id === id}))
        }
      } else return {
        ...attribute,
        items: attribute.items.map(item => ({...item}))
      }
    });

    const newProduct = {
      ...product,
      attributes: newAttributes
    }
    this.setState({product: newProduct})
  }

  render() {
    const {gallery, name, brand, prices, description, attributes, id} = this.state.product ?? {};
    const {cartProducts} = this.props;
    const price = prices?.find(price => price.currency.label === this.props.currency)
    const isCheckedPrice = price

    return (
      <MainContainer>
        <div className={s.container}>

          <Images
            gallery={gallery}
            nane={name}
            id={id}
          />

          <div className={s.productParameters}>
            <h2 className={s.productParametersTitle}>{name}
              <span>{brand}</span>
            </h2>

            {attributes?.map((attribute, i) =>
              <AttributeRender
                key={i}
                attribute={attribute}
                onCheck={this.toggleCheckedAttribute}
              />)}

            <div className={`${s.productParametersItem} ${s.productParametersPrice}`}>
              <h3>Price:</h3>
              <span>{`${isCheckedPrice?.currency?.symbol} ${isCheckedPrice?.amount}`}</span>
            </div>

            <button
              className={s.productParametersButtonAddToCart}
              onClick={this.onAddToCartClick}
            >
              add to cart
            </button>

            <div dangerouslySetInnerHTML={{__html: description}} className={s.productParametersDescription}/>
          </div>
        </div>
      </MainContainer>
    )
  }

  onAddToCartClick = () => {
    const {state: {product}, props: {addProductAC}} = this;
    addProductAC(product);
  }

}

export default connect(
  state => ({
    currency: selectCurrencyLabel(state)
  }),
  {addProductAC})
(withRouter(ProductPage));