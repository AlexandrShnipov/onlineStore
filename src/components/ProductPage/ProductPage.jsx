import {Component} from 'react';
import MainContainer from '../../common/MainContainer/MainContainer';
import s from './ProductPage.module.scss';
import {withRouter} from "../../hocs/withRouter";
import {request, gql} from 'graphql-request'

class ProductPage extends Component {

  state = {
    product: {}
  }

  componentDidMount() {
    const {location} = this.props;
    const pathnameItems = location.pathname.split('/');
    const id = pathnameItems[pathnameItems.length - 1]
    console.log(location)

    const getProduct = gql`
  query GetProduct($id: String!) {
     product(id: $id) {
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
        console.log('product', data);
        const product = {
          ...data.product,
          attributes: data.product.attributes?.map(attribute => (
            {
              ...attribute,
              items: attribute.items?.map((item, i) => ({...item, isChecked: i === 0 }))
            }
          ))
        }
        this.setState({product})
      })
      .catch(err => console.log(err))
  }

  toggleChecked = (id) => {
    const product = {
      ...this.state.product,
      attributes: this.state.product.attributes?.map(attribute => (
        {
          ...attribute,
          items: attribute.items?.map((item, i) => ({...item, isChecked: id === item.id}))
        }
      ))
    }
    this.setState({product})
    console.log('click')
    console.log('product', product);
  }

  render() {
    console.log(this.state.product)
    const {gallery, name, brand, prices, description} = this.state.product ?? {};
    // console.log(prices)
    const price = prices?.find(price => price.currency.label === this.props.currency)
    return (

      <MainContainer>
        <div className={s.container}>
          <div className={s.imgBlock}>
            <div className={s.imgBlockSmallImg}>
              {gallery?.map((img, index) => (
                <button key={index}>
                  <img src={img} alt={name}/>
                </button>
              ))}
            </div>
            <div className={s.imgBlockBigImg}>
              <img src={gallery?.[0]} alt={name}/>
            </div>
          </div>
          <div className={s.productParameters}>
            <h2 className={s.productParametersTitle}>{name}
              <span>{brand}</span>
            </h2>

            {this.renderProductAttribute('size')}
            {this.renderProductAttribute('color')}
            {this.renderProductAttribute('capacity')}

            <div className={`${s.productParametersItem} ${s.productParametersPrice}`}>
              <h3>Price:</h3>
              <span>{`${price?.currency?.symbol} ${price?.amount}`}</span>
            </div>
            <button className={s.productParametersButtonToCart}>add to cart</button>
            <div dangerouslySetInnerHTML={{__html: description}} className={s.productParametersDescription}/>
          </div>
        </div>
      </MainContainer>
    )
  }

  selectProductAttribute = (param) => {
    const {attributes} = this.state.product;

    return attributes?.find(attribute => attribute.id.toLowerCase() === param);
  }

  renderProductAttribute = (param) => {
    const data = this.selectProductAttribute(param);
    switch (param) {
      case 'size':
        return (data &&
          <div className={`${s.productParametersItem} ${s.productParametersSize}`}>
            <h3>{`${param}:`}</h3>
            <div className={s.productParametersSizeOptions}>
              {data?.items.map((item, i) => (
                <span key={i} className={item.isChecked ? s.active : ''}>{item.value}</span>))}
            </div>
          </div>
        )
      case 'color':
        return (!!data &&
          <div className={`${s.productParametersItem} ${s.productParametersColor}`}>
            <h3>{`${param}:`}</h3>
            <div className={s.productParametersColorOptions}>
              {data?.items.map((item, i) => (
                <div key={i} className={item.isChecked ? s.active : ''}>
                  <span style={{backgroundColor: item.value}}></span>
                </div>
              ))}
            </div>
          </div>
        )
      case 'capacity':
        return (!!data &&
          <div className={`${s.productParametersItem} ${s.productParametersSize}`}>
            <h3>{`${param}:`}</h3>
            <div className={s.productParametersSizeOptions}>
              {data?.items.map((item, i) => (
                <span onClick={()=>this.toggleChecked(item.id)} key={i} className={item.isChecked ? s.active : ''}>{item.value}</span>
              ))}
            </div>
          </div>
        )
    }
  }

}

export default withRouter(ProductPage);