import React from 'react';
import { MDBContainer, MDBTypography, MDBRow, MDBCol, MDBCard, MDBCardBody, MDBCardTitle, MDBCardText } from 'mdb-react-ui-kit';
import { FaLaptopCode, FaServer, FaTools } from 'react-icons/fa'; // Importing specific icons for front-end, back-end, and tools
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaBootstrap, FaNodeJs, FaPhp, FaCode, FaDatabase, FaGitAlt, FaWordpressSimple } from 'react-icons/fa';

import { DiVisualstudio } from 'react-icons/di';
import { SiPostman, SiSublimetext } from 'react-icons/si';

export default function About() {
    return (
        <MDBContainer className="mt-5 section text-center">
            <MDBTypography tag="h1" variant="display-4" className="mb-4">About Me</MDBTypography>
            <MDBTypography tag="p" variant="body" className="mb-4">
                I am a diligent, versatile full stack developer with a year of hands-on experience specializing in both frontend and backend web development.
            </MDBTypography>
            <MDBRow className="mt-5">
                <MDBCol md="4">
                    <MDBCard className='h-100'>
                        <MDBCardBody>
                            <div className="mb-3">
                                <FaLaptopCode size={70} /> {/* Using FaLaptopCode as the icon for front-end, and increasing its size */}
                            </div>
                            <MDBCardTitle>FRONT-END DEVELOPMENT</MDBCardTitle>
                            <MDBCardText>
                                <MDBRow className='my-5'>
                                    <MDBCol sm={4} className='mb-3'>
                                        <FaHtml5 size={50}/> <br></br> HTML5
                                    </MDBCol>
                                    <MDBCol sm={4} className='mb-3'>
                                        <FaCss3Alt size={50}/> <br></br>  CSS3
                                    </MDBCol>
                                    <MDBCol sm={4} className='mb-3'>
                                        <FaJs size={50}/> <br></br>  JavaScript
                                    </MDBCol>
                                    <MDBCol sm={4} className='mb-3'>
                                        <FaReact size={50}/> <br></br>  React.js
                                    </MDBCol>
                                    <MDBCol sm={4} className='mb-3'>
                                        <FaBootstrap size={50}/> <br></br> Bootstrap
                                    </MDBCol>
                                </MDBRow>
                            </MDBCardText>
                        </MDBCardBody>
                    </MDBCard>
                </MDBCol>
                <MDBCol md="4">
                    <MDBCard className='h-100'>
                        <MDBCardBody>
                            <div className="mb-3">
                                <FaServer size={70} /> {/* Using FaServer as the icon for back-end, and increasing its size */}
                            </div>
                            <MDBCardTitle>BACK-END DEVELOPMENT</MDBCardTitle>
                            <MDBCardText>
                                <MDBRow className='my-5'>
                                    <MDBCol sm={4} className='mb-3'>
                                        <FaNodeJs size={50}/> <br></br>Node.js
                                    </MDBCol>
                                    <MDBCol sm={4} className='mb-3'>
                                        <FaCode size={50}/> <br></br>Express.js
                                    </MDBCol>
                                    <MDBCol sm={4} className='mb-3'>
                                        <FaDatabase size={50}/> <br></br>MongoDB
                                    </MDBCol>
                                    <MDBCol sm={4} className='mb-3'>
                                        <FaPhp size={50}/> <br></br>PHP
                                    </MDBCol>
                                    <MDBCol sm={4} className='mb-3'>
                                        <FaCode size={50}/> <br></br>CodeIgniter
                                    </MDBCol>
                                </MDBRow>
                            </MDBCardText>
                        </MDBCardBody>
                    </MDBCard>
                </MDBCol>
                <MDBCol md="4">
                    <MDBCard className='h-100'>
                        <MDBCardBody>
                            <div className="mb-3">
                                <FaTools size={70} /> {/* Using FaTools as the icon for tools, and increasing its size */}
                            </div>
                            <MDBCardTitle>TOOLS</MDBCardTitle>
                            <MDBCardText>
                                <MDBRow className='my-5'>
                                    <MDBCol sm={4} className='mb-3'>
                                        <FaGitAlt size={50}/> <br></br> Git version control
                                    </MDBCol>
                                    <MDBCol sm={4} className='mb-3'>
                                        <SiSublimetext size={50} /> <br></br>Sublime Text
                                    </MDBCol>
                                    <MDBCol sm={4} className='mb-3'>
                                        <DiVisualstudio size={50}/> <br></br>Visual Studio Code
                                    </MDBCol>
                                    <MDBCol sm={4} className='mb-3'>
                                        <SiPostman size={50}/> <br></br>Postman
                                    </MDBCol>
                                    <MDBCol sm={4} className='mb-3'>
                                        <FaWordpressSimple size={50}/><br></br> WordPress
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
