import React, {useEffect, useState} from 'react';
import {NavLink, Link, Route, Routes, useLocation } from 'react-router-dom';

function Links() {
    return (  
    <div className="linksBlock" data-aos="fade-down">
        <div className="card">
        <img className='card__headphones-image' src="../assets/shared/desktop/image-category-thumbnail-headphones.webp" alt="Headphones" />
        <h3>HEADPHONES</h3>
        <Link className='card__link' to="/headphones">SHOP <svg className='arrowSVG' width="8" height="12" viewBox="0 0 8 12" fill="none" xmlns="http://www.w3.org/2000/svg"><path id="Path 2" d="M1.32178 1L6.32178 6L1.32178 11" stroke="#D87D4A" stroke-width="2"/></svg></Link>
        </div>

        <div className="card">
        <img className='card__speakers-image' src="../assets/shared/desktop/image-category-thumbnail-speakers.webp" alt="Speakers" />
        <h3>SPEAKERS</h3>
        <Link className='card__link' to="/speakers">SHOP <svg className='arrowSVG' width="8" height="12" viewBox="0 0 8 12" fill="none" xmlns="http://www.w3.org/2000/svg"><path id="Path 2" d="M1.32178 1L6.32178 6L1.32178 11" stroke="#D87D4A" stroke-width="2"/></svg></Link>
        </div>

        <div className="card">
        <img className='card__earphones-image' src="../assets/shared/desktop/image-category-thumbnail-earphones.webp" alt="Earphones" />
        <h3>EARPHONES</h3>
        <Link className='card__link' to="/earphones">SHOP <svg className='arrowSVG' width="8" height="12" viewBox="0 0 8 12" fill="none" xmlns="http://www.w3.org/2000/svg"><path id="Path 2" d="M1.32178 1L6.32178 6L1.32178 11" stroke="#D87D4A" stroke-width="2"/></svg></Link>
        </div>
    </div>
    );
}

export default Links;