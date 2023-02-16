import React from 'react'
import reactDom from 'react-dom'

import './SliderModal.css'

import closeIcon from '../images/icon-close.svg'

function SliderModal(props) {
    const handleCloseSlider = () =>{
        props.setModalOpened(false)
    }

  return reactDom.createPortal(
    <>
        <div className="modal-backdrop">
            <div className='slider-modal'>
                <div className="close-icon__wrapper">
                    <img src={closeIcon} alt="close-icon"  onClick={handleCloseSlider}/>
                </div>
                <div className="product-imgs__container modal-main-img">
                    <div className="product-img-main" 
                    style={{ backgroundImage: `url(${props.modalMainImg})` }} ></div>
                    <div className="slider-imgs">
                        {props.productImgs.map((image, index) => {
                            return <div 
                            className={image === props.selectedImg
                            ? 'slider-img img-selected' 
                            : 'slider-img'} 
                            key={index} 
                            onClick={ () => props.handleModalImgClick(image) }
                            style={{ backgroundImage: `url(${image})` }}>
                            </div>
                        } )}
                    </div>
                </div>
            </div>
        </div>
    </>, document.getElementById('modal-root') 
  )
}

export default SliderModal