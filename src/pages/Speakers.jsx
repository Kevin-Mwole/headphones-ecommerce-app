import { Footer } from '../components/Footer';
import Gear from "../components/Gear";
import NavBar from "../components/Navbar"
import Links from '../components/Links';
import React, {useEffect, useState} from 'react';
import {NavLink, Link, Route, Routes, useLocation } from 'react-router-dom';

function Speakers() {
    return ( 
        <>
            <header>
            <div className="line"></div>
                <div className="headphones__hero">
                    <h1>SPEAKERS</h1>
                </div>
            </header>
            <main>
                <div className="blockContainer">

                    <div className="showBlock">
                        <div className="showBlock__image-container" data-aos="fade-right">
                            <img className='showBlock__image-container-zx9' src="./assets/product-zx9-speaker/mobile/zx9.webp" alt="ZX9 Speaker" />
                        </div>

                        <div className="showBlock__text-container" data-aos="fade-up">
                            <p className='showBlock__text-container-title'>NEW PRODUCT</p>
                            <h2 className='showBlock__text-container-heading'>ZX9 speaker</h2>
                            <p className='showBlock__text-container-paragraph'>Upgrade your sound system with the all new ZX9 active speaker. It’s a bookshelf speaker system that offers truly wireless connectivity -- creating new possibilities for more pleasing and practical audio setups.</p>
                            <Link className='showBlock__text-container-button' to="./zx9">SEE PRODUCT</Link>
                        </div>
                    </div>

                    <div className="showBlock">
                        <div className="showBlock__image-container odd" data-aos="fade-up">
                            <img className='showBlock__image-container-zx7' src="./assets/product-zx7-speaker/mobile/zx7.webp" alt="ZX7 Speaker"/>
                        </div>

                        <div className="showBlock__text-container" data-aos="fade-right">
                            <h2 className='showBlock__text-container-heading'>ZX7 SPEAKER</h2>
                            <p className='showBlock__text-container-paragraph'>Stream high quality sound wirelessly with minimal loss. The ZX7 bookshelf speaker uses high-end audiophile components that represents the top of the line powered speakers for home or studio use.</p>
                            <Link className='showBlock__text-container-button' to="./zx7">SEE PRODUCT</Link>
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

export default Speakers;