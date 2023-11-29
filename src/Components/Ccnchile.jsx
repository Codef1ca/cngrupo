import React, { useState } from "react";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import Logo from '../Assets/cngrupoblanco.png'
import { FaInstagram, FaFacebook, FaLinkedin, FaYoutube } from 'react-icons/fa';
import logochile from '../Assets/loggo1.png'
import Vectorlogistica1 from '../Assets/Group 94.png'
import Vectorlogistica2 from '../Assets/Vector (2).png'
import Vectorlogistica3 from '../Assets/Vector (3).png'


import fotogas from '../Assets/autoelevadores 15 kg  1.png'
import logodireccion from '../Assets/logodireccion.png'
import logotelefono from '../Assets/logotelefono.png'
import logowpp from '../Assets/logowpp.png'
import logodelivery from '../Assets/logodelivery.png'
import imgchile from '../Assets/TEXTO DESCRIPCION - CN GRUPO EMBARCACION Y LAJITAS (33).png'


const Navchapa = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isSubMenuOpen1, setSubMenuOpen1] = useState(false);
    const [isSubMenuOpen2, setSubMenuOpen2] = useState(false);
    const [isSubMenuOpen3, setSubMenuOpen3] = useState(false);

    let timer;
    const delay = 100; // tiempo de retraso en milisegundos

    // Cuando el mouse entra, limpiamos el temporizador si existe
    const handleMouseEnter1 = () => {
        if (timer) clearTimeout(timer);
        setSubMenuOpen1(true);
    };

    // Cuando el mouse sale, iniciamos un temporizador que cerrará el menú después del retraso
    const handleMouseLeave1 = () => {
        timer = setTimeout(() => setSubMenuOpen1(false), delay);
    };

    // Repite lo mismo para los otros submenús
    const handleMouseEnter2 = () => {
        if (timer) clearTimeout(timer);
        setSubMenuOpen2(true);
    };

    const handleMouseLeave2 = () => {
        timer = setTimeout(() => setSubMenuOpen2(false), delay);
    };

    const handleMouseEnter3 = () => {
        if (timer) clearTimeout(timer);
        setSubMenuOpen3(true);
    };

    const handleMouseLeave3 = () => {
        timer = setTimeout(() => setSubMenuOpen3(false), delay);
    };

    return (
        <div className="home-container">
            <div className="home-container8">
            <div className='nav-container'>
                <img src={Logo} alt="" className='logo' />
                <nav className='nav-chapa'>
                    <div className={`navbar-links-container ${isOpen && "open"}`}>
                        <ul className="ul-nav">
                            <li className="link-nav-chapa" onMouseEnter={handleMouseEnter1} onMouseLeave={handleMouseLeave1}>
                                <Link className="li" to="/">NUESTRA EMPRESA</Link>
                                {isSubMenuOpen1 && (
                                    <ul className="ul-menu">
                                        <li className="link-nav-submenu"><Link className="li" to="/quiénes">¿Quiénes somos?</Link></li>
                                        <li className="link-nav-submenu"><Link className="li" to="/vision">Visión & misión</Link></li>
                                        <li className="link-nav-submenu"><Link className="li" to="/ejes">Ejes de compromiso</Link></li>
                                        <li className="link-nav-submenu"><Link className="li" to="/historia">Historia</Link></li>
                                        <li className="link-nav-submenu"><Link className="li" to="/info">Info impositiva</Link></li>
                                    </ul>
                                )}
                            </li>
                            <li className="link-nav-chapa" onMouseEnter={handleMouseEnter2} onMouseLeave={handleMouseLeave2}>
                                <Link className="li" to="/mecanica">NUESTROS NEGOCIOS</Link>
                                {isSubMenuOpen2 && (
                                    <ul className="ul-menu2">
                                        <li className="link-nav-submenu"><Link className="li" to="/quiénes">Oil & Gas</Link></li>
                                        <li className="link-nav-submenu"><Link className="li" to="/vision">Agro</Link></li>
                                        <li className="link-nav-submenu"><Link className="li" to="/ejes">Minería</Link></li>
                                    </ul>
                                )}
                            </li>

                            <li className="link-nav-chapa" onMouseEnter={handleMouseEnter3} onMouseLeave={handleMouseLeave3}>
                                <Link className="li" to="/chapaypintura">TRABAJÁ EN CN GRUPO</Link>
                                {isSubMenuOpen3 && (
                                    <ul className="ul-menu3">
                                        <li className="link-nav-submenu"><Link className="li" to="/quiénes">Capital humano</Link></li>
                                    </ul>
                                )}
                            </li>
                            <li className="link-nav-chapa"><Link className="li" to="/4x4">CONTACTO</Link></li>
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

        <div className="redes-container-empresa-chile">
            <FaInstagram />
            <FaFacebook />
            </div>   
        <div className="txt-redes">
            <div className="txt-container-empresa">
              <div className="linea-titulo">
            <hr class="mi-linea"></hr><p className="nuestra-empresa">NUESTROS NEGOCIOS</p></div>
            <h2 className="logistica-title">CCN CHILE</h2>
            </div>
            </div>  
        </div>

        <div className="container-gas">
            <div className="logochile-txt">
                <img src={logochile} alt="" className="logochile"/>
                <p className="p-neca1">En el año 2014 CN Grupo llegó a Chile con su designación como <span className="txt-empresa-span"> único proveedor oficial de la marca YPF</span>  en el norte del país. <br></br><br></br>
                El negocio se enfoca en la <span className="txt-empresa-span"> venta y distribución de productos lubricantes YPF</span> como aceites y grasas, brindando soluciones adaptadas a las necesidades de nuestros clientes (lubricentros, talleres, empresas proveedoras de minería, entre otros).</p>
            </div>
                <img src={imgchile} alt="" className="imgchile"/>
                
        
        
        </div>     
           
        
        

    <div className="container-txt-card">
        <h2 className="logistica-title-card">Zonas en las que operamos</h2>
        <hr className="linea-logistica"></hr>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
    </div>

    <div className="banner-chile"></div> 


    <div className="container-txt-card">
        <h2 className="logistica-title-card">Contacto</h2>
        <hr className="linea-logistica"></hr>
        <p className="txt-logistica-card">Para contactarnos, podés hacerlo a través de estos canales:</p>
        <div className="container-cards-logistica">
            <div className="card-contacto"><div className="titulo-logo-logistica"><h2 className="title-direccion">Dirección</h2><img src={Vectorlogistica1} alt="" className="vector-logistica"/></div><p className="txt-direccion">Av. Chile 1275-4400</p></div>
            <div className="card-contacto"><div className="titulo-logo-logistica"><h2 className="title-direccion">Teléfono</h2><img src={Vectorlogistica2} alt="" className="vector-logistica2"/></div><p className="txt-direccion">(0387) 423 6555</p></div>
            <div className="card-contacto"><div className="titulo-logo-logistica"><h2 className="title-direccion">Email</h2><img src={Vectorlogistica3} alt="" className="vector-logistica3"/></div><p className="txt-direccion">recepcion@cngrupo.com.ar</p></div>
        </div>
      </div>
        <div className="footer">
          <div className="txt1">
            <p className="txt-foo1">0387 423-6555</p>
            <p className="txt-foo">Av. Chile 1275, A4400 Salta</p>
          </div>
          <div className="txt2">
            <p className="txt-foo">© 2023 CN Grupo - Todos los derechos reservados</p>
          </div>
        </div>

        
        
        
        </div>
    )
}

export default Navchapa