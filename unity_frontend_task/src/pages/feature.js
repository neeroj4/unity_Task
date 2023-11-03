import React, { useState } from "react";
import '../styles/dashboard.css'


function Feature() {

    return (
        <div className='feature-row'>
            <div className="feature-col-1">
                <img className="feature-img" src={require('../assets/Steerin.png')} />
                <div className="img-row">
                    <h4 className="img-h">2500+</h4>
                    <p className="img-p">Supercharges placed
                        along popular routes
                    </p>

                </div>

            </div>
            <div className="feature-col-2">
                <h3 className="fe-h">Machine with<br></br> future technology</h3>
                <p className="fe-p">See the future with high-performance electric cars
                    produced by renowned brands. They feature futuristic
                    builds and designs with new and innovative platforms
                    that last a long time</p>
                <button className="f-btn">Know More</button>

            </div>


        </div>
    )
}

export default Feature;
