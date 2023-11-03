import React, { useState, useEffect,useRef } from "react";
import '../styles/dashboard.css'

import Home from "../pages/home";
import Feature from "../pages/feature";
import Porsche from "../pages/porsche";
import Morefeature from "../pages/moreFeature";
import SpecialOffer from "../pages/specialOffer";
import About from "../pages/about";
import { Link } from "react-router-dom";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark, faBars, faCoffee, faGaugeHigh, faChargingStation, faDiamondTurnRight } from '@fortawesome/free-solid-svg-icons';
function DashboardLayout() {
    const [value, setValue] = useState('home')

    const [menu, setMenu] = useState(false)

    const [valor, setValor] = useState(0);

    const homeRef = useRef(null);
    const featureRef = useRef(null);
    const aboutRef = useRef(null)
    const populrRef=useRef(null)

    useEffect(() => {
        window.addEventListener('resize', (e) => {
            setValor(window.innerWidth);
        });
    }, []);

   

    const scrollToSection = (sectionRef) => {
        sectionRef.current.scrollIntoView({
            behavior: "smooth",
        });
    }

    const homeClick = () => {
        scrollToSection(homeRef);
        setValue('home');
        setMenu(false)
    }

    const featureClick = () => {
        scrollToSection(featureRef);
        setValue('Featured');
        setMenu(false)
    }

    const aboutClick = () => {
        scrollToSection(aboutRef);
        setValue('about');
        setMenu(false)
    }
    const popularClick=()=>{
        scrollToSection(populrRef)
        setValue('Popular');
        setMenu(false)
    }

    const menuClick = () => {
        setMenu(!menu)
    }
    const cancelClick = () => {
        setMenu(false)
    }
    return (
        <div className='dashboard-container'>
            <div className="dashbaord-body">
                <div className="dashboard-appbar">
                    <div className='appbar-container'>
                        <div className="appbar-col-1">
                            <div className="h-li-2"><img className="h-img-2" src={require('../assets/logo.png')} />Elecar</div>
                        </div>
                        <div style={{ width: valor < 992 ? '50%' : '40%' }} className="appbar-col-2">
                            <FontAwesomeIcon className="menu-icon" onClick={() => menuClick()} icon={faBars} />
                            {menu !== true && <ul className="appbar-ul-2">

                                <li className="appabr-li"  onClick={() => homeClick('home')} ><a className="appabr-li" href="#home" style={{ color: value == 'home' ? '#4177DC' : '#ffff' }}>Home</a></li>
                                <li className="appabr-li"  onClick={() => aboutClick('about')} ><a className="appabr-li" href="#about" style={{ color: value == 'about' ? '#4177DC' : '#ffff' }}>About</a></li>
                                <li className="appabr-li"  onClick={() => popularClick('Popular')} ><a className="appabr-li" href="#Popular" style={{ color: value == 'Popular' ? '#4177DC' : '#ffff' }}>Popular</a></li>
                                <li className="appabr-li"  onClick={() => featureClick('Featured')} ><a className="appabr-li" href="#Featured" style={{ color: value == 'Featured' ? '#4177DC' : '#ffff' }}>Featured</a></li>
                            </ul>}
                            {menu && <ul className="appbar-ul">
                                <FontAwesomeIcon onClick={cancelClick} className="xmark" icon={faXmark} />
                                <li className="appabr-li"  onClick={() => homeClick('home')} ><a className="appabr-li" href="#home" style={{ color: value == 'home' ? '#4177DC' : '#ffff' }}>Home</a></li>
                                <li className="appabr-li"  onClick={() => aboutClick('about')} ><a className="appabr-li" href="#about" style={{ color: value == 'about' ? '#4177DC' : '#ffff' }}>About</a></li>
                                <li className="appabr-li"  onClick={() => popularClick('Popular')} ><a className="appabr-li" href="#Popular" style={{ color: value == 'Popular' ? '#4177DC' : '#ffff' }}>Popular</a></li>
                                <li className="appabr-li"  onClick={() => featureClick('Featured')} ><a className="appabr-li" href="#Featured" style={{ color: value == 'Featured' ? '#4177DC' : '#ffff' }}>Featured</a></li>
                            </ul>}
                        </div>
                    </div>
                </div>
                <div className="home-container" ref={homeRef}>
                    <Home />
                </div>

            </div>
          
            <div className="feature-body" ref={featureRef}>
                <Feature />
                <Porsche />
                <Morefeature />
            </div>
        
            <div className="special-offer-body" ref={populrRef}>
                <SpecialOffer />
            </div>
            <div className="logo-body" >
                <ul className="logo-ul">
                    <li className="logo-li"><img className="logo-img" src={require('../assets/logo1.png')} /></li>
                    <li className="logo-li"><img className="logo-img" src={require('../assets/logo2.png')} /></li>
                    <li className="logo-li" ><img className="logo-img" src={require('../assets/logo3.png')} /></li>
                    <li className="logo-li"><img className="logo-img" src={require('../assets/logo4.png')} /></li>
                    <li className="logo-li"><img className="logo-img" src={require('../assets/logo5.png')} /></li>
                    <li className="logo-li"><img className="logo-img" src={require('../assets/logo6.png')} /></li>
                </ul>

            </div>
            <div className="about-body" ref={aboutRef}>
                <About />
            </div>

        </div>
    )
}

export default DashboardLayout;
