import React, { Component } from 'react';




import {
    Navbar,
    Nav,
    NavDropdown,
    Image
} from 'react-bootstrap';

export default class NavbarComponent extends Component {
    
    render() {
        return (
            <React.Fragment>
                
                <Navbar bg="light" expand="md" fixed="top">
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mr-auto">
                            
                            <Image src="https://i.hizliresim.com/qKXQ6d.png" />

                            <Nav.Link href="/">Home</Nav.Link>
                            <Nav.Link href="#link">About</Nav.Link>
                            <Nav.Link href="#link">Contact</Nav.Link>
                        </Nav>
                        <Nav className="mr-left">
                            <NavDropdown title="Account" id="basic-nav-dropdown" drop="left">
                                <NavDropdown.Item href="/login">Login</NavDropdown.Item>
<NavDropdown.Item href="/account-settings" >Account Settings</NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
              
                
               
               
            </React.Fragment>
        );
    }
}