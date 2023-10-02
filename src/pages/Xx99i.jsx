import { Footer } from '../components/Footer';
import Gear from "../components/Gear";
import Links from '../components/Links';
import {Link} from 'react-router-dom';
import React, {useEffect, useState} from 'react';

import { useSelector, useDispatch } from "react-redux";
import { setXx99MiQuantity, selectXx99MiQuantity} from "./reduxItems";

function Xx99i(props) {

    const newQuantity = useSelector(selectXx99MiQuantity)
    const dispatch = useDispatch();
    const[pageQuantity, setPageQuantity] = useState(1);


    const addToCart = () => {
        dispatch(setXx99MiQuantity(newQuantity + pageQuantity));
    };

    return ( 
        <>
            <main>
                <div className="productPage-blockContainer">
                    <Link className='goBackLink' to="/headphones">Go Back</Link>

                    <div className="productPage">
                            <div className="productPage__image-box">
                                <img className='productPage__image-box-xx99mi' src="../assets/product-xx99-mark-one-headphones/mobile/product-page.webp" alt="XX99 Mark 1 Headphones" data-aos="fade-up"/>
                            </div>
                        

                        <div className="productPage-top-text-container" data-aos="fade-down"> 
                            <h1 className='productPage__heading'>XX99 Mark I Headphones</h1>
                            <p className='productPage__paragraph'>As the gold standard for headphones, the classic XX99 Mark I offers detailed and accurate audio reproduction for audiophiles, mixing engineers, and music aficionados alike in studios and on the go. </p>
                            <p className='productPage__price'>$ 1,750</p>

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
                            <p className='productPage__description'>As the headphones all others are measured against, the XX99 Mark I demonstrates over five decades of audio expertise, redefining the critical listening experience. This pair of closed-back headphones are made of industrial, aerospace-grade materials to emphasize durability at a relatively light weight of 11 oz.

From the handcrafted microfiber ear cushions to the robust metal headband with inner damping element, the components work together to deliver comfort and uncompromising sound. Its closed-back design delivers up to 27 dB of passive noise cancellation, reducing resonance by reflecting sound to a dedicated absorber. For connectivity, a specially tuned cable is included with a balanced gold connector.</p>
                        </div>
                        <div className="productPage__box-block" data-aos="flip-right">
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
                            <img className='productPage-image-mic-stand' src="../assets/shared/mobile/grid-page-two-1.webp" alt="A microphone standwith microphone attached, headphones are also hanging from the stand." />
                            <img className='productPage-image-shoe' src="../assets/shared/mobile/grid-page-two-2.webp" alt="A shoe, a watch strap and some headphones." />
                        </div>
                        <img className='productPage-image-fairy-lights' src="../assets/shared/mobile/grid-page-two-3.webp" alt="AKG headphoneswith fairy lightson them." />
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

export default Xx99i;