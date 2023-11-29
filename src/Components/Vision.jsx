import Vector1 from "../Assets/vector--.png"
import Vector2 from "../Assets/circulito-removebg-preview.png"
import VectorCard from "../Assets/vec1.png"
import VectorCard1 from "../Assets/vec2.png"
import VectorCard2 from "../Assets/vec3.png"
import VectorCard3 from "../Assets/vec4.png"
import React, { useState } from "react";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import Logo from '../Assets/cngrupoblanco.png'
import circulo from '../Assets/Ellipse 15.png'
import grupito from '../Assets/Group.svg'
import manoarriba from '../Assets/Group (1).svg'
import flechita from '../Assets/Group (2).svg'
import manos from '../Assets/Mask group.svg'
import mesa from '../Assets/Mesa de trabajo 5.svg'
import NuevoIcono from '../Assets/grupitonuevo.svg';
import IconoInicial from '../Assets/Group.svg';
import ManoArribaNuevo from '../Assets/manoarribanuevo.svg';
import FlechitaNuevo from '../Assets/flechitanuevo.svg';
import ManosNuevo from '../Assets/manosnuevo.svg';

const Navvision = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isSubMenuOpen1, setSubMenuOpen1] = useState(false);
    const [isSubMenuOpen2, setSubMenuOpen2] = useState(false);
    const [isSubMenuOpen3, setSubMenuOpen3] = useState(false);
    const [texto, setTexto] = useState('Reconocemos el valor y los derechos de las personas. Actuamos pensando en el otro, promoviendo relaciones que destaquen franqueza, reciprocidad y libertad. Establecemos y cuidamos los acuerdos que hacemos, considerando los intereses de todos los involucrados y la construcción de confianza.');
    const [titulo, setTitulo] = useState('Respeto');
    const [icono, setIcono] = useState(IconoInicial);
    const [colorFondo, setColorFondo] = useState('white');

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

    const cambiarContenido = (nuevoTexto, nuevoTitulo, nuevoIcono, nuevoColor) => {
        setTexto(nuevoTexto);
        setTitulo(nuevoTitulo);
        setIcono(nuevoIcono);
        setColorFondo(nuevoColor);
      }

    

    

    return (
        <div className="home-container">
        <div className="home-container2">
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
            <h2 className="vision-mision-title">Visión y Misión</h2>
            <div className="cuadros-vectores">
                <div className="container-vector-txt">
                    <img src={Vector1} alt="" />
                    <h2 className="title-vector">Visión</h2>
                    <p className="p-vector">"Crecer y hacer crecer."</p>
                </div>
                <div className="container-vector-txt">
                    <img src={Vector1} alt="" />
                    <h2 className="title-vector">Misión</h2>
                    <p className="p-vector">Dar soluciones comerciales e innovadoras adaptadas a cada necesidad, construyendo relaciones a largo plazo.</p>
                </div>
            </div>
            </div>
        </div>
        </div>
        
        <div className="circulo-txt">
        <div className="cositos">
        <img src={circulo} alt="" className="circle"/>   
        <img src={icono} alt="" className="svg-vision2" style={{ backgroundColor: colorFondo }} onClick={() => { cambiarContenido('B Reconocemos el valor y los derechos de las personas. Actuamos pensando en el otro, promoviendo relaciones que destaquen franqueza, reciprocidad y libertad. Establecemos y cuidamos los acuerdos que hacemos, considerando los intereses de todos los involucrados y la construcción de confianza.','Respeto', NuevoIcono, '#3A93A4'); }} />
        

<img src={manoarriba} alt="" className="svg-vision4"onClick={() => { cambiarContenido('D Reconocemos el valor y los derechos de las personas. Actuamos pensando en el otro, promoviendo relaciones que destaquen franqueza, reciprocidad y libertad. Establecemos y cuidamos los acuerdos que hacemos, considerando los intereses de todos los involucrados y la construcción de confianza.','Titulo manoarriba',IconoInicial); }} />
<img src={flechita} alt="" className="svg-vision5" onClick={() =>  { cambiarContenido('E Reconocemos el valor y los derechos de las personas. Actuamos pensando en el otro, promoviendo relaciones que destaquen franqueza, reciprocidad y libertad. Establecemos y cuidamos los acuerdos que hacemos, considerando los intereses de todos los involucrados y la construcción de confianza.','Titulo flechita','../Assets/flechitanuevo.svg'); }} />
<img src={manos} alt="" className="svg-vision3" onClick={() =>  { cambiarContenido('C Reconocemos el valor y los derechos de las personas. Actuamos pensando en el otro, promoviendo relaciones que destaquen franqueza, reciprocidad y libertad. Establecemos y cuidamos los acuerdos que hacemos, considerando los intereses de todos los involucrados y la construcción de confianza.','Titulo manos','../Assets/manos.svg'); }} />
<img src={mesa} alt="" className="svg-vision1" onClick={() => { cambiarContenido('A Reconocemos el valor y los derechos de las personas. Actuamos pensando en el otro, promoviendo relaciones que destaquen franqueza, reciprocidad y libertad. Establecemos y cuidamos los acuerdos que hacemos, considerando los intereses de todos los involucrados y la construcción de confianza.','Respeto','../Assets/grupitonuevo.svg'); }} />
        <h2 className="txt-cir">El cliente en el centro</h2>
        </div> 
        <div className="titulo-p-circulo">
        <h2 className="circulo-titulo">Valores</h2>
        <hr class="mi-linea-carrusel"></hr>
        <h2 className="circulo-subtitulo" >{titulo}</h2>
        <p className="p-circulo">{texto}</p>
        </div> 
        

        </div>

        <div className="banner-img"></div>
        
        <div className="ejes-compromiso">
        <h2 className="circulo-titulo">Ejes de compromiso</h2>
        <hr class="mi-linea-carrusel"></hr>  
        <div className="cards-ejes">
            <div className="card-ejes">
            <img src={VectorCard} alt="" className="vector-card"/>
                    <h2 className="title-vector">Equipo</h2>
                    <p className="p-vector">Priorizar el desarrollo del talento impulsando el aprendizaje y el liderazgo de nuestro Capital.</p>
            </div>
            <div className="card-ejes">
            <img src={VectorCard1} alt="" className="vector-card"/>
                    <h2 className="title-vector">Innovación</h2>
                    <p className="p-vector">Apostar a la mejora constante y planificada, priorizando las necesidades de nuestros clientes.</p>
            </div>
            <div className="card-ejes">
            <img src={VectorCard2} alt="" className="vector-card"/>
                    <h2 className="title-vector">Sustentabilidad</h2>
                    <p className="p-vector">Involucrarse en nuevos hábitos de consumo y producción para ser parte de una revolución sustentable.</p>
            </div>
            <div className="card-ejes">
            <img src={VectorCard3} alt="" className="vector-card"/>
                    <h2 className="title-vector">Futuro</h2>
                    <p className="p-vector">Ser una marca capaz de trascender más allá del producto o servicio que ofrece y convertirse en protagonista de un futuro mejor</p>
            </div>
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

export default Navvision