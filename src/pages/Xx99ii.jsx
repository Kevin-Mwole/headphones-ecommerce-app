import { Footer } from '../components/Footer';
import Gear from "../components/Gear";
import Links from '../components/Links';
import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';

import { useSelector, useDispatch } from "react-redux";
import { setXx99MiiQuantity, selectXx99MiiQuantity } from "./reduxItems";


function Xx99ii() {

    const newQuantity = useSelector(selectXx99MiiQuantity);
    const dispatch = useDispatch();
    const[pageQuantity, setPageQuantity] = useState(1);

    const addToCart = () => {
        dispatch(setXx99MiiQuantity(newQuantity + pageQuantity));
    };

    return ( 
        <>
            <main>
                <div className="productPage-blockContainer">
                    <Link className='goBackLink' to="/headphones">Go Back</Link>

                    <div className="productPage">
                            <div className="productPage__image-box">
                                <img className='productPage__image-box-xx99mii' src="../assets/product-xx99-mark-two-headphones/mobile/mk2.webp" alt="XX99 Mark 2 Headphones" data-aos="fade-up"/>
                            </div>
                        

                        <div className="productPage-top-text-container" data-aos="fade-down"> 
                            <h3 className='productPage__new-heading'>NEW PRODUCT</h3>
                            <h1 className='productPage__heading'>XX99 Mark II Headphones</h1>
                            <p className='productPage__paragraph'>The new XX99 Mark II headphones is the pinnacle of pristine audio. It redefines your premium headphone experience by reproducing the balanced depth and precision of studio-quality sound.</p>
                            <p className='productPage__price'>$ 2,999</p>

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

                    <div className="productPage__feature-box-block">
                        <div className="productPage__feature-block">
                            <h3 className='productPage__feature-heading'>FEATURES</h3>
                            <p className='productPage__description'>Featuring a genuine leather head strap and premium earcups, these headphones deliver superior comfort for those who like to enjoy endless listening. It includes intuitive controls designed for any situation. Whether you’re taking a business call or just in your own personal space, the auto on/off and pause features ensure that you’ll never miss a beat. The advanced Active Noise Cancellation with built-in equalizer allow you to experience your audio world on your terms. It lets you enjoy your audio in peace, but quickly interact with your surroundings when you need to. Combined with Bluetooth 5. 0 compliant connectivity and 17 hour battery life, the XX99 Mark II headphones gives you superior sound, cutting-edge technology, and a modern design aesthetic.</p>
                        </div>
                        <div className="productPage__box-block" data-aos="flip-right">
                            <h3 className='productPage__feature-heading'>in the box</h3>
                            <div className="productPage__list-container">
                                <p className='productPage__list-container-item'><strong>1x</strong> Headphone Unit</p> 
                                <p className='productPage__list-container-item'><strong>2x</strong> Replacement Earcups</p>
                                <p className='productPage__list-container-item'><strong>1x</strong> User manual</p>
                                <p className='productPage__list-container-item'><strong>1x</strong> 3.5mm 5m Audio Cable</p>
                                <p className='productPage__list-container-item'><strong>1x</strong> Travel Bag</p>
                            </div>
                        </div>
                    </div>

                    <div className="productPage-blockContainer-image-box">
                        <div className="productPage-blockContainer-image-box-small-images">
                            <img className='productPage-image-headphone-guy' src="../assets/shared/mobile/grid-page-one-1.webp" alt="A man relaxing with headphones" />
                            <img className='productPage-image-table' src="../assets/shared/mobile/grid-page-one-2.webp" alt="A table with headphones and a phone on it" />
                        </div>
                        <img className='productPage-image-headphone-close' src="../assets/shared/mobile/grid-page-one-3.webp" alt="A close up of the XX99 Mark II Headphones" />
                    </div>

                    
                    <div className="recomendation__block">
                        <h3 className='recomendation__block-heading'>YOU MAY ALSO LIKE</h3>
                        <div className="recomendation__block-flex-box">
                            <div className="recomendation__block-container">
                                <div className="recomendation__block-container-image-box">
                                    <img className='recomendation__block-container-image-box-image xx99mi' src="../assets/product-xx99-mark-two-headphones/mobile/mk1.webp" alt="XX99 Mark I Headphones" />
                                </div>

                                <h3 className='recomendation__block-product-heading'>XX99 MARK I</h3>
                                <Link to={"/headphones/xx99mi"} className="seeProductButton">SEE PRODUCT</Link>
                            </div>

                            <div className="recomendation__block-container">
                                <div className="recomendation__block-container-image-box">
                                    <img className='recomendation__block-container-image-box-image xx59' src="../assets/product-xx99-mark-two-headphones/mobile/xx59.webp" alt="XX99 Mark I Headphones" />                                
                                </div>

                                <h3 className='recomendation__block-product-heading'>XX59</h3>
                                <Link to={"/headphones/xx59"} className="seeProductButton">SEE PRODUCT</Link>
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

export default Xx99ii;