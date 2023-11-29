import React, { useState } from "react";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import Logo from '../Assets/cngrupoblanco.png'
import { FaInstagram, FaFacebook, FaLinkedin, FaYoutube } from 'react-icons/fa';
import logo2 from '../Assets/loggo2.png';
import fotogas from '../Assets/autoelevadores 15 kg  1.png'
import logodireccion from '../Assets/logodireccion.png'
import logotelefono from '../Assets/logotelefono.png'
import logowpp from '../Assets/logowpp.png'
import logodelivery from '../Assets/logodelivery.png'


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
            <div className="home-container7">
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

        <div className="redes-container-empresa-gas">
            <FaInstagram />
            <FaFacebook />
            <FaLinkedin />
            </div>   
        <div className="txt-redes">
            <div className="txt-container-empresa">
              <div className="linea-titulo">
            <hr class="mi-linea"></hr><p className="nuestra-empresa">NUESTROS NEGOCIOS</p></div>
            <h2 className="logistica-title">GAS DEL NORTE</h2>
            </div>
            </div>  
        </div>

        <div className="container-neca">
                <img src={logo2} alt="" className="negaimg1"/>
                <p className="p-neca1"> <span className="txt-empresa-span">Gas del Norte</span>  es nuestra unidad de negocio encargada del comercio y la distribución exclusiva de gas envasado <span className="txt-empresa-span">YPF GAS</span> en la provincia de <span className="txt-empresa-span">Salta</span>desde hace veinte años<br></br>
                <br></br>
                Fuimos reconocidos en numerosas oportunidades por
                <span className="txt-empresa-span">YPF GAS</span>como mejor distribuidor de la red de distribuidores del país, distinción que nos confirma que estamos en el rumbo correcto, apostando a la
                
               <span className="txt-empresa-span">tecnología</span> y manteniendo al <span className="txt-empresa-span">cliente</span>  en el centro de todas las decisiones.
               <br></br><br></br>
               <span className="txt-empresa-spang">Cercanía</span> <span className="lineagas"></span><span className="txt-empresa-spang">Servicio</span><span className="lineagas"></span><span className="txt-empresa-spang">Seguridad</span>
                
                </p>
        
        
        </div>     
        <div className="banner-gas"></div>    
        
        

    <div className="container-txt-card">
        <h2 className="gas-title">Nuestros Productos y Servicios</h2>
        <hr className="linea-gas"></hr>
        <p className="txt-neca-boton">Nuestro servicio de <span className="txt-empresa-span">entrega a domicilio</span> es nuestro valor agregado. Nos aseguramos de entregar<span className="txt-empresa-span"> calidad y seguridad</span> a tu hogar.</p>
        <div className="neca-buttons">
        <button className="info-btn-gas">GAS BUTANO</button>
        <button className="info-btn-gas">GAS PROPANO</button>
        <button className="info-btn-gas">GARRAFAS 15KG</button>
         <button className="info-btn-gas">GARRAFAS 13,5KG</button>
        </div>
        <div className="containerfoto-botones-gas">

            <img src={fotogas} alt="" className="fotobotonesgas"/>
            <div className="txt-logos-neca"><h2 className="gas-title2">Garrafas de 15kg para autoelevadores</h2>
            <p className="txt-neca-boton2">Utilizar GLP como combustible para autoelevadores trae diferentes beneficios. 
            Es <span className="txt-empresa-span">más económico</span> ya que las máquinas nafteras convertidas a GLP son más eficientes que las diesel, 
            en cuanto a costo de operación y mantenimiento; es <span className="txt-empresa-span">ecológico</span>, 
            se reduce la emisión contaminante hasta un 60% respecto a otros combustibles y; 
            genera un <span className="txt-empresa-span">mejor funcionamiento</span> del motor, logrando una marcha más suave.
            </p>
            </div>
        </div>
    </div>


        <div className="container-txt-card">
        <h2 className="gas-title">Contacto</h2>
        <hr className="linea-gas"></hr>
        <p className="txt-logistica-card">Para contactarnos, podés hacerlo a través de estos canales:</p>
        <div className="container-cards-logistica">
        <div className="card-gas"><div className="titulo-mollar-logistica"><h2 className="title-direccion-gas">Dirección</h2><img src={logodireccion} alt="" className="logogas1"/></div><p className="txt-direccion-mollar">Av. Chile 1275 - Salta (4400)</p></div>
            
        <div className="card-gas"><div className="titulo-mollar-logistica"><h2 className="title-direccion-gas">Teléfono 0800</h2><img src={logotelefono} alt="" className="logogas2"/></div><p className="txt-direccion-mollar">0800-122-5800</p></div>
            
        <div className="card-gas"><div className="titulo-mollar-logistica"><h2 className="title-direccion-gas">WhatsApp</h2> <img src={logowpp} alt="" className="logogas3"/></div><p className="txt-direccion-mollar">387-4688288</p></div>
            
            
            <div className="card-gas"><div className="titulo-mollar-logistica"><h2 className="title-direccion-gas">App Delivery</h2><img src={logodelivery} alt="" className="logogas4"/></div><p className="txt-direccion-mollar">misasmendi@cngrupo.com</p></div>
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