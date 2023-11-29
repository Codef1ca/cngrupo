import React, { useState } from "react";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import Logo from '../Assets/cngrupoblanco.png'
import necaimg1 from '../Assets/Frame (2).png'
import vectorneca1 from '../Assets/Capa_2 (1).png'
import vectorneca2 from '../Assets/Group 94 (2).png'
import vectorneca3a from '../Assets/Vector (6).png'
import vectorneca3b from '../Assets/Vector (7).png'
import vectorneca4 from '../Assets/Vector (8).png'
import gasenvasado from '../Assets/gasenvasado.png'
import estacionamiento from '../Assets/estacionamiento.png'
import combustibles from '../Assets/combustibles.png'
import boxes from '../Assets/boxes.png'
import tiendafull from '../Assets/tiendafull.png'
import accesorios from '../Assets/accesorios.png'
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
import estacionesimg1 from '../Assets/DESCRIPCIÓN LAJITAS - DJI_0010 (2).png'
import estacionesimg2 from '../Assets/DESCRIPCION CHANGO - YPF CHANGO OCT-636.png'


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
            <div className="home-container11">
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
            <h2 className="logistica-title">ESTACIONES DE SERVICIO</h2>
            </div>
            </div>  
        </div>

        <div className="container-estaciones">
            <div className="title-txt-estaciones">
                <h2 className="estaciones-title">EESS El Chango</h2>   
                <hr className="linea-estaciones"></hr>
                <p className="p-estaciones1"> EESS El Chango está ubicada en Salta Capital y es una de las primeras unidades de negocio de CN Grupo. A lo largo de sus años ha recopilado  <span className="txt-empresa-span">decenas de reconocimientos y premios </span>debido al cumplimiento de
                <span className="txt-empresa-span">  normas +YPF</span>,  un programa integral de calidad de gestión que busca la 
               
                <span className="txt-empresa-span"> excelencia en la imagen y la calidad de servicio </span>
                en la red nacional de Estaciones de Servicio YPF distinguiéndose entre sus competidores.
                </p>
                </div>
                <img src={estacionesimg2} alt="" className="fotobotones"/>
        
        
        </div>     
        
        
        <div className="container-dibujitos">
                <h2 className="estaciones-title">Nuestros productos y servicios</h2>   
                <hr className="linea-neca"></hr>
        <div className="container-proteccion">
        <p className="p-estaciones1">Los productos y servicios que ofrecemos son:</p>
        <div className="productos-protección-esta">
            <div className="container-producto-estaciones"><img src={combustibles} alt="" className="producto-est"/><div className="icons-est-text"><h4 className="title-container-estacion">GNC</h4><p className="p-estaciones1">Estación de gas natural<br></br> comprimido</p></div></div>
            <div className="container-producto-estaciones"><img src={boxes} alt="" className="producto-est"/><div className="icons-est-text"><h4 className="title-container-estacion">BOXES</h4><p className="p-estaciones1">Servicio de lubricantes y <br></br>diagnóstico para tu auto</p></div></div>
            <div className="container-producto-estaciones"><img src={tiendafull} alt="" className="producto-est"/><div className="icons-est-text"><h4 className="title-container-estacion">TIENDA FULL</h4><p className="p-estaciones1">Venta de cafetería, almuerzos, <br></br>comestibles y artículos varios</p></div></div>
            <div className="container-producto-estaciones"><img src={accesorios} alt="" className="producto-est"/><div className="icons-est-text"><h4 className="title-container-estacion">ACCESORIOS</h4><p className="p-estaciones1">Venta de lubricantes, filtros<br></br> y accesorios varios</p></div></div>
            <div className="container-producto-estaciones"><img src={gasenvasado} alt="" className="producto-est"/><div className="icons-est-text"><h4 className="title-container-estacion">GAS ENVASADO</h4><p className="p-estaciones1">Venta de gas envasado</p></div></div>
            
        </div>
        </div>
        </div>

        <div className="banner-estacion2"></div>   

        <div className="container-estaciones">
            <div className="title-txt-estaciones">
                <h2 className="estaciones-title">EESS Las Lajitas</h2>   
                <hr className="linea-estaciones"></hr>
                <p className="p-estaciones1"> EESS Las Lajitas es el  <span className="txt-empresa-span">primer punto de venta</span> de Combustibles del Norte<span className="txt-empresa-span"> fuera de la ciudad de Salta</span>, ubicada en el municipio de Las Lajitas, Departamento Anta. Surge como respuesta a los exigentes clientes de esa zona en el año 1996. 
                <br></br>
                <br></br>
                Trabajamos día a día para lograr distinguirnos por<span className="txt-empresa-span">la calidad de gestión, la excelencia en la imagen y un servicio excepcional</span>más precisas para cada uno de sus campos, la mejor <span className="txt-empresa-span">calidad</span> de productos y el servicio de<span className="txt-empresa-span"> excelencia</span> que nos caracteriza.
                </p>
                </div>
                <img src={estacionesimg1} alt="" className="fotobotones"/>
        
        
        </div>     
        
        
        <div className="container-dibujitos">
                <h2 className="estaciones-title">Nuestros productos y servicios</h2>   
                <hr className="linea-neca"></hr>
        <div className="container-proteccion">
        <p className="p-estaciones1">Los productos y servicios que ofrecemos son:</p>
        <div className="productos-protección-esta">
            <div className="container-producto-estaciones"><img src={combustibles} alt="" className="producto-est"/><div className="icons-est-text"><h4 className="title-container-estacion">COMBUSTIBLES</h4><p className="p-estaciones1">Con surtidores de auto <br></br>caudal para camiones</p></div></div>
            <div className="container-producto-estaciones"><img src={boxes} alt="" className="producto-est"/><div className="icons-est-text"><h4 className="title-container-estacion">BOXES</h4><p className="p-estaciones1">Servicio de lubricantes y <br></br>diagnóstico para tu auto</p></div></div>
            <div className="container-producto-estaciones"><img src={tiendafull} alt="" className="producto-est"/><div className="icons-est-text"><h4 className="title-container-estacion">TIENDA FULL</h4><p className="p-estaciones1">Venta de cafetería, almuerzos, <br></br>comestibles y artículos varios</p></div></div>
            <div className="container-producto-estaciones"><img src={accesorios} alt="" className="producto-est"/><div className="icons-est-text"><h4 className="title-container-estacion">ACCESORIOS</h4><p className="p-estaciones1">Venta de lubricantes, filtros<br></br> y accesorios varios</p></div></div>
            <div className="container-producto-estaciones"><img src={gasenvasado} alt="" className="producto-est"/><div className="icons-est-text"><h4 className="title-container-estacion">GAS ENVASADO</h4><p className="p-estaciones1">Venta de gas envasado</p></div></div>
            <div className="container-producto-estaciones"><img src={estacionamiento} alt="" className="producto-est"/><div className="icons-est-text"><h4 className="title-container-estacion">ESTACIONAMIENTO</h4><p className="p-estaciones1">Estacionamiento <br></br>para transportistas, entre otros</p></div></div>
        </div>
        </div>
        </div>

    

    <div className="banner-estacion1"></div>    

    
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