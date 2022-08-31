import {Component} from 'react';
import MainContainer from '../../common/MainContainer/MainContainer';
import s from './ProductPage.module.scss';
import bigPhoto from '../../images/imageBigProduct.png';
import withHoc from './ProductPageHoc';

class ProductPage extends Component {

  render() {
    console.log(this.props.data.product)
    const {attributes, gallery, name, brand, prices, description} = this.props.data.product ?? {};
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
            <img className={s.imgBlockBigImg} src={gallery?.[0]} alt={name}/>
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
              <span>$50.00</span>
            </div>
            <button className={s.productParametersButtonToCart}>add to cart</button>
            <div dangerouslySetInnerHTML={{__html: description}} className={s.productParametersDescription}/>
          </div>
        </div>
      </MainContainer>
    )
  }

  selectProductAttribute = (param) => {
    const {attributes} = this.props.data.product ?? {};

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
                <span key={i} className={s.active}>{item.value}</span>
              ))}
            </div>
          </div>
        )
      case 'color':
        return (!!data &&
          <div className={`${s.productParametersItem} ${s.productParametersColor}`}>
            <h3>{`${param}:`}</h3>
            <div className={s.productParametersColorOptions}>
              {data?.items.map((item, i) => (
                <div key={i} className={s.active}>
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
                <span key={i} className={s.active}>{item.value}</span>
              ))}
            </div>
          </div>
        )
    }
  }

}

export default withHoc(ProductPage);