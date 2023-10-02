import { Footer } from '../components/Footer';
import Gear from "../components/Gear";
import Links from '../components/Links';
import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';

import { useSelector, useDispatch } from "react-redux";
import { setXx59Quantity, selectXx59Quantity} from "./reduxItems";

function Xx59() {

    const newQuantity = useSelector(selectXx59Quantity)
    const dispatch = useDispatch();
    const[pageQuantity, setPageQuantity] = useState(1);


    const addToCart = () => {
        dispatch(setXx59Quantity(newQuantity + pageQuantity));
    };

    return ( 
        <>
            <main>
                <div className="productPage-blockContainer">
                    <Link className='goBackLink' to="/headphones">Go Back</Link>

                    <div className="productPage">
                            <div className="productPage__image-box">
                                <img className='productPage__image-box-xx59' src="../assets/product-xx59-headphones/mobile/xx59.webp" alt="XX59 Headphones" data-aos="fade-up"/>
                            </div>
                        

                        <div className="productPage-top-text-container" data-aos="fade-down"> 
                            <h1 className='productPage__heading'>XX59 Headphones</h1>
                            <p className='productPage__paragraph'>Enjoy your audio almost anywhere and customize it to your specific tastes with the XX59 headphones. The stylish yet durable versatile wireless headset is a brilliant companion at home or on the move.</p>
                            <p className='productPage__price'>$ 899</p>

                            <div className="productPage__buttons">
                                <div className="productPage__quantity-buttons">
                                    <button className='productPage__quantity-buttons-one' onClick={
                                        () => {
                                            if (pageQuantity > 0) {
                                                setPageQuantity(pageQuantity - 1)}
                                            }
                                            
                                        }
                                        >-</button>
                                    <p className='productPage__quantity-buttons-number'>{pageQuantity}</p>
                                    <button className='productPage__quantity-buttons-two' onClick={() => setPageQuantity(pageQuantity + 1)}>+</button>
                                </div>

                                <button className='productPage__cart-button' onClick={() => addToCart()}>ADD TO CART</button>

                            </div>

                        </div>
                    </div>

                    <div className="productPage__feature-box-block" data-aos="flip-right">
                        <div className="productPage__feature-block">
                            <h3 className='productPage__feature-heading'>FEATURES</h3>
                            <p className='productPage__description'>These headphones have been created from durable, high-quality materials tough enough to take anywhere. Its compact folding design fuses comfort and minimalist style making it perfect for travel. Flawless transmission is assured by the latest wireless technology engineered for audio synchronization with videos.

More than a simple pair of headphones, this headset features a pair of built-in microphones for clear, hands-free calling when paired with a compatible smartphone. Controlling music and calls is also intuitive thanks to easy-access touch buttons on the earcups. Regardless of how you use the XX59 headphones, you can do so all day thanks to an impressive 30-hour battery life that can be rapidly recharged via USB-C.</p>
                        </div>
                        <div className="productPage__box-block">
                            <h3 className='productPage__feature-heading'>in the box</h3>
                            <div className="productPage__list-container">
                                <p className='productPage__list-container-item'><strong>1x</strong> Headphone Unit</p> 
                                <p className='productPage__list-container-item'><strong>2x</strong> Replacement Earcups</p>
                                <p className='productPage__list-container-item'><strong>1x</strong> User manual</p>
                                <p className='productPage__list-container-item'><strong>1x</strong> 3.5mm 5m Audio Cable</p>
                            </div>
                        </div>
                    </div>

                    <div className="productPage-blockContainer-image-box">
                        <div className="productPage-blockContainer-image-box-small-images">
                            <img className='productPage-image-girl-dancing' src="../assets/shared/mobile/grid-page-three-1.webp" alt="A woman dancing listening to XX59 headphones playing music from a phone." />
                            <img className='productPage-image-books' src="../assets/shared/mobile/grid-page-three-2.webp" alt="XX59 headphones over some books." />
                        </div>
                        <img className='productPage-image-finger-xx59' src="../assets/shared/mobile/grid-page-three-3.webp" alt="A hand holding the XX59 headphones, they are hanging from one finger" />
                    </div>

                    
                    <div className="recomendation__block">
                        <h3 className='recomendation__block-heading'>YOU MAY ALSO LIKE</h3>
                        <div className="recomendation__block-flex-box">
                            <div className="recomendation__block-container">
                                <div className="recomendation__block-container-image-box">
                                    <img className='recomendation__block-container-image-box-image xx99mii' src="../assets/product-xx99-mark-two-headphones/mobile/mk2.webp" alt="XX99 Mark II Headphones" />
                                </div>

                                <h3 className='recomendation__block-product-heading'>XX99 MARK II</h3>
                                <Link to={"/headphones/xx99mii"} className="seeProductButton">SEE PRODUCT</Link>
                            </div>

                            <div className="recomendation__block-container">
                                <div className="recomendation__block-container-image-box">
                                    <img className='recomendation__block-container-image-box-image xx99mi' src="../assets/product-xx99-mark-two-headphones/mobile/mk1.webp" alt="XX99 Mark I Headphones" />
                                </div>

                                <h3 className='recomendation__block-product-heading'>XX99 MARK I</h3>
                                <Link to={"/headphones/xx99mi"} className="seeProductButton">SEE PRODUCT</Link>
                            </div>

                            <div className="recomendation__block-container">
                                    <div className="recomendation__block-container-image-box">
                                        <img className='recomendation__block-container-image-box-image zx9' src="../assets/product-zx9-speaker/mobile/zx9.webp" alt="XX99 Mark I Headphones" />                                
                                    </div>
                                <h3 className='recomendation__block-product-heading'>ZX9 SPEAKER</h3>
                                <Link to={"/speakers/zx9"} className="seeProductButton">SEE PRODUCT</Link>
                            </div>
                        </div>
                    </div>
                    
                </div>   

                <Links/>
                <Gear/>
            </main>

            <Footer/>
        </>
     );
}

export default Xx59;