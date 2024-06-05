import React, { useState, useEffect, useRef } from 'react';
import { MDBContainer, MDBNavbar, MDBNavbarToggler, MDBNavbarNav, MDBNavbarItem, MDBCollapse, MDBIcon } from 'mdb-react-ui-kit';
import { Link as ScrollLink } from 'react-scroll';

export default function NavBar() {
    const [openNav, setOpenNav] = useState(false);
    const [navbarColor, setNavbarColor] = useState('navbar-transparent');
    const [navbarFixed, setNavbarFixed] = useState(false);
    const [navbarHeight, setNavbarHeight] = useState(0);
    const navbarRef = useRef(null);

    useEffect(() => {
        setNavbarHeight(navbarRef.current.clientHeight);

        const handleScroll = () => {
        const currentScrollPos = window.pageYOffset;
        if (currentScrollPos > 50) {
            setNavbarColor('navbar-light custom-bg-light');
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
        }, 
    []);

  return (
        <MDBNavbar expand='lg' light className={navbarColor} fixed={navbarFixed ? 'top' : ''} ref={navbarRef}>
            <MDBContainer fluid>
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
                            <ScrollLink to="home" smooth={true} duration={500} offset={-navbarHeight} className="nav-link">
                                Home
                            </ScrollLink>
                        </MDBNavbarItem>
                        <MDBNavbarItem>
                            <ScrollLink to="about" smooth={true} duration={500} offset={-navbarHeight} className="nav-link">
                                About
                            </ScrollLink>
                        </MDBNavbarItem>
                        <MDBNavbarItem>
                            <ScrollLink to="skills" smooth={true} duration={500} offset={-navbarHeight} className="nav-link">
                                Skills
                            </ScrollLink>
                        </MDBNavbarItem>
                        <MDBNavbarItem>
                            <ScrollLink to="experiences" smooth={true} duration={500} offset={-navbarHeight} className="nav-link">
                                Background
                            </ScrollLink>
                        </MDBNavbarItem>
                        <MDBNavbarItem>
                            <ScrollLink to="contact" smooth={true} duration={500} offset={-navbarHeight} className="nav-link">
                                Contact Me
                            </ScrollLink>
                        </MDBNavbarItem>
                    </MDBNavbarNav>
                </MDBCollapse>
            </MDBContainer>
        </MDBNavbar>
    );
}
