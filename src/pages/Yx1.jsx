import { Footer } from '../components/Footer';
import Gear from "../components/Gear";
import Links from '../components/Links';
import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';

import { useSelector, useDispatch } from "react-redux";
import { setYx1Quantity, selectYx1Quantity} from "./reduxItems";

function Yx1() {

    const newQuantity = useSelector(selectYx1Quantity)
    const dispatch = useDispatch();
    const[pageQuantity, setPageQuantity] = useState(1);

    const addToCart = () => {
        dispatch(setYx1Quantity(newQuantity + pageQuantity));
    };

    return ( 
        <>
            <main>
                <div className="productPage-blockContainer">
                    <Link className='goBackLink' to="/earphones">Go Back</Link>

                    <div className="productPage">
                            <div className="productPage__image-box">
                                <img className='productPage__image-box-yx1' src="../assets/product-yx1-earphones/mobile/yx1.webp" alt="YX1 Earphones" data-aos="fade-up"/>
                            </div>
                        

                        <div className="productPage-top-text-container" data-aos="fade-down"> 
                            <h3 className='productPage__new-heading'>NEW PRODUCT</h3>
                            <h1 className='productPage__heading'>YX1 WIRELESS EARPHONES</h1>
                            <p className='productPage__paragraph'>Tailor your listening experience with bespoke dynamic drivers from the new YX1 Wireless Earphones. Enjoy incredible high-fidelity sound even in noisy environments with its active noise cancellation feature.</p>
                            <p className='productPage__price'>$ 599</p>

                            <div className="productPage__buttons">
                                <div className="productPage__quantity-buttons">
                                    <button className='productPage__quantity-buttons-one' onClick={
                                        () => {
                                            if (newQuantity > 0) {
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
                            <p className='productPage__description'>Experience unrivalled stereo sound thanks to innovative acoustic technology. With improved ergonomics designed for full day wearing, these revolutionary earphones have been finely crafted to provide you with the perfect fit, delivering complete comfort all day long while enjoying exceptional noise isolation and truly immersive sound.

The YX1 Wireless Earphones features customizable controls for volume, music, calls, and voice assistants built into both earbuds. The new 7-hour battery life can be extended up to 28 hours with the charging case, giving you uninterrupted play time. Exquisite craftsmanship with a splash resistant design now available in an all new white and grey color scheme as well as the popular classic black.</p>
                        </div>
                        <div className="productPage__box-block" data-aos="flip-right">
                            <h3 className='productPage__feature-heading'>in the box</h3>
                            <div className="productPage__list-container">
                                <p className='productPage__list-container-item'><strong>2x</strong> Earphone Unit</p> 
                                <p className='productPage__list-container-item'><strong>6x</strong> Multi-size Earplugs</p>
                                <p className='productPage__list-container-item'><strong>1x</strong> User Manual</p>
                                <p className='productPage__list-container-item'><strong>1x</strong> USB-C Charging Cable</p>
                                <p className='productPage__list-container-item'><strong>1x</strong> Travel Pouch</p>
                            </div>
                        </div>
                    </div>

                    <div className="productPage-blockContainer-image-box">
                        <div className="productPage-blockContainer-image-box-small-images">
                            <img className='productPage-image-yx1-buds' src="../assets/shared/mobile/grid-page-six-1.webp" alt="A close up the yx1 buds." />
                            <img className='productPage-image-yx1-charger' src="../assets/shared/mobile/grid-page-six-2.webp" alt="YX1s charging" />
                        </div>
                        <img className='productPage-image-yx1-case' src="../assets/shared/mobile/grid-page-six-3.webp" alt="YX1s next to thier case." />
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

export default Yx1;