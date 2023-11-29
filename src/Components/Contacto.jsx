import Logo from '../Assets/cngrupocolor.png'
import React, { useState, useRef } from "react";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import {Contactocomponente} from '../Components/Contactocomponente'
import imgcontacto from '../Assets/Copia de DSC01403 1.png'
import logodireccion from '../Assets/logodireccion.png'
import logotelefono from '../Assets/logotelefono.png'
import vectorcontacto from '../Assets/Vector (11).png'

const Navinfo = () => {
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
          <div className='nav-container'>
              <img src={Logo} alt="" className='logo' />
              <nav className='nav-chapa'>
                  <div className={`navbar-links-container ${isOpen && "open"}`}>
                      <ul className="ul-nav">
                          <li className="link-nav-chapa" onMouseEnter={handleMouseEnter1} onMouseLeave={handleMouseLeave1}>
                              <Link className="li2" to="/">NUESTRA EMPRESA</Link>
                              {isSubMenuOpen1 && (
                                  <ul className={`ul-menu ${isOpen ? 'show' : ''}`}>
                                      <li className="link-nav-submenu"><Link className="li" to="/quiénes">¿Quiénes somos?</Link></li>
                                      <li className="link-nav-submenu"><Link className="li" to="/vision">Visión & misión</Link></li>
                                      <li className="link-nav-submenu"><Link className="li" to="/ejes">Ejes de compromiso</Link></li>
                                      <li className="link-nav-submenu"><Link className="li" to="/historia">Historia</Link></li>
                                      <li className="link-nav-submenu"><Link className="li" to="/info">Info impositiva</Link></li>
                                  </ul>
                              )}
                          </li>
                          <li className="link-nav-chapa" onMouseEnter={handleMouseEnter2} onMouseLeave={handleMouseLeave2}>
                              <Link className="li2" to="/mecanica">NUESTROS NEGOCIOS</Link>
                              {isSubMenuOpen2 && (
                                  <ul className={`ul-menu2 ${isOpen ? 'show' : ''}`}>
                                      <li className="link-nav-submenu"><Link className="li" to="/quiénes">Oil & Gas</Link></li>
                                      <li className="link-nav-submenu"><Link className="li" to="/vision">Agro</Link></li>
                                      <li className="link-nav-submenu"><Link className="li" to="/ejes">Minería</Link></li>
                                  </ul>
                              )}
                          </li>

                          <li className="link-nav-chapa" onMouseEnter={handleMouseEnter3} onMouseLeave={handleMouseLeave3}>
                              <Link className="li2" to="/chapaypintura">TRABAJÁ EN CN GRUPO</Link>
                              {isSubMenuOpen3 && (
                                  <ul className={`ul-menu3 ${isOpen ? 'show' : ''}`}>
                                      <li className="link-nav-submenu"><Link className="li2" to="/quiénes">Capital humano</Link></li>
                                  </ul>
                              )}
                          </li>
                          <li className="link-nav-chapa"><Link className="li2" to="/4x4">CONTACTO</Link></li>
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

      
    

      <div className='dosrecuadros'>
        <div className='unrecuadro'>
    
            <div className="txt-container-contacto">
              <div className="linea-titulo2">
            <hr class="milinea-contacto"></hr><p className="subtitulocontacto">CONTACTO</p></div>
            <h2 className="titulo-quienes">Gracias por tu interés<br></br> en nuestra empresa</h2>
            <p className="p-contacto1">Envianos tu consulta y recibirás la respuesta en tu casilla de e-mail</p>
             </div>

            

             <Contactocomponente/>
        </div>

        <div className='otrorecuadro'>
        <img src={imgcontacto} alt="" className="imgcontacto"/>
      
        
        
       
        <h2 className="title-contacto">Telfono</h2>
        <div className='logo-txt-contacto'><img src={logotelefono} alt="" className="vectorcontacto"/><p className="txt-direccion-contacto">0387 423-6555</p></div>
        <hr className="linea-contacto"></hr>
     

        <h2 className="title-contacto">Dirección</h2>
        <div className='logo-txt-contacto'><img src={logodireccion} alt="" className="vectorcontacto"/><p className="txt-direccion-contacto">Av. Chile 1275, A4400 Salta</p></div>
        <hr className="linea-contacto"></hr>

        <h2 className="title-contacto">Email</h2>
        <div className='logo-txt-contacto'><img src={vectorcontacto} alt="" className="vectorcontacto2"/><p className="txt-direccion-contacto">recepcion@cngrupo.com.ar</p></div>
        <hr className="linea-contacto"></hr>
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

export default Navinfo
