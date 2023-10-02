import { Footer } from '../components/Footer';
import Gear from "../components/Gear";
import NavBar from "../components/Navbar"
import Links from '../components/Links';
import React, {useEffect, useState} from 'react';
import {NavLink, Link, Route, Routes, useLocation } from 'react-router-dom';

function Headphones() {
    return ( 
        <>
            <header>
            <div className="line"></div>
                <div className="headphones__hero">
                    <h1>HEADPHONES</h1>
                </div>
            </header>
            <main>
                <div className="blockContainer">

                    <div className="showBlock">
                        <div className="showBlock__image-container" data-aos="fade-right">
                            <img className='showBlock__image-container-mk2' src="../assets/product-xx99-mark-two-headphones/mobile/mk2.webp" alt="XX99 Mark II Headphones" />
                        </div>

                        <div className="showBlock__text-container" data-aos="fade-up">
                            <p className='showBlock__text-container-title'>NEW PRODUCT</p>
                            <h2 className='showBlock__text-container-heading'>XX99 Mark II Headphones</h2>
                            <p className='showBlock__text-container-paragraph'>The new XX99 Mark II headphones is the pinnacle of pristine audio. It redefines your premium headphone experience by reproducing the balanced depth and precision of studio-quality sound.</p>
                            <Link className='showBlock__text-container-button' to="./xx99mii">SEE PRODUCT</Link>
                        </div>
                    </div>

                    <div className="showBlock">
                        <div className="showBlock__image-container odd" data-aos="fade-up">
                            <img className='showBlock__image-container-mk1' src="./assets/product-xx99-mark-two-headphones/mobile/mk1.webp" alt="XX99 Mark I Headphones" />
                        </div>

                        <div className="showBlock__text-container" data-aos="fade-right">
                            <h2 className='showBlock__text-container-heading'>XX99 Mark I Headphones</h2>
                            <p className='showBlock__text-container-paragraph'>As the gold standard for headphones, the classic XX99 Mark I offers detailed and accurate audio reproduction for audiophiles, mixing engineers, and music aficionados alike in studios and on the go.</p>
                            <Link className='showBlock__text-container-button' to="./xx99mi">SEE PRODUCT</Link>
                        </div>
                    </div>

                    <div className="showBlock">
                        <div className="showBlock__image-container" data-aos="fade-right">
                            <img className='showBlock__image-container-xx59' src="./assets/product-xx99-mark-two-headphones/mobile/xx59.webp" alt="XX59 Headphones" />
                        </div>

                        <div className="showBlock__text-container" data-aos="fade-up">
                            <h2 className='showBlock__text-container-heading'>XX59 Headphones</h2>
                            <p className='showBlock__text-container-paragraph'>Enjoy your audio almost anywhere and customize it to your specific tastes with the XX59 headphones. The stylish yet durable versatile wireless headset is a brilliant companion at home or on the move.</p>
                            <Link className='showBlock__text-container-button' to="./xx59">SEE PRODUCT</Link>
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

export default Headphones;