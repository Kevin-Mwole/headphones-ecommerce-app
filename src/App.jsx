import Home from "./pages/Home"
import Headphones from './pages/Headphones';
import Speakers from './pages/Speakers';
import Earphones from './pages/Earphones';
import Xx99ii from './pages/Xx99ii';
import Xx99i from './pages/Xx99i';
import Xx59 from "./pages/Xx59";
import Zx9 from "./pages/Zx9";
import Zx7 from "./pages/Zx7";
import Yx1 from "./pages/Yx1";
import Checkout from "./pages/Checkout";
import NavBar from "./components/Navbar"
import React, {useEffect, useState} from 'react';
import {Route, Routes } from 'react-router-dom';
import { useNavigate  } from 'react-router-dom';
import AOS from "aos";
import "aos/dist/aos.css"
import { useCookies } from 'react-cookie';


import axios from 'axios';
import { useSelector, useDispatch } from "react-redux";
import {
  setXx99MiiQuantity,
  setXx99MiQuantity,
  setXx59Quantity,
  setZx9Quantity,
  setZx7Quantity,
  setYx1Quantity,
  selectXx99MiiQuantity,
  selectXx99MiQuantity,
  selectXx59Quantity,
  selectZx9Quantity,
  selectZx7Quantity,
  selectYx1Quantity,
} from "./pages/reduxItems";

