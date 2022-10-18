import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';  
import { Link } from 'react-router-dom';
import {Nav, Navbar, Container} from 'react-bootstrap';
import './Header.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode } from '@fortawesome/free-solid-svg-icons';

const Header = () => {
    
    return (
        <Navbar className='bg-primary sticky' expand="md">  
            <Container>  
            <Navbar.Brand className='text-light fw-bolder' as={Link} to="/"><FontAwesomeIcon className='text-warning fw-bolder' icon={faCode}></FontAwesomeIcon> Code Quiz</Navbar.Brand>  
            <Navbar.Toggle aria-controls="basic-navbar-nav" />  
            <Navbar.Collapse id="basic-navbar-nav">  
                <Nav className="ms-auto menu">
                    <Nav.Link activeClassName="active" className='text-light' as={Link} to='/login'>Login</Nav.Link>
                    <Nav.Link activeClassName="active" className='text-light' as={Link} to='/register'>Register</Nav.Link>
                    
                </Nav>  
            </Navbar.Collapse>  
            </Container>  
        </Navbar>
    );
};

export default Header;