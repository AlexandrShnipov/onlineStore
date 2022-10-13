import {PureComponent} from 'react';
import s from './ProductCard.module.scss'
import {NavLink} from 'react-router-dom';
import {withRouter} from '../../hocs/withRouter';
import cart from '../../images/cartWhite.png';

class ProductCard extends PureComponent {

    render() {
        const {location, id, image, name, brand, price, inStock} = this.props;
        const totalAmount = price?.amount.toFixed(2)
        return (
            <div className={s.container}>
                <div className={s.wrapper}>
                    <NavLink
                        className={s.card}
                        to={{
                            pathname: `${location.pathname}/${id}`
                        }}
                    >
                        <div className={s.cardImg}>
                            <img src={image} alt={name}/>
                        </div>
                        <h2 className={s.cardTitle}>{brand}, <span>{name}</span></h2>
                        <p className={s.cardPrice}><span>{price?.currency?.symbol}</span> {totalAmount}</p>
                    </NavLink>
                    {
                        inStock &&
                        <button
                            className={s.buttonAddInCart}
                            onClick={this.onAddToCartClick}
                        >
                            <img src={cart} alt='cart images'/>
                        </button>
                    }
                    {
                        !inStock &&
                        <div
                            className={s.stockBox}
                            to={{
                                pathname: `${location.pathname}/${id}`
                            }}
                        >
                            <span>out of stock</span>
                        </div>
                    }
                </div>

            </div>
        )
    }

    onAddToCartClick = () => {
        this.props.addProductToCart(this.props.id);
    }
}

export default withRouter(ProductCard)