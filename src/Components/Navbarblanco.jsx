import React, { useState } from "react";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import Logo from '../Assets/cngrupoblanco.png'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import logo1 from '../Assets/logo1.png';
import logo2 from '../Assets/logo2.png';
import logo3 from '../Assets/logo3.png';
import logo4 from '../Assets/logo4.png';
import logo5 from '../Assets/logo5.png';
import logo6 from '../Assets/logo6.png';
import { FaInstagram, FaFacebook, FaLinkedin, FaYoutube } from 'react-icons/fa';
import 'react-multi-carousel/lib/styles.css';
import {Swiper, SwiperSlide} from "swiper";
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import videoSource from '../Assets/Home Cn web v3 .mp4';
import { useTranslation} from "react-i18next"

import { EffectCoverflow, Pagination, Navigation } from 'swiper';
import Slider from "./Slider";



const LogosCarousel = () => {
    const logos = [logo1, logo2, logo3, logo4, logo5, logo6];
    const responsive = {
        superLargeDesktop: {
            breakpoint: { max: 4000, min: 3000 },
            items: 5
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2,
            partialVisibilityGutter: 20 
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1,
            partialVisibilityGutter: 20
        }
    };
  
    return (
        <Carousel 
        responsive={responsive}
        autoPlay={true}
        autoPlaySpeed={2000}
        infinite={true}
      >
        {logos.map((logo, index) => (
          <img key={index} src={logo} alt={`Logo ${index + 1}`} />
        ))}
      </Carousel>
    );
};


  const Navchapa = () => {

    const [t, i18next] = useTranslation("global");
    const [isOpen, setIsOpen] = useState(false);
    const [openSubMenu, setOpenSubMenu] = useState(null);

    
    const [openMenu, setOpenMenu] = useState(null);


const handleMenuClick = (menu) => {
    setOpenMenu(openMenu === menu ? null : menu);
};

const handleSubMenuClick = (submenu) => {
    setOpenSubMenu(openSubMenu === submenu ? null : submenu);
};

    const [isSubMenuOpen1, setSubMenuOpen1] = useState(false);
    const [isSubMenuOpen2, setSubMenuOpen2] = useState(false);
    const [isSubMenuOpen3, setSubMenuOpen3] = useState(false);

    const [isSubMenuOpenA, setSubMenuOpenA] = useState(false);
    const [isSubMenuOpenB, setSubMenuOpenB] = useState(false);
    const [isSubMenuOpenC, setSubMenuOpenC] = useState(false);

    let timer;
    const delay = 100; // tiempo de retraso en milisegundos

    // Cuando el mouse entra, limpiamos el temporizador si existe


    
    const handleSubMenuClick1 = () => {
        setSubMenuOpen1(!isSubMenuOpen1);
    };

    const handleSubMenuClick2 = () => {
        setSubMenuOpen2(!isSubMenuOpen2);
    };

    const handleSubMenuClick3 = () => {
        setSubMenuOpen3(!isSubMenuOpen3);
    };

  

    const handleSubMenuClickA = (event) => {
        event.stopPropagation();
        setSubMenuOpenA(!isSubMenuOpenA);
    };

    const handleSubMenuClickB = (event) => {
        event.stopPropagation();
        setSubMenuOpenB(!isSubMenuOpenB);
    };

    const handleSubMenuClickC = (event) => {
        event.stopPropagation();
        setSubMenuOpenC(!isSubMenuOpenC);
    };



    return (
        <div className="home-container">
            <div className="video">
      <video  src={videoSource} autoPlay loop muted className='tuvideo'></video>
      <div className='content'>
      <div className='nav-container'>
                <img src={Logo} alt="" className='logo' />
                <nav className='nav-chapa'>
                    <div className={`navbar-links-container ${isOpen && "open"}`}>
                        <ul className="ul-nav">
                            <li className="link-nav-chapa" onClick={() => handleSubMenuClick('submenu1')}>
                                <Link className="li" to="/">{t("li.OUR COMPANY")}</Link>
                                {openSubMenu === 'submenu1' && (
                                    <ul className="ul-menu">
                                        <div className="ul-menu-linea"><li className="link-nav-submenu"><Link className="li" to="/">{t("li.Who are we?")}</Link></li><hr className="linea-menuA"></hr></div>
                                        <div className="ul-menu-linea"><li className="link-nav-submenu"><Link className="li" to="/">{t("li.Vision and mission")}</Link></li><hr className="linea-menuA"></hr></div>
                                        <div className="ul-menu-linea"><li className="link-nav-submenu"><Link className="li" to="/">{t("li.History")}</Link></li><hr className="linea-menuA"></hr></div>
                                        <div className="ul-menu-linea"><li className="link-nav-submenu"><Link className="li" to="/">{t("li.Tax information")}</Link></li></div>
                                    </ul>
                                )}
                            </li>
                            <li className="link-nav-chapa" onClick={() => handleMenuClick('menu2')}>
                                <div className="li" to="/mecanica">{t("li.OUR BUSINESSES")}</div>
                                {openMenu === 'menu2' && (
                                    <ul className="ul-menu2">
                                        <div className="ul-menu-linea"><li className="link-nav-submenu"><div onClick={(e) => { e.stopPropagation(); handleSubMenuClick('submenuA'); }} className="li">Oil & Gas</div>
                                        {openSubMenu === 'submenuA' && (
                                        <ul className="ul-SUBmenu">

                                        <div className="ul-menu-linea"><li className="link-nav-submenu"><Link className="li" to="/quiénes">COMBUSTIBLES DEL NORTE</Link></li><hr className="linea-menuOIL"></hr></div>
                                        <div className="ul-menu-linea"><li className="link-nav-submenu"><Link className="li" to="/vision">CCN CHILE</Link></li><hr className="linea-menuOIL"></hr></div>
                                        <div className="ul-menu-linea"><li className="link-nav-submenu"><Link className="li" to="/ejes">GAS DEL NORTE</Link></li><hr className="linea-menuOIL"></hr></div>
                                        <div className="ul-menu-linea"><li className="link-nav-submenu"><Link className="li" to="/ejes">{t("li.SERVICE STATIONS")}</Link></li></div>
                                    </ul> )}</li><hr className="linea-menu"></hr></div>

                                        <div className="ul-menu-linea"><li className="link-nav-submenu" ><div onClick={(e) => { e.stopPropagation(); handleSubMenuClick('submenuB'); }} className="li">Agro</div>
                                        {openSubMenu === 'submenuB' && (
                                        <ul className="ul-SUBmenu1">
                                        <div className="ul-menu-linea"><li className="link-nav-submenu"><Link className="li" to="/quiénes">NECA</Link></li><hr className="linea-menuOIL"></hr></div>
                                        <div className="ul-menu-linea"><li className="link-nav-submenu"><Link className="li" to="/vision">COMBUSTIBLES DEL NORTE</Link></li><hr className="linea-menuOIL"></hr></div>
                                        <div className="ul-menu-linea"><li className="link-nav-submenu"><Link className="li" to="/ejes">PUESTO EL MOLLAR</Link></li><hr className="linea-menuOIL"></hr></div>
                                        <div className="ul-menu-linea"><li className="link-nav-submenu"><Link className="li" to="/ejes">PLANTA GUEMES</Link></li></div>
                                        </ul>)}</li><hr className="linea-menu"></hr></div>
                                        <div className="ul-menu-linea"><li className="link-nav-submenu"><div onClick={(e) => { e.stopPropagation(); handleSubMenuClick('submenuC'); }} className="li">{t("li.Mining")}</div>
                                        {openSubMenu === 'submenuC' && (
                                        <ul className="ul-SUBmenu2">
                                        <div className="ul-menu-linea"><li className="link-nav-submenu"><Link className="li" to="/quiénes">NECA</Link></li></div></ul>)}</li></div>
                                    </ul>
                                )}
                            </li>

                            <li className="link-nav-chapa" onClick={handleSubMenuClick3}>
                                <div className="li" to="/chapaypintura">{t("li.WORK AT CN GROUP")}</div>
                                {isSubMenuOpen3 && (
                                    <ul className="ul-menu3">
                                        <div className="ul-menu-linea"><li className="link-nav-submenu"><Link className="li" to="/quiénes">{t("li.Human capital")}</Link></li></div>
                                    </ul>
                                )}
                            </li>
                            <li className="link-nav-chapa"><Link className="li" to="/4x4">{t("li.CONTACT")}</Link></li>
                            <li className="link-nav-chapab"><div className="botones">
                            <button onClick={(event) => {
    i18next.changeLanguage("es");
    document.querySelectorAll('.language-button').forEach(btn => btn.classList.remove('active'));
    event.target.classList.add('active');
}} className="language-button">ES</button>

<button onClick={(event) => {
    i18next.changeLanguage("en");
    document.querySelectorAll('.language-button').forEach(btn => btn.classList.remove('active'));
    event.target.classList.add('active');
}} className="language-button">EN</button>

                            </div></li>
                        </ul>

                    </div>
                    <div className={`toggle ${isOpen && "open"}`} onClick={() => setIsOpen(!isOpen)}>
                        <span className="span-nav"></span>
                        <span className="span-nav"></span>
                        <span className="span-nav"></span>

                        <body className={isOpen ? 'overlay' : ''}></body> 
                    </div>
                </nav>
            
        </div>
        <div className="txt-redes">
            <div className="txt-container-empresa">
              <div className="linea-titulo">
            <hr class="mi-linea"></hr><p className="nuestra-empresa">{t("li.OUR COMPANY")}</p></div>
            <h2 className="nuestra-empresa-txt">{t("nuestra-empresa-txt.text1")}<br></br><span className="txt-empresa-span">{t("nuestra-empresa-txt.text2")}</span>,<br></br>{t("nuestra-empresa-txt.text3")}<br></br>{t("nuestra-empresa-txt.text4")}<span className="txt-empresa-span">{t("nuestra-empresa-txt.text5")}</span></h2>
            <button className="conocenos-btn">{t("conocenos-btn.KNOW MORE")}</button>
            </div>

            <div className="redes-container-empresa">
            <FaInstagram />
            <FaFacebook />
            <FaLinkedin />
            <FaYoutube />
            </div>   
        </div>
        </div>
      </div>
        <div className="recuadros">
          <div className="recuadro"><div className="number">8</div><span className="recuadros-span">{t("recuadros-span.Leading companies")}</span> {t("recuadros-span.in their")}<br></br>{t("recuadros-span.region promoting")}<br></br>{t("recuadros-span.innovation and excellence")}</div>
          <hr class="mi-linea-ver"></hr>
          <div className="recuadro"><div className="number1">+35</div><span className="recuadros-span">{t("recuadros-span.years of experience")}</span>{t("recuadros-span.in the")} <br></br>{t("recuadros-span.fields of oil & gas, agriculture,")}<br></br> {t("recuadros-span.and MINING")}</div>
          <hr class="mi-linea-ver"></hr>
          <div className="recuadro"><div className="number2">6</div> <span className="recuadros-span">{t("recuadros-span.operational bases")}</span><br></br>{t("recuadros-span.distributed in Salta and")}<br></br>{t("recuadros-span.northern Chile")}</div>
          <hr class="mi-linea-ver"></hr>
          <div className="recuadro"><div className="number3">+250</div> <span className="recuadros-span">{t("recuadros-span.collaborators")}</span> {t("recuadros-span.in constant")}<br></br>{t("recuadros-span.professional growth")}</div>
        </div>

        <div className="containerfoto-cards">
          <div className="card-home">
            <div className="logo-home"></div>
            <h2 className="title-card-home">Oil&Gas</h2>
            <p className="texto-card-home">{t("texto-card-home.completo")}</p>
            <hr class="mi-linea-home1"></hr>
          </div>
          <div className="card-home"><div className="logo-home2"></div>
            <h2 className="title-card-home">Agro</h2>
            <p className="texto-card-home">{t("texto-card-home.completo2")}</p>
          
            <hr class="mi-linea-home"></hr>
            </div>
          <div className="card-home"><div className="logo-home3"></div>
          <h2 className="title-card-home">{t("li.Mining")}</h2>
            <p className="texto-card-home">{t("texto-card-home.completo3")}</p>
      
            
            
            <hr class="mi-linea-home2"></hr>
        
            </div>
          </div>
      
        <div className="my-carousel">
        <h2 className="micarrusel-titulo">{t("li.Our culture")}</h2>
        <hr class="mi-linea-carrusel"></hr>
        
        </div>
        <Slider/>
        
        <div className="logos-carrusel">
        <LogosCarousel />
        </div>
        
        <div className="footer">
          <div className="txt1">
            <p className="txt-foo1">0387 423-6555</p>
            <p className="txt-foo">Av. Chile 1275, A4400 Salta</p>
          </div>
          <div className="txt2">
            <p className="txt-foo2">{t("txt-foo2.Footer")}</p>
          </div>
        </div>
       
        </div>
    )
}

export default Navchapa