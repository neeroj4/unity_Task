import React, { useState,useEffect } from "react";
import '../styles/dashboard.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee, faGaugeHigh, faChargingStation, faDiamondTurnRight } from '@fortawesome/free-solid-svg-icons';

function Porsche() {
    const [valor, setValor] = useState('auto');
    useEffect(() => {
        window.addEventListener('resize', (e) => {
          setValor(window.innerWidth);
        });
      }, []);
    return (
        <div className='porsche-row'>
            <h3 className="fe-h">Choose Your Electric Car <br /> of the porsche brand</h3>
            <div style={{width:valor<992?'100%':'auto'}} className="porch-card-row">
                <div style={{width:valor<992?'auto':'15rem'}} className="porche-card">
                    <div>
                        <h3 className="posc-h">Porsche</h3>
                        <p className="posc-p">Taycan 5</p>
                    </div>
                    <img className="porch-img" src={require('../assets/featured6.png')} />
                    <div className="porch-s-row">
                        <span className="porch-s"><FontAwesomeIcon className="porsch-i" icon={faGaugeHigh} />3.7 Sec</span>
                        <span className="porch-s"><FontAwesomeIcon className="porsch-i" icon={faDiamondTurnRight} />356 Km/h</span>
                        <span className="porch-s"><FontAwesomeIcon className="porsch-i" icon={faChargingStation} />Electric</span>
                    </div>
                    <p className="porch-p">$175,900</p>
                    <img className="porche-img" src={require('../assets/Shop.png')} />
                </div>
                <div style={{width:valor<992?'auto':'15rem'}} className="porche-card">
                    <div>
                        <h3 className="posc-h">Porsche</h3>
                        <p className="posc-p">Taycan</p>
                    </div>
                    <img className="porch-img" src={require('../assets/featured1.png')} />
                    <div className="porch-s-row">
                        <span className="porch-s"><FontAwesomeIcon className="porsch-i" icon={faGaugeHigh} />3.7 Sec</span>
                        <span className="porch-s"><FontAwesomeIcon className="porsch-i" icon={faDiamondTurnRight} />356 Km/h</span>
                        <span className="porch-s"><FontAwesomeIcon className="porsch-i" icon={faChargingStation} />Electric</span>
                    </div>
                    <p className="porch-p">$114,900</p>
                    <img className="porche-img" src={require('../assets/Shop.png')} />
                </div>
                <div style={{width:valor<992?'auto':'15rem'}} className="porche-card">
                    <div>
                        <h3 className="posc-h">Porsche</h3>
                        <p className="posc-p">Taycan 5 Cross</p>
                    </div>
                    <img className="porch-img" src={require('../assets/featured5.png')} />
                    <div className="porch-s-row">
                        <span className="porch-s"><FontAwesomeIcon className="porsch-i" icon={faGaugeHigh} />3.7 Sec</span>
                        <span className="porch-s"><FontAwesomeIcon className="porsch-i" icon={faDiamondTurnRight} />356 Km/h</span>
                        <span className="porch-s"><FontAwesomeIcon className="porsch-i" icon={faChargingStation} />Electric</span>
                    </div>
                    <p className="porch-p">$175,900</p>
                    <img className="porche-img" src={require('../assets/Shop.png')} />
                </div>

            </div>

        </div>
    )
}

export default Porsche;
