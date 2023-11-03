import React, { useState } from "react";
import '../styles/dashboard.css'

function SpecialOffer() {

    return (
        <div className='porsche-row'>

            <div className='feature-row'>
                <div className="feature-col-2">
                    <h3 className="fe-h">Do You Want To Receive <br></br> Special Offers?</h3>
                    <p className="fe-p">Be the first to receive all the information about
                        our products and new cars by email by subscribing
                        to our mailing list</p>
                    <button className="f-btn">Subscribe Now
                    </button>

                </div>
                <div className="feature-col-1">
                    <img className="feature-img" src={require('../assets/Car_top.png')} />
                </div>
            </div>
        </div>
    )
}

export default SpecialOffer;
