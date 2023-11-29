import Logo from '../Assets/cngrupocolor.png'
import React, { useState } from "react";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import logoinf1 from '../Assets/logoinf1.png';
import logoinf2 from '../Assets/logoinf2.png';
import logoinf3 from '../Assets/logoinf3.png';
import logoinf4 from '../Assets/logoinf4.png';
import logoinf5 from '../Assets/logoinf5.png';
import logoinf6 from '../Assets/logoinf6.png';
import fotoellos1 from '../Assets/DSC01944 1.png';
import fotoellos2 from '../Assets/DSC01944 2.png';
import fotoellos3 from '../Assets/DSC01944 3.png';


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

      
    

      
      <div className="txt-redes">
            <div className="txt-container-empresa">
              <div className="linea-titulo2">
            <hr class="mi-linea2"></hr><p className="nuestra-empresa3">NUESTRA EMPRESA</p></div>
            <h2 className="titulo-quienes">Quiénes somos</h2>
            <h2 className="quienes-info-txt"><span className="txt-empresa-span">CN GRUPO </span>
             nace como una empresa familiar y cuenta con más <span className="txt-empresa-span"> 35 años </span> 
             de trayectoria, mas de <span className="txt-empresa-span"> 250 colaboradores </span> y 
             <span className="txt-empresa-span"> 6 bases operativas </span> 
             distribuidas en puntos estratégicos de Salta y norte de Chile. 
             <br></br>
             <br></br>
             En el transcurso de nuestro desarrollo empresario hemos ido diversificando negocios, apostando siempre a <label htmlFor=""></label>
             <span className="txt-empresa-span"> innovación</span>, al <span className="txt-empresa-span"> desarrollo profesional </span> 
             de nuestros equipos y a las relaciones estratégicas con nuestros proveedores, clientes y comunidad.
             </h2>
            </div>
            </div>

            <div className='fotosdellos'>
            <h2 className="quienes-title2">Nuestro equipo</h2>   
                <hr className="linea-quienes"></hr>
                <div className='container-fotosdellos'>
                <div className='foto-txt-quienes'><img src={fotoellos1} alt="" className='fotoellos'/> <h2 className="quienes-title-foto">EDUARDO GÓMEZ NAAR</h2><p className="p-quienes1">Fundador y CEO de CN Grupo</p>   
                <hr className="linea-quienes2"></hr></div>
                <div className='foto-txt-quienes'><img src={fotoellos2} alt="" className='fotoellos'/> <h2 className="quienes-title-foto">TOMÁS GÓMEZ NAAR</h2><p className="p-quienes1">Director de Negocios</p> 
                <hr className="linea-quienes2"></hr></div>
                <div className='foto-txt-quienes'><img src={fotoellos3} alt="" className='fotoellos'/> <h2 className="quienes-title-foto">EDUARDO GÓMEZ NAAR</h2><p className="p-quienes1">Director de Áreas Staff</p>  
                <hr className="linea-quienes2"></hr></div>
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