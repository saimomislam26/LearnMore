import React, { useState } from 'react';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,

} from 'reactstrap';

const Navber = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);
    return (
        <div>
            <Navbar color="light" light expand="md">
                <NavbarBrand href="/" style={{ margin: '10px' }}>LearnMore</NavbarBrand>
                <NavbarToggler onClick={toggle} />
                <Collapse isOpen={isOpen} navbar>
                    <Nav style={{ marginLeft: 'auto' }} navbar>
                        <NavItem>
                            <NavLink className="active " exact activeClassName="menu-active" href='/'>Home</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink exact activeClassName="menu-active" href="/About">About</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink exact activeClassName="menu-active" href="/Contact">Contact</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink exact activeClassName="menu-active" href="/Service">Service</NavLink>
                        </NavItem>

                    </Nav>
                </Collapse>
            </Navbar>
        </div>
    )




}

export default Navber;