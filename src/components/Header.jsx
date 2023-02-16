import React from 'react'
import { useState } from 'react'

import logo from '../images/logo.svg'
import cartIcon from '../images/icon-cart.svg'
import avatar from '../images/image-avatar.png'

import "./Header.css"
import CartProduct from './CartProduct'

function Header(props) {
    const [cartClicked, setCartClicked] = useState(false)

    let cartNumClassName = props.cartItemAmount > 0 ? 'cart-numbers active' : "cart-numbers"

    const handleCartClick = () =>{
        setCartClicked(prevState => !prevState)
    }

  return (
    <header>
        <nav>
            <img src={logo} alt="" />
            <ul>
                <li>Collections</li>
                <li>Men</li>
                <li>Women</li>
                <li>About</li>
                <li>Contact</li>
            </ul>
        </nav>
        <div className="user-cart">
            <div className='cart__wrapper'>
                <div className={cartNumClassName}>{props.cartItemAmount}</div>
                <img className="cart" src={cartIcon} alt="cart" onClick={handleCartClick} />
                {cartClicked && 
                <div className="cart-dropdown">
                    <h3>cart</h3>
                    <div className="cart-dropdown__content">
                        {props.cartItemAmount === 0
                        ? <p className='cart-empty'>Your cart is empty</p>
                        : <CartProduct 
                            cartItemAmount={props.cartItemAmount}
                            handleDeleteFromCart={props.handleDeleteFromCart}
                        />}
                    </div>
                </div> }
                
            </div>
            <div className='avatar__wrapper'>
                <img  className = "avatar" src={avatar} alt="avatar" />
            </div>
        </div>
    </header>
  )
}

export default Header