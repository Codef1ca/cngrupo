
import React, { useState } from "react";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import Logo from '../Assets/cngrupoblanco.png'
import Linea1 from '../Assets/1991 1.png'
import Linea2 from '../Assets/2005 1.png'
import Linea3 from '../Assets/YPF-AGRO-110-scaled 6.png'
import Linea4 from '../Assets/2009 1.png'
import Linea5 from '../Assets/2022 1.png'
import Linea6 from '../Assets/2023 1.png'
import Vector from '../Assets/Vector.jpg'



const Navhist = () => {
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

        <div className="todo-historia">
        <div className="home-container3">
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
              <div className="linea-titulo2">
            <hr class="mi-linea"></hr><p className="nuestra-empresa2">NUESTRA EMPRESA</p></div>
            <h2 className="titulo-historia">Historia</h2>
            <h2 className="nuestra-historia-txt"><span className="txt-empresa-span">CN GRUPO</span> nace como una empresa familiar y cuenta con más <span className="txt-empresa-span"> 35 años </span> de trayectoria, más de <span className="txt-empresa-span"> 35 años </span> más de <span className="txt-empresa-span"> 250 colaboradores </span> y <span className="txt-empresa-span"> 6 bases operativas </span> distribuidas en puntos estratégicos de Salta y norte de Chile. </h2>
        
            </div>
            </div>
            </div>

<div className="timeline-container">
    <ul className="timeline">
        <li className="li-linea1">1991<img src={Vector} alt="" className='vector'/><br></br><div className="txt-linea1">EESS el Chango</div><hr className="linea-linea"></hr><br></br><img src={Linea1} alt="" className='linea1' /></li>
        <li className="li-linea2i">1995<br></br><div className="txt-linea1">Combustibles del Norte</div><hr className="linea-linea2"></hr><br></br></li>
        <li className="li-linea3">1996<br></br><div className="txt-linea1">Mayorista Lubricantes</div><hr className="linea-linea"></hr></li>
        <li className="li-linea4i">2000<br></br><div className="txt-linea1">Distribución de fertilizantes</div><hr className="linea-linea2"></hr></li>
        <li className="li-linea2">2003<br></br><div className="txt-linea1">Gas del Norte</div><hr className="linea-linea"></hr></li>
        <li className="li-linea3i">2004<br></br><div className="txt-linea1"> CN Agro</div><hr className="linea-linea2"></hr></li>
        <li className="li-linea1">2005<img src={Vector} alt="" className='vector'/><br></br><div className="txt-linea1">Sucursal Las Lajitas</div><hr className="linea-linea"></hr><br></br><img src={Linea2} alt="" className='linea1' /></li>
        <li className="li-linea5"><img src={Vector} alt="" className='vector2'/>2008<br></br><div className="txt-linea1">Sucursal Embarcación</div><hr className="linea-linea2"></hr><br></br><img src={Linea3} alt="" className='linea1' /></li>
        <li className="li-linea6i">2009<img src={Vector} alt="" className='vector'/><br></br><div className="txt-linea1">Planta Güemes</div><hr className="linea-linea"></hr><br></br><img src={Linea4} alt="" className='linea1' /></li>
        <li className="li-linea4i">2014<br></br><div className="txt-linea1">Lubricantes Chile</div><hr className="linea-linea2"></hr></li>
        <li className="li-linea2">2015<br></br><div className="txt-linea1">YPF Agro Las Lajitas</div><hr className="linea-linea"></hr></li>
        <li className="li-linea3i">2018<br></br><div className="txt-linea1">YPF Agro Embarcación</div><hr className="linea-linea2"></hr></li>
        <li className="li-linea4">2021<br></br><div className="txt-linea1">Galpón CN Agro en Las Lajitas</div><hr className="linea-linea"></hr></li>
        <li className="li-linea5"><img src={Vector} alt="" className='vector2'/>2022<br></br><div className="txt-linea1">CN Agro se transforma en NECA.<br></br>Galpón Embarcación NECA.</div><hr className="linea-linea2"></hr><br></br><img src={Linea5} alt="" className='linea1' /></li>
        <li className="li-linea6i">2023<img src={Vector} alt="" className='vector'/><br></br><div className="txt-linea1">Nueva EESS en Las Lajitas,<br></br>la estación del futuro</div><hr className="linea-linea"></hr><br></br><img src={Linea6} alt="" className='linea1' /></li>    
    </ul>
</div>
<div className="footer2">
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

export default Navhist