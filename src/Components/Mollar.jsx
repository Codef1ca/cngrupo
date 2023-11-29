import React, { useState } from "react";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import Logo from '../Assets/cngrupoblanco.png'
import LogoMollar from '../Assets/Frame (1).png'
import Logochoclo from '../Assets/Group (2).png'
import Logosiembra from '../Assets/Group (3).png'
import vectormollar1 from '../Assets/Capa_2.png'
import vectormollar2 from '../Assets/Group 94 (1).png'
import vectormollar3 from '../Assets/Vector (4).png'
import vectormollar4 from '../Assets/Vector (5).png'

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
            <div className="home-container5">
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
        <div className="txt-redes">
            <div className="txt-container-empresa">
              <div className="linea-titulo">
            <hr class="mi-linea"></hr><p className="nuestra-empresa">NUESTRA EMPRESA</p></div>
            <h2 className="logistica-title">PUESTO EL MOLLAR</h2>
            </div>
            </div>  
        </div>

        <div className="container-elmollar">
            <div className="logo-title-linea-mollar">
                <img src={LogoMollar} alt="" className="logomollar"/>
                <hr class="my-linea"></hr>
                <h2 className="title-elmollar">Cultivos con <span className="txt-empresa-span">Agricultura</span> de <span className="txt-empresa-span">Precisión</span></h2>
            </div>
            
            <div className="container-elmollar2">
                <div className="parapegarla">
                {/* <hr className="lineavertical"></hr> */}
                <p className="p-elmollar">Somos una empresa dedicada a siembra propia y aparcería. Junto con productores de Salta, buscamos constantemente maximizar la rentabilidad de la mano de la <span className="txt-empresa-span">innovación y sustentabilidad</span>. Aportamos <span className="txt-empresa-span">transparencia y profesionalización </span> en la gestión para fomentar relaciones a largo plazo con beneficio mutuo.</p>
                </div>
                <div className="logos-siembra-text">
               
                    <div className="logo-siembra">
                    <img src={Logochoclo} alt="" className="logos-siembra" /> 
                    <div className="txt-siembra-c">
                    <h3 className="title-logo-choclo">Siembra propia</h3>
                    <p className="txt-siembra">Soja y Maíz  -  1000 ha</p>
                    </div> 
                
                </div>
                
                    <div className="logo-siembra">
                    <img src={Logosiembra} alt="" className="logos-siembra2"/>  
                    <div className="txt-siembra-c">
                    <h3 className="title-logo-choclo">Siembra asociada</h3>
                    <p className="txt-siembra">Especialidades  -  3000 ha</p>
                    </div>
                </div>
                </div>
               
            </div>
            
        </div>

        <div className="banner-mollar"></div>

        <div className="container-txt-card">
        <h2 className="logistica-mollar-card">Contacto</h2>
        <hr className="linea-mollar"></hr>
        <p className="txt-logistica-card">Para contactarnos, podés hacerlo a través de estos canales:</p>
        <div className="container-cards-logistica">
            <div className="card-mollar"><div className="titulo-mollar-logistica"><h2 className="title-direccion-mollar">Responsable</h2><img src={vectormollar1} alt="" className="vectormollar1"/></div><p className="txt-direccion-mollar">recepcion@cngrupo.com.ar</p></div>
            <div className="card-mollar"><div className="titulo-mollar-logistica"><h2 className="title-direccion-mollar">Dirección</h2><img src={vectormollar2} alt="" className="vectormollar4"/></div><p className="txt-direccion-mollar">Av. Chile 1275-4400</p></div>
            <div className="card-mollar"><div className="titulo-mollar-logistica"><h2 className="title-direccion-mollar">Teléfono</h2><img src={vectormollar3} alt="" className="vectormollar3"/></div><p className="txt-direccion-mollar">(0387) 423 6555</p></div>
            <div className="card-mollar"><div className="titulo-mollar-logistica"><h2 className="title-direccion-mollar">Email</h2><img src={vectormollar4} alt="" className="vectormollar2"/></div><p className="txt-direccion-mollar">recepcion@cngrupo.com.ar</p></div>
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