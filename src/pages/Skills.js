import React from 'react';
import { MDBContainer, MDBTypography, MDBRow, MDBCol, MDBCard, MDBCardBody, MDBCardTitle, MDBCardText } from 'mdb-react-ui-kit';
import { FaLaptopCode, FaServer, FaTools } from 'react-icons/fa';
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaBootstrap, FaNodeJs, FaPhp, FaDatabase, FaGitAlt, FaWordpressSimple } from 'react-icons/fa';
import { DiVisualstudio } from 'react-icons/di';
import { SiPostman, SiSublimetext, SiMysql, SiCodeigniter, SiExpress } from 'react-icons/si';

export default function Skills() {
    return (
        <MDBContainer className="my-5 section text-center">
            <MDBTypography tag="h1" variant="display-4" className="mb-4">Skills & Expertise</MDBTypography>
            <MDBTypography tag="p" variant="body" className="mb-4">
                I am a diligent, versatile full stack developer with a year of hands-on experience specializing in both frontend and backend web development.
            </MDBTypography>
            <MDBRow className="my-5">
                <MDBCol md="4">
                    <MDBCard className='h-100 fade-in card-hover'>
                        <MDBCardBody>
                            <div className="mb-3">
                                <FaLaptopCode size={70} color="#007bff" />
                            </div>
                            <MDBCardTitle>FRONT-END DEVELOPMENT</MDBCardTitle>
                            <MDBCardText>
                                <MDBRow className='my-5'>
                                    <MDBCol sm={4} className='mb-3'>
                                        <FaHtml5 size={50} color="#e34c26"/> <br /> HTML5
                                    </MDBCol>
                                    <MDBCol sm={4} className='mb-3'>
                                        <FaCss3Alt size={50} color="#1572b6"/> <br /> CSS3
                                    </MDBCol>
                                    <MDBCol sm={4} className='mb-3'>
                                        <FaJs size={50} color="#f7df1e"/> <br /> JavaScript
                                    </MDBCol>
                                    <MDBCol sm={4} className='mb-3'>
                                        <FaReact size={50} color="#61dafb"/> <br /> React.js
                                    </MDBCol>
                                    <MDBCol sm={4} className='mb-3'>
                                        <FaBootstrap size={50} color="#7952b3"/> <br /> Bootstrap
                                    </MDBCol>
                                </MDBRow>
                            </MDBCardText>
                        </MDBCardBody>
                    </MDBCard>
                </MDBCol>
                <MDBCol md="4">
                    <MDBCard className='h-100 fade-in card-hover'>
                        <MDBCardBody>
                            <div className="mb-3">
                                <FaServer size={70} color="#6c757d" />
                            </div>
                            <MDBCardTitle>BACK-END DEVELOPMENT</MDBCardTitle>
                            <MDBCardText>
                                <MDBRow className='my-5'>
                                    <MDBCol sm={4} className='mb-3'>
                                        <FaNodeJs size={50} color="#339933"/> <br /> Node.js
                                    </MDBCol>
                                    <MDBCol sm={4} className='mb-3'>
                                        <SiExpress size={50} color="#000000"/> <br /> Express.js
                                    </MDBCol>
                                    <MDBCol sm={4} className='mb-3'>
                                        <FaDatabase size={50} color="#4db33d"/> <br /> MongoDB
                                    </MDBCol>
                                    <MDBCol sm={4} className='mb-3'>
                                        <FaPhp size={50} color="#777bb4"/> <br /> PHP
                                    </MDBCol>
                                    <MDBCol sm={4} className='mb-3'>
                                        <SiCodeigniter size={50} color="#dd4814"/> <br /> CodeIgniter
                                    </MDBCol>
                                    <MDBCol sm={4} className='mb-3'>
                                        <SiMysql size={50} color="#00758f"/> <br /> MySQL
                                    </MDBCol>
                                </MDBRow>
                            </MDBCardText>
                        </MDBCardBody>
                    </MDBCard>
                </MDBCol>
                <MDBCol md="4">
                    <MDBCard className='h-100 fade-in card-hover'>
                        <MDBCardBody>
                            <div className="mb-3">
                                <FaTools size={70} color="#17a2b8" />
                            </div>
                            <MDBCardTitle>TOOLS</MDBCardTitle>
                            <MDBCardText>
                                <MDBRow className='my-5'>
                                    <MDBCol sm={4} className='mb-3'>
                                        <FaGitAlt size={50} color="#f34f29"/> <br /> Git
                                    </MDBCol>
                                    <MDBCol sm={4} className='mb-3'>
                                        <SiSublimetext size={50} color="#ff9800" /> <br /> Sublime Text
                                    </MDBCol>
                                    <MDBCol sm={4} className='mb-3'>
                                        <DiVisualstudio size={50} color="#0078d7"/> <br /> Visual Studio Code
                                    </MDBCol>
                                    <MDBCol sm={4} className='mb-3'>
                                        <SiPostman size={50} color="#ff6c37"/> <br /> Postman
                                    </MDBCol>
                                    <MDBCol sm={4} className='mb-3'>
                                        <FaWordpressSimple size={50} color="#21759b"/><br /> WordPress
                                    </MDBCol>
                                </MDBRow>
                            </MDBCardText>
                        </MDBCardBody>
                    </MDBCard>
                </MDBCol>
            </MDBRow>
        </MDBContainer>
    );
}
