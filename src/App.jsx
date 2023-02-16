import { useState } from 'react';

import './App.css';

//components
import Header from './components/Header';
import ProductSection from './components/ProductSection';
import SliderModal from './components/SliderModal';

//image imports
import productImg1 from './images/image-product-1.jpg'
import productImg2 from './images/image-product-2.jpg'
import productImg3 from './images/image-product-3.jpg'
import productImg4 from './images/image-product-4.jpg'

function App() {
  const productImgs = [productImg1, productImg2, productImg3, productImg4]
  const [mainImg, setMainImg] = useState(productImgs[0])
  const [selectedItemAmount, setSelectedItemAmount] = useState(0)
  const [cartItemAmount, setCartItemAmount] = useState(0)
  const [modalOpened, setModalOpened] = useState(false)
  const [modalMainImg, setModalMainImg] = useState(productImgs[0])

  const handleImgClick = (image) =>{
    setMainImg(image)
  }

  const handleModalImgClick = (image) =>{
    setModalMainImg(image)
  }

  const changeAmount = (btnType) =>{
    btnType === 'decrease' && selectedItemAmount >= 1 && setSelectedItemAmount(prevState => --prevState)
    btnType === 'increase' && setSelectedItemAmount(prevState => ++prevState)
  }

  const addToCart = () => {
    selectedItemAmount > 0 && setCartItemAmount(selectedItemAmount)
    selectedItemAmount === 0 && cartItemAmount > 0 && setCartItemAmount(selectedItemAmount)
  }

  const handleDeleteFromCart = () =>{
    setCartItemAmount(0)
    setSelectedItemAmount(0)
  }

  return (
    <>
    {modalOpened && <SliderModal 
        modalMainImg={modalMainImg}
        setModalOpened={setModalOpened}
        productImgs={productImgs}
        selectedImg={modalMainImg}
        handleModalImgClick={handleModalImgClick}
      />}
      
        <Header
          cartItemAmount={cartItemAmount}
          handleDeleteFromCart={handleDeleteFromCart}
        />
        <ProductSection 
          selectedImg={mainImg}
          productImgs={productImgs}
          handleImgClick = {handleImgClick}
          selectedItemAmount={selectedItemAmount}
          changeAmount={changeAmount}
          addToCart={addToCart}
          setModalOpened={setModalOpened}
      />
    
    </>
    
  );
}

export default App;
