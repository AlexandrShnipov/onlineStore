import {Component} from 'react';
import MainContainer from '../MainContainer/MainContainer';
import s from './ProductCard.module.scss';
import smallPhoto from '../../images/imageSmallProduct.png';
import bigPhoto from '../../images/imageBigProduct.png';

class ProductCard extends Component {
  render() {
    return (
      <MainContainer>
        <div className={s.container}>
          <div className={s.imgBlock}>
            <div className={s.imgBlockSmallImg}>
              <button>
                <img src={smallPhoto} alt={'Photo product'}/>
              </button>
              <button>
                <img src={smallPhoto} alt={'Photo product'}/>
              </button>
              <button>
                <img src={smallPhoto} alt={'Photo product'}/>
              </button>
            </div>
            <img className={s.imgBlockBigImg} src={bigPhoto} alt={'Photo product'}/>
          </div>
          <div className={s.productParameters}>
            <h2 className={s.productParametersTitle}>Apollo
              <span>Running Short</span>
            </h2>
            <div className={`${s.productParametersItem} ${s.productParametersSize}`}>
              <h3>Size:</h3>
              <div className={s.productParametersSizeOptions}>
                <span className={s.active}>xs</span>
                <span>s</span>
                <span>m</span>
                <span>l</span>
              </div>
            </div>
            <div className={`${s.productParametersItem} ${s.productParametersColor}`}>
              <h3>Color:</h3>
              <div className={s.productParametersColorOptions}>
                <div className={s.active}>
                  <span style={{background: 'lightGrey'}}></span>
                </div>
                <div>
                  <span style={{background: 'black'}}></span>
                </div>
                <div>
                  <span style={{background: 'green'}}></span>
                </div>
              </div>
            </div>
            <div className={`${s.productParametersItem} ${s.productParametersPrice}`}>
              <h3>Price:</h3>
              <span>$50.00</span>
            </div>
            <button className={s.productParametersButtonToCart}>add to cart</button>
            <p className={s.productParametersDescription}>
              Find stunning women's cocktail dresses and party dresses.
              Stand out in lace and metallic cocktail dresses
              and party dresses from all your favorite brands.</p>
          </div>
        </div>
      </MainContainer>
    )
  }
}

export default ProductCard