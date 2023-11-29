import React, { useState } from "react";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import Logo from '../Assets/cngrupoblanco.png'
import { FaInstagram, FaFacebook, FaLinkedin, FaYoutube } from 'react-icons/fa';
import logo2 from '../Assets/loggo2.png';
import fotocomb from '../Assets/MIC fija - CN NECA LAS LAJITAS-271.png'
import logodireccion from '../Assets/logodireccion.png'
import logotelefono from '../Assets/logotelefono.png'
import logowpp from '../Assets/logowpp.png'
import logodelivery from '../Assets/logodelivery.png'
import fotolubri from '../Assets/texto descripción LUBRICANTES - YPF CHANGO OCT-289 1.png'
import fotoasfalto from '../Assets//asfalto 1.png'
import fotocomb2 from '../Assets/SS FINANCIERAS 1 - DSC02225 1.png'
import logoneca1 from '../Assets/logoneca1.png'
import logoneca2 from '../Assets/logoneca2.png'
import logoneca3 from '../Assets/logoneca3.png'
import logoneca4 from '../Assets/logoneca4.png'
import vectorneca4 from '../Assets/Vector (8).png'
import vectorneca1 from '../Assets/Capa_2 (1).png'
import vectorneca2 from '../Assets/Group 94 (2).png'
import vectorneca3a from '../Assets/Vector (6).png'
import vectorneca3b from '../Assets/Vector (7).png'



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
            <div className="home-container9">
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

        <div className="redes-container-empresa-comb">
            <FaInstagram />
            <FaFacebook />
            <FaLinkedin />
            </div>   
        <div className="txt-redes">
            <div className="txt-container-empresa">
              <div className="linea-titulo">
            <hr class="mi-linea"></hr><p className="nuestra-empresa">NUESTROS NEGOCIOS</p></div>
            <h2 className="logistica-title">COMBUSTIBLES DEL NORTE</h2>
            </div>
            </div>  
        </div>

        <div className="container-comb">
                <img src={logo2} alt="" className="negaimg1"/>
                <div className="containter-logo-img-comb">
                <h2 className="gas-title">Oil&Gas</h2>
                <hr className="linea-gas"></hr>
                <p className="p-neca1"> Somos una empresa que ofrece<span className="txt-empresa-span">soluciones integrales</span> adaptadas a las necesidades de nuestros clientes a través de la distribución mayorista de Diesel. Asimismo somos distribuidores oficiales de <span className="txt-empresa-span">lubricantes y asfalto YPF.</span> 
                </p>
                </div>
        
        </div>     
        <div className="banner-comb"></div>    
        
        

    <div className="container-txt-card">
        <h2 className="gas-title">Soluciones Oil</h2>
        <hr className="linea-gas"></hr>
        <h3 className="h3sub-combus">MIC - manejo integral de combustible </h3>
        <p className="txt-neca-boton">soluciones digitales de distribución de  <span className="txt-empresa-span">combustible</span>  para estaciones<span className="txt-empresa-span">fijas</span>estaciones<span className="txt-empresa-span">moviles y  distribución capilar.</span></p>
        <div className="neca-buttons">
        <button className="info-btn-gas">ESTACIONES FIJAS</button>
        <button className="info-btn-gas">ESTACIONES MOVILES</button>
        <button className="info-btn-gas">DISTRIBUCIÓN CAPILAR</button>
        </div>
        <div className="containerfoto-botones-gas">

            <img src={fotocomb} alt="" className="fotobotonesgas"/>
            <div className="txt-logos-neca"><h2 className="gas-title2">Estaciones Fijas</h2>
            <p className="txt-neca-boton2">Es una solución 
            <span className="txt-empresa-span">inteligente y customizada</span> del manejo de combustible para estaciones  
            <span className="txt-empresa-span"> fijas.</span>
            </p>
            </div>
        </div>
    </div>




    <div className="container-gris">
    
    
    <div className="container-completo">
    <div className="titulo-linea-p-comb">
        <h2 className="gas-title">Lubricentro</h2>
        <hr className="linea-gas"></hr>
        <p className="txt-logistica-card">Distribuimos <span className="txt-empresa-span">ELAION</span>, la línea de lubricantes de <span className="txt-empresa-span">YPF </span>empleados en el rubro agrícola, automotriz, industrial, náutico, de 
        transporte, para motos y aceites agrícolas. Los lubricantes <span className="txt-empresa-span">ELAION</span> son aptos para todos los vehículos equipados con motores 4 tiempos que utilicen cualquier tipo de combustible</p>
    </div> 
    <img src={fotolubri} alt="" className="fotosgris1"/>  
    </div> 

        
        


    <div className="container-completo">
    <div className="titulo-linea-p-comb">
        <h2 className="gas-title">YPF Asfaltos</h2>
        <hr className="linea-gas"></hr>
        <p className="txt-logistica-card">Somos representantes oficiales y distribuidores exclusivos en toda la provincia de Salta de <span className="txt-empresa-span">YPF ASFALTOS</span>, líderes en la comercialización de <span className="txt-empresa-span">asfaltos</span> e insumos <span className="txt-empresa-span">energéticos</span> para la construcción, asegurando un <span className="txt-empresa-span">servicio personalizado</span> para cada cliente.</p>
        </div>
        <img src={fotoasfalto} alt="" className="fotosgris2"/>
        </div>
     

        <div className="seccion2">
        <h3 className="viales">Viales</h3>
        
        <div className="numeritos">
        
        <div className="numeroytxt">
        <div className="numerocomb">
        <h2 className="numerito">01</h2> 
        <hr className="lineanum"></hr>
        </div>
        <p className="txt-num">CEMENTOS ASFÁLTICOS</p>
        </div>

        <div className="numeroytxt">
        <div className="numerocomb">
        <h2 className="numerito">02</h2> 
        <hr className="lineanum"></hr>
        </div>
        <p className="txt-num">ASFALTOS MODIFICADOS</p>
        </div>

        <div className="numeroytxt">
        <div className="numerocomb">
        <h2 className="numerito">03</h2> 
        <hr className="lineanum"></hr>
        </div>
        <p className="txt-num">EMULSIONES ASFÁLTICAS</p>
        </div>

        <div className="numeroytxt">
        <div className="numerocomb">
        <h2 className="numerito">04</h2> 
        <hr className="lineanum"></hr>
        </div>
        <p className="txt-num">ASFALTOS TIBIOS</p>
        </div>

        <div className="numeroytxt">
        <div className="numerocomb">
        <h2 className="numerito">05</h2> 
        <hr className="lineanum"></hr>
        </div>
        <p className="txt-num">SELLADORES ASFÁLTICOS</p>
        </div>
        
        
        </div>
        <h3 className="viales">Industriales</h3>
        <div className="numeritos">

        <div className="numeroytxt">
        <div className="numerocomb">
        <h2 className="numerito">01</h2> 
        <hr className="lineanum"></hr>
        </div>
        <p className="txt-num">ASFALTO BASE PLÁSTICO</p>
        </div>

        <div className="numeroytxt">
        <div className="numerocomb">
        <h2 className="numerito">02</h2> 
        <hr className="lineanum"></hr>
        </div>
        <p className="txt-num">PINTURA ALFÁLTICA</p>
        </div>

        <div className="numeroytxt">
        <div className="numerocomb">
        <h2 className="numerito">03</h2> 
        <hr className="lineanum"></hr>
        </div>
        <p className="txt-num">ASFALTO PLÁSTICO N°1</p>
        </div>

        </div>
        </div>
   </div>     
 
    
    
   <div className="banner-comb2"></div> 

   <div className="container-comb">
                <img src={logo2} alt="" className="negaimg1"/>
                <div className="containter-logo-img-comb">
                <h2 className="gas-title">Agro</h2>
                <hr className="linea-gas"></hr>
                <p className="p-neca1"> Somos representantes oficiales de<span className="txt-empresa-span">YPF AGRO</span> empresa líder en potenciar el desarrollo integral del campo argentino, a través de la provisión de los <span className="txt-empresa-span"> insumos y la energía</span> necesaria para producir más 
