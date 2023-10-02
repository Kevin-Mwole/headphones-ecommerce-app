import { Footer } from '../components/Footer';
import Gear from "../components/Gear";
import Links from '../components/Links';
import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';

import { useSelector, useDispatch } from "react-redux";
import { setZx9Quantity, selectZx9Quantity} from "./reduxItems";

function Zx9() {

    const newQuantity = useSelector(selectZx9Quantity)
    const dispatch = useDispatch();
    const[pageQuantity, setPageQuantity] = useState(1);

    const addToCart = () => {
        dispatch(setZx9Quantity(newQuantity + pageQuantity));
    };

    return ( 
        <>
            <main>
                <div className="productPage-blockContainer">
                    <Link className='goBackLink' to="/speakers">Go Back</Link>

                    <div className="productPage">
                            <div className="productPage__image-box">
                                <img className='productPage__image-box-zx9' src="../assets/product-zx9-speaker/mobile/zx9.webp" alt="ZX9 Speaker" data-aos="fade-up"/>
                            </div>
                        

                        <div className="productPage-top-text-container" data-aos="fade-down"> 
                            <h3 className='productPage__new-heading'>NEW PRODUCT</h3>
                            <h1 className='productPage__heading'>ZX9 SPEAKER</h1>
                            <p className='productPage__paragraph'>Upgrade your sound system with the all new ZX9 active speaker. It’s a bookshelf speaker system that offers truly wireless connectivity -- creating new possibilities for more pleasing and practical audio setups.</p>
                            <p className='productPage__price'>$ 4,500</p>

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
                            <p className='productPage__description'>Connect via Bluetooth or nearly any wired source. This speaker features optical, digital coaxial, USB Type-B, stereo RCA, and stereo XLR inputs, allowing you to have up to five wired source devices connected for easy switching. Improved bluetooth technology offers near lossless audio quality at up to 328ft (100m).

Discover clear, more natural sounding highs than the competition with ZX9’s signature planar diaphragm tweeter. Equally important is its powerful room-shaking bass courtesy of a 6.5” aluminum alloy bass unit. You’ll be able to enjoy equal sound quality whether in a large room or small den. Furthermore, you will experience new sensations from old songs since it can respond to even the subtle waveforms.</p>
                        </div>
                        <div className="productPage__box-block" data-aos="flip-right">
                            <h3 className='productPage__feature-heading'>in the box</h3>
                            <div className="productPage__list-container">
                                <p className='productPage__list-container-item'><strong>2x</strong> Speaker Unit</p> 
                                <p className='productPage__list-container-item'><strong>2x</strong> Speaker Cloth Panel</p>
                                <p className='productPage__list-container-item'><strong>1x</strong> User Manual</p>
                                <p className='productPage__list-container-item'><strong>1x</strong> 3.5mm 10m Cable</p>
                                <p className='productPage__list-container-item'><strong>1x</strong> 10m Optical Cable</p>
                            </div>
                        </div>
                    </div>

                    <div className="productPage-blockContainer-image-box">
                        <div className="productPage-blockContainer-image-box-small-images">
                            <img className='productPage-image-zx9-woofer' src="../assets/shared/mobile/grid-page-four-1.webp" alt="A close up of the ZX9 woofer" />
                            <img className='productPage-image-shelf-plants' src="../assets/shared/mobile/grid-page-four-2.webp" alt="A ZX9 being lent on by vinal records next to a shelf with plants." />
                        </div>
                        <img className='productPage-image-zx9-dual' src="../assets/shared/mobile/grid-page-four-3.webp" alt="Two ZX9s close up" />
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

export default Zx9;