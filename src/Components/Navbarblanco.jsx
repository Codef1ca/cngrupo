import React, { useState } from "react";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import Logo from '../Assets/cngrupoblanco.png'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import logo1 from '../Assets/loggo1.png';
import logo2 from '../Assets/loggo2.png';
import logo3 from '../Assets/loggo3.png';
import logo4 from '../Assets/loggo4.png';
import logo5 from '../Assets/loggo5.png';
import carru1 from '../Assets/redi1.png';
import carru2 from '../Assets/redi2.png';
import carru3 from '../Assets/redi3.png';
import carru4 from '../Assets/redi4.png';
import carru5 from '../Assets/redi5.png';
import { FaInstagram, FaFacebook, FaLinkedin, FaYoutube } from 'react-icons/fa';
import 'react-multi-carousel/lib/styles.css';
import {Swiper, SwiperSlide} from "swiper";
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import videoSource from '../Assets/Home Cn web v3 .mp4';

import { EffectCoverflow, Pagination, Navigation } from 'swiper';
import Slider from "./Slider";



const LogosCarousel = () => {
    const logos = [logo1, logo2, logo3, logo4, logo5];
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

    const [language, setLanguage] = useState('EN');
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
                                <Link className="li" to="/">NUESTRA EMPRESA</Link>
                                {openSubMenu === 'submenu1' && (
                                    <ul className="ul-menu">
                                        <div className="ul-menu-linea"><li className="link-nav-submenu"><Link className="li" to="/quiénes">¿Quiénes somos?</Link></li><hr className="linea-menuA"></hr></div>
                                        <div className="ul-menu-linea"><li className="link-nav-submenu"><Link className="li" to="/vision">Visión & misión</Link></li><hr className="linea-menuA"></hr></div>
                                        <div className="ul-menu-linea"><li className="link-nav-submenu"><Link className="li" to="/ejes">Ejes de compromiso</Link></li><hr className="linea-menuA"></hr></div>
                                        <div className="ul-menu-linea"><li className="link-nav-submenu"><Link className="li" to="/historia">Historia</Link></li><hr className="linea-menuA"></hr></div>
                                        <div className="ul-menu-linea"><li className="link-nav-submenu"><Link className="li" to="/info">Info impositiva</Link></li></div>
                                    </ul>
                                )}
                            </li>
                            <li className="link-nav-chapa" onClick={() => handleMenuClick('menu2')}>
                                <div className="li" to="/mecanica">NUESTROS NEGOCIOS</div>
                                {openMenu === 'menu2' && (
                                    <ul className="ul-menu2">
                                        <div className="ul-menu-linea"><li className="link-nav-submenu"><div onClick={(e) => { e.stopPropagation(); handleSubMenuClick('submenuA'); }} className="li">Oil & Gas</div>
                                        {openSubMenu === 'submenuA' && (
                                        <ul className="ul-SUBmenu">

                                        <div className="ul-menu-linea"><li className="link-nav-submenu"><Link className="li" to="/quiénes">COMBUSTIBLES DEL NORTE</Link></li><hr className="linea-menuOIL"></hr></div>
                                        <div className="ul-menu-linea"><li className="link-nav-submenu"><Link className="li" to="/vision">CCN CHILE</Link></li><hr className="linea-menuOIL"></hr></div>
                                        <div className="ul-menu-linea"><li className="link-nav-submenu"><Link className="li" to="/ejes">GAS DEL NORTE</Link></li><hr className="linea-menuOIL"></hr></div>
                                        <div className="ul-menu-linea"><li className="link-nav-submenu"><Link className="li" to="/ejes">ESTACIONES DE SERVICIO</Link></li></div>
                                    </ul> )}</li><hr className="linea-menu"></hr></div>

                                        <div className="ul-menu-linea"><li className="link-nav-submenu" ><div onClick={(e) => { e.stopPropagation(); handleSubMenuClick('submenuB'); }} className="li">Agro</div>
                                        {openSubMenu === 'submenuB' && (
                                        <ul className="ul-SUBmenu1">
                                        <div className="ul-menu-linea"><li className="link-nav-submenu"><Link className="li" to="/quiénes">NECA</Link></li><hr className="linea-menuOIL"></hr></div>
                                        <div className="ul-menu-linea"><li className="link-nav-submenu"><Link className="li" to="/vision">COMBUSTIBLES DEL NORTE</Link></li><hr className="linea-menuOIL"></hr></div>
                                        <div className="ul-menu-linea"><li className="link-nav-submenu"><Link className="li" to="/ejes">PUESTO EL MOLLAR</Link></li><hr className="linea-menuOIL"></hr></div>
                                        <div className="ul-menu-linea"><li className="link-nav-submenu"><Link className="li" to="/ejes">PLANTA GUEMES</Link></li></div>
                                        </ul>)}</li><hr className="linea-menu"></hr></div>
                                        <div className="ul-menu-linea"><li className="link-nav-submenu"><div onClick={(e) => { e.stopPropagation(); handleSubMenuClick('submenuC'); }} className="li">Minería</div>
                                        {openSubMenu === 'submenuC' && (
                                        <ul className="ul-SUBmenu2">
                                        <div className="ul-menu-linea"><li className="link-nav-submenu"><Link className="li" to="/quiénes">NECA</Link></li></div></ul>)}</li></div>
                                    </ul>
                                )}
                            </li>

                            <li className="link-nav-chapa" onClick={handleSubMenuClick3}>
                                <div className="li" to="/chapaypintura">TRABAJÁ EN CN GRUPO</div>
                                {isSubMenuOpen3 && (
                                    <ul className="ul-menu3">
                                        <div className="ul-menu-linea"><li className="link-nav-submenu"><Link className="li" to="/quiénes">Capital humano</Link></li></div>
                                    </ul>
                                )}
                            </li>
                            <li className="link-nav-chapa"><Link className="li" to="/4x4">CONTACTO</Link></li>
                            <li className="link-nav-chapab"><div className="botones">
                            <button className={`language-button ${language === 'ES' ? 'active' : ''}`} onClick={() => setLanguage('ES')}>ES</button>
                            <button className={`language-button ${language === 'EN' ? 'active' : ''}`}onClick={() => setLanguage('EN')}>EN</button>
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
            <hr class="mi-linea"></hr><p className="nuestra-empresa">NUESTRA EMPRESA</p></div>
            <h2 className="nuestra-empresa-txt">Somos un grupo de empresas que busca<br></br> brindar <span className="txt-empresa-span">soluciones integrales de distribución</span>,<br></br> a través de diferentes unidades de negocios<br></br> relacionadas con <span className="txt-empresa-span">Oil&Gas, Agro y Minería.</span></h2>
            <button className="conocenos-btn">CONOCENOS</button>
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
          <div className="recuadro"><div className="number">8</div><span className="recuadros-span">empresas lideres</span> en su <br></br>región, promoviendo la <br></br>innovación y la excelencia</div>
          <hr class="mi-linea-ver"></hr>
          <div className="recuadro"><div className="number1">+35</div><span className="recuadros-span">años de trayectoria</span> en los <br></br>rubros de OIL & GAS, AGRO <br></br> y MINERÍA.</div>
          <hr class="mi-linea-ver"></hr>
          <div className="recuadro"><div className="number2">6</div> <span className="recuadros-span">bases operativas</span><br></br> distribuidas en Salta y el <br></br>norte de Chile.</div>
          <hr class="mi-linea-ver"></hr>
          <div className="recuadro"><div className="number3">+250</div> <span className="recuadros-span">colaboradores</span> en constante <br></br>crecimiento profesional.</div>
        </div>

        <div className="containerfoto-cards">
          <div className="card-home">
            <div className="logo-home"></div>
            <h2 className="title-card-home">Oil&Gas</h2>
            <p className="texto-card-home">Somos distribuidores oficiales de YPF, tanto de Diésel como de Gas envasado. Contamos con dos estaciones de servicio YPF ubicadas en Salta Capital y Las Lajitas.</p>
            <hr class="mi-linea-home1"></hr>
          </div>
          <div className="card-home"><div className="logo-home2"></div>
            <h2 className="title-card-home">Agro</h2>
            <p className="texto-card-home">Ofrecemos soluciones integrales al campo a través de la distribución de productos y servicios para la Protección y Nutrición de cultivos.</p>
          
            <hr class="mi-linea-home"></hr>
            </div>
          <div className="card-home"><div className="logo-home3"></div>
          <h2 className="title-card-home">Minería</h2>
            <p className="texto-card-home">Proporcionamos soluciones integrales y customizadas de gerenciamiento de proyectos para empresas mineras.</p>
      
            
            
            <hr class="mi-linea-home2"></hr>
        
            </div>
          </div>
      
        <div className="my-carousel">
        <h2 className="micarrusel-titulo">Nuestra cultura</h2>
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
            <p className="txt-foo2">© 2023 CN Grupo - Todos los derechos reservados</p>
          </div>
        </div>

        </div>
    )
}

export default Navchapa