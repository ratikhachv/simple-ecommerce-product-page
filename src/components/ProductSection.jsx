import React from 'react'

import './ProductSection.css'

import cartIcon from '../images/icon-cart.svg'
import { useState } from 'react';

function ProductSection(props) {
    console.log(props.selectedImg);
    

    const handleMainImgClick = () =>{
        props.setModalOpened(true)
    }

  return (
    <section className='product-section'>
        <div className="product-imgs__container">
            <div className="product-img-main"  onClick={handleMainImgClick}
            style={{ backgroundImage: `url(${props.selectedImg})` }} ></div>
            <div className="slider-imgs">
                {props.productImgs.map((image, index) => {
                    return <div 
                    className={image === props.selectedImg
                    ? 'slider-img img-selected' 
                    : 'slider-img'} 
                    key={index} 
                    onClick={ () => props.handleImgClick(image) }
                    style={{ backgroundImage: `url(${image})` }}>
                    </div>
                } )}
            </div>
        </div>
        <div className="product-info__container">
            <h4>SNEAKER COMPANY</h4>
            <h1>Fall Limited Edition Sneakers</h1>
            <p className='product-description'>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
                Eos, nemo nulla deserunt nobis cum expedita. Lorem ipsum dolor sit, 
                amet consectetur adipisicing elit. Reiciendis, ad.
                </p>
            <span className="current-price">$125</span>
            <span className="discount-percentage">50%</span>
            <p className="older-price">$250</p>
            <div className="add-to-cart">
                <div className="add-amount">
                    <button onClick={()=>props.changeAmount('decrease')}>-</button>
                    <div>{props.selectedItemAmount}</div>
                    <button  onClick={()=>props.changeAmount('increase')}>+</button>
                </div>
                <button className="add-to-cart-btn" onClick={props.addToCart}>
                    <img src={cartIcon} alt="cart-icon" width={15} /> Add to cart
                </button>
            </div>
        </div>
    </section>
  )
}

export default ProductSection