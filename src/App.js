import React from 'react';
import './App.css';
import'bootstrap/dist/css/bootstrap.min.css' ;
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Accordion from 'react-bootstrap/Accordion';
import facebook from './img/facebook.svg';
import instagram from './img/instagram.svg';
import whatsapp from './img/whatsapp.svg';
import logo from './img/logo-mapeala-final.png';
import Carousel from 'react-bootstrap/Carousel';
import slider_1 from './img/slider-1.jpg';
import slider_2 from './img/slider-2.jpg';
import slider_3 from './img/slider-3.jpg';
import FAQ from './img/fondo-mapeala.jpg';
import Contact from './img/mapeala-contacto.jpg';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

//importar nuestros componentes
import CreateContact from './components/CreateContact.js';
import EditContact from './components/EditContact.js';


function App() {
  return ( 
    <React.Fragment>
 <body  className="body">    
    <Navbar sticky="top" className='navbar' expand="lg">
  <Container>
    <Navbar.Brand href="#home"> <img className='logo-mapeala-nav' src={logo} alt="Mapela" /></Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav>
        <Nav.Link className='a-menu' href="#home">Inicio</Nav.Link>
        <Nav.Link className='a-menu' href="#propiedades">Propiedades</Nav.Link>
        <Nav.Link className='a-menu' href="#faq">FAQ</Nav.Link>
        <Nav.Link className='a-menu' href="#contacto">Contacto</Nav.Link>
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>

<Container className='redes-sociales' fluid="md">
  <Row>
    <Col>
    
    <a href='https://facebook.com'><img className='social-icon' src={facebook} alt="Facebook" /></a>
    <a href='https://instagram.com'><img className='social-icon' src={instagram} alt="Instagram" /></a>
    <a href='https://whatsapp.com'><img className='social-icon' src={whatsapp} alt="Whatsapp" /></a>
      
    </Col>
  </Row>
</Container>

<Container className='hero'>
  <Row>
    <Col className='col-logo'> 
    <img className='logo-mapeala' src={logo} alt="Mapela" />
    </Col>
    <Col className='col-texto'>Mapeala Tu App Inmobiliaria: no solo conoces tu proximo hogar, tambien podes conocer tu proxima comunidad, hace click en el mapa y busca a tu criterio. </Col>
  </Row>
</Container>

<Carousel className='carousel'>
  <Carousel.Item>
    <img className="d-block w-100" src={slider_1} alt="First slide" />
    <Carousel.Caption>
      <h3 className='header-3'>First slide label</h3>
      <p className='slider-text'>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img className="d-block w-100" src={slider_2} alt="Second slide" />

    <Carousel.Caption>
      <h3 className='header-3'>Second slide label</h3>
      <p className='slider-text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img className="d-block w-100" src={slider_3} alt="Third slide" />

    <Carousel.Caption>
      <h3 className='header-3'>Third slide label</h3>
      <p className='slider-text'>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>

  <div id='propiedades' className='heading-2'>
      <h3>Búsqueda de propiedades</h3>
  </div>

  <div className='google-maps'>
    <iframe className='mapa' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d27238.97478372691!2d-64.19180340742368!3d-31.417656709819614!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9432a298fd24f0d7%3A0xf89d39124c4d9c06!2sBarrio%20Gral.%20Paz%2C%20C%C3%B3rdoba!5e0!3m2!1ses-419!2sar!4v1649953876433!5m2!1ses-419!2sar"></iframe>

  </div>

  <div className='heading-2'>
      <h3>Recientemente listadas</h3>
  </div>

  <section className='dos-colores'>

  <div className='slider'>
  <Carousel className='slider-centrado' fade>
  <Carousel.Item>
      <img className="d-block w-100" src={slider_1} alt="First slide" />
    <Carousel.Caption>
      <h3 className='header-3'>First slide label</h3>
      <p className='slider-text'>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
      <img className="d-block w-100" src={slider_1} alt="First slide" />

    <Carousel.Caption>
      <h3 className='header-3'>Second slide label</h3>
      <p className='slider-text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
      <img className="d-block w-100" src={slider_1} alt="First slide" />

    <Carousel.Caption>
      <h3 className='header-3'>Third slide label</h3>
      <p className='slider-text'>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>

  </div>

</section>


  <div className='heading-2'>
      <h3>Peguntas Frecuentes</h3>
  </div>

  <div id='faq' className='faq'>
  <Row>
    <Col>
    
    <Accordion className='accordion-faq' defaultActiveKey="0" flush>
  <Accordion.Item eventKey="0">
    <Accordion.Header>Accordion Item #1</Accordion.Header>
    <Accordion.Body>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
      commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
      velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
      cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
      est laborum.
    </Accordion.Body>
  </Accordion.Item>
  <Accordion.Item eventKey="1">
    <Accordion.Header>Accordion Item #2</Accordion.Header>
    <Accordion.Body>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
      commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
      velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
      cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
      est laborum.
    </Accordion.Body>
  </Accordion.Item>
</Accordion>
    
    </Col>
    <Col>
      <img className='fondo-faq' src={FAQ} />
    </Col>
  </Row>
</div>

  <div id='contacto' className='heading-2'>
      <h3>Contacto</h3>
  </div>

<section className='dos-colores'>

  <div className='contacto'>
  <Container className='c-center'>
  <Row>
    <Col>
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={ <CreateContact/> } />
          <Route path='/create' element={ <CreateContact/> } />
          <Route path='/edit/:id' element={ <EditContact/> } />
        </Routes>
      </BrowserRouter>      
    </div>
    </Col>
    <Col>
      <img className='img-contacto' src={Contact} />
    </Col>
  </Row>
</Container>

  </div>

</section>

<footer className='footer'>
  <Container className='col-footer'>
  <Row className='col-center'>
    <Col>
      <h3 className='h3-footer'>Mapela</h3>
      <ul className='redes-footer'>
        <li className='lista'><a href='#inicio'>Inicio</a></li>
        <li className='lista'><a href='#propiedades'>Propiedades</a></li>
        <li className='lista'><a href='#servicios'>Servicios</a></li>
        <li className='lista'><a href='#contacto'>Contacto</a></li>
      </ul>
    </Col>

    <Col>
      <h3 className='h3-footer'>Secciones</h3>
      <ul className='redes-footer'>
        <li className='lista'><a href='#'>Ofertas</a></li>
        <li className='lista'><a href='#'>Venta</a></li>
        <li className='lista'><a href='#'>Compra</a></li>
        <li className='lista'><a href='#'>Alquiler</a></li>
      </ul>
    </Col>

    <Col>
      <h3 className='h3-footer'>¡Seguinos!</h3>
      <ul className='redes-footer'>
        <a href='https://facebook.com'><img className='social-icon' src={facebook} alt="Facebook" /></a>
        <a href='https://instagram.com'><img className='social-icon' src={instagram} alt="Instagram" /></a>
        <a href='https://whatsapp.com'><img className='social-icon' src={whatsapp} alt="Whatsapp" /></a>
      </ul>
    </Col>

  </Row>

  </Container>
  <div className='copyright'>
  <p>@copy Mapeala V1.02</p>
  </div>
</footer>
</body> 
</React.Fragment>
  );
}

export default App;