y mejor.<br></br><br></br>
Buscamos <span className="txt-empresa-span">transformar</span> el trabajo de nuestros clientes agricultores, brindándoles 
<span className="txt-empresa-span">soluciones concretas</span> y una amplia gama de productos y servicios para
<span className="txt-empresa-span"> protección y nutrición</span>de cultivos, semillas, bolsas 
para silo.


                </p>
                </div>
                </div>

                <div className="container-txt-card">
        <h2 className="gas-title">Soluciones Agro</h2>
        <hr className="linea-gas"></hr>
        <div className="neca-buttons">
        <button className="info-btn-gas">MUESTREO DIRIGIDO</button>
        <button className="info-btn-gas">SUMMA</button>
        <button className="info-btn-gas">SOLUCIONES FINANCIERAS</button>
        </div>
        <div className="containerfoto-botones-gas">

            <img src={fotocomb2} alt="" className="fotobotonesgas"/>
            <div className="txt-logos-neca"><h2 className="gas-title2">Soluciones Financieras</h2>
            <p className="txt-neca-boton2">Tenemos una diversidad de
             <span className="txt-empresa-span"> herramientas financieras </span> adaptadas para cada sector y al contexto económico mundial. 
            </p>
            <h3 className="socios-comb">Nuestros socios estratégicos </h3>
            <div className="logos-neca2">
            <img src={logoneca1} alt="" className="logo-neca2"/>
            <img src={logoneca2} alt="" className="logo-neca2a"/>
            <img src={logoneca3} alt="" className="logo-neca2b"/>
            <img src={logoneca4} alt="" className="logo-neca2c"/>  
            </div>
            </div>
        </div>
    </div>

    <div className="banner-comb3"></div> 

 <div className="container-txt-card">
