import React, { useState } from "react";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import Logo from '../Assets/cngrupoblanco.png'
import necaimg1 from '../Assets/Frame (2).png'
import vectorneca1 from '../Assets/Capa_2 (1).png'
import vectorneca2 from '../Assets/Group 94 (2).png'
import vectorneca3a from '../Assets/Vector (6).png'
import vectorneca3b from '../Assets/Vector (7).png'
import vectorneca4 from '../Assets/Vector (8).png'
import hervicida from '../Assets/hervicidad.png'
import insecticida from '../Assets/insecticidas.png'
import fungicida from '../Assets/fungicidas.png'
import coadyuvante from '../Assets/coadyudantes.png'
import tratamiento from '../Assets/semillas.png'
import soja from '../Assets/soja.png'
import maiz from '../Assets/maiz.png'
import fertilizante from '../Assets/fertilizante.png'
import silobolsa from '../Assets/silobolsa.png'
import fotobotones from '../Assets/ASESORAMIENTO FINANCIERO - DSC05126-HDR 1.png'
import logoneca1 from '../Assets/logoneca1.png'
import logoneca2 from '../Assets/logoneca2.png'
import logoneca3 from '../Assets/logoneca3.png'
import logoneca4 from '../Assets/logoneca4.png'
import logogrande1 from '../Assets/amauta.png'
import logogrande2 from '../Assets/spray.png'
import logogrande3 from '../Assets/marcasilobolsa.png'
import logogrande4 from '../Assets/syngenta.png'
import logogrande5 from '../Assets/nk.png'


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
            <div className="home-container6">
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
            <hr class="mi-linea"></hr><p className="nuestra-empresa">NUESTROS NEGOCIOS</p></div>
            <h2 className="logistica-title">NECA</h2>
            </div>
            </div>  
        </div>

        <div className="container-neca">
                <img src={necaimg1} alt="" className="negaimg1"/>
                <p className="p-neca1"> Luego de varios años de trabajo y crecimiento, <span className="txt-empresa-span">CN Agro</span> evolucionó y se transformó en <span className="txt-empresa-span">NECA</span>, que surge de la unión de las palabras <span className="txt-empresa-span">NET</span>(red en inglés) y <span className="txt-empresa-span">CAMPO</span>. Ambas palabras representan la esencia de la marca que funciona como una red de conexión entre el campo y las nuevas oportunidades del mercado.
                <br></br>
                <br></br>
                A través de NECA brindamos las <span className="txt-empresa-span">soluciones </span>más precisas para cada uno de sus campos, la mejor <span className="txt-empresa-span">calidad</span> de productos y el servicio de<span className="txt-empresa-span"> excelencia</span> que nos caracteriza.
                </p>
        
        
        </div>     
        <div className="banner-neca1"></div>    
        
        <div className="container-dibujitos">
                <h2 className="neca-title">Nuestros productos</h2>   
                <hr className="linea-neca"></hr>
        <div className="container-proteccion">
        <h3 className="neca-subtitle">Protección de cultivos</h3>
        <div className="productos-protección">
            <div className="container-producto-protección"><img src={hervicida} alt="" className="producto"/><p className="txt-producto">HERBICIDAS</p></div>
            <div className="container-producto-protección"><img src={insecticida} alt="" className="producto"/><p className="txt-producto">INSECTICIDAS</p></div>
            <div className="container-producto-protección"><img src={fungicida} alt="" className="producto"/><p className="txt-producto">FUNGICIDAS</p></div>
            <div className="container-producto-protección"><img src={coadyuvante} alt="" className="producto"/><p className="txt-producto">COADYUVANTES</p></div>
            <div className="container-producto-protección"><img src={tratamiento} alt="" className="producto"/><p className="txt-producto">TRATAMIENTO <br></br>DE SEMILLAS</p></div>
        </div>
        </div>
        </div>

    <div className="container-tresproductos">

        <div className="container-proteccion">
        <h3 className="neca-subtitle">NK semillas</h3>
        <div className="productos-protección2">
            <div className="container-producto-protección-e"><img src={soja} alt="" className="producto"/><p className="txt-producto">SOJA</p></div>
            <div className="container-producto-protección"><img src={maiz} alt="" className="producto"/><p className="txt-producto">MAÍZ</p></div>
            
        </div>
        </div>
        

        <div className="container-proteccion">
        <h3 className="neca-subtitle">Nutrición de cultivos</h3>
        <div className="productos-protección2">
            <div className="container-producto-protección"><img src={fertilizante} alt="" className="producto"/><p className="txt-producto">FERTILIZANTE</p></div>
            
        </div>
        </div>

        <div className="container-proteccion">
        <h3 className="neca-subtitle">Almacenamiento de granos</h3>
        <div className="productos-protección2">
            <div className="container-producto-protección"><img src={silobolsa} alt="" className="producto"/><p className="txt-producto">SILOBOLSA</p></div>
            
        </div>
        

        </div>
        
    </div>

    <div className="container-txt-card">
        <h2 className="neca-title">Servicios y Soluciones</h2>
        <hr className="linea-neca"></hr>
        <p className="txt-neca-boton">Nuestro servicio de <span className="txt-empresa-span">entrega a domicilio</span> es nuestro valor agregado. Nos aseguramos de entregar<span className="txt-empresa-span"> calidad y seguridad</span> a tu hogar.</p>
        <div className="neca-buttons">
        <button className="info-btn-neca">CURADO DE SEMILLAS</button>
        <button className="info-btn-neca">CROPWISE</button>
        <button className="info-btn-neca">SOLUCIONES FINANCIERAS</button>
         <button className="info-btn-neca">ASESORAMIENTO TÉCNICO</button>
        </div>
        <div className="containerfoto-botones-neca">

            <img src={fotobotones} alt="" className="fotobotones"/>
            <div className="txt-logos-neca"><h2 className="neca-title2">Soluciones Financieras</h2>
            <p className="txt-neca-boton2">Tenemos una diversidad de herramientas financieras adaptadas para cada sector y al contexto económico mundial.<br></br><br></br>
            – Financiaciones en dólares<br></br>
            – Financiación en pesos<br></br>
            – Tarjetas <br></br>
            – Canjes de granos disponibles<br></br>
            – Canjes de granos a futuro<br></br>
            *Consultar mensualmente las herramientas o soluciones vigentes.
            </p>
            <div className="logos-neca2">
            <img src={logoneca1} alt="" className="logo-neca2"/>
            <img src={logoneca2} alt="" className="logo-neca2a"/>
            <img src={logoneca3} alt="" className="logo-neca2b"/>
            <img src={logoneca4} alt="" className="logo-neca2c"/>  
            </div>
            </div>
        </div>
    </div>
        <div className="banner-necaflor"></div>

        <div className="container-txt-card">
        <h2 className="neca-title">Marcas que distribuimos</h2>
        <hr className="linea-neca"></hr>
        <div className="container-logos-final">
            <img src={logogrande1} alt="" className="logogrande1"/>
            <img src={logogrande2} alt="" className="logogrande2"/>
            <img src={logogrande3} alt="" className="logogrande3"/>
            <img src={logogrande4} alt="" className="logogrande2"/> 
            <img src={logogrande5} alt="" className="logogrande"/> 
        </div> 
            
    </div> 

        <div className="container-txt-card">
        <h2 className="neca-title">Contacto</h2>
        <hr className="linea-neca"></hr>
        <p className="txt-logistica-card">Para contactarnos, podés hacerlo a través de estos canales:</p>
        <div className="container-cards-logistica">
            <div className="card-neca"><div className="titulo-mollar-logistica"><h2 className="title-direccion-neca">Responsable</h2><img src={vectorneca1} alt="" className="vectorneca1"/></div><p className="txt-direccion-mollar"><span className="txt-empresa-span"> Las Lajitas </span><br></br>Ana D´uva <br></br><br></br><span className="txt-empresa-span"> Embarcación </span><br></br>Marcelo Isasmendi</p></div>
            <div className="card-neca"><div className="titulo-mollar-logistica"><h2 className="title-direccion-neca">Dirección</h2><img src={vectorneca2} alt="" className="vectorneca2"/></div><p className="txt-direccion-mollar"><span className="txt-empresa-span"> Las Lajitas </span><br></br>Av. Chile 1275 - Salta (4400)<br></br><br></br><span className="txt-empresa-span"> Embarcación </span><br></br>Ruta Nacional 34, Km 1344,<br></br> Embarcación, Salta (4400)</p></div>
            <div className="card-neca"><div className="titulo-mollar-logistica"><h2 className="title-direccion-neca">Teléfono</h2><img src={vectorneca3a} alt="" className="vectorneca3a"/><img src={vectorneca3b} alt="" className="vectorneca3b"/></div><p className="txt-direccion-mollar"><span className="txt-empresa-span"> Las Lajitas </span><br></br>+54 387 441-0916 <br></br><br></br><span className="txt-empresa-span"> Embarcación </span><br></br>0800-122-5800</p></div>
            <div className="card-neca"><div className="titulo-mollar-logistica"><h2 className="title-direccion-neca">Email</h2><img src={vectorneca4} alt="" className="vectorneca4"/></div><p className="txt-direccion-mollar"><span className="txt-empresa-span"> Las Lajitas </span><br></br>aduva@cngrupo.com <br></br><br></br><span className="txt-empresa-span"> Embarcación </span><br></br>misasmendi@cngrupo.com</p></div>
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