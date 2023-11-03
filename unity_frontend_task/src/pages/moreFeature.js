import React, { useState, useEffect } from "react";
import '../styles/dashboard.css'

function Morefeature() {

    const [value, setValue] = useState('all')

    const [valor, setValor] = useState(0);
    useEffect(() => {
        window.addEventListener('resize', (e) => {
            setValor(window.innerWidth);
        });
    }, []);
    const allClick = (data) => {
        setValue(data)
    }
    return (
        <div className='porsche-row'>
            <div className="more-faeture-row">
                <h3 className="fe-h">More Features</h3>
                <img className="po-img" src={require('../assets/Car_map.png')} />
                <div className="img-row-2">
                    <h4 className="img-h">350</h4>
                    <p className="img-p">Km<br />Range
                    </p>
                </div>
                <div className="img-row-2" style={{top:'26%',left:valor<768?'25%':'38%'}}>
                    <h4   className="img-h">800v</h4>
                    <p className="img-p">Turbo<br />Chargin
                    </p>
                </div>
                <div className="img-row-2" style={{top:'55%',left:valor<768?'25%':'38%'}}>
                    <h4 className="img-h">480</h4>
                    <p className="img-p">Km<br />Travel
                    </p>
                </div>
            </div>
            <h3 className="fe-h">Featured Luxury Cars</h3>
            <ul className="img-ul">
                <li style={{ backgroundColor: value == 'all' ? '#4177DC' : '' }} onClick={() => allClick('all')} className="img-li">All</li>
                <li style={{ backgroundColor: value == 'tesla' ? '#4177DC' : '' }} onClick={() => allClick('tesla')} className="img-li"><img className="lux-img" src={require('../assets/logo3.png')} /></li>
                <li style={{ backgroundColor: value == 'audi' ? '#4177DC' : '' }} onClick={() => allClick('audi')} className="img-li" ><img className="lux-img" src={require('../assets/logo2.png')} /></li>
                <li style={{ backgroundColor: value == 'porsche' ? '#4177DC' : '' }} onClick={() => allClick('porsche')} className="img-li"><img className="lux-img" src={require('../assets/logo1.png')} /></li>
            </ul>
            <div style={{ gridRowGap: valor < 992 ? '2rem' : '2rem', gridColumnGap: valor < 992 ? '1rem' : '2rem' }} className="porch-card-row-2">
                {value == "all" && (<>
                    <div style={{ width: valor < 992 ? 'auto' : '15rem' }} className="porche-card">
                        <div>
                            <h3 className="posc-h">Tesla</h3>
                            <p className="posc-p">Model X</p>
                        </div>
                        <img className="porch-img" src={require('../assets/featured6.png')} />
                        <p className="porch-p">$175,900</p>
                        <img className="porche-img" src={require('../assets/Shop.png')} />
                    </div>
                    <div style={{ width: valor < 992 ? 'auto' : '15rem' }} className="porche-card">
                        <div>
                            <h3 className="posc-h">Tesla</h3>
                            <p className="posc-p">Model 3</p>
                        </div>
                        <img className="porch-img" src={require('../assets/featured1.png')} />
                        <p className="porch-p">$45,900</p>
                        <img className="porche-img" src={require('../assets/Shop.png')} />
                    </div>
                    <div style={{ width: valor < 992 ? 'auto' : '15rem' }} className="porche-card">
                        <div>
                            <h3 className="posc-h">Audi</h3>
                            <p className="posc-p">E-tron</p>
                        </div>
                        <img className="porch-img" src={require('../assets/featured5.png')} />
                        <p className="porch-p">$45,900</p>
                        <img className="porche-img" src={require('../assets/Shop.png')} />
                    </div>
                    <div style={{ width: valor < 992 ? 'auto' : '15rem' }} className="porche-card">
                        <div>
                            <h3 className="posc-h">Porsche</h3>
                            <p className="posc-p">Boxster 987</p>
                        </div>
                        <img className="porch-img" src={require('../assets/featured1.png')} />
                        <p className="porch-p">$126,900</p>
                        <img className="porche-img" src={require('../assets/Shop.png')} />
                    </div>
                    <div style={{ width: valor < 992 ? 'auto' : '15rem' }} className="porche-card">
                        <div>
                            <h3 className="posc-h">Porsche</h3>
                            <p className="posc-p">Panam</p>
                        </div>
                        <img className="porch-img" src={require('../assets/featured5.png')} />
                        <p className="porch-p">$126,900</p>
                        <img className="porche-img" src={require('../assets/Shop.png')} />
                    </div>
                </>
                )}
                {value == 'tesla' && (<>
                    <div style={{ width: valor < 992 ? 'auto' : '15rem' }} className="porche-card">
                        <div>
                            <h3 className="posc-h">Tesla</h3>
                            <p className="posc-p">Model X</p>
                        </div>
                        <img className="porch-img" src={require('../assets/featured6.png')} />
                        <p className="porch-p">$175,900</p>
                        <img className="porche-img" src={require('../assets/Shop.png')} />
                    </div>
                    <div style={{ width: valor < 992 ? 'auto' : '15rem' }} className="porche-card">
                        <div>
                            <h3 className="posc-h">Tesla</h3>
                            <p className="posc-p">Model 3</p>
                        </div>
                        <img className="porch-img" src={require('../assets/featured1.png')} />
                        <p className="porch-p">$45,900</p>
                        <img className="porche-img" src={require('../assets/Shop.png')} />
                    </div>
                </>)}
                {value == 'audi' && (<>
                    <div style={{ width: valor < 992 ? 'auto' : '15rem' }} className="porche-card">
                        <div>
                            <h3 className="posc-h">Audi</h3>
                            <p className="posc-p">E-tron</p>
                        </div>
                        <img className="porch-img" src={require('../assets/featured5.png')} />
                        <p className="porch-p">$45,900</p>
                        <img className="porche-img" src={require('../assets/Shop.png')} />
                    </div>
                </>)}
                {value == 'porsche' && (<>
                    <div style={{ width: valor < 992 ? 'auto' : '15rem' }} className="porche-card">
                        <div>
                            <h3 className="posc-h">Porsche</h3>
                            <p className="posc-p">Boxster 987</p>
                        </div>
                        <img className="porch-img" src={require('../assets/featured1.png')} />
                        <p className="porch-p">$126,900</p>
                        <img className="porche-img" src={require('../assets/Shop.png')} />
                    </div>
                    <div className="porche-card">
                        <div>
                            <h3 className="posc-h">Porsche</h3>
                            <p className="posc-p">Panam</p>
                        </div>
                        <img className="porch-img" src={require('../assets/featured5.png')} />
                        <p className="porch-p">$126,900</p>
                        <img className="porche-img" src={require('../assets/Shop.png')} />
                    </div>
                </>)}

            </div>
        </div>
    )
}

export default Morefeature;
