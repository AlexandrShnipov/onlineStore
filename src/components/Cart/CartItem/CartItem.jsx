import {Component} from 'react';
import s from './CartItem.module.scss';
import AttributeRender from "../../AttributeRender/AttributeRender";
import buttonPrev from '../../../images/arrowPrev.png';
import buttonNext from '../../../images/arrowNext.png';

class CartItem extends Component {

  constructor(props) {
    super(props);
    this.state = {
      sliderIndex: 1
    }
  }

  nextSlide = () => {
    console.log('click')
    if (this.state.sliderIndex !== this.props.imageCartProduct.length) {
      return (
        this.setState({sliderIndex: this.state.sliderIndex + 1})
      )
    } else if (this.state.sliderIndex === this.props.imageCartProduct.length) {
      return (
        this.setState({sliderIndex: 1})
      )
    }
  }

  prevSlide = () => {
    console.log('click')
    if (this.state.sliderIndex !== 1) {
      return (
        this.setState({sliderIndex: this.state.sliderIndex - 1})
      )
    } else if (this.state.sliderIndex === 1) {
      return (
        this.setState({sliderIndex: 1})
      )
    }
  }

  render() {

    const {
      brand, name, price, attributes, imageCartProduct,
      amount, styledCartMini, productParametersTitle,
      attributeNameTitle, counterBlockCartMini,cartSliderButtonsCartMini,
     attributeColorCartMiniWrap, attributeSizeCartMini,
      cartSliderImagesWrapCartMini, currency
    } = this.props;
    console.log(imageCartProduct.length)
    return (
      <>
        <div className={`${s.container} ${styledCartMini}`}>
          <div className={s.productParameters}>
            <h2 className={`${s.productParametersTitle} ${productParametersTitle}`}>{brand}
              <span>{name}</span>
            </h2>
            <span className={`${s.price} ${s.productParametersPrice}`}>
              {`${currency} ${price}`}
            </span>

            {attributes?.map((attribute, i) =>
              <AttributeRender
                attributeNameTitle={attributeNameTitle}
                attributeColorCartMiniWrap={attributeColorCartMiniWrap}
                attributeSizeCartMini={attributeSizeCartMini}
                key={i}
                attribute={attribute}
                onCheck={this.toggleCheckedAttribute}
              />)}

          </div>

          <div className={`${s.counterBlock} ${counterBlockCartMini}`}>
            <div className={s.counterBlockButtons}>
              <button onClick={this.increaseProducts}>&#43;</button>
              <span>{amount}</span>
              <button
                disabled={amount === 1}
                onClick={this.decreaseProducts}>&#8722;</button>
            </div>
            <div className={s.cartSlider}>
              {imageCartProduct.map((image, index) =>
                <div
                  className={this.state.sliderIndex === index + 1
                    ? `${s.cartSliderImagesWrap} ${s.activeAnim} ${cartSliderImagesWrapCartMini}`
                    : `${s.cartSliderImagesWrap} ${cartSliderImagesWrapCartMini}`}
                  key={index}>
                  <img className={s.cartSliderImages} src={image} alt={`${brand} ${name}`}/>
                </div>
              )}
              {imageCartProduct.length > 1 &&
              <div className={`${s.cartSliderButtons} ${cartSliderButtonsCartMini}`}>
                <button
                  onClick={this.prevSlide}
                  disabled={this.state.sliderIndex === 1}
                >
                  <img src={buttonPrev} alt={buttonPrev}/>
                </button>
                <button
                  onClick={this.nextSlide}
                  disabled={this.state.sliderIndex === imageCartProduct.length}
                >
                  <img src={buttonNext} alt={buttonNext}/>
                </button>
              </div>}
            </div>


            <button
              className={s.buttonDeleteProduct}
              onClick={this.deleteProductToCart}>
              <svg viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg"
                   className={s.svg}
                   data-spm-anchor-id="a2g2w.cart.0.i2.76774aa6Ng8cZE">
                <path
                  d="M375.168 167.168v122.88h-112v544.512c0 11.968 10.816 22.272 24.832 22.272h448c14.08 0 24.768-10.304 24.768-22.272V290.048h-112v-122.88H375.168zM688 250.88H896v46.08h-96v537.6c0 33.92-28.672 61.44-64 61.44h-448c-35.328 0-64-27.52-64-61.44v-537.6H128v-46.08h208V158.72a31.36 31.36 0 0 1 32-30.72h288c17.664 0 32 13.76 32 30.72v92.16zM576 404.48v322.56h43.52V404.48H576z m-174.848 0v322.56h43.52V404.48h-43.52z m247.68-153.6H375.168v39.168h273.664V250.88z"></path>
              </svg>
            </button>
          </div>
        </div>
      </>
    )
  }

  increaseProducts = () => this.props.increaseProducts();
  decreaseProducts = () => this.props.decreaseProducts();
  deleteProductToCart = () => this.props.deleteProductToCart();
}

export default CartItem;