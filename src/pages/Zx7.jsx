import { Footer } from '../components/Footer';
import Gear from "../components/Gear";
import Links from '../components/Links';
import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';

import axios from 'axios';
import { useSelector, useDispatch } from "react-redux";
import { setZx7Quantity, selectZx7Quantity} from "./reduxItems";

function Zx7() {

    const newQuantity = useSelector(selectZx7Quantity)
    const dispatch = useDispatch();
    const[pageQuantity, setPageQuantity] = useState(1);

    const addToCart = () => {
        dispatch(setZx7Quantity(newQuantity + pageQuantity));
    };

    return ( 
        <>
            <main>
                <div className="productPage-blockContainer">
                    <Link className='goBackLink' to="/speakers">Go Back</Link>

                    <div className="productPage">
                            <div className="productPage__image-box">
                                <img className='productPage__image-box-zx7' src="../assets/product-zx7-speaker/mobile/zx7.webp" alt="ZX9 Speaker" data-aos="fade-up"/>
                            </div>
                        

                        <div className="productPage-top-text-container" data-aos="fade-down"> 
                            <h1 className='productPage__heading'>ZX7 SPEAKER</h1>
                            <p className='productPage__paragraph'>Stream high quality sound wirelessly with minimal to no loss. The ZX7 speaker uses high-end audiophile components that represents the top of the line powered speakers for home or studio use.</p>
                            <p className='productPage__price'>$ 3,500</p>

                            <div className="productPage__buttons">
                                <div className="productPage__quantity-buttons">
                                    <button className='productPage__quantity-buttons-one' onClick={
                                        () => {
                                                if (pageQuantity > 0) {
                                                    dispatch(setZx7Quantity(pageQuantity - 1))
                                                } else{
                                                    dispatch(setZx7Quantity(0))
                                                }
                                            } 
                                            
                                        }
                                        >-</button>
                                    <p className='productPage__quantity-buttons-number'>{pageQuantity}</p>
                                    <button className='productPage__quantity-buttons-two' onClick={() => dispatch(setZx7Quantity(pageQuantity + 1))}>+</button>
                                </div>

                                <button className='productPage__cart-button' onClick={() => addToCart()}>ADD TO CART</button>
                            </div>

                        </div>
                    </div>

                    <div className="productPage__feature-box-block">
                        <div className="productPage__feature-block">
                            <h3 className='productPage__feature-heading'>FEATURES</h3>
                            <p className='productPage__description'>Reap the advantages of a flat diaphragm tweeter cone. This provides a fast response rate and excellent high frequencies that lower tiered bookshelf speakers cannot provide. The woofers are made from aluminum that produces a unique and clear sound. XLR inputs allow you to connect to a mixer for more advanced usage.

The ZX7 speaker is the perfect blend of stylish design and high performance. It houses an encased MDF wooden enclosure which minimises acoustic resonance. Dual connectivity allows pairing through bluetooth or traditional optical and RCA input. Switch input sources and control volume at your finger tips with the included wireless remote. This versatile speaker is equipped to deliver an authentic listening experience.</p>
                        </div>
                        <div className="productPage__box-block" data-aos="flip-right">
                            <h3 className='productPage__feature-heading'>in the box</h3>
                            <div className="productPage__list-container">
                                <p className='productPage__list-container-item'><strong>2x</strong> Speaker Unit</p> 
                                <p className='productPage__list-container-item'><strong>2x</strong> Speaker Cloth Panel</p>
                                <p className='productPage__list-container-item'><strong>1x</strong> User Manual</p>
                                <p className='productPage__list-container-item'><strong>1x</strong> 3.5mm 7.5m Cable</p>
                                <p className='productPage__list-container-item'><strong>1x</strong> 7.5m Optical Cable</p>
                            </div>
                        </div>
                    </div>

                    <div className="productPage-blockContainer-image-box">
                        <div className="productPage-blockContainer-image-box-small-images">
                            <img className='productPage-image-zx7-woofer' src="../assets/shared/mobile/grid-page-five-1.webp" alt="A close up of the ZX7 woofer" />
                            <img className='productPage-image-studio-zx7' src="../assets/shared/mobile/grid-page-five-2.webp" alt="A home recording studio with ZX7 speakers" />
                        </div>
                        <img className='productPage-image-zx7-close' src="../assets/shared/mobile/grid-page-five-3.webp" alt="ZX7 close up" />
                    </div>

                    
                    <div className="recomendation__block">
                        <h3 className='recomendation__block-heading'>YOU MAY ALSO LIKE</h3>
                        <div className="recomendation__block-flex-box">
                            <div className="recomendation__block-container">
                                    <div className="recomendation__block-container-image-box">
                                        <img className='recomendation__block-container-image-box-image zx9' src="../assets/product-zx9-speaker/mobile/zx9.webp" alt="XX99 Mark I Headphones" />                                
                                    </div>
                                <h3 className='recomendation__block-product-heading'>ZX9 SPEAKER</h3>
                                <Link to={"/speakers/zx9"} className="seeProductButton">SEE PRODUCT</Link>
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
                                    <img className='recomendation__block-container-image-box-image xx59' src="../assets/product-xx99-mark-two-headphones/mobile/xx59.webp" alt="XX99 Mark I Headphones" />                                
                                </div>

                                <h3 className='recomendation__block-product-heading'>XX59</h3>
                                <Link to={"/headphones/xx59"} className="seeProductButton">SEE PRODUCT</Link>
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

export default Zx7;