<h2 className="gas-title">Contacto</h2>
   <hr className="linea-gas"></hr>
    <p className="txt-logistica-card">Para contactarnos, podés hacerlo a través de estos canales:</p>
     <div className="container-cards-logistica">
     <div className="card-neca"><div className="titulo-mollar-logistica"><h2 className="title-direccion-neca">Responsable</h2></div><p className="txt-direccion-mollar"><span className="txt-empresa-span"> Las Lajitas </span><br></br>Ana D´uva <br></br><br></br><span className="txt-empresa-span"> Embarcación </span><br></br>Marcelo Isasmendi</p></div>
            <div className="card-neca"><div className="titulo-mollar-logistica"><h2 className="title-direccion-neca">Dirección</h2><img src={logodireccion} alt="" className="logogas1"/></div><p className="txt-direccion-mollar"><span className="txt-empresa-span"> Las Lajitas </span><br></br>Av. Chile 1275 - Salta (4400)<br></br><br></br><span className="txt-empresa-span"> Embarcación </span><br></br>Ruta Nacional 34, Km 1344,<br></br> Embarcación, Salta (4400)</p></div>
            <div className="card-neca"><div className="titulo-mollar-logistica"><h2 className="title-direccion-neca">Teléfono</h2><img src={logotelefono} alt="" className="logogas2"/><img src={logowpp} alt="" className="logogas3"/></div><p className="txt-direccion-mollar"><span className="txt-empresa-span"> Las Lajitas </span><br></br>+54 387 441-0916 <br></br><br></br><span className="txt-empresa-span"> Embarcación </span><br></br>0800-122-5800</p></div>
            <div className="card-neca"><div className="titulo-mollar-logistica"><h2 className="title-direccion-neca">Email</h2><img src={vectorneca4} alt="" className="vectorneca4"/></div><p className="txt-direccion-mollar"><span className="txt-empresa-span"> Las Lajitas </span><br></br>aduva@cngrupo.com <br></br><br></br><span className="txt-empresa-span"> Embarcación </span><br></br>misasmendi@cngrupo.com</p></div>
  {/* <div className="card-gas"><div className="titulo-mollar-logistica"><h2 className="title-direccion-gas">Dirección</h2><img src={logodireccion} alt="" className="logogas1"/></div><p className="txt-direccion-mollar">Av. Chile 1275 - Salta (4400)</p></div>
            
  <div className="card-gas"><div className="titulo-mollar-logistica"><h2 className="title-direccion-gas">Teléfono 0800</h2><img src={logotelefono} alt="" className="logogas2"/></div><p className="txt-direccion-mollar">0800-122-5800</p></div>
            
   <div className="card-gas"><div className="titulo-mollar-logistica"><h2 className="title-direccion-gas">WhatsApp</h2> <img src={logowpp} alt="" className="logogas3"/></div><p className="txt-direccion-mollar">387-4688288</p></div>
            
            
           <div className="card-gas"><div className="titulo-mollar-logistica"><h2 className="title-direccion-gas">App Delivery</h2><img src={logodelivery} alt="" className="logogas4"/></div><p className="txt-direccion-mollar">misasmendi@cngrupo.com</p></div> */}
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