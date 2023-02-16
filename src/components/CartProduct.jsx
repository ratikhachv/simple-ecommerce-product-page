import React from 'react'

import './CartProduct.css'

import deleteIcon from '../images/icon-delete.svg'
import cartProductImg from '../images/image-product-1-thumbnail.jpg'

function CartProduct(props) {
  return (
    <div className='cart-product__wrapper'>
        <div className="cart-product">
            <div className="cart-product__image">
                <img src={cartProductImg} alt="product-img" />
            </div>
            <div className="cart-product__info">
                <p className="cart-product__name">
                    Fall Limited Edition Sneakers
                </p>
                <p className="cart-product__price">
                    <span> $125 x {props.cartItemAmount} </span> ${125 * props.cartItemAmount}
                </p>
            </div>
            <button className='delete-btn' onClick={props.handleDeleteFromCart}>
                <img src={deleteIcon} alt="" />
            </button>
        </div>
        <button className="checkout-btn">
            Checkout
        </button>
    </div>
  )
}

export default CartProduct