import React, { useState, useEffect } from 'react';
import { MDBContainer, MDBNavbar, MDBNavbarBrand, MDBNavbarToggler, MDBNavbarNav, MDBNavbarItem, MDBNavbarLink, MDBCollapse, MDBIcon } from 'mdb-react-ui-kit';
import { Link as ScrollLink } from 'react-scroll';

export default function NavBar() {
    const [openNav, setOpenNav] = useState(false);
    const [navbarColor, setNavbarColor] = useState('navbar-transparent');
    const [navbarFixed, setNavbarFixed] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollPos = window.pageYOffset;
            if (currentScrollPos > 50) {
                setNavbarColor('navbar-light bg-light');
                setNavbarFixed(true);
            } else {
                setNavbarColor('navbar-transparent');
                setNavbarFixed(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <MDBNavbar expand='lg' light className={navbarColor} fixed={navbarFixed ? 'top' : ''}>
            <MDBContainer fluid>
                <MDBNavbarBrand href='#'>Navbar</MDBNavbarBrand>
                <MDBNavbarToggler
                    type='button'
                    aria-expanded='false'
                    aria-label='Toggle navigation'
                    onClick={() => setOpenNav(!openNav)}
                >
                    <MDBIcon icon='bars' fas />
                </MDBNavbarToggler>
                <MDBCollapse navbar open={openNav}>
                    <MDBNavbarNav>
                        <MDBNavbarItem>
                            <ScrollLink to="home" smooth={true} duration={500} className="nav-link">
                                Home
                            </ScrollLink>
                        </MDBNavbarItem>
                        <MDBNavbarItem>
                            <ScrollLink to="about" smooth={true} duration={500} className="nav-link">
                                About
                            </ScrollLink>
                        </MDBNavbarItem>
                        <MDBNavbarItem>
                            <MDBNavbarLink href='#'>Projects</MDBNavbarLink>
                        </MDBNavbarItem>
                        <MDBNavbarItem>
                            <MDBNavbarLink href='#'>Contact Me</MDBNavbarLink>
                        </MDBNavbarItem>
                    </MDBNavbarNav>
                </MDBCollapse>
            </MDBContainer>
        </MDBNavbar>
    );
}