function App() {
  const [cartDisplayBox, setCartDisplayBox] = useState("none");
  const [cartDisplayFadeOpacity, setCartDisplayFadeOpacity] = useState(0);
  const [cartDisplayFadeZindex, setCartDisplayFadeZindex] = useState(-1);
  
  const [cartItems, setCartItems] = useState([]);
  let updatedCartItems = []

  function refreshItemsFromBackEnd() {

    // Fetch the JSON data from the file
    return fetch('/assets/audiophileCart.items.json')
    .then((response) => response.json())
    .then((data) => {
      setCartItems(data); // Set the fetched data to the cartItems state
      updatedCartItems = data;
    })
    .catch((error) => console.error('Error fetching cart items:', error));

    //This is my old function, it gets the product info from the server MongoDB database. I'm using a local JSON instead now.
    // return fetch('https://audiophile-api-g3pm.onrender.com/api/cart')
    //   .then((response) => response.json())
    //   .then((data) => {
    //     setCartItems(data);
    //     updatedCartItems = data;
    //     console.log("Updated items from back end");

    //   })
    //   .catch((error) => console.error('Error fetching cart items:', error));
  }

  useEffect(() => {
    refreshItemsFromBackEnd().then(() => {
      updateCartFromCookies();
    });

    AOS.init(); // This initiates the animate on scroll library
  }, []);

  function updateCartFromCookies() {
    if (cookies.cartItems != null) {
    const cartData = cookies.cartItems;
    const cartDataArray = Object.keys(cartData).map(itemName => ({
      name: itemName,
      quantity: cartData[itemName],
    }));


      for (let i = 0; i < updatedCartItems.length; i++) {
        updatedCartItems[i].quantity = cartDataArray[i].quantity;
      }

      // console.log("Data from cookies:");
      // console.log(cartDataArray);
      // console.log("Updated cart items:");
      // console.log(updatedCartItems);
      setCartItems(updatedCartItems);
    }
  }

  useEffect(() => { // This populates new variables from cartItems into front end redux variables 
    if(cartItems.length > 0){ 
      dispatch(setXx99MiiQuantity(cartItems[0].quantity))
      dispatch(setXx99MiQuantity(cartItems[1].quantity))
      dispatch(setXx59Quantity(cartItems[2].quantity))
      dispatch(setZx9Quantity(cartItems[3].quantity))
      dispatch(setZx7Quantity(cartItems[4].quantity))
      dispatch(setYx1Quantity(cartItems[5].quantity))
      setTotal((cartItems[0].quantity * cartItems[0].price) + (cartItems[1].quantity * cartItems[1].price) + (cartItems[2].quantity * cartItems[2].price) + (cartItems[3].quantity * cartItems[3].price) + (cartItems[4].quantity * cartItems[4].price) + (cartItems[5].quantity * cartItems[5].price));
    }
  }, [cartItems]);

  function cartClick() { // This makes the cart appear / disappear when clicked. 
    if (cartDisplayBox === "none") {
      setCartDisplayBox("block")
      setCartDisplayFadeOpacity(0.5)
      setCartDisplayFadeZindex(1)
      
    } else{
      setCartDisplayBox("none")
      setCartDisplayFadeOpacity(0.0)
      setCartDisplayFadeZindex(-1)
    }
  }

  //This popluates new front end variables from Redux
  const dispatch = useDispatch();
  const xx99mk2Quantity = useSelector(selectXx99MiiQuantity)
  const xx99mk1Quantity = useSelector(selectXx99MiQuantity)
  const xx59Quantity = useSelector(selectXx59Quantity)
  const zx9Quantity = useSelector(selectZx9Quantity)
  const zx7Quantity = useSelector(selectZx7Quantity)
  const yx1Quantity = useSelector(selectYx1Quantity)

  const [cookies, setCookie] = useCookies(['cartItems']);


  // Function to update cookies with cart items
  function updateCookies() {
    const cartData = {};
    cartData['XX99 MARK II Headphones'] = xx99mk2Quantity;
    cartData['XX99 MARK I Headphones'] = xx99mk1Quantity;
    cartData['XX59 Headphones'] = xx59Quantity;
    cartData['ZX9 Speaker'] = zx9Quantity;
    cartData['ZX7 Speaker'] = zx7Quantity;
    cartData['YX1 Wireless Earphones'] = yx1Quantity;

    // The cookie will expire in 7 days (it's written in milliseconds)
    setCookie('cartItems', JSON.stringify(cartData), { path: '/', expires: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000) });

  }


  const navigate = useNavigate();

  const[total, setTotal] = useState(0);
  const[totalQuantity, setTotalQuantity] = useState(0);

  useEffect(() => { // This updates the cookies and re-calculates the total price every time a front end item quantity changes
    if(cartItems.length > 0){
    setTotal((xx99mk2Quantity * cartItems[0].price) + (xx99mk1Quantity * cartItems[1].price) + (xx59Quantity * cartItems[2].price) + (zx9Quantity * cartItems[3].price) + (zx7Quantity * cartItems[4].price) + (yx1Quantity * cartItems[5].price));
    updateCookies();

    function updateQuantityForCartItem(itemToUpdate, newQuantity) {
      return { ...itemToUpdate, quantity: newQuantity };
    }
    
    // Assuming you have the new quantity values for each item
    const newQuantities = [xx99mk2Quantity, xx99mk1Quantity, xx59Quantity, zx9Quantity, zx7Quantity, yx1Quantity];
    
    // Update the cartItems array with the new quantities
    const updatedCartItems = cartItems.map((item, index) =>
      updateQuantityForCartItem(item, newQuantities[index])
    );

    setCartItems(updatedCartItems);
    }

    setTotalQuantity(xx99mk2Quantity + xx99mk1Quantity + xx59Quantity + zx9Quantity + zx7Quantity + yx1Quantity)
    
  }, [xx99mk2Quantity, xx99mk1Quantity, xx59Quantity, zx9Quantity, zx7Quantity, yx1Quantity]);

