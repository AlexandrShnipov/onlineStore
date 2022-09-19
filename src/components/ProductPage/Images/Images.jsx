import {Component} from 'react';
import React from "react";
import s from './Images.module.scss';
import {connect} from "react-redux";
import {addProductAC} from "../../../redux/cartReducer";
import {selectCartProductsId, selectCurrencyLabel} from "../../../redux/catrSelectors";
import buttonPrev from '../../../images/arrowPrev.png';
import buttonNext from '../../../images/arrowNext.png';

class Images extends Component {

  constructor(props) {
    super(props);
    this.state = {
      mainImage: 0
    };
  }

  getMainImage = (index) => () => {
    this.setState({
      mainImage: index
    })
  }

  myRef = React.createRef();

  prevSlide = () => {
    const slide = this.myRef.current;
    console.log(slide)
    slide.scrollTop -= slide.offsetHeight;
    console.log(slide.scrollTop -= slide.offsetHeight, slide.scrollHeight)
    if (slide.scrollTop <= 0) {
      slide.scrollTop = slide.scrollHeight
    }
  }

  nextSlide = () => {
    const slide = this.myRef.current;
    slide.scrollTop += slide.offsetHeight;
    console.log(slide.scrollTop += slide.offsetHeight)
    if (slide.scrollTop >= (slide.scrollHeight - slide.offsetHeight)) {
      slide.scrollTop = 0;
    }
  }

  render() {
    const {gallery, name} = this.props;
    console.log(gallery)

    return (
      <>
        <div className={s.imgBlock}>
          <div className={s.slider}>
            <div className={s.imgBlockSmallImg} ref={this.myRef}>
              {gallery?.map((img, index) => (
                <button key={index} onClick={this.getMainImage(index)}>
                  <img src={img} alt={name}/>
                </button>
              ))}
            </div>


            {gallery?.length > 3 &&
            <div className={s.sliderButtons}>
              <button
                style={{transform: 'rotate(-90deg)'}}
                onClick={this.prevSlide}
              >
                <img src={buttonPrev} alt={buttonPrev}/>
              </button>
              <button
                style={{transform: 'rotate(-90deg)'}}
                onClick={this.nextSlide}
              >
                <img src={buttonNext} alt={buttonNext}/>
              </button>
            </div>

            }
        </div>
          <div className={s.imgBlockBigImg}>
            <img src={gallery?.[this.state.mainImage] ?? ''} alt={name}/>
          </div>
        </div>
      </>
    )
  }
}

export default connect(
  state => ({
    currency: selectCurrencyLabel(state),
    cartProducts: selectCartProductsId(state)
  }),
  {addProductAC})
(Images);