import React from 'react';
import { MDBContainer, MDBRow, MDBCol, MDBTypography } from 'mdb-react-ui-kit'; 

export default function HomePage() {
    return (
        <MDBContainer className="my-5 section fade-in">
            <MDBRow className="justify-content-start text-container">
                <MDBCol md="6">
                    <MDBTypography tag="span" variant="body" className="mb-0  dark-blue">Hey, there. My name is</MDBTypography>
                    <br />
                    <MDBTypography tag="h1"  className="my-3 display-1 fw-bold dark-blue">JASON JAY LUCOT</MDBTypography>
                    <br />
                    <div className="bg-primary-custom p-2 rounded w-75">
                        <MDBTypography tag="h4" variant="body" className="mb-0 dark-blue text-center">
                            Full Stack Developer
                        </MDBTypography>
                    </div>
                </MDBCol>
            </MDBRow>
        </MDBContainer>
    );
}