async function removeAllItems() {
  dispatch(setXx99MiiQuantity(0));
  dispatch(setXx99MiQuantity(0));
  dispatch(setXx59Quantity(0));
  dispatch(setZx9Quantity(0));
  dispatch(setZx7Quantity(0));
  dispatch(setYx1Quantity(0));
}

  return (
    <>
    
        <NavBar onCartClick={cartClick} totalQuantity={totalQuantity}/>
        <div className="fadeDiv" style={{opacity: cartDisplayFadeOpacity, zIndex: cartDisplayFadeZindex}}></div>
        <div className="checkOutBox" style={{display: cartDisplayBox}}>
          <div className="checkOutBox__heading-box">
            <h2 className="checkOutBox__heading-box-heading">CART ({totalQuantity})</h2>
            <button className="checkOutBox__heading-box-remove-button" onClick={removeAllItems}>Remove all</button>
          </div>
          
          {
          (cartItems.length > 0) ? 
          (
            <div className="checkOutBox__scrollbox">
              {
                (cartItems[0].quantity > 0) ?
                (

                  <div className="checkOutBox__item-container">
                    <div className="checkOutBox__item-container-image-box">
                      <img src="../assets/product-xx99-mark-two-headphones/mobile/mk2.webp" alt="XX99 MK 2 headphones"/>
                    </div>
    
                    <div className="checkOutBox__item-container-text-box">
                      <p className="checkOutBox__item-container-title">XX99 MK II</p>
                      <p className="checkOutBox__item-container-price">${(cartItems[0].price * xx99mk2Quantity).toLocaleString()}</p>
                    </div>
    
                    <div className="checkOutBox__quantity-box">
                      <button onClick={
                                        () => {
                                              console.log("click");
                                              if (xx99mk2Quantity > 0) {
                                                dispatch(setXx99MiiQuantity(xx99mk2Quantity - 1))
                                              } else{
                                                dispatch(setXx99MiiQuantity(0))
                                              }
                                            }
                                        }
                                        >-</button>
                      <p>{xx99mk2Quantity}</p>
                      <button onClick={() => dispatch(setXx99MiiQuantity(xx99mk2Quantity + 1))}>+</button>
                    </div>
                  </div>
                ):null
            }

            {
                (cartItems[1].quantity > 0) ?
                (

                  <div className="checkOutBox__item-container">
                    <div className="checkOutBox__item-container-image-box">
                      <img src="../assets/product-xx99-mark-two-headphones/mobile/mk1.webp" alt="XX99 MK 1 headphones"/>
                    </div>
    
                    <div className="checkOutBox__item-container-text-box">
                      <p className="checkOutBox__item-container-title">XX99 MK I</p>
                      <p className="checkOutBox__item-container-price">${(cartItems[1].price * xx99mk1Quantity).toLocaleString()}</p>
                    </div>
    
                    <div className="checkOutBox__quantity-box">
                      <button onClick={
                                        () => {
                                              console.log("click");
                                              if (xx99mk1Quantity > 0) {
                                                dispatch(setXx99MiQuantity(xx99mk1Quantity - 1))
                                              } else{
                                                dispatch(setXx99MiQuantity(0))
                                              }
                                            }
                                        }
                                        >-</button>
                      <p>{xx99mk1Quantity}</p>
                      <button onClick={() => dispatch(setXx99MiQuantity(xx99mk1Quantity + 1))}>+</button>
                    </div>
                  </div>
                ):null
            }

            {
                (cartItems[2].quantity > 0) ?
                (

                  <div className="checkOutBox__item-container">
                    <div className="checkOutBox__item-container-image-box">
                      <img src="../assets/product-xx99-mark-two-headphones/mobile/xx59.webp" alt="XX59 headphones"/>
                    </div>
    
                    <div className="checkOutBox__item-container-text-box">
                      <p className="checkOutBox__item-container-title">XX59</p>
                      <p className="checkOutBox__item-container-price">${(cartItems[2].price * xx59Quantity).toLocaleString()}</p>
                    </div>
    
                    <div className="checkOutBox__quantity-box">
                      <button onClick={
                                        () => {
                                              console.log("click");
                                              if (xx59Quantity > 0) {
                                                dispatch(setXx59Quantity(xx59Quantity - 1))
                                              } else{
                                                dispatch(setXx59Quantity(0))
                                              }
                                            }
                                        }
                                        >-</button>
                      <p>{xx59Quantity}</p>
                      <button onClick={() => dispatch(setXx59Quantity(xx59Quantity + 1))}>+</button>
                    </div>
                  </div>
                ):null
            }

            {
                (cartItems[3].quantity > 0) ?
                (

                  <div className="checkOutBox__item-container">
                    <div className="checkOutBox__item-container-image-box">
                      <img src="../assets/product-zx9-speaker/mobile/zx9.webp" alt="ZX9 Speakers"/>
                    </div>
    
                    <div className="checkOutBox__item-container-text-box">
                      <p className="checkOutBox__item-container-title">ZX9</p>
                      <p className="checkOutBox__item-container-price">${(cartItems[3].price * zx9Quantity).toLocaleString()}</p>
                    </div>
    
                    <div className="checkOutBox__quantity-box">
                      <button onClick={
                                        () => {
                                              console.log("click");
                                              if (zx9Quantity > 0) {
                                                dispatch(setZx9Quantity(zx9Quantity - 1))
                                              } else{
                                                dispatch(setZx9Quantity(0))
                                              }
                                            }
                                        }
                                        >-</button>
                      <p>{zx9Quantity}</p>
                      <button onClick={() => dispatch(setZx9Quantity(zx9Quantity + 1))}>+</button>
                    </div>
                  </div>
                ):null
            }
            
            {
                (cartItems[4].quantity > 0) ?
                (

                  <div className="checkOutBox__item-container">
                    <div className="checkOutBox__item-container-image-box">
                      <img src="../assets/product-zx7-speaker/mobile/zx7.webp" alt="ZX7 Speakers"/>
                    </div>
    
                    <div className="checkOutBox__item-container-text-box">
                      <p className="checkOutBox__item-container-title">ZX7</p>
                      <p className="checkOutBox__item-container-price">${(cartItems[4].price * zx7Quantity).toLocaleString()}</p>
                    </div>
    
                    <div className="checkOutBox__quantity-box">
                      <button onClick={
                                        () => {
                                              console.log("click");
                                              if (zx7Quantity > 0) {
                                                dispatch(setZx7Quantity(zx7Quantity - 1))
                                              } else{
                                                dispatch(setZx7Quantity(0))
                                              }
                                            }
                                        }
                                        >-</button>
                      <p>{zx7Quantity}</p>
                      <button onClick={() => dispatch(setZx7Quantity(zx7Quantity + 1))}>+</button>
                    </div>
                  </div>
                ):null
            }
            
            {
                (cartItems[5].quantity > 0) ?
                (

                  <div className="checkOutBox__item-container">
                    <div className="checkOutBox__item-container-image-box">
                      <img src="../assets/product-yx1-earphones/mobile/yx1.webp" alt="YX1 Earphones"/>
                    </div>
    
                    <div className="checkOutBox__item-container-text-box">
                      <p className="checkOutBox__item-container-title">YX1</p>
                      <p className="checkOutBox__item-container-price">${(cartItems[5].price * yx1Quantity).toLocaleString()}</p>
                    </div>
    
                    <div className="checkOutBox__quantity-box">
                      <button onClick={
                                        () => {
                                              console.log("click");
                                              if (yx1Quantity > 0) {
                                                dispatch(setYx1Quantity(yx1Quantity - 1))
                                              } else{
                                                dispatch(setYx1Quantity(0))
                                              }
                                            }
                                        }
                                        >-</button>
                      <p>{yx1Quantity}</p>
                      <button onClick={() => dispatch(setYx1Quantity(yx1Quantity + 1))}>+</button>
                    </div>
                  </div>
                ):null
            }
            </div>

            ) : (
            <div className="loadingDiv">
              <p>Loading...</p>
              <div class="lds-facebook"><div></div><div></div><div></div></div>
            </div>
            )

          }

          <div className="checkOutBox__total-text-box">
            <p className="checkOutBox__total-text-box-total">TOTAL</p>
            <p className="checkOutBox__total-text-box-price">${total.toLocaleString()}</p>
          </div>

          <button className="checkOutBox__checkout-button" onClick={
              () => {
                if(totalQuantity > 0){
                  navigate('/checkout');
                  cartClick();
                }
              }
            }>CHECKOUT</button>
        </div>

        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/headphones' element={<Headphones/>}/>
          <Route path='/headphones/xx99mii' element={<Xx99ii  />}/>
          <Route path='/headphones/xx99mi' element={<Xx99i/>}/>
          <Route path='/headphones/xx59' element={<Xx59/>}/>

          <Route path='/speakers' element={<Speakers/>}/>    
          <Route path='/speakers/zx9' element={<Zx9/>}/>      
          <Route path='/speakers/zx7' element={<Zx7/>}/>      

          <Route path='/earphones' element={<Earphones/>}/>          
          <Route path='/earphones/yx1' element={<Yx1/>}/>          

          <Route path='/checkout' element={<Checkout key={0} cartItemsAll = {cartItems} total={total} removeAllItems={removeAllItems    }/>}/>  
        </Routes>



    </>
  )
}

export default App