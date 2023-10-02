import { Footer } from '../components/Footer';
import axios from 'axios'; // Import axios for making HTTP requests
import React, {useEffect, useState, useRef} from 'react';
import {Link} from 'react-router-dom';

function Checkout(props) {

    const [eMoney, setEMoney] = useState(true);
    const [eMoneyButton, setEMoneyButton] = useState(null);
    const [cashButton, setCashButton] = useState(null);

    const [thankDisplayBox, setThankDisplayBox] = useState("none");
    const [thankDisplayFadeOpacity, setThankDisplayFadeOpacity] = useState(0);
    const [thankDisplayFadeZindex, setThankDisplayFadeZindex] = useState(-1);

    // This just adds all the items quantities into one variable
    const[quantityOfAllItems, setQuantityOfAllItems] = useState(0);
    useEffect(() => {
        let totalQuantity = 0;
        for (let i = 0; i < props.cartItemsAll.length; i++) {
          totalQuantity += props.cartItemsAll[i].quantity;   
        }
        setQuantityOfAllItems(totalQuantity);
      }, [props.cartItemsAll]);

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        address: '',
        postCode: '',
        city: '',
        country: '',
        eMoneyNumber: '',
        eMoneyPin: '',
      });
    
      const handleInputChange = (e) => {
        // Update formData state when inputs change
        const { name, value } = e.target;
        setFormData((prevData) => ({ ...prevData, [name]: value }));
        console.log(name + " " + value);
      };

      const [firstItem, setFirstItem] = useState(0);
      const formRef = useRef(null);

      async function continueAndPayButtonClick(e) { //This makes the thank you box show up and shows the normal HTML error messages if inputs arn't filled in.
        window.scrollTo({top: 0, behavior: 'smooth',});

        // Trigger the form's native validation
        const isValid = formRef.current.checkValidity();
        formRef.current.reportValidity();

        if (isValid) {
            if (formData.name && formData.email && formData.phone && formData.address && formData.postCode && formData.city && formData.country) {

                try {
                    // Create the order summary string
                    const orderSummary = props.cartItemsAll
                    .filter(item => item.quantity > 0)
                    .map(item => `${item.shortName} x${item.quantity}`)
                    .join(', ');

                    // Update the formData to include the order summary
                    const updatedFormData = { ...formData, Order: orderSummary };

                    const response = await axios.post('https://audiophile-api-g3pm.onrender.com/api/order', updatedFormData);
                    console.log(response.data); // Success message from server
                    
                    // Show the thank you box or perform other actions as needed
                } catch (error) {
                    console.error(error);
                    // Handle error, show an error message, etc.
                }

                if (eMoney) {
                    if (formData.eMoneyNumber && formData.eMoneyPin) {
                        if (thankDisplayBox === "none") {
                            setThankDisplayBox("block")
                            setThankDisplayFadeOpacity(0.5)
                            setThankDisplayFadeZindex(1)
                          } else{
                            setThankDisplayBox("none")
                            setThankDisplayFadeOpacity(0.0)
                            setThankDisplayFadeZindex(-1)
                          }
                
                          let theFirstItem = 0;
                          for (let i = 0; i < props.cartItemsAll.length; i++) {
                            if (props.cartItemsAll[i].quantity > 0) {
                                theFirstItem = i;
                                i = props.cartItemsAll.length;
                            }
                          }
                          setFirstItem(theFirstItem);
                        
                      console.log('Payment processing...');
                      console.log(formData);
                    } else {
                      console.log('Please fill in e-Money details before continuing.');
                    }
                  } else {
                    if (thankDisplayBox === "none") {
                        setThankDisplayBox("block")
                        setThankDisplayFadeOpacity(0.5)
                        setThankDisplayFadeZindex(1)
                      } else{
                        setThankDisplayBox("none")
                        setThankDisplayFadeOpacity(0.0)
                        setThankDisplayFadeZindex(-1)
                      }
            
                      let theFirstItem = 0;
                      for (let i = 0; i < props.cartItemsAll.length; i++) {
                        if (props.cartItemsAll[i].quantity > 0) {
                            theFirstItem = i;
                            i = props.cartItemsAll.length;
                        }
                      }
                      setFirstItem(theFirstItem);
                    console.log('Payment processing...');
                    console.log(formData);
                  }
       
            }
          } else {
            console.log('Please fill in all required fields before continuing.');
          }

      }

    return (  
        <div className='checkOutBackground'>
        <div className="checkOutMask" style={{opacity: thankDisplayFadeOpacity, zIndex: thankDisplayFadeZindex}}></div>
        <div className="productPage-blockContainer">
            <Link className='goBackLink' to="/">Go Back</Link>

            <form ref={formRef} className="checkoutFlexContainer">
                <div className="checkout">
                    <h1 className='checkout-heading'>CHECKOUT</h1>
                    <h3 className='checkout-info-heading'>Billing Details</h3>

                    <div className="inputs-container">
                        <div className="inputGroupShort">
                            <label htmlFor="#name">Name</label>
                            <input className='textInputShort' type="text" name='name'required onChange={handleInputChange}/>
                        </div>

                        <div className="inputGroupShort">
                            <label htmlFor="#name">Email Address</label>
                            <input className='textInputShort' type="email" name='email'required onChange={handleInputChange}/>
                        </div>
                    </div>

                    <div className="inputGroupShort">
                            <label htmlFor="#name">Phone Number</label>
                            <input className='textInputShort' type="text" name='phone'required onChange={handleInputChange}/>
                    </div>

                    <h3 className='checkout-info-heading shipping'>shipping info</h3>

                    <div className="inputGroupLong">
                            <label htmlFor="#name">Address</label>
                            <input className='textInputShort' type="text" name='address'required onChange={handleInputChange}/>
                    </div>

                    <div className="inputs-container">
                        <div className="inputGroupShort">
                            <label htmlFor="#postCode">Post Code</label>
                            <input className='textInputShort' type="text" name='postCode'required onChange={handleInputChange}/>
                        </div>
                        

                        <div className="inputGroupShort">
                            <label htmlFor="#name">City</label>
                            <input className='textInputShort' type="text" name='city'required onChange={handleInputChange}/>
                        </div>
                    </div>

                    <div className="inputGroupShort">
                            <label htmlFor="#name">Country</label>
                            <input className='textInputShort' type="text" name='country'required onChange={handleInputChange}/>
                    </div>

                    <h3 className='checkout-info-heading shipping'>payment details</h3>

                    <div className="paymentInfoDisplayContainer">
                        <div className="paymentInfoDisplayBox">
                            <label className='paymentMethodLable' htmlFor="#name">Payment Method</label>
                        </div>

                        <div className="paymentInfoDisplayBox">
                            <button className='bigRadioButton' onClick={(event) => {setEMoney(true); event.preventDefault(); setEMoneyButton(" visable"); setCashButton(null);}}>
                                <svg className='radioSVG' xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                    <circle cx="10" cy="10" r="9.5" stroke="#CFCFCF"/>
                                    <circle className={'orangeCircle ' + eMoneyButton} cx="10" cy="10" r="5" fill="#D87D4A"/>
                                </svg> 
                                e-Money
                            </button>

                            <button className='bigRadioButton' onClick={(event) => {setEMoney(false); event.preventDefault(); setCashButton(" visable"); setEMoneyButton(null);}}>
                                <svg className='radioSVG' xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                        <circle cx="10" cy="10" r="9.5" stroke="#CFCFCF"/>
                                        <circle className={'orangeCircle ' + cashButton} cx="10" cy="10" r="5" fill="#D87D4A"/>
                                </svg> 
                                Cash on Delivery
                            </button>

                        </div>
                    </div>

                    {
                        eMoney === false ?
                        (
                        <div className="paymentFooterBox">
                            <svg className='shape' xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48" fill="none"><path fill-rule="evenodd" clip-rule="evenodd" d="M42.2812 8.4375H46.5938C47.3704 8.4375 48 9.06713 48 9.84375C48 10.6204 47.3704 11.25 46.5938 11.25H45.0938V23.9062C45.0938 24.6829 44.4641 25.3125 43.6875 25.3125H33.8438V40.9688C33.8438 41.7454 33.2141 42.375 32.4375 42.375H25.0773C24.4239 45.5805 21.5831 48 18.1875 48H1.40625C0.629625 48 0 47.3704 0 46.5938C0 45.8171 0.629625 45.1875 1.40625 45.1875H18.1875C20.021 45.1875 21.585 44.012 22.1653 42.375H8.4375C7.66087 42.375 7.03125 41.7454 7.03125 40.9688C7.03125 40.1921 7.66087 39.5625 8.4375 39.5625H12.5625C13.3379 39.5625 13.9688 38.9317 13.9688 38.1562C13.9688 37.3808 13.3379 36.75 12.5625 36.75H9.43444C6.87619 36.75 4.37297 37.6373 2.38575 39.2485C1.78247 39.7376 0.896906 39.6454 0.407719 39.0419C-0.0814688 38.4385 0.0110625 37.553 0.614344 37.0639C2.84203 35.2578 5.58806 34.1792 8.4375 33.9741V18.375C8.4375 17.5984 9.06713 16.9688 9.84375 16.9688H18.375V7.03125C18.375 6.25462 19.0046 5.625 19.7812 5.625H28.1223C31.9334 2.02078 36.9875 0 42.2641 0H46.5938C47.3704 0 48 0.629625 48 1.40625C48 2.18287 47.3704 2.8125 46.5938 2.8125H42.2642C38.805 2.8125 35.4975 3.79453 32.658 5.625H38.0625C38.8326 5.625 39.4688 6.25228 39.4688 7.03125C39.4688 7.52423 39.3372 7.69561 38.4891 8.80021C38.0648 9.3528 37.4613 10.1389 36.6052 11.3157C36.2039 11.8513 36.3433 12.6075 36.8974 12.9688C37.4088 13.3025 38.0923 13.1781 38.4534 12.6856L41.1473 9.01219C41.4121 8.65088 41.8333 8.4375 42.2812 8.4375ZM32.4375 16.9688C32.9273 16.9688 33.3582 17.2195 33.6099 17.5993C35.4415 15.9118 34.2652 12.7969 31.7344 12.7969C29.5943 12.7969 28.2687 15.1348 29.3533 16.9688H32.4375ZM21.1875 8.4375H35.2472C35.0152 8.75898 34.8251 9.00687 34.6644 9.21646C34.3106 9.67792 34.0992 9.95371 33.896 10.4204C29.6796 8.64131 25.1696 12.4771 26.337 16.9688H21.1875V8.4375ZM22.5938 25.4062V19.7812H19.7812V25.4062H22.5938ZM31.0312 39.5625H16.5403C17.5098 36.8283 15.4711 33.9375 12.5625 33.9375H11.25V19.7812H16.9688V26.8125C16.9688 27.5891 17.5984 28.2188 18.375 28.2188H24C24.7766 28.2188 25.4062 27.5891 25.4062 26.8125V19.7812H31.0312V39.5625ZM33.8438 20.7288V22.5H42.2812V12.2217L40.7213 14.3488C39.9301 15.4278 38.6519 16.0371 37.2972 15.9602C37.1467 18.1043 35.7894 19.9393 33.8438 20.7288Z" fill="#D87D4A"/></svg>
                            <p className='paymentFooterBox-description'>The ‘Cash on Delivery’ option enables you to pay in cash when our delivery courier arrives at your residence. Just make sure your address is correct so that your order will not be cancelled.</p>
                        </div>
                        )
                        : 
                        (
                        
                        <div className="inputs-container">
                            <div className="inputGroupShort">
                                <label htmlFor="#eMoneyNumber">e-Money Number</label>
                                <input className='textInputShort' type="text" name='eMoneyNumber' required onChange={handleInputChange}/>
                            </div>
                            

                            <div className="inputGroupShort">
                                <label htmlFor="#eMoneyPin">e-Money Pin</label>
                                <input className='textInputShort' type="text" name='eMoneyPin'required onChange={handleInputChange}/>
                            </div>
                        </div>
                        )
                    }

                </div>


                <div className="summary">
                    <h2 className='summary__heading'>summary</h2>
                        {
                            
                            (props.cartItemsAll.length > 0) ?
                            (
                            <div>

                                {
                                    (props.cartItemsAll[0].quantity > 0) ?
                                    (
                                        <div className="checkOutBox__item-container">
                                            <div className="checkOutBox__item-container-image-box">
                                                <img src="../assets/product-xx99-mark-two-headphones/mobile/mk2.webp" alt="XX99 MK 2 headphones"/>
                                            </div>
                
                                            <div className="checkOutBox__item-container-text-box">
                                                <p className="checkOutBox__item-container-title">XX99 MK II</p>
                                                <p className="checkOutBox__item-container-price">${props.cartItemsAll[0].price.toLocaleString()}</p>
                                            </div>
                
                                            <p className='summary__item-count'>{props.cartItemsAll[0].quantity}px</p>
                                        </div>
                                    ): null
                                }

                                {
                                    (props.cartItemsAll[1].quantity > 0) ?
                                    (
                                        <div className="checkOutBox__item-container">
                                            <div className="checkOutBox__item-container-image-box">
                                                <img src="../assets/product-xx99-mark-two-headphones/mobile/mk1.webp" alt="XX99 MK 1 headphones"/>
                                            </div>
                
                                            <div className="checkOutBox__item-container-text-box">
                                                <p className="checkOutBox__item-container-title">XX99 MK I</p>
                                                <p className="checkOutBox__item-container-price">${props.cartItemsAll[1].price.toLocaleString()}</p>
                                            </div>
                
                                            <p className='summary__item-count'>{props.cartItemsAll[1].quantity}px</p>
                                        </div>
                                    ): null
                                }

                                {
                                    (props.cartItemsAll[2].quantity > 0) ?
                                    (
                                        <div className="checkOutBox__item-container">
                                            <div className="checkOutBox__item-container-image-box">
                                                <img src="../assets/product-xx99-mark-two-headphones/mobile/xx59.webp" alt="XX59 headphones"/>
                                            </div>
                
                                            <div className="checkOutBox__item-container-text-box">
                                                <p className="checkOutBox__item-container-title">XX59</p>
                                                <p className="checkOutBox__item-container-price">${props.cartItemsAll[2].price.toLocaleString()}</p>
                                            </div>
                
                                            <p className='summary__item-count'>{props.cartItemsAll[2].quantity}px</p>
                                        </div>
                                    ): null
                                }

                                {
                                    (props.cartItemsAll[3].quantity > 0) ?
                                    (
                                        <div className="checkOutBox__item-container">
                                            <div className="checkOutBox__item-container-image-box">
                                                <img src="../assets/product-zx9-speaker/mobile/zx9.webp" alt="ZX9 Speakers"/>
                                            </div>
                
                                            <div className="checkOutBox__item-container-text-box">
                                                <p className="checkOutBox__item-container-title">ZX9</p>
                                                <p className="checkOutBox__item-container-price">${props.cartItemsAll[3].price.toLocaleString()}</p>
                                            </div>
                
                                            <p className='summary__item-count'>{props.cartItemsAll[3].quantity}px</p>
                                        </div>
                                    ): null
                                }

                                {
                                    (props.cartItemsAll[4].quantity > 0) ?
                                    (
                                        <div className="checkOutBox__item-container">
                                            <div className="checkOutBox__item-container-image-box">
                                                <img src="../assets/product-zx7-speaker/mobile/zx7.webp" alt="ZX7 Speakers"/>
                                            </div>
                
                                            <div className="checkOutBox__item-container-text-box">
                                                <p className="checkOutBox__item-container-title">ZX7</p>
                                                <p className="checkOutBox__item-container-price">${props.cartItemsAll[4].price.toLocaleString()}</p>
                                            </div>
                
                                            <p className='summary__item-count'>{props.cartItemsAll[4].quantity}px</p>
                                        </div>
                                    ): null
                                }

                                {
                                    (props.cartItemsAll[5].quantity > 0) ?
                                    (
                                        <div className="checkOutBox__item-container">
                                            <div className="checkOutBox__item-container-image-box">
                                                <img src="../assets/product-yx1-earphones/mobile/yx1.webp" alt="YX1 Earphones"/>
                                            </div>
                
                                            <div className="checkOutBox__item-container-text-box">
                                                <p className="checkOutBox__item-container-title">YX1</p>
                                                <p className="checkOutBox__item-container-price">${props.cartItemsAll[5].price.toLocaleString()}</p>
                                            </div>
                
                                            <p className='summary__item-count'>{props.cartItemsAll[5].quantity}px</p>
                                        </div>
                                    ): null
                                }


                            </div>

                            ) : (
                                <div className=""><p>Loading...</p></div>
                                
                              )
                              

                        }

                        <div className="summary__money-container first">
                            <p className='summary__money-container-word'>TOTAL</p>
                            <p className='summary__money-container-amount'>$ {props.total.toLocaleString()}</p>
                        </div>

                        <div className="summary__money-container ">
                            <p className='summary__money-container-word'>SHIPPING</p>
                            <p className='summary__money-container-amount'>$ 50</p>
                        </div>

                        <div className="summary__money-container ">
                            <p className='summary__money-container-word'>VAT (INCLUDED)</p>
                            <p className='summary__money-container-amount'>$ {(props.total * 0.2).toLocaleString()}</p>
                        </div>

                        <div className="summary__money-container">
                            <p className='summary__money-container-word'>GRAND TOTAL</p>
                            <p className='summary__money-container-amount orange'>$ {(props.total + 50).toLocaleString()}</p>
                        </div>

                        <button type='submit' name='pay' className='summary__pay-button' onClick={(e)=> {e.preventDefault(); continueAndPayButtonClick();}}>CONTINUE & PAY</button>
                </div>
            </form>
        </div>

        <div className="thankYouBlock" style={{display: thankDisplayBox}}>
            <svg className='cricleTick' xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 64 64" fill="none">
                <circle cx="32" cy="32" r="32" fill="#D87D4A"/>
                <path d="M20.7539 33.3328L27.5054 40.0843L43.3085 24.2812" stroke="white" stroke-width="4"/>
            </svg>
            
            <h1 className='thankYouHeading'>THANK YOU <br></br> FOR YOUR ORDER</h1>
            <p className='thankYouBlock-text'>You will receive an email confirmation shortly.</p>
            
            <div className="thankYouBlock-info-block">
            {
            (props.cartItemsAll.length > 0) ?
                <div className="thankYouBlock-info-block-product-block">
                    <div className="thankYouBlock-info-block-product-block-item-box">
                        <div className="thankYouBlock-product-image-mask">
                            <img className='thankYouBlock-product-image' src={props.cartItemsAll[firstItem].mobileImagePath} alt="" />
                        </div>
                        <div className="checkOutBox__item-container-text-box">
                            <p className="checkOutBox__item-container-title">{props.cartItemsAll[firstItem].shortName}</p>
                            <p className="checkOutBox__item-container-price">$ {props.cartItemsAll[firstItem].price}</p>
                        </div>
                        <p className='summary__item-count thank-you'>{props.cartItemsAll[firstItem].quantity}px</p>
                    </div>
                    <p className='thankYouBlock-info-block-product-block-other-items-text'>and {quantityOfAllItems - props.cartItemsAll[firstItem].quantity} other item(s)</p>
                </div>
                : 
                <div className="thankYouBlock-info-block-product-block">
                    <p className='thankYouBlock-info-block-product-block-other-items-text'>Loading...</p>
                </div>
            }

                <div className="thankYouBlock-info-block-total-block">
                    <h2 className='thankYouBlock-info-block-total-block-total-heading'>GRAND TOTAL</h2>
                    <p className='thankYouBlock-info-block-total-block-total-price'>$ {(props.total + 50).toLocaleString()}</p>
                </div>
            </div>
            <Link className='thankYouBlock-home-button' to={"/"} onClick={props.removeAllItems}>BACK TO HOME</Link>
        </div>

        <Footer/>
        </div>
    );
}

export default Checkout